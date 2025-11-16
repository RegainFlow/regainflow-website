import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { portfolioItems } from './portfolioData';

import { PiArrowFatLeftFill, PiArrowFatRightFill } from 'react-icons/pi';

export default function PortfolioCarousel() {
  return (
    <Splide
      hasTrack={false}
      options={{
        type: 'loop',
        perPage: 2,
        breakpoints: {
          1024: {
            perPage: 1 // 1 card on tablets and below
          },
          768: {
            arrows: false, // hide arrows on mobile
            drag: true // enable swipe
          }
        },
        focus: 'center',
        gap: '1rem',

        pagination: true,
        keyboard: 'global',
        drag: true
      }}
      aria-label="Portfolio Projects"
    >
      <div className="portfolio-carousel-wrapper">
        <SplideTrack>
          {portfolioItems.map((item, i) => (
            <SplideSlide key={i}>
              <div className="portfolio-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="portfolio-image"
                />
                <div className="portfolio-card-content">
                  <h2 className="portfolio-card-title">{item.title}</h2>
                  <p className="portfolio-card-desc">{item.description}</p>
                  <div className="portfolio-card-metrics">
                    {item.tags.map((tag, j) => (
                      <span className="portfolio-card-metric" key={j}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  {item.actionType === 'link' && item.link && (
                    <a
                      href={item.link}
                      className="portfolio-card-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  )}
                  {item.actionType === 'nda' && (
                    <span
                      className="portfolio-card-btn"
                      style={{
                        background: '#444',
                        color: '#bbb',
                        cursor: 'not-allowed',
                        opacity: 0.7
                      }}
                    >
                      NDA Protected
                    </span>
                  )}
                </div>
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>

        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev">
            <PiArrowFatLeftFill size={30} />
          </button>
          <button className="splide__arrow splide__arrow--next">
            <PiArrowFatRightFill size={30} />
          </button>
        </div>
      </div>
    </Splide>
  );
}
