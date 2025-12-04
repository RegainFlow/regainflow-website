# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

RegainFlow is a marketing website for an AI/ML consulting company, built with React Router v7, TypeScript, and a hybrid CSS approach (Tailwind + custom CSS modules). The codebase uses a feature-based architecture where each feature is self-contained with its own components, data, types, and styles.

## Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run typecheck    # Run TypeScript type checking
npm run lint         # Run ESLint
npm start            # Run production server (requires build first)
```

## Architecture & Code Organization

### Feature-Based Architecture

The codebase follows a feature-based organization pattern where each feature is a self-contained module:

```
app/features/{feature-name}/
├── components/           # Feature-specific components
│   ├── Component.tsx
│   └── component.css    # Component-specific styles
├── data/                # Static data and content
│   └── {feature}Data.ts
├── types/               # TypeScript type definitions
│   └── {feature}.types.ts
└── index.ts             # Public API exports
```

### Complete Feature List

The project contains **13 feature modules**:

| Feature                 | Purpose                                     | Key Components                                                                      |
| ----------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------- |
| `fractional-cto/`       | Fractional CTO services page                | FractionalCtoPage, CtoHero, CtoValueProps, CtoApproach, CtoOutcomes, CtoFAQ, CtoCTA |
| `services/`             | Service capabilities (4 pages + overview)   | ServicesOverview, CapabilityPage, CapabilitiesGrid                                  |
| `engineers/`            | Team profiles and expertise                 | EngineersLanding, EngineerProfile, EngineerCard                                     |
| `projects/`             | Case studies portfolio                      | CaseStudiesGrid                                                                     |
| `roi-calculator/`       | W2 vs C2C calculator tool                   | ROICalculator                                                                       |
| `hero/`                 | Landing page hero section                   | HeroSection                                                                         |
| `value-proposition/`    | Value proposition cards                     | ValueProposition                                                                    |
| `how-it-works/`         | Process methodology                         | HowItWorks                                                                          |
| `roi-preview/`          | ROI section preview                         | RoiPreview                                                                          |
| `case-studies-preview/` | Featured case studies                       | CaseStudiesPreview                                                                  |
| `faq/`                  | FAQ accordion                               | FAQ                                                                                 |
| `final-cta/`            | Call-to-action section                      | FinalCTA                                                                            |
| `legal/`                | Privacy & terms pages                       | PrivacyPage, TermsPage                                                              |

### Feature Module Pattern

Each feature exports a clean public API via `index.ts`:

```typescript
// Export components
export { default as ComponentName } from './components/ComponentName';

// Export types
export type { TypeName } from './types/feature.types';

// Export data
export { dataObject, helperFunction } from './data/featureData';
```

Import features using the path alias: `import { Component } from '~/features/feature-name'`

### Routing

Uses React Router v7 file-based routing in `app/routes/`:

- `_index.tsx` - Homepage
- `fractional-cto.tsx` - Fractional CTO services page
- `services._index/route.tsx` - Services overview page (shows all 4 capabilities)
- `services.$slug/route.tsx` - Dynamic capability pages (4 total)
- `engineers._index/route.tsx` - Engineers landing page (team overview)
- `engineers.$name/route.tsx` - Dynamic engineer profile pages
- `projects.tsx` - Projects page (case studies grid)
- `w2-vs-c2c.tsx` - W2 vs C2C calculator page
- `privacy.tsx` - Privacy policy page
- `terms.tsx` - Terms of service page
- `404.tsx` - Not found page
- `robots[.]txt.tsx` and `sitemap[.]xml.tsx` - SEO files

**Dynamic routes** use `$` prefix (e.g., `$slug`, `$name`) and access params via `useParams()` from `react-router`.

**Navigation Patterns:**
- Services dropdown in navbar uses 3×2 grid layout with Fractional CTO as featured button (purple gradient) spanning 2 rows × 1 column, plus 4 capability links (AI Engineering, Data Engineering, Full-Stack Engineering, DevOps Engineering)
- Engineers landing page with team grid linking to individual profiles
- Projects case studies filtered by capability tags

### Styling Architecture

The project uses a **hybrid CSS approach** with a specific load order defined in `root.tsx`:

1. **Base** (`base.css`) - CSS resets and foundational styles
2. **Tailwind** (`tailwind.css`) - Utility-first framework
3. **Variables** (`variables.css`) - CSS custom properties (colors, spacing, etc.)
4. **Utilities** (`utilities.css`) - Custom utility classes
5. **Components** (`components.css`) - Reusable component styles
6. **Animations** (`animations.css`) - Animation definitions
7. **Component-specific styles** - Imported via `Route.LinksFunction` in routes

**CSS Import Convention:**
```typescript
import styles from '~/path/to/styles.css?url';

