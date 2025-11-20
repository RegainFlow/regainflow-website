import { type Props } from '../data/legalData';

export default function LegalPage({
  pageTitle,
  effectiveDate,
  sections
}: Props) {
  return (
    <section className="legal-container">
      <h1 className="legal-title">{pageTitle}</h1>
      <p className="legal-subtitle">Effective Date: {effectiveDate}</p>

      {sections.map((section, idx) => (
        <div className="legal-block" key={idx}>
          <h2>{section.title}</h2>
          <p>{section.body}</p>
        </div>
      ))}
    </section>
  );
}
