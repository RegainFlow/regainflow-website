import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import Typed from 'typed.js';
import { PiRocketLaunchDuotone } from 'react-icons/pi';

export default function HeroSection() {
  const typedRef = useRef<HTMLSpanElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;
    const typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      smartBackspace: false
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
      {/* Video background layer */}
      <div className="hero-video-background">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          // poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          <source src="/videos/hero-bg.webm" type="video/webm" />
        </video>
        <div className="hero-video-overlay" />
      </div>

      <div id="typed-strings" style={{ display: 'none' }}>
        <p>
          We build your <span className="typed-highlight">AI pipelines.</span>
        </p>
        <p>
          We modernize your{' '}
          <span className="typed-highlight">legacy systems.</span>
        </p>
        <p>
          We ship{' '}
          <span className="typed-highlight">production-ready code.</span>
        </p>
        <p>
          We integrate{' '}
          <span className="typed-highlight">complex data flows.</span>
        </p>
        <p>
          We deploy{' '}
          <span className="typed-highlight">reliable automation.</span>
        </p>
        <p>
          We solve your <span className="typed-highlight">technical debt.</span>
        </p>
        <p>
          We accelerate your <span className="typed-highlight">roadmap.</span>
        </p>
      </div>

      <div className="container-10">
        <h1 className="landing-header">
          Senior Engineers
          <br />
          <span className="text-highlight">Ready to Ship</span>
        </h1>

        <p className="hero-subhead">
          Senior engineers specializing in{' '}
          <span className="text-highlight">AI/ML</span>,{' '}
          <span className="text-highlight">RAG</span>, and intelligent
          automation
          <br />
          Full-stack capabilities: backend · frontend · DevOps · solution
          architecture
          <br />
          <span className="text-highlight">Contract-ready</span> for long-term
          engagements or project consulting
        </p>

        <div className="div-block-33">
          <div className="typed-text">
            <span id="typed" ref={typedRef}></span>
          </div>
        </div>

        <Link
          to="/engineers"
          className="button-primary-2 animated-button btn-neon w-button"
        >
          {/* these four spans drive the four edge animations */}
          <span></span>
          <span></span>
          <span></span>
          <span></span>

          {/* your existing content */}
          <div className="btn-content">
            <PiRocketLaunchDuotone size={25} style={{ marginRight: '10px' }} />
            View Engineer Profiles
          </div>
        </Link>
      </div>
    </section>
  );
}
