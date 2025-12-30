// Public API for legal feature
export { default as LegalPage } from './components/LegalPage';
export {
  legalEffectiveDate,
  privacySections,
  termsSections,
  contactInfo,
  termsIntro,
  privacyIntro
} from './data/legalData';
export type {
  Section,
  Subsection,
  SubsectionContent,
  SubsectionContentType,
  LegalPageProps,
  ContactInfo
} from './types/legal.types';