export const links: Route.LinksFunction = () => [
  { rel: 'stylesheet', href: styles }
];
```

The `?url` suffix is required for CSS imports in React Router v7.

### Path Alias

- `~/` maps to `app/` directory (configured in `tsconfig.json`)
- Always use this alias for imports: `import { Component } from '~/features/feature-name'`

### Shared Resources

- `app/components/layout/` - Layout components (Navbar, Footer, NotFound)
- `app/config/` - Site configuration (URLs, analytics IDs, metadata)
- `app/lib/` - Utility functions and helpers
- `app/hooks/` - Custom React hooks
- `app/utils/` - General utilities
- `app/types/` - Shared TypeScript types

### Centralized Configuration

#### Booking URL

All consultation booking CTAs across the site use a **centralized booking URL** configured in `app/config/site.config.ts`:

```typescript
export const bookingUrl = 'https://cal.com/regainflow/consultation';
```

**Usage:**
```typescript
import { bookingUrl } from '~/config/site.config';

// In components
<a href={bookingUrl}>Schedule Free Consultation</a>

// In data files
{
  ctaText: 'Book Consultation',
  ctaHref: bookingUrl
}
```

**Why Centralized:**
- Single source of truth for all 32+ booking CTAs across the site
- Easy to update URL in one place when Cal.com event changes
- Consistent booking experience across all pages
- No hardcoded URLs scattered throughout components/data files

**Locations Using bookingUrl:**
- Homepage: FinalCTA, ValueProposition
- Services: ServicesCTA, all 4 capability pages
- Engineers: TeamCTA, ProfileHero, ProfileCTA (all profiles)
- Fractional CTO: CtoHero, CtoCTA
- ROI Calculator: CostComparison
- Projects: client-results page

**Historical Context:**
Previously used 2 separate Cal.com URLs (`/cto-strategy` and `/pricing-consultation`). Consolidated to single unified consultation URL for simplicity and consistent user experience. The standalone /pricing page has been removed from the site.

## Key Technical Patterns

### SEO & Meta Tags

Each route can export a `meta` function for SEO:

```typescript
export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Page Title' },
    { name: 'description', content: 'Description' },
    { property: 'og:title', content: 'OG Title' },
    // ... other meta tags
  ];
};
```

### CSS Loading in Routes

Routes that need feature-specific styles must import and link them:

```typescript
import featureStyles from '~/features/feature-name/components/feature.css?url';

