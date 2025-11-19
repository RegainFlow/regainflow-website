// Public API for services feature

// Components
export { default as ServicesOverview } from './components/ServicesOverview';
export { default as CapabilityPage } from './components/CapabilityPage';

// Export types
export type {
  Capability,
  CapabilitySlug,
  ProcessStep,
  ServiceMetric,
  CapabilityCard,
  ServicesOverview as ServicesOverviewType
} from './types/service.types';

// Export data
export { capabilitiesData, getCapabilityBySlug } from './data/capabilitiesData';
export { servicesOverviewData } from './data/servicesOverviewData';
