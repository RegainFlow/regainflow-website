# Contributing to RegainFlow

Thank you for your interest in contributing to RegainFlow! This guide will help you get started with the development process.

RegainFlow is a software engineering agency delivering AI Engineering, Data Engineering, Full-Stack Development, and DevOps solutions.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Standards](#code-standards)
- [Feature Development](#feature-development)
- [Styling Guidelines](#styling-guidelines)
- [Testing](#testing)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

---

## Getting Started

### Prerequisites

- Node.js >= 20.0.0
- npm
- Git

### Setup

```bash
# Clone the repository
git clone https://github.com/R3d5tatic/regainflow-remix.git
cd regainflow-remix

# Install dependencies
npm install

# Start development server
npm run dev
```

### Useful Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run typecheck    # Run TypeScript type checking
npm run lint         # Run ESLint
npm start            # Run production server
```

---

## Development Workflow

1. **Create a branch** from `main` for your feature or fix
2. **Make changes** following the code standards below
3. **Test locally** - run typecheck and lint
4. **Update documentation** - update CLAUDE.md if adding features
5. **Commit** with conventional commit messages
6. **Push** and create a pull request

---

## Code Standards

### TypeScript

- Use TypeScript strict mode (already configured)
- Define types for all props, state, and function parameters
- Avoid `any` type - use `unknown` if type is truly unknown
- Export types from `types/` directory in each feature

```typescript
// Good
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

// Avoid
const handleClick = (data: any) => { ... }
```

### React Components

- Use functional components with hooks
- Keep components focused and single-purpose
- Use meaningful component names
- Colocate related code (component + styles + types)

```typescript
// Good - focused component
function EngineerCard({ engineer }: EngineerCardProps) {
  return (
    <div className="glass-card">
      <h3>{engineer.name}</h3>
      <p>{engineer.title}</p>
    </div>
  );
}

// Avoid - component doing too much
function EngineerSection() {
  // fetching, filtering, sorting, rendering all in one
}
```

### Imports

Always use the path alias `~/` for imports from the `app/` directory:

```typescript
// Good
import { EngineerCard } from '~/features/engineers';
import { siteConfig } from '~/config/site.config';

// Avoid
import { EngineerCard } from '../../../features/engineers';
```

---

## Feature Development

### Creating a New Feature

1. **Create the feature directory**:
   ```
   app/features/{feature-name}/
   ├── components/
   │   ├── ComponentName.tsx
   │   └── component-name.css
   ├── data/
   │   └── featureData.ts
   ├── types/
   │   └── feature.types.ts
   └── index.ts
   ```

2. **Define types first** in `types/feature.types.ts`:
   ```typescript
   export interface FeatureItem {
     id: string;
     title: string;
     description: string;
   }
   ```

3. **Create data** in `data/featureData.ts`:
   ```typescript
   import type { FeatureItem } from '../types/feature.types';

   export const featureItems: FeatureItem[] = [
     { id: '1', title: 'Item 1', description: 'Description' }
   ];
   ```

4. **Build components** in `components/`:
   ```typescript
   import type { FeatureItem } from '../types/feature.types';

   interface FeatureCardProps {
     item: FeatureItem;
   }

   export default function FeatureCard({ item }: FeatureCardProps) {
     return (
       <div className="glass-card">
         <h3>{item.title}</h3>
         <p>{item.description}</p>
       </div>
     );
   }
   ```

5. **Export public API** in `index.ts`:
   ```typescript
   export { default as FeatureCard } from './components/FeatureCard';
   export type { FeatureItem } from './types/feature.types';
   export { featureItems } from './data/featureData';
   ```

6. **Create route** if needed in `app/routes/`:
   ```typescript
   import { FeatureCard, featureItems } from '~/features/feature-name';
   import featureStyles from '~/features/feature-name/components/feature.css?url';

   export const links: Route.LinksFunction = () => [
     { rel: 'stylesheet', href: featureStyles }
   ];

   export default function FeaturePage() {
     return (
       <div>
         {featureItems.map(item => (
           <FeatureCard key={item.id} item={item} />
         ))}
       </div>
     );
   }
   ```

7. **Update documentation** - add feature to CLAUDE.md

---

## Styling Guidelines

### Use Design Tokens

Always use CSS variables from `app/styles/variables.css`:

```css
/* Good */
.my-card {
  background: var(--glass-bg-medium);
  color: var(--color-primary);
  border-radius: var(--radius-lg);
}

/* Avoid */
.my-card {
  background: rgba(255, 255, 255, 0.08);
  color: #00d6cb;
  border-radius: 16px;
}
```

### Use Utility Classes

Check `app/styles/utilities.css` for available classes:

- `.glass-card` - Standard glass card
- `.glass-section` - Full-width glass section
- `.neon-button-glass` - Primary CTA button
- `.text-highlight` - Neon text highlight
- `.gradient-text` - Gradient text effect

### Icons

Use Phosphor Icons Duotone from `react-icons/pi`:

```typescript
import { PiRobotDuotone } from 'react-icons/pi';

// Feature grid: 48px
<PiRobotDuotone size={48} />

// Section header: 32px
<PiRobotDuotone size={32} />

// Card icon: 24px
<PiRobotDuotone size={24} />

// Navigation: 16px
<PiRobotDuotone size={16} />
```

### Responsive Design

Follow mobile-first approach:

```css
/* Base (mobile) */
.grid {
  grid-template-columns: 1fr;
}

/* Tablet */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## Testing

Before submitting a pull request:

```bash
# Run TypeScript type checking
npm run typecheck

# Run ESLint
npm run lint

# Build to ensure no errors
npm run build
```

---

## Commit Guidelines

Use conventional commit messages:

```
type(scope): description

[optional body]
```

### Types

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, etc.)
- `refactor` - Code refactoring
- `perf` - Performance improvements
- `test` - Adding tests
- `chore` - Maintenance tasks

### Examples

```bash
feat(engineers): add team landing page with grid layout
fix(navbar): resolve dropdown z-index issue
docs: update CLAUDE.md with engineers feature details
refactor(services): extract capability card component
style: format code with prettier
```

---

## Pull Request Process

1. **Ensure all checks pass**:
   - TypeScript compiles without errors
   - ESLint passes
   - Build succeeds

2. **Update documentation**:
   - Update `CLAUDE.md` for new features
   - Update `README.md` if needed
   - Update `docs/STYLING.md` for new design patterns

3. **Write a clear PR description**:
   - What changes were made
   - Why the changes were necessary
   - How to test the changes

4. **Request review** from maintainers

5. **Address feedback** and make requested changes

---

## Questions?

If you have questions about contributing:

1. Check existing documentation in `docs/`
2. Review `CLAUDE.md` for architecture details
3. Look at existing features for patterns
4. Open an issue for discussion

Thank you for contributing to RegainFlow!
