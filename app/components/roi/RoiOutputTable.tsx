import React from 'react';

export default function RoiOutputTable({
  results
}: {
  results: Record<string, number>;
}) {
  function formatCurrency(num: number): string {
    return `$${num.toFixed(2)}`;
  }

  return (
    <div className="roi-output-card">
      <h2 className="roi-title">Your ROI Calculation</h2>
      <p className="roi-subtitle">
        Please note these numbers are approximate. Elite results require deeper
        analysis.
      </p>

      <div className="roi-output-grid">
        {/* Headers */}
        <div className="roi-header">Year</div>
        <div className="roi-header">Savings</div>
        <div className="roi-header">Profit</div>
        <div className="roi-header">ROI</div>

        {/* Rows */}
        {['1', '2', '3', '4'].map((year) => (
          <React.Fragment key={year}>
            <div>Year {year}</div>
            <div>{formatCurrency(results[`year${year}`])}</div>
            <div>{formatCurrency(results[`profitYear${year}`])}</div>
            <div>{results[`roiYear${year}`].toFixed(2)}%</div>
          </React.Fragment>
        ))}
      </div>
      <p className="roi-cta-msg">
        Looks good? Let’s talk about automating your process.
      </p>
      <div className="button-wrapper">
        <a
          href="https://cal.com/regainflow/30min"
          className="neon-cta-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          BOOK A{' '}
          <span style={{ color: '#00ff08', margin: '0 4px' }}> FREE </span> CALL
        </a>
      </div>
    </div>
  );
}
