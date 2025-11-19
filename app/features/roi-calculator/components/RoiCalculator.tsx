import { useState, useEffect } from 'react';
import RangeInput from './RangeInput';
import NumberInput from './NumberInput';
import CostComparison from './CostComparison';

export default function RoiCalculator() {
  // W2 Employee Cost Inputs
  const [w2Salary, setW2Salary] = useState(200000);
  const [benefitsPercent, setBenefitsPercent] = useState(28);
  const [overheadPerEmployee, setOverheadPerEmployee] = useState(10000);
  const [recruitingCost, setRecruitingCost] = useState(20000);

  // C2C Contractor Inputs
  const [c2cHourlyRate, setC2cHourlyRate] = useState(125);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [numberOfEngineers, setNumberOfEngineers] = useState(1);

  const [results, setResults] = useState({
    // W2 Breakdown
    w2BaseSalary: 0,
    w2BenefitsCost: 0,
    w2OverheadCost: 0,
    w2RecruitingCost: 0,
    w2TotalAnnualCost: 0,

    // C2C Cost
    c2cAnnualCost: 0,

    // Savings
    annualSavings: 0,
    savingsPercent: 0,

    // Multi-year projections (cumulative)
    year1Savings: 0,
    year2Savings: 0,
    year3Savings: 0,
    year4Savings: 0
  });

  useEffect(() => {
    // Calculate W2 Full-Time Employee Costs
    const w2BaseSalary = w2Salary * numberOfEngineers;
    const w2BenefitsCost =
      w2Salary * (benefitsPercent / 100) * numberOfEngineers;
    const w2OverheadCost = overheadPerEmployee * numberOfEngineers;
    const w2RecruitingCost = recruitingCost * numberOfEngineers;
    const w2TotalAnnualCost =
      w2BaseSalary + w2BenefitsCost + w2OverheadCost + w2RecruitingCost;

    // Calculate C2C Contractor Cost
    const c2cAnnualCost = c2cHourlyRate * hoursPerWeek * 52 * numberOfEngineers;

    // Calculate Annual Savings
    const annualSavings = w2TotalAnnualCost - c2cAnnualCost;
    const savingsPercent =
      w2TotalAnnualCost > 0 ? (annualSavings / w2TotalAnnualCost) * 100 : 0;

    // Multi-year projections (cumulative savings)
    // W2 costs repeat each year, plus recruiting is one-time
    // So Year 2+ adds back the recruiting cost as additional savings
    const w2AnnualWithoutRecruiting =
      w2BaseSalary + w2BenefitsCost + w2OverheadCost;
    const year1Savings = annualSavings;
    const year2Savings =
      year1Savings +
      (w2AnnualWithoutRecruiting - c2cAnnualCost) +
      w2RecruitingCost;
    const year3Savings =
      year2Savings +
      (w2AnnualWithoutRecruiting - c2cAnnualCost) +
      w2RecruitingCost;
    const year4Savings =
      year3Savings +
      (w2AnnualWithoutRecruiting - c2cAnnualCost) +
      w2RecruitingCost;

    setResults({
      w2BaseSalary,
      w2BenefitsCost,
      w2OverheadCost,
      w2RecruitingCost,
      w2TotalAnnualCost,
      c2cAnnualCost,
      annualSavings,
      savingsPercent,
      year1Savings,
      year2Savings,
      year3Savings,
      year4Savings
    });
  }, [
    w2Salary,
    benefitsPercent,
    overheadPerEmployee,
    recruitingCost,
    c2cHourlyRate,
    hoursPerWeek,
    numberOfEngineers
  ]);

  return (
    <section id="ROI-Section" className="roi-calculator">
      <div className="container-3">
        <h1 className="heading-2">
          Calculate Your <span className="text-highlight">Savings</span>
        </h1>

        <div className="roi-flex-layout">
          {/* Left Form Panel */}
          <div className="roi-left-panel">
            <div className="roi-form-card">
              <h2 className="roi-title">
                C2C <span className="text-highlight">vs</span> Full-Time Cost
                Calculator
              </h2>
              <div className="text-lg text-secondary">
                Compare the total cost of hiring full-time W2 employees vs
                senior C2C contract engineers.
              </div>

              {/* W2 Employee Costs Section */}
              <div className="input-section">
                <h3 className="input-section-title">W2 Employee Costs</h3>

                <NumberInput
                  label="W2 Base Salary"
                  value={w2Salary}
                  onChange={setW2Salary}
                  step={5000}
                  tooltip="The equivalent annual base salary you would pay for a senior full-time engineer (typically $180k-$260k for senior roles)."
                />

                <RangeInput
                  label="Benefits & Payroll Taxes"
                  id="benefits-percent"
                  value={benefitsPercent}
                  onChange={setBenefitsPercent}
                  min={20}
                  max={40}
                  leftLabel="20%"
                  rightLabel="40%"
                  tooltip="Health insurance, 401k match, PTO costs, payroll taxes (FICA, unemployment). Most companies spend 25-35% on top of base salary."
                />

                <NumberInput
                  label="Overhead per Employee"
                  value={overheadPerEmployee}
                  onChange={setOverheadPerEmployee}
                  step={1000}
                  tooltip="Equipment, software licenses, office space, training, and other per-employee costs. Typically $8k-$15k annually."
                />

                <NumberInput
                  label="Recruiting & Onboarding"
                  value={recruitingCost}
                  onChange={setRecruitingCost}
                  step={1000}
                  tooltip="Recruiter fees (15-25% of salary), interview time, background checks, onboarding costs. One-time cost per hire."
                />
              </div>

              {/* C2C Contractor Costs Section */}
              <div className="input-section">
                <h3 className="input-section-title">C2C Contract Costs</h3>

                <NumberInput
                  label="C2C Hourly Rate"
                  value={c2cHourlyRate}
                  onChange={setC2cHourlyRate}
                  step={5}
                  tooltip="Our senior engineer rates ($110-$150/hr) include their own benefits, equipment, and overhead - you only pay for productive hours."
                />

                <NumberInput
                  label="Hours per Week"
                  value={hoursPerWeek}
                  onChange={setHoursPerWeek}
                  step={5}
                  tooltip="Expected weekly hours for the engagement. Full-time is 40 hours, but you can scale up or down as needed."
                />
              </div>

              {/* Team Size */}
              <div className="input-section">
                <h3 className="input-section-title">Team Size</h3>

                <NumberInput
                  label="Number of Engineers"
                  value={numberOfEngineers}
                  onChange={setNumberOfEngineers}
                  step={1}
                  tooltip="Scale your savings by team size. Each additional engineer multiplies both costs and savings."
                />
              </div>
            </div>
          </div>

          {/* Cost Comparison Panel */}
          <div className="roi-right-panel">
            <CostComparison results={results} />
          </div>
        </div>
      </div>
    </section>
  );
}
