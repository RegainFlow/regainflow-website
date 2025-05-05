import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Carousel from '~/components/hero/Carousel';
import { PiRocketLaunchDuotone } from 'react-icons/pi';

export default function HeroSection() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          'workflows.',
          'lead gen.',
          'ops.',
          'processes.',
          'tasks.',
          'data pipelines.',
          'back office.',
          'sales funnels.',
          'headaches.'
        ],
        typeSpeed: 70,
        backSpeed: 40,
        loop: true,
        fadeOut: true,
        smartBackspace: false,
        fadeOutDelay: 500
      });

      return () => {
        typed.destroy(); // destroy instance to prevent memory leaks
      };
    }
  }, []);

  const handleScroll = () => {
    const target = document.getElementById('value-prop');
    if (target) {
      const yOffset = -80;
      const y =
        target.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });

      // Remove previous animation class
      target.classList.remove('fade-in-pulse');

      // Force reflow to restart animation
      void target.offsetWidth;

      // Add animation class
      target.classList.add('fade-in-pulse');
    }
  };

  return (
    <section className="hero-section">
      <div className="w-layout-blockcontainer container-10 w-container">
        <h1 className="landing-header">
          Automate Your <span className="text-span-17">Flow</span>.<br />
          <span className="text-span-18">Regain</span> Control.
          <br />
          Profit.
          <br />
        </h1>
        <div className="div-block-33">
          <div className="text-block-10 landing-sub-heading">
            We automate your
          </div>
          <div className="code-embed-2 w-embed">
            <span id="typed" ref={typedRef}></span>
          </div>
        </div>
      </div>

      {/* Carousel will live here */}
      <div className="section-tech-stack">
        <Carousel />
      </div>

      <button
        onClick={handleScroll}
        className="button-primary-2 w-button"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <PiRocketLaunchDuotone size={25} style={{ marginRight: '10px' }} />
        Get Started
      </button>
    </section>
  );
}
