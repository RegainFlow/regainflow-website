import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { PiRocketLaunchDuotone } from "react-icons/pi";
import { bookingUrl } from "~/config/site.config";

export default function HeroSection() {
  const typedRef = useRef<HTMLSpanElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;
    const typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      smartBackspace: false,
    });
    return () => typed.destroy();
  }, []);

  useEffect(() => {
    // Slow down video playback for ambient effect
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-video-background">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          <source src="/videos/hero-bg.webm" type="video/webm" />
        </video>
        <div className="hero-video-overlay" />
      </div>

      <div id="typed-strings" style={{ display: "none" }}>
        <p>
          We automate your{" "}
          <span className="typed-highlight">business workflows.</span>
        </p>
        <p>
          We build your{" "}
          <span className="typed-highlight">digital presence.</span>
        </p>
        <p>
          We deploy AI that{" "}
          <span className="typed-highlight">saves you hours.</span>
        </p>
        <p>
          We modernize your <span className="typed-highlight">operations.</span>
        </p>
        <p>
          We eliminate your{" "}
          <span className="typed-highlight">manual bottlenecks.</span>
        </p>
        <p>
          We help your business{" "}
          <span className="typed-highlight">grow faster.</span>
        </p>
      </div>

      <div className="container">
        <h1 className="landing-header">
          Digital + AI <br />
          <span className="text-highlight">Transformation Partner</span>
        </h1>

        <div className="typed-text-container">
          <div className="typed-text">
            <span id="typed" ref={typedRef}></span>
          </div>
        </div>

        <div className="hero-cta-buttons">
          <a href={bookingUrl} className="btn btn-neon">
            <PiRocketLaunchDuotone size={25} style={{ marginRight: "10px" }} />
            Schedule Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
