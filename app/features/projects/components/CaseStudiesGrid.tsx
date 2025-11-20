import { useState, useEffect } from 'react';
import {
  PiCaretLeftBold,
  PiCaretRightBold,
  PiCaretDoubleLeftBold,
  PiCaretDoubleRightBold
} from 'react-icons/pi';
import { projectsItems, categories } from '../data/projectsData';

const ITEMS_PER_PAGE = 3;

export default function CaseStudiesGrid() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems =
    activeCategory === 'all'
      ? projectsItems
      : projectsItems.filter((item) => item.category === activeCategory);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const goToFirst = () => goToPage(1);
  const goToPrevious = () => goToPage(currentPage - 1);
  const goToNext = () => goToPage(currentPage + 1);
  const goToLast = () => goToPage(totalPages);

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
        {currentItems.map((item, i) => (
          <div
            key={`${item.category}-${i}`}
            className="case-study-card"
            data-category={item.category}
          >
            {/* Background Image with Gradient Overlay */}
            <div className="card-image-container">
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

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="pagination-container">
          <div className="pagination-controls">
            <button
              className="pagination-btn pagination-btn-icon"
              onClick={goToFirst}
              disabled={currentPage === 1}
              aria-label="Go to first page"
            >
              <PiCaretDoubleLeftBold size={16} />
            </button>
            <button
              className="pagination-btn pagination-btn-icon"
              onClick={goToPrevious}
              disabled={currentPage === 1}
              aria-label="Go to previous page"
            >
              <PiCaretLeftBold size={16} />
            </button>

            <div className="pagination-info">
              <span className="pagination-current">{currentPage}</span>
              <span className="pagination-separator">/</span>
              <span className="pagination-total">{totalPages}</span>
            </div>

            <button
              className="pagination-btn pagination-btn-icon"
              onClick={goToNext}
              disabled={currentPage === totalPages}
              aria-label="Go to next page"
            >
              <PiCaretRightBold size={16} />
            </button>
            <button
              className="pagination-btn pagination-btn-icon"
              onClick={goToLast}
              disabled={currentPage === totalPages}
              aria-label="Go to last page"
            >
              <PiCaretDoubleRightBold size={16} />
            </button>
          </div>

          <div className="pagination-showing">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredItems.length)}{' '}
            of {filteredItems.length}
          </div>
        </div>
      )}
    </div>
  );
}
