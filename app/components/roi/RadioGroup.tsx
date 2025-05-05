import ToolTip from './ToolTip';

type Props = {
  name: string;
  label: string;
  tooltip: string;
  value: string;
  onChange: (value: string) => void;
};

export default function RadioGroup({
  name,
  label,
  tooltip,
  value,
  onChange
}: Props) {
  return (
    <div className="field-layout">
      <div className="label-row">
        <label className="roi-field-label">{label}</label>
        <ToolTip text={tooltip} />
      </div>
      <div className="radio-group">
        <label className="custom-radio">
          <input
            type="radio"
            name={name}
            value="yes"
            checked={value === 'yes'}
            onChange={() => onChange('yes')}
          />
          <span className="radio-mark" />
          <span className="radio-label">Yes</span>
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name={name}
            value="no"
            checked={value === 'no'}
            onChange={() => onChange('no')}
          />
          <span className="radio-mark" />
          <span className="radio-label">No</span>
        </label>
      </div>
    </div>
  );
}
