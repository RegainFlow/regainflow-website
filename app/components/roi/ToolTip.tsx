export default function ToolTip({ text }: { text: string }) {
  return (
    <div className="tooltip-container">
      <span className="tooltip-icon" tabIndex={0}>
        ?
      </span>
      <span className="tooltip-text">{text}</span>
    </div>
  );
}
