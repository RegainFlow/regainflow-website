import {
  PiCheckCircleDuotone,
  PiCalendarCheckDuotone,
  PiUsersDuotone,
  PiRocketLaunchDuotone
} from 'react-icons/pi';
import { bookingUrl } from '~/config/site.config';

interface CostComparisonProps {
  results: {
    w2BaseSalary: number;
    w2BenefitsCost: number;
    w2OverheadCost: number;
    w2RecruitingCost: number;
    w2TotalAnnualCost: number;
    c2cAnnualCost: number;
    annualSavings: number;
    savingsPercent: number;
    year1Savings: number;
    year2Savings: number;
    year3Savings: number;
    year4Savings: number;
  };
}

export default function CostComparison({ results }: CostComparisonProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatPercent = (value: number) => {
    return value.toFixed(1) + '%';
  };

  const isSavings = results.annualSavings > 0;

  return (
    <div className="roi-output-card">
      {/* Cost Breakdown Section */}
      <div className="cost-comparison-section">
        <h3 className="comparison-title">Annual Cost Breakdown</h3>

        <div className="cost-comparison-grid">
          {/* W2 Column */}
          <div className="cost-column w2-column">
            <h4 className="column-title">W2 Full-Time</h4>
            <div className="cost-breakdown">
              <div className="cost-item">
                <span className="cost-label">Base Salary</span>
                <span className="cost-value">
                  {formatCurrency(results.w2BaseSalary)}
                </span>
              </div>
              <div className="cost-item">
                <span className="cost-label">Benefits & Taxes</span>
                <span className="cost-value">
                  {formatCurrency(results.w2BenefitsCost)}
                </span>
              </div>
              <div className="cost-item">
                <span className="cost-label">Overhead</span>
                <span className="cost-value">
                  {formatCurrency(results.w2OverheadCost)}
                </span>
              </div>
              <div className="cost-item">
                <span className="cost-label">Recruiting</span>
                <span className="cost-value">
                  {formatCurrency(results.w2RecruitingCost)}
                </span>
              </div>
              <div className="cost-item cost-total">
                <span className="cost-label">Total</span>
                <span className="cost-value total-negative">
                  {formatCurrency(results.w2TotalAnnualCost)}
                </span>
              </div>
            </div>
          </div>

          {/* C2C Column */}
          <div className="cost-column c2c-column">
            <h4 className="column-title">C2C Contract</h4>
            <div className="cost-breakdown">
              <div className="cost-item">
                <span className="cost-label">Hourly × Hours × 52</span>
                <span className="cost-value">
                  {formatCurrency(results.c2cAnnualCost)}
                </span>
              </div>
              <div className="cost-item faded">
                <span className="cost-label">Benefits & Taxes</span>
                <span className="cost-value">$0</span>
              </div>
              <div className="cost-item faded">
                <span className="cost-label">Overhead</span>
                <span className="cost-value">$0</span>
              </div>
              <div className="cost-item faded">
                <span className="cost-label">Recruiting</span>
                <span className="cost-value">$0</span>
              </div>
              <div className="cost-item cost-total">
                <span className="cost-label">Total</span>
                <span className="cost-value total-positive">
                  {formatCurrency(results.c2cAnnualCost)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Savings Highlight */}
      <div
        className={`savings-highlight-card ${isSavings ? 'positive' : 'negative'}`}
      >
        <div className="savings-header">
          <span className="savings-label">
            {isSavings ? 'Annual Savings' : 'Annual Difference'}
          </span>
          <span className="savings-percent">
            {isSavings ? formatPercent(results.savingsPercent) : '—'}
          </span>
        </div>
        <div className="savings-amount">
          {isSavings ? '+' : ''}
          {formatCurrency(results.annualSavings)}
        </div>
      </div>

      {/* Benefits List */}
      <div className="savings-benefits">
        <div className="benefit-item">
          <PiCheckCircleDuotone className="benefit-icon" />
          <span>Zero recruiting costs after Year 1</span>
        </div>
        <div className="benefit-item">
          <PiUsersDuotone className="benefit-icon" />
          <span>No benefits administration overhead</span>
        </div>
        <div className="benefit-item">
          <PiCalendarCheckDuotone className="benefit-icon" />
          <span>Flexible scaling up or down</span>
        </div>
        <div className="benefit-item">
          <PiRocketLaunchDuotone className="benefit-icon" />
          <span>Senior engineers, ready day 1</span>
        </div>
      </div>

      {/* Multi-Year Projection */}
      <div className="year-projection-section">
        <h3 className="projection-title">Cumulative Savings Over Time</h3>
        <div className="year-projection-grid">
          <div className="year-item">
            <span className="year-label">Year 1</span>
            <span className="year-value">
              {formatCurrency(results.year1Savings)}
            </span>
          </div>
          <div className="year-item">
            <span className="year-label">Year 2</span>
            <span className="year-value">
              {formatCurrency(results.year2Savings)}
            </span>
          </div>
          <div className="year-item">
            <span className="year-label">Year 3</span>
            <span className="year-value">
              {formatCurrency(results.year3Savings)}
            </span>
          </div>
          <div className="year-item">
            <span className="year-label">Year 4</span>
            <span className="year-value">
              {formatCurrency(results.year4Savings)}
            </span>
          </div>
        </div>
        <p className="projection-note">
          * Years 2-4 include additional savings from avoided recruiting costs
        </p>
      </div>

      {/* CTA */}
      <div className="roi-cta-section">
        <h3 className="cta-title">Ready to reduce your engineering costs?</h3>
        <a
          href={bookingUrl}
          className="neon-button-glass roi-cta-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Schedule a Call
        </a>
      </div>
    </div>
  );
}