export const links: Route.LinksFunction = () => [
  { rel: 'stylesheet', href: featureStyles }
];
```

### Data Management

Static data is stored in `{feature}/data/` files as TypeScript objects. Complex features may have:
- Multiple data files (e.g., `servicesData.ts`, `capabilitiesData.ts`)
- Helper functions for data access (e.g., `getCapabilityBySlug()`, `getEngineerBySlug()`)

### Error Handling

- `root.tsx` has an `ErrorBoundary` component that handles all route errors
- 404 errors render the `NotFound` component
- Other errors show a generic error page with error details

## Environment Variables

Set in `.env` file:

- `CLARITY_PROJECT_ID` - Microsoft Clarity analytics project ID (currently hardcoded in `config/site.config.ts`)

## Important Notes

- **TypeScript Strict Mode**: The project uses strict TypeScript settings. All code must type-check.
- **SSR Enabled**: Server-side rendering is enabled (`ssr: true` in `react-router.config.ts`)
- **Node Version**: Requires Node.js >= 20.0.0

## Feature Architecture Details

### Services Feature

The `services/` feature supports a modern capability-based structure:

**Route Structure:**
- `/services` - Overview page with hero, 4 capability cards, process steps, metrics, case studies, CTA
- `/services/:capability` - Individual capability pages (4 total)
  - `ai-engineering` - AI Engineering (combines multi-agent automation + RAG/semantic search)
  - `data-engineering` - Data Engineering (combines data validation + system integration)
  - `full-stack-engineering` - Full-Stack Engineering
  - `devops-engineering` - DevOps Engineering

**Navigation:**
- Services dropdown in navbar provides access to all capabilities
- Click "SERVICES" to reveal dropdown with "All Services" + 4 capability links
- Dropdown uses glass morphism styling with animated caret icon
- Auto-closes on navigation and route changes

**Data Structure:**
- `capabilitiesData.ts` - Comprehensive data for all 4 capabilities (problems, approach, tech stack)
- `servicesOverviewData.ts` - Overview page data (hero, process steps, metrics, capability cards)
- Projects case studies tagged with `capabilities` field for cross-referencing with new capability names

**Components:**
- **Overview Page**: `ServicesOverview` (orchestrator) + 6 sub-components (Hero, Grid, Metrics, Process, Preview, CTA)
- **Capability Pages**: `CapabilityPage` (unified component with 7 inline sections)
- All components follow glass morphism + neon design system

### Engineers Feature

The `engineers/` feature showcases team members with detailed profiles:

**Route Structure:**
- `/engineers` - Team landing page with grid of engineer cards
- `/engineers/:name` - Individual engineer profile pages

**Data Structure:**
- `engineersData.ts` - Array of engineer objects with:
  - Basic info (name, slug, title, image)
  - Tech stack and expertise areas
  - Project highlights and achievements
  - Social links (GitHub, LinkedIn)
- Helper functions: `getEngineerBySlug()`, `getAllEngineers()`

**Components:**
- `EngineersLanding` - Team overview with search/filter capabilities
- `EngineerCard` - Card component for grid display
- `EngineerProfile` - Full profile page with sections

**Patterns:**
- Engineers linked to projects via shared tags
- Tech stack badges using design system tokens
- Responsive grid layout (1 → 2 → 3 columns)

### Projects Feature

The `projects/` feature displays case studies and portfolio work:

**Route Structure:**
- `/projects` - Case studies grid with filtering

**Data Structure:**
- `projectsData.ts` - Array of project objects with:
  - Title, description, client info
  - Capability tags for filtering
  - Outcomes and metrics
  - Images and media
- Projects tagged with capabilities for cross-referencing with services

**Components:**
- `CaseStudiesGrid` - Main grid with filtering by capability
- Individual project cards with hover effects

**Features:**
- Filter by capability (AI Automation, RAG, etc.)
- Links to related services
- Shows engineers involved in projects

### Legal Feature

The `legal/` feature handles privacy and terms pages:

**Route Structure:**
- `/privacy` - Privacy policy
- `/terms` - Terms of service

**Components:**
- `PrivacyPage` - Privacy policy content
- `TermsPage` - Terms of service content

## Additional Documentation

- **Design System Guide**: See `docs/STYLING.md` for comprehensive documentation including CSS variables, glass morphism patterns, neon effects, icon system, and code examples.
- **README**: See `README.md` for project setup, architecture overview, and deployment instructions.

## Workflow Guidelines

### Updating Documentation

**IMPORTANT**: Whenever you add a new feature, refactor existing code, or fix bugs, you MUST update this `.claude/CLAUDE.md` file to reflect the changes. This ensures that future sessions have accurate context about the codebase.

**When to update CLAUDE.md:**
- ✅ Adding new features or feature modules
- ✅ Refactoring existing architecture patterns
- ✅ Adding new routes or changing routing structure
- ✅ Introducing new styling patterns or design systems
- ✅ Fixing significant bugs that reveal architectural insights
- ✅ Adding new dependencies or tools
- ✅ Deprecating legacy code or marking code for removal

**What to update:**
- Add new features to the feature list table
- Update architecture patterns if they change
- Document new routing patterns in the Routing section
- Update `docs/STYLING.md` when adding new design patterns
- Add feature architecture details for complex features

### Route Change Protocol

**CRITICAL**: Whenever you add, remove, or modify routes, you MUST follow this checklist to ensure consistency across the entire application. Failing to update all related files can lead to broken links and navigation issues.

**Checklist for Route Changes:**

When adding, removing, or modifying routes in `app/routes/`, complete ALL of the following steps:

1. **Update Navigation Components:**
   - [ ] Update `app/components/layout/Navbar/Navbar.tsx` with new route links
   - [ ] Update services dropdown menu if adding/removing service capabilities
   - [ ] Verify all navigation links resolve correctly

2. **Update Footer:**
   - [ ] Update `app/components/layout/Footer/Footer.tsx` with new route links
   - [ ] Ensure service links match current capability structure (4 capabilities: AI Engineering, Data Engineering, Full-Stack Engineering, DevOps Engineering)
   - [ ] Verify footer link categories (Services, Company, Resources) are up-to-date

3. **Update SEO & Sitemap:**
   - [ ] Update `app/routes/sitemap[.]xml.tsx` with new route URLs
   - [ ] Update `app/routes/robots[.]txt.tsx` if needed
   - [ ] Verify all routes are included in sitemap generation

4. **Update Documentation:**
   - [ ] Update routing table in this CLAUDE.md file (Routing section, lines 75-87)
   - [ ] Update feature list table if adding new feature (lines 38-54)
   - [ ] Update feature architecture details if adding complex feature
   - [ ] Update navigation patterns documentation (lines 91-94)

5. **Update Cross-References:**
   - [ ] Update any internal links in feature data files (e.g., `capabilitiesData.ts`, `projectsData.ts`)
   - [ ] Update any redirect logic or route guards
   - [ ] Verify related pages link to the new/modified route

6. **Test Navigation Flows:**
   - [ ] Test all navbar links navigate correctly
   - [ ] Test all footer links navigate correctly
   - [ ] Test breadcrumbs (if applicable)
   - [ ] Test dynamic routes with valid and invalid params
   - [ ] Verify 404 page shows for non-existent routes

**Example Scenarios:**

- **Adding a new service capability**: Update Navbar dropdown, Footer services list, sitemap, CLAUDE.md routing table, and service count in feature description
- **Removing a route**: Remove from Navbar, Footer, sitemap, and CLAUDE.md; verify no broken internal links remain
- **Renaming a route**: Update all navigation components, footer, sitemap, CLAUDE.md, and test all links

## Design & Frontend Patterns

### Design System - Glass Morphism + Neon Aesthetic

The project uses a refined **glass morphism design system** with **subtle neon accents**. All design and frontend work should utilize the centralized design tokens in `app/styles/`.

**Core Styles Location: `app/styles/`**
- **`variables.css`** - CSS custom properties (colors, spacing, glass effects, shadows, glows)
- **`base.css`** - CSS resets and foundational styles
- **`utilities.css`** - Custom utility classes (glass cards, neon buttons, text highlights)
- **`components.css`** - Reusable component styles
- **`animations.css`** - Animation keyframes and transitions

**Design Tokens (from `variables.css`):**
```css
/* Glass Morphism */
--glass-bg-ultra-light: rgba(255, 255, 255, 0.025);
--glass-bg-light: rgba(255, 255, 255, 0.05);
--glass-bg-medium: rgba(255, 255, 255, 0.08);
--glass-bg-heavy: rgba(255, 255, 255, 0.12);
--glass-blur-sm: blur(8px);
--glass-blur-md: blur(12px);
--glass-blur-lg: blur(20px);
--glass-border: rgba(255, 255, 255, 0.1);
--glass-border-accent: rgba(0, 214, 203, 0.2);

