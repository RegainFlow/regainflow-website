import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import Typed from 'typed.js';
import { PiRocketLaunchDuotone } from 'react-icons/pi';
import { bookingUrl } from '~/config/site.config';

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
          We design your{' '}
          <span className="typed-highlight">technology roadmap.</span>
        </p>
        <p>
          We architect your <span className="typed-highlight">AI systems.</span>
        </p>
        <p>
          We lead your{' '}
          <span className="typed-highlight">engineering team.</span>
        </p>
        <p>
          We ship{' '}
          <span className="typed-highlight">production-ready code.</span>
        </p>
        <p>
          We modernize your{' '}
          <span className="typed-highlight">data pipelines.</span>
        </p>
        <p>
          We accelerate your{' '}
          <span className="typed-highlight">time-to-market.</span>
        </p>
      </div>

      <div className="container-10">
        <h1 className="landing-header">
          Fractional CTO + <br />
          <span className="text-highlight">Senior Engineering</span>
        </h1>
        <p className="hero-subtitle-secondary">Strategy Meets Execution</p>

        <p className="hero-subhead">
          Technology <span className="text-highlight">leadership </span> for your company - strategic roadmaps,
          architecture decisions, and team mentorship.
           PLUS hands-on <span className="text-highlight">execution</span> in{' '}
          AI/ML, data interopability, and
          full-stack engineering.
        </p>

        <div className="div-block-33">
          <div className="typed-text">
            <span id="typed" ref={typedRef}></span>
          </div>
        </div>

        <div className="hero-cta-buttons">
          <a
            href={bookingUrl}
            className="button-primary-2 animated-button btn-neon w-button"
          >
            {/* these four spans drive the four edge animations */}
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            {/* your existing content */}
            <div className="btn-content">
              <PiRocketLaunchDuotone
                size={25}
                style={{ marginRight: '10px' }}
              />
              Schedule Free Consultation
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
