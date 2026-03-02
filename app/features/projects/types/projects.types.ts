/**
 * Type definitions for Projects feature
 * Case studies and portfolio showcase
 */

export type ProjectCategory = 'digital' | 'ai';
export type ProjectActionType = 'demo' | 'none';

export interface Project {
  title: string;
  description: string;
  technicalContext?: string;
  image: string;
  tags: string[];
  industry: string;
  category: ProjectCategory;
  primaryMetric: string;
  actionType: ProjectActionType;
  link?: string;
  capabilities: string[];
}
