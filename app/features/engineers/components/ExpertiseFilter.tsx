import expertiseFilterStyles from './expertise-filter.css?url';

export const links = () => [{ rel: 'stylesheet', href: expertiseFilterStyles }];

export interface ExpertiseFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  engineerCounts: Record<string, number>;
}

const filters = [
  { id: 'all', label: 'All Engineers' },
  { id: 'ai-ml', label: 'AI/ML' },
  { id: 'full-stack', label: 'Full-Stack' },
  { id: 'devops', label: 'DevOps' },
  { id: 'automation', label: 'Automation' }
];

export default function ExpertiseFilter({
  activeFilter,
  onFilterChange,
  engineerCounts
}: ExpertiseFilterProps) {
  return (
    <section className="expertise-filter-section">
      <div className="expertise-filter-container">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`expertise-filter-tab ${
              activeFilter === filter.id ? 'active' : ''
            }`}
            onClick={() => onFilterChange(filter.id)}
          >
            {filter.label}
            <span className="filter-count">
              ({engineerCounts[filter.id] || 0})
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
