import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Carousel from '~/components/hero/Carousel';
import { PiRocketLaunchDuotone } from 'react-icons/pi';

export default function HeroSection() {
  const typedRef = useRef<HTMLSpanElement>(null);

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

  const handleScroll = () => {
    const target = document.getElementById('value-prop');
    if (!target) return;
    const yOffset = -80;
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    target.classList.remove('fade-in-pulse');
    void target.offsetWidth;
    target.classList.add('fade-in-pulse');
  };

  return (
    <section className="hero-section">
      <div id="typed-strings" style={{ display: 'none' }}>
        <p>
          We relieve your <span className="typed-highlight">headaches.</span>
        </p>
        <p>
          We automate your <span className="typed-highlight">process.</span>
        </p>
        <p>
          We solve your <span className="typed-highlight">bottlenecks.</span>
        </p>
        <p>
          We eliminate your{' '}
          <span className="typed-highlight">manual work.</span>
        </p>
        <p>
          We streamline your <span className="typed-highlight">workflows.</span>
        </p>
        <p>
          We accelerate your <span className="typed-highlight">delivery.</span>
        </p>
        <p>
          We scale your <span className="typed-highlight">operations.</span>
        </p>
      </div>

      <div className="container-10">
        <h1 className="landing-header">
          Streamline Your <span className="text-highlight">Flow</span>
          <br />
          Reclaim Your <span className="text-highlight">Control</span>
          <br />
          Boost Your <span className="text-highlight">Profit</span>
        </h1>

        {/* new sub‑headline */}
        {/* <p className="hero-subhead">
          For manufacturing, logistics & finance teams who need error‑free,
          scalable automation.
        </p> */}

        <button
          onClick={handleScroll}
          className="button-primary-2 animated-button w-button"
        >
          {/* these four spans drive the four edge animations */}
          <span></span>
          <span></span>
          <span></span>
          <span></span>

          {/* your existing content */}
          <div className="btn-content">
            <PiRocketLaunchDuotone size={25} style={{ marginRight: '10px' }} />
            Get Started
          </div>
        </button>

        <div className="div-block-33">
          <div className="typed-text">
            <span id="typed" ref={typedRef}></span>
          </div>
        </div>
      </div>

      <div className="section-tech-stack">
        <Carousel />
      </div>
    </section>
  );
}