/* Neon Accents (40-50% reduced intensity) */
--glow-subtle: 0 0 10px rgba(0, 214, 203, 0.2);
--glow-medium: 0 0 20px rgba(0, 214, 203, 0.3);
--glow-hover: 0 0 25px rgba(0, 214, 203, 0.4);
```

**Reusable CSS Classes (from `utilities.css`):**
- `.glass-card` - Standard glass card with border and subtle background
- `.glass-section` - Full-width glass section container
- `.neon-button-glass` - Primary CTA button with glass + neon styling
- `.text-highlight` - Neon-colored text with subtle glow
- `.gradient-text` - Gradient text effect

**Design Guidelines:**
1. **ALWAYS use design tokens** from `variables.css` instead of hardcoding colors/effects
2. **ALWAYS use utility classes** from `utilities.css` when available
3. **Backdrop blur ranges**: 8px (subtle) → 12px (standard) → 20px (heavy)
4. **Glass background opacity**: 0.025 (ultra-light) → 0.05 (light) → 0.08 (medium) → 0.12 (heavy)
5. **Neon glows are subtle**: Keep rgba alpha values between 0.2-0.4 for refined aesthetic
6. **Component-specific CSS**: Only create new CSS files for unique component styles that can't be achieved with utilities

**Before creating new styles:**
1. Check `utilities.css` for existing classes
2. Check `variables.css` for design tokens
3. Use CSS custom properties for consistency
4. Only create component-specific CSS when truly necessary

### Icon System - Phosphor Icons Duotone

The project uses **Phosphor Icons Duotone** variant (`react-icons/pi`) as the standard icon library for consistent visual language across all components.

**Icon Library:** `react-icons/pi`
- **Package**: React Icons - Phosphor Icons
- **Variant**: Duotone (two-tone style with primary and secondary colors)
- **Naming Convention**: `Pi[IconName]Duotone` (e.g., `PiRobotDuotone`, `PiCodeDuotone`, `PiShieldCheckDuotone`)

**Icon Sizing Guidelines:**
- **Feature Grids & Cards**: 48px - Large, prominent icons for capability showcases
- **Section Headers**: 32px - Medium icons for process steps and section titles
- **Card Icons**: 20-24px - Small-medium icons for feature cards and badges
- **Dropdown Menus**: 16px - Compact icons for navigation dropdowns
- **Inline Icons**: 14-16px - Tiny icons for inline text or buttons

**Icon Colors:**
- **Primary**: `var(--color-primary)` or `color: var(--color-primary)` - Neon cyan for active/featured icons
- **Secondary**: `var(--color-text-secondary)` - Muted gray for non-primary icons
- **On Hover**: Transitions to `var(--color-primary)` with subtle glow

**Usage Pattern:**
```typescript
import { PiRobotDuotone, PiCodeDuotone } from 'react-icons/pi';

