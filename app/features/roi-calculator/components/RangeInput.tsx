import ToolTip from './ToolTip';

type Props = {
  id: string;
  label: string;
  tooltip: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  leftLabel?: string;
  rightLabel?: string;
};

export default function RangeInput({
  id,
  label,
  tooltip,
  value,
  onChange,
  min = 1,
  max = 10,
  leftLabel,
  rightLabel
}: Props) {
  return (
    <div className="field-layout">
      <div className="label-row">
        <label className="roi-field-label" htmlFor={id}>
          {label}
        </label>
        <ToolTip text={tooltip} />
      </div>

      <div className="range-input-group">
        {/* Range and markers (column layout) */}
        <div className="range-track-group">
          <input
            type="range"
            id={id}
            min={min}
            max={max}
            value={value}
            onChange={(e) => onChange(+e.target.value)}
          />
          {(leftLabel || rightLabel) && (
            <div className="slider-labels">
              <span>{leftLabel}</span>
              <span>{rightLabel}</span>
            </div>
          )}
        </div>

        {/* Feedback */}
        <div className="slider-feedback">
          {value} / {max}
        </div>
      </div>
    </div>
  );
}
