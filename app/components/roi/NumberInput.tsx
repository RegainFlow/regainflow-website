import ToolTip from './ToolTip';

type Props = {
  label: string;
  tooltip: string;
  value: number;
  onChange: (value: number) => void;
  step?: number;
};

export default function NumberInput({
  label,
  tooltip,
  value,
  onChange,
  step = 1
}: Props) {
  return (
    <div className="field-layout">
      <div className="label-row">
        <label className="roi-field-label">{label}</label>
        <ToolTip text={tooltip} />
      </div>
      <div className="number-input-group">
        <button
          type="button"
          className="num-btn"
          onClick={() => onChange(value - step)}
        >
          –
        </button>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(+e.target.value)}
        />
        <button
          type="button"
          className="num-btn"
          onClick={() => onChange(value + step)}
        >
          +
        </button>
      </div>
    </div>
  );
}
