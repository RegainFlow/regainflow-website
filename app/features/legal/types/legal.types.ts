/**
 * Type definitions for Legal feature
 * Supports nested content structure for Terms and Privacy pages
 */

export type SubsectionContentType = 'paragraph' | 'list' | 'subheading';

export type SubsectionContent = {
  type: SubsectionContentType;
  content: string | string[]; // string for paragraphs/subheadings, string[] for lists
};

export type Subsection = {
  title?: string; // Optional subsection title
  content: SubsectionContent[];
};

export type Section = {
  id: string; // For anchor navigation (e.g., 'acceptance', 'information-we-collect')
  title: string; // Section title
  subsections?: Subsection[]; // Optional nested subsections
  isHighlight?: boolean; // For important sections (disclaimers, liability, etc.)
};

export type LegalPageProps = {
  pageTitle: string;
  effectiveDate: string;
  sections: Section[];
  introText?: string;
  icon?: React.ReactNode;
};

export type ContactInfo = {
  company: string;
  address: string[];
  city: string;
  state: string;
  zip: string;
  country: string;
  website: string;
  email: string;
};
