import { useState, useEffect } from 'react';
import RangeInput from './RangeInput';
import RadioGroup from './RadioGroup';
import NumberInput from './NumberInput';
import RoiOutputTable from './RoiOutputTable';

export default function RoiCalculator() {
  const [processLength, setProcessLength] = useState(3);
  const [processComplexity, setProcessComplexity] = useState(5);
  const [processSeverity, setProcessSeverity] = useState(3);
  const [physicalDocs, setPhysicalDocs] = useState('no');
  const [annualSalary, setAnnualSalary] = useState(80000);
  const [employeesInvolved, setEmployeesInvolved] = useState(1);
  const [hoursPerWeek, setHoursPerWeek] = useState(6);

  const [results, setResults] = useState({
    currentAnnualCost: 0,
    projectCost: 0,
    year1: 0,
    year2: 0,
    year3: 0,
    year4: 0,
    profitYear1: 0,
    profitYear2: 0,
    profitYear3: 0,
    profitYear4: 0,
    roiYear1: 0,
    roiYear2: 0,
    roiYear3: 0,
    roiYear4: 0
  });

  useEffect(() => {
    // Calculate current annual cost (simplified)
    const hourlyRate = annualSalary / 2080;
    const currentAnnualCost =
      hoursPerWeek * employeesInvolved * hourlyRate * 52;

    // Calculate project hours based on complexity factors
    // Target: ~$5k project cost for all 5's, ~$500 for all 1's, ~$50k for all 10's
    const baseHours = 80; // Increased base hours for higher target costs

    // Use original scaling for 5 and below, heavier scaling for 6+
    const lengthWeight =
      processLength <= 5
        ? processLength / 10
        : Math.pow(processLength / 10, 2) * 2;
    const complexityWeight =
      processComplexity <= 5
        ? processComplexity / 10
        : Math.pow(processComplexity / 10, 2) * 2;
    const severityWeight =
      processSeverity <= 5
        ? processSeverity / 10
        : Math.pow(processSeverity / 10, 2) * 2;

    const complexityFactor =
      (lengthWeight + complexityWeight + severityWeight) / 3;

    // Apply exponential curve: complexityFactor^1.5 for 5 and below, ^2.0 for 6+
    const maxFactor = Math.max(
      processLength,
      processComplexity,
      processSeverity
    );
    const exponent = maxFactor <= 5 ? 1.5 : 2.0;
    const curvedFactor = Math.pow(complexityFactor, exponent);
    const estimatedHours = baseHours * curvedFactor; // Scale from base hours

    // Add buffer for physical docs
    const finalHours =
      physicalDocs === 'yes' ? estimatedHours * 1.2 : estimatedHours;

    // Calculate project cost: $120/hour × hours × 1.5 buffer
    const projectCost = finalHours * 120 * 1.5;

    // Calculate costs and profits for each year
    const year1Cost = projectCost; // Year 1: one-time project cost
    const year2Cost = 0; // Year 2+: no additional costs
    const year3Cost = 0;
    const year4Cost = 0;

    // Calculate profits (cumulative savings minus costs)
    const maintenanceCost = projectCost * 0.1; // 10% annual maintenance
    const profitYear1 = currentAnnualCost - year1Cost - maintenanceCost; // Year 1: savings minus project cost minus maintenance
    const profitYear2 = currentAnnualCost * 2 - year1Cost - maintenanceCost * 2; // Year 2: 2x savings minus project cost minus 2x maintenance
    const profitYear3 = currentAnnualCost * 3 - year1Cost - maintenanceCost * 3; // Year 3: 3x savings minus project cost minus 3x maintenance
    const profitYear4 = currentAnnualCost * 4 - year1Cost - maintenanceCost * 4; // Year 4: 4x savings minus project cost minus 4x maintenance

    // Calculate ROI based on project cost
    const roiYear1 = (profitYear1 / projectCost) * 100;
    const roiYear2 = (profitYear2 / projectCost) * 100;
    const roiYear3 = (profitYear3 / projectCost) * 100;
    const roiYear4 = (profitYear4 / projectCost) * 100;

    setResults({
      currentAnnualCost,
      projectCost,
      year1: year1Cost,
      year2: year2Cost,
      year3: year3Cost,
      year4: year4Cost,
      profitYear1,
      profitYear2,
      profitYear3,
      profitYear4,
      roiYear1,
      roiYear2,
      roiYear3,
      roiYear4
    });
  }, [
    processLength,
    processComplexity,
    processSeverity,
    physicalDocs,
    annualSalary,
    employeesInvolved,
    hoursPerWeek
  ]);

  return (
    <section id="ROI-Section" className="roi-calculator">
      <div className="container-3">
        <h1 className="heading-2">
          ESTIMATE YOUR <span className="text-accent">ROI</span>
        </h1>

        <div className="roi-flex-layout">
          {/* Left Form Panel */}
          <div className="roi-left-panel">
            <div className="roi-form-card">
              <h1 className="roi-title">Calculate Your ROI</h1>
              <div className="text-block-15">
                Adjust the inputs to see your potential savings in real time.
              </div>

              {/* Process Complexity Inputs */}
              <RangeInput
                label="How long is the process?"
                id="long-process-rating"
                value={processLength}
                onChange={setProcessLength}
                min={1}
                max={10}
                leftLabel="Short"
                rightLabel="Long"
                tooltip="1-2: Takes minutes to hours (e.g., data entry, simple reports) | 3-4: Takes hours to half a day (e.g., weekly reports, basic analysis) | 5-6: Takes half a day to full day (e.g., monthly reconciliations) | 7-8: Takes 1-3 days (e.g., quarterly reviews, complex analysis) | 9-10: Takes a week or more (e.g., annual audits, major projects)"
              />

              <RangeInput
                label="How complex is the process?"
                id="complex-process-rating"
                value={processComplexity}
                onChange={setProcessComplexity}
                min={1}
                max={10}
                leftLabel="Simple"
                rightLabel="Complex"
                tooltip="1-2: Single step, one tool, no decisions (e.g., copy-paste data) | 3-4: 2-3 steps, basic logic, one tool (e.g., simple calculations) | 5-6: Multiple steps, conditional logic, 2-3 tools (e.g., data validation + calculations) | 7-8: Many steps, complex logic, multiple tools, integrations (e.g., cross-system data processing) | 9-10: Highly complex, custom logic, multiple systems, edge cases (e.g., AI/ML workflows, custom algorithms)"
              />

              <RangeInput
                label="How severe are delays/errors?"
                id="severity-rating"
                value={processSeverity}
                onChange={setProcessSeverity}
                min={1}
                max={10}
                leftLabel="Minor"
                rightLabel="Critical"
                tooltip="1-2: Minor inconvenience, easy to fix, no business impact (e.g., typo in report) | 3-4: Noticeable delay, some rework, minor cost impact (e.g., missed deadline by hours) | 5-6: Significant delay, substantial rework, measurable cost impact (e.g., missed deadline by days) | 7-8: Major delay, extensive rework, significant business impact (e.g., compliance issues, customer complaints) | 9-10: Critical failure, complete rework, severe business impact (e.g., regulatory violations, major financial loss)"
              />

              <div className="radio-questions">
                <RadioGroup
                  label="Physical Documents?"
                  name="physical-docs"
                  value={physicalDocs}
                  onChange={setPhysicalDocs}
                  tooltip="Are physical documents involved at any step in the process?"
                />
              </div>

              {/* Current Cost Inputs */}
              <div className="number-questions">
                <NumberInput
                  label="Annual Salary (USD)"
                  value={annualSalary}
                  onChange={setAnnualSalary}
                  step={1000}
                  tooltip="Typical annual salary of a full-time employee performing this task."
                />

                <NumberInput
                  label="Employees Involved"
                  value={employeesInvolved}
                  onChange={setEmployeesInvolved}
                  step={1}
                  tooltip="How many team members touch this process weekly?"
                />

                <NumberInput
                  label="Hours per Week"
                  value={hoursPerWeek}
                  onChange={setHoursPerWeek}
                  step={1}
                  tooltip="Rough estimate of total hours spent weekly on this process."
                />
              </div>

              {/* Opportunity Cost Note */}
              <div className="opportunity-cost-note">
                <p className="text-sm text-gray-600">
                  💡 <strong>Opportunity Cost:</strong> Time saved through
                  automation can be redirected to higher-value tasks, strategic
                  initiatives, or revenue-generating activities - creating
                  additional value beyond direct cost savings.
                </p>
              </div>
            </div>
          </div>

          {/* ROI Table Panel */}
          <div className="roi-right-panel">
            <RoiOutputTable results={results} />
          </div>
        </div>
      </div>
    </section>
  );
}
