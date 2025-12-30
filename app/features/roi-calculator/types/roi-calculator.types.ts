/**
 * Type definitions for ROI Calculator feature
 * Handles W2 vs C2C cost comparison calculations
 */

export interface CalculatorInputs {
  // W2 Employee Inputs
  w2Salary: number;
  benefitsPercent: number;
  overheadPerEmployee: number;
  recruitingCost: number;

  // C2C Contractor Inputs
  c2cHourlyRate: number;
  hoursPerWeek: number;

  // Common
  numberOfEngineers: number;
}

export interface CalculatorResults {
  // W2 Breakdown
  w2BaseSalary: number;
  w2BenefitsCost: number;
  w2OverheadCost: number;
  w2RecruitingCost: number;
  w2TotalAnnualCost: number;

  // C2C Cost
  c2cAnnualCost: number;

  // Savings
  annualSavings: number;
  savingsPercent: number;

  // Multi-year projections (cumulative)
  year1Savings: number;
  year2Savings: number;
  year3Savings: number;
  year4Savings: number;
}

export interface RangeInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  format?: (value: number) => string;
  helpText?: string;
}

export interface NumberInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  prefix?: string;
  suffix?: string;
  helpText?: string;
}

export interface CostComparisonProps {
  results: CalculatorResults;
}
