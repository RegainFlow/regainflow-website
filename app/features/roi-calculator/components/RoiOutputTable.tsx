import React from 'react';

export default function RoiOutputTable({
  results
}: {
  results: Record<string, number>;
}) {
  function formatCurrency(num: number): string {
    return `$${num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  }

  return (
    <div className="roi-output-card">
      <h2 className="roi-title">Your ROI Calculation</h2>
      <p className="roi-subtitle">
        Please note these numbers are approximate. Elite results require deeper
        analysis.
      </p>

      {/* Cost Summary */}
      <div className="cost-summary">
        <div className="cost-item">
          <span className="cost-label">Current Annual Cost:</span>
          <span className="cost-value current-cost">-{formatCurrency(results.currentAnnualCost)}</span>
        </div>
        <div className="cost-item">
          <span className="cost-label">One Time Cost:</span>
          <span className="cost-value">{formatCurrency(results.projectCost)}</span>
        </div>
      </div>

      <div className="roi-output-grid">
        {/* Headers */}
        <div className="roi-header">Year</div>
        <div className="roi-header">Cost</div>
        <div className="roi-header">Profit</div>
        <div className="roi-header">ROI</div>

        {/* Rows */}
        {['1', '2', '3', '4'].map((year) => (
          <React.Fragment key={year}>
            <div>Year {year}</div>
            <div>{formatCurrency(results[`year${year}`])}</div>
            <div>{formatCurrency(results[`profitYear${year}`])}</div>
            <div>{results[`roiYear${year}`].toFixed(1)}%</div>
          </React.Fragment>
        ))}
      </div>
      
      {/* Explainer Section */}
      <div className="roi-explainer">
        <h4>What These Numbers Mean:</h4>
        <ul>
          <li><strong>Cost:</strong> Money spent that year (Year 1 = project cost, Years 2-4 = $0)</li>
          <li><strong>Profit:</strong> Money saved minus all costs (cumulative savings over time)</li>
          <li><strong>ROI:</strong> Return on investment percentage based on your project cost</li>
        </ul>
        <p className="explainer-note">
          <em>Note: Year 1 includes the upfront project cost, while Years 2-4 show pure savings.</em>
        </p>
      </div>
      
      <p className="roi-cta-msg">
        Looks good? Let's talk about automating your process.
      </p>
      <div className="button-wrapper">
        <a
          href="https://cal.com/regainflow/30min"
          className="neon-cta-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          SAVE{' '}
          <span style={{ color: '#00ff08', margin: '0 4px' }}> NOW </span>
        </a>
      </div>
    </div>
  );
}
