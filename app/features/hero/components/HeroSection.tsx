import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { PiRocketLaunchDuotone } from "react-icons/pi";
import { bookingUrl } from "~/config/site.config";
import { heroData } from "../data/heroData";

export default function HeroSection() {
  const typedRef = useRef<HTMLSpanElement>(null);
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const activeVideoRef = useRef<"a" | "b">("a");
  const isTransitioningRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const transitionTimeoutRef = useRef<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<"a" | "b">("a");
  const [isLoopTransition, setIsLoopTransition] = useState(false);

  useEffect(() => {
    if (!typedRef.current) return;
    const typed = new Typed("#typed", {
      strings: [...heroData.typedMessages],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      smartBackspace: false,
      contentType: "html",
    });
    return () => typed.destroy();
  }, []);

  useEffect(() => {
    const videoA = videoARef.current;
    const videoB = videoBRef.current;
    if (!videoA || !videoB) return;

    const LOOP_THRESHOLD_SECONDS = 1.1;
    const CROSSFADE_MS = 650;

    const videos = [videoA, videoB];

    const safePlay = async (video: HTMLVideoElement) => {
      try {
        await video.play();
      } catch {
        // Ignore autoplay failures and leave the hero background static.
      }
    };

    const prepareVideo = (video: HTMLVideoElement) => {
      video.muted = true;
      video.playsInline = true;
      video.preload = "auto";
      video.playbackRate = 0.75;
    };

    const handleMetadata = (event: Event) => {
      (event.currentTarget as HTMLVideoElement).playbackRate = 0.75;
    };

    const resetVideo = (video: HTMLVideoElement) => {
      video.pause();
      video.currentTime = 0;
    };

    const transitionToStandby = () => {
      if (isTransitioningRef.current) return;

      const currentVideo =
        activeVideoRef.current === "a" ? videoARef.current : videoBRef.current;
      const standbyVideo =
        activeVideoRef.current === "a" ? videoBRef.current : videoARef.current;

      if (!currentVideo || !standbyVideo) return;

      isTransitioningRef.current = true;
      standbyVideo.currentTime = 0;
      standbyVideo.playbackRate = 0.75;
      void safePlay(standbyVideo);
      setIsLoopTransition(true);

      const nextActive = activeVideoRef.current === "a" ? "b" : "a";
      activeVideoRef.current = nextActive;
      setActiveVideo(nextActive);

      transitionTimeoutRef.current = window.setTimeout(() => {
        resetVideo(currentVideo);
        setIsLoopTransition(false);
        isTransitioningRef.current = false;
      }, CROSSFADE_MS);
    };

    const tick = () => {
      const currentVideo =
        activeVideoRef.current === "a" ? videoARef.current : videoBRef.current;

      if (
        currentVideo &&
        Number.isFinite(currentVideo.duration) &&
        currentVideo.duration > 0 &&
        currentVideo.currentTime >= currentVideo.duration - LOOP_THRESHOLD_SECONDS
      ) {
        transitionToStandby();
      }

      animationFrameRef.current = window.requestAnimationFrame(tick);
    };

    videos.forEach((video) => {
      prepareVideo(video);
      video.addEventListener("loadedmetadata", handleMetadata);
    });

    activeVideoRef.current = "a";
    setActiveVideo("a");
    resetVideo(videoB);
    void safePlay(videoA);

    animationFrameRef.current = window.requestAnimationFrame(tick);

    return () => {
      videos.forEach((video) => {
        video.removeEventListener("loadedmetadata", handleMetadata);
        video.pause();
      });

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      if (transitionTimeoutRef.current !== null) {
        window.clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-video-background">
        <div
          className={`hero-video-layer${
            activeVideo === "a" ? " is-active" : ""
          }${isLoopTransition ? " is-loop-transition" : ""}`}
        >
          <video
            ref={videoARef}
            className={`hero-video${
              isLoopTransition ? " hero-video-loop-transition" : ""
            }`}
            muted
            playsInline
            preload="auto"
            src="/videos/hero-bg.mp4"
          />
        </div>
        <div
          className={`hero-video-layer${
            activeVideo === "b" ? " is-active" : ""
          }`}
        >
          <video
            ref={videoBRef}
            className={`hero-video${
              isLoopTransition ? " hero-video-loop-transition" : ""
            }`}
            muted
            playsInline
            preload="auto"
            src="/videos/hero-bg.mp4"
          />
        </div>
        <div
          className={`hero-video-overlay${
            isLoopTransition ? " is-loop-transition" : ""
          }`}
        />
      </div>

      <div className="container">
        <h1 className="landing-header">
          {heroData.title.map((line, idx) => {
            const isLastLine = idx === heroData.title.length - 1;

            return (
              <span key={line}>
                {isLastLine ? (
                  <span className="text-highlight">{line}</span>
                ) : (
                  line
                )}
                {idx < heroData.title.length - 1 ? <br /> : null}
              </span>
            );
          })}
        </h1>

        <div className="typed-text-container">
          <div className="typed-text">
            <span id="typed" ref={typedRef}></span>
          </div>
        </div>

        <p className="hero-subhead">{heroData.supportingText}</p>

        <div className="hero-cta-buttons">
          <a href={bookingUrl} className="btn btn-neon">
            <PiRocketLaunchDuotone size={25} style={{ marginRight: "10px" }} />
            {heroData.ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}