// Example: Capability card icon
<PiRobotDuotone size={48} />

// Example: Dropdown menu icon
<PiRobotDuotone size={16} className="dropdown-icon" />
```

**Standard Icons by Feature:**
- **AI Automation**: `PiRobotDuotone`
- **RAG & Search**: `PiMagnifyingGlassDuotone`
- **Data Validation**: `PiShieldCheckDuotone`
- **System Integration**: `PiPlugsConnectedDuotone`
- **Full-Stack Engineering**: `PiCodeDuotone`
- **DevOps**: `PiGitBranchDuotone`

**Icon Standardization Rules:**
1. **ALWAYS use Phosphor Duotone** variant for consistency across the project
2. **NEVER mix icon libraries** (avoid Material Icons, FontAwesome, etc. unless absolutely necessary)
3. **Use semantic icon names** that clearly represent the feature/action
4. **Size consistently** based on the context guidelines above
5. **Color consistently** using design system variables

## Architecture Reference

### Bulletproof React Pattern

This project follows architecture patterns from the [Bulletproof React](https://github.com/alan2207/bulletproof-react) framework, which provides guidelines for building scalable and maintainable React applications.

**Core Principles Applied:**
- **Feature-based organization** - Each feature is self-contained with components, data, types, and styles
- **Colocation** - Keep related code close together (components with their styles and tests)
- **Absolute imports** - Using `~/` path alias for clean imports
- **Type safety** - TypeScript strict mode with comprehensive type definitions
- **Separation of concerns** - Clear boundaries between features, routes, and shared code

**Key Architecture Patterns:**
- **Features** (`app/features/`) - Isolated feature modules with internal structure
- **Components** (`app/components/`) - Shared, reusable components used across features
- **Routes** (`app/routes/`) - Route components that compose features
- **Lib** (`app/lib/`) - Utilities and helper functions
- **Hooks** (`app/hooks/`) - Custom React hooks
- **Types** (`app/types/`) - Shared TypeScript type definitions

**Reference the Bulletproof React repo** for:
- Component composition patterns
- State management approaches
- Testing strategies
- Error handling patterns
- Performance optimization techniques

### Adding a New Feature

1. Create feature directory: `app/features/{feature-name}/`
2. Add subdirectories: `components/`, `data/`, `types/`
3. Create `index.ts` with public API exports
4. Add route in `app/routes/` if needed
5. Import feature-specific CSS in route via `links` function
6. Update this CLAUDE.md with feature details

### Code Style Guidelines

- Use TypeScript strict mode
- Use design tokens from `variables.css`
- Use Phosphor Icons Duotone
- Follow mobile-first responsive design
- Keep components focused and composable
- Use meaningful variable and function names
- Add JSDoc comments for complex functions

## Mobile Responsiveness & Typography

### Responsive Design Strategy

The project uses a **fluid-first responsive approach** optimized for screen widths from 320px to desktop (1920px+).

**Testing Breakpoints:**
- **320px** - Squeeze test (smallest modern phones)
- **360px** - Primary mobile optimization target (most Android devices)
- **768px** - Tablet portrait (layout transitions)
- **1024px** - Tablet landscape / small desktop (navbar switches to desktop mode)
- **1280px+** - Desktop (full layout)

**Key Responsive Patterns:**
- Fluid typography using `clamp()` for smooth scaling across all screen sizes
- Mobile-first CSS with progressive enhancement for larger screens
- Accordion-style navigation on mobile (Services dropdown expands inline)
- Grid layouts: 3-4 columns (desktop) → 2 columns (tablet) → 1 column (mobile)
- Touch-friendly button sizes (minimum 44px height on mobile)

### Fluid Typography System

All typography uses CSS `clamp()` for smooth, viewport-responsive scaling. **No stepped breakpoints** for font sizes.

**Typography Scale (defined in `app/styles/base.css`):**
```css
h1: clamp(2rem, 5vw + 1rem, 4rem);        /* 32px → 64px */
h2: clamp(1.75rem, 4vw + 0.5rem, 3rem);   /* 28px → 48px */
h3: clamp(1.5rem, 3vw + 0.5rem, 2.5rem);  /* 24px → 40px */
h4: clamp(1.25rem, 2vw + 0.5rem, 2rem);   /* 20px → 32px */
h5: clamp(1.125rem, 1.5vw + 0.5rem, 1.5rem); /* 18px → 24px */
h6: clamp(1rem, 1vw + 0.5rem, 1.25rem);   /* 16px → 20px */
p:  clamp(0.95rem, 1vw + 0.5rem, 1.125rem); /* 15.2px → 18px */
```

**Typography Utility Classes (in `app/styles/utilities.css`):**
- `.subheading` - Subheading text with fluid sizing (16px → 20px)
- `.caption` - Caption/small text with fluid sizing (12px → 14px)

**Responsive Visibility Utilities:**
- `.mobile-hidden` - Hidden on mobile (< 768px), visible on tablet/desktop
- `.desktop-hidden` - Hidden on desktop (> 1024px), visible on mobile/tablet
- `.tablet-hidden` - Hidden on tablet (768px - 1024px) only
- `.mobile-only` - Visible only on mobile (< 768px)
- `.desktop-only` - Visible only on desktop (> 1024px)

### Mobile Navigation Patterns

**Navbar (< 1024px):**
- Hamburger menu with explicit 16px minimum gap from logo
- Accordion-style Services dropdown (expands inline, pushes other items down)
- Custom hybrid glass styling:
  - Background: `rgba(18, 18, 19, 0.9)` (heavier glass)
  - Border: `2px solid rgba(0, 214, 203, 0.4)` (stronger neon)
  - Backdrop blur: 24px (`var(--glass-blur-xl)`)
  - Enhanced shadow + cyan glow

**Services Dropdown Mobile Behavior:**
- On mobile: Services button toggles accordion expansion
- Submenu slides down with smooth height transition (max-height + opacity)
- Slightly lighter background than main menu for visual hierarchy
- Auto-collapses when navigating to a service page

**320px Squeeze Test Optimizations:**
- Logo reduces to 20px font size (from 32px)
- Hamburger button reduces to 36px (from 40px)
- Horizontal margins reduce to 8px (from 20px)
- Minimum 8px gap between logo and hamburger maintained
