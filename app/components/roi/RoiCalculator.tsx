import { useState, useEffect } from 'react';
import RangeInput from './RangeInput';
import RadioGroup from './RadioGroup';
import NumberInput from './NumberInput';
import RoiOutputTable from './RoiOutputTable';

export default function RoiCalculator() {
  const [processLength, setProcessLength] = useState(5);
  const [processComplexity, setProcessComplexity] = useState(5);
  const [physicalDocs, setPhysicalDocs] = useState('no');
  const [teachIntern, setTeachIntern] = useState('no');
  const [annualSalary, setAnnualSalary] = useState(80000);
  const [employeesInvolved, setEmployeesInvolved] = useState(3);
  const [hoursPerWeek, setHoursPerWeek] = useState(12);

  const [results, setResults] = useState({
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
    const baseFactor =
      (processLength + processComplexity) / 2 +
      (physicalDocs === 'yes' ? 1 : 0) +
      (teachIntern === 'yes' ? 0.5 : 0);

    const hourlyRate = annualSalary / 2080;
    let monthlySavings = baseFactor * employeesInvolved * hourlyRate * 4;
    monthlySavings += hoursPerWeek * employeesInvolved * hourlyRate;

    const year1 = monthlySavings * 12;
    const year2 = year1 * 1.1;
    const year3 = year1 * 1.2;
    const year4 = year1 * 1.3;

    const profitYear1 = year1 * 0.8;
    const profitYear2 = year2 * 0.8;
    const profitYear3 = year3 * 0.8;
    const profitYear4 = year4 * 0.8;

    const baseCost = annualSalary * employeesInvolved || 1;
    const roiYear1 = (profitYear1 / baseCost) * 100;
    const roiYear2 = (profitYear2 / baseCost) * 100;
    const roiYear3 = (profitYear3 / baseCost) * 100;
    const roiYear4 = (profitYear4 / baseCost) * 100;

    setResults({
      year1,
      year2,
      year3,
      year4,
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
    physicalDocs,
    teachIntern,
    annualSalary,
    employeesInvolved,
    hoursPerWeek
  ]);

  return (
    <section id="ROI-Section" className="roi-calculator">
      <div className="container-3">
        <h1 className="heading-2">
          ESTIMATE YOUR <span className="text-span-8">ROI</span>
        </h1>

        <div className="roi-flex-layout">
          {/* Left Form Panel */}
          <div className="roi-left-panel">
            <div className="roi-form-card">
              <h1 className="roi-title">Calculate Your ROI</h1>
              <div className="text-block-15">
                Adjust the inputs to see your potential savings in real time.
              </div>

              {/* Inputs */}
              <RangeInput
                label="How long is the process?"
                id="long-process-rating"
                value={processLength}
                onChange={setProcessLength}
                min={1}
                max={10}
                leftLabel="Short"
                rightLabel="Long"
                tooltip="Rate the length of your process from 1 (very short) to 10 (extremely long)."
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
                tooltip="Rate the complexity of your process from 1 (very simple) to 10 (extremely complex)."
              />

              <RadioGroup
                label="Physical Documents?"
                name="physical-docs"
                value={physicalDocs}
                onChange={setPhysicalDocs}
                tooltip="Are physical documents involved at any step in the process?"
              />

              <RadioGroup
                label="Can an intern learn it in a month?"
                name="teach-intern"
                value={teachIntern}
                onChange={setTeachIntern}
                tooltip="Would a non-technical intern be able to learn this process within 30 days?"
              />

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
