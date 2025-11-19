import { useState } from 'react';
import { projectsItems, categories } from '../data/projectsData';

export default function CaseStudiesGrid() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems =
    activeCategory === 'all'
      ? projectsItems
      : projectsItems.filter((item) => item.category === activeCategory);

  return (
    <div className="case-studies-section">
      {/* Tab Navigation */}
      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
            <span className="category-count">({cat.count})</span>
          </button>
        ))}
      </div>

      {/* Grid Layout */}
      <div className="case-studies-grid">
        {filteredItems.map((item, i) => (
          <div key={i} className="case-study-card">
            {/* Background Image with Gradient Overlay */}
            <div className="card-image-container">
              {/* <img
                src={item.image}
                alt={item.title}
                className="card-bg-image"
              /> */}
              <div className="card-gradient-overlay" />
            </div>

            {/* Metrics Badge */}
            <div className="card-metric-badge">{item.primaryMetric}</div>

            {/* Industry Label */}
            <div className="card-industry-label">{item.industry}</div>

            {/* Card Content */}
            <div className="card-content-wrapper">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>

              {/* Tags */}
              <div className="card-tags">
                {item.tags.map((tag, j) => (
                  <span key={j} className="card-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* NDA Badge */}
              {item.actionType === 'nda' && (
                <div className="card-nda-badge">NDA Protected</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
