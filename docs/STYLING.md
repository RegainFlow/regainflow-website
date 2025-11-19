# RegainFlow Design System

This document provides a comprehensive guide to the RegainFlow design system, including CSS variables, utility classes, and component patterns.

## Table of Contents

- [Overview](#overview)
- [Color System](#color-system)
- [Glass Morphism](#glass-morphism)
- [Neon Accents & Glows](#neon-accents--glows)
- [Typography](#typography)
- [Spacing](#spacing)
- [Border Radius](#border-radius)
- [Utility Classes](#utility-classes)
- [Icon System](#icon-system)
- [Component Patterns](#component-patterns)
- [CSS Architecture](#css-architecture)
- [Best Practices](#best-practices)

---

## Overview

RegainFlow uses a **Glass Morphism + Neon Aesthetic** design system. The core principle is:
- Dark backgrounds with frosted glass overlays
- Subtle cyan neon accents for highlights and CTAs
- Clean typography with good contrast

All design tokens are defined in `app/styles/variables.css`.

---

## Color System

### Primary Colors

```css
/* Primary brand colors */
--color-primary: #00d6cb;           /* Cyan - main brand color */
--color-primary-light: #00ffff;     /* Bright cyan for highlights */
--color-primary-dark: #00a89e;      /* Darker cyan for contrast */

/* Alpha variants for overlays */
--color-primary-alpha-15: rgba(0, 214, 203, 0.15);
--color-primary-alpha-20: rgba(0, 214, 203, 0.2);
--color-primary-alpha-25: rgba(0, 214, 203, 0.25);
--color-primary-alpha-50: rgba(0, 214, 203, 0.5);
```

### Text Colors

```css
--color-text-primary: #ffffff;      /* Main text - white */
--color-text-secondary: #a6a6a6;    /* Muted text - gray */
```

### Background Colors

```css
--color-bg-primary: #121213;        /* Main dark background */
--color-bg-secondary: #1a1a1a;      /* Slightly lighter */
```

---

## Glass Morphism

Glass morphism creates a frosted glass effect with backdrop blur and translucent backgrounds.

### Glass Backgrounds

```css
/* Background opacity levels */
--glass-bg-ultra-light: rgba(255, 255, 255, 0.025);  /* Barely visible */
--glass-bg-light: rgba(255, 255, 255, 0.05);         /* Subtle */
--glass-bg-medium: rgba(255, 255, 255, 0.08);        /* Standard cards */
--glass-bg-heavy: rgba(255, 255, 255, 0.12);         /* Prominent elements */
```

### Backdrop Blur

```css
/* Blur intensity levels */
--glass-blur-sm: blur(8px);     /* Subtle blur */
--glass-blur-md: blur(12px);    /* Standard blur */
--glass-blur-lg: blur(20px);    /* Heavy blur for prominent cards */
```

### Glass Borders

```css
--glass-border: rgba(255, 255, 255, 0.1);            /* Subtle border */
--glass-border-accent: rgba(0, 214, 203, 0.2);       /* Cyan-tinted border */
```

### Example: Glass Card

```css
.my-card {
  background: var(--glass-bg-medium);
  backdrop-filter: var(--glass-blur-lg);
  -webkit-backdrop-filter: var(--glass-blur-lg);
  border: 1px solid var(--glass-border-accent);
  border-radius: var(--radius-lg);
}
```

---

## Neon Accents & Glows

Neon glows are used sparingly for emphasis. Keep alpha values between 0.2-0.4 for a refined look.

### Glow Variables

```css
/* Pre-defined glow effects */
--glow-subtle: 0 0 10px rgba(0, 214, 203, 0.2);      /* Subtle ambient glow */
--glow-medium: 0 0 20px rgba(0, 214, 203, 0.3);      /* Standard glow */
--glow-hover: 0 0 25px rgba(0, 214, 203, 0.4);       /* Enhanced on hover */
```

### Example: Glowing Button

```css
.neon-button {
  background: var(--color-primary-alpha-15);
  border: 1.5px solid var(--color-primary);
  box-shadow: var(--glow-subtle);
  color: var(--color-primary);
}

.neon-button:hover {
  background: var(--color-primary-alpha-25);
  box-shadow: var(--glow-hover);
  transform: translateY(-2px);
}
```

### Example: Glowing Icon

```css
.icon-glow {
  color: var(--color-primary);
  filter: drop-shadow(0 0 8px rgba(0, 214, 203, 0.5));
}
```

---

## Typography

### Font Family

```css
--font-primary: 'Exo 2', sans-serif;   /* Main font */
--font-logo: 'Montserrat', sans-serif; /* Logo font */
```

### Font Weights

```css
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### Usage

```css
.my-text {
  font-family: var(--font-primary);
  font-weight: var(--font-weight-semibold);
}
```

---

## Spacing

Use consistent spacing throughout the application:

```css
/* Spacing scale */
0.25rem  /* 4px - Extra small */
0.5rem   /* 8px - Small */
0.75rem  /* 12px - Medium small */
1rem     /* 16px - Medium */
1.5rem   /* 24px - Large */
2rem     /* 32px - Extra large */
```

---

## Border Radius

```css
--radius-sm: 5px;      /* Small elements like inputs */
--radius-base: 8px;    /* Standard cards and buttons */
--radius-md: 12px;     /* Medium cards */
--radius-lg: 16px;     /* Large cards and sections */
--radius-xl: 20px;     /* Hero sections */
--radius-full: 9999px; /* Pills and circular elements */
```

---

## Utility Classes

These classes are available globally from `app/styles/utilities.css`.

### Glass Card

```html
<div class="glass-card">
  <!-- Content -->
</div>
```

### Glass Section

```html
<section class="glass-section">
  <!-- Full-width glass container -->
</section>
```

### Neon Button

```html
<a href="#" class="neon-button-glass">
  Schedule a Call
</a>
```

### Text Highlight

```html
<h1>
  <span class="text-highlight">Highlighted</span> Text
</h1>
```

### Gradient Text

```html
<h2 class="gradient-text">Gradient Heading</h2>
```

---

## Icon System

RegainFlow uses **Phosphor Icons Duotone** variant for consistent visual language.

### Package

```bash
npm install react-icons
```

### Import Pattern

```typescript
import {
  PiRobotDuotone,
  PiCodeDuotone,
  PiRocketLaunchDuotone
} from 'react-icons/pi';
```

### Size Guidelines

| Context | Size | Example |
|---------|------|---------|
| Feature grids & cards | 48px | Capability showcases |
| Section headers | 32px | Process steps |
| Card icons | 20-24px | Feature cards |
| Navigation dropdowns | 16px | Menu items |
| Inline text | 14-16px | Buttons, badges |

### Standard Icons by Feature

```typescript
// Capability icons
const icons = {
  'AI Automation': PiRobotDuotone,
  'RAG & Search': PiMagnifyingGlassDuotone,
  'Data Validation': PiShieldCheckDuotone,
  'System Integration': PiPlugsConnectedDuotone,
  'Full-Stack Engineering': PiCodeDuotone,
  'DevOps': PiGitBranchDuotone,
};
```

### Example Usage

```tsx
import { PiRocketLaunchDuotone } from 'react-icons/pi';

function MyComponent() {
  return (
    <div className="icon-container">
      <PiRocketLaunchDuotone
        size={32}
        className="icon-glow"
      />
    </div>
  );
}
```

---

## Component Patterns

### Card with Glass Morphism

```tsx
<div className="glass-card">
  <div className="card-icon">
    <PiRobotDuotone size={48} />
  </div>
  <h3>Card Title</h3>
  <p>Card description text...</p>
</div>
```

```css
.card-icon {
  color: var(--color-primary);
  filter: drop-shadow(0 0 8px rgba(0, 214, 203, 0.5));
  margin-bottom: 1rem;
}
```

### CTA Button

```tsx
<a
  href="https://cal.com/regainflow/30min"
  className="neon-button-glass"
>
  Schedule a Call
</a>
```

### Input with Glass Effect

```css
.glass-input {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--color-text-primary);
  padding: 0.75rem 1rem;
  transition: all 0.25s ease;
}

.glass-input:focus {
  border-color: rgba(0, 214, 203, 0.5);
  box-shadow: 0 0 0 3px rgba(0, 214, 203, 0.15);
  outline: none;
}
```

---

## CSS Architecture

### File Structure

```
app/styles/
├── base.css        # CSS resets
├── variables.css   # Design tokens
├── utilities.css   # Utility classes
├── components.css  # Shared components
├── animations.css  # Keyframes
└── tailwind.css    # Tailwind utilities
```

### Load Order (in root.tsx)

1. base.css
2. tailwind.css
3. variables.css
4. utilities.css
5. components.css
6. animations.css

### Component-Specific CSS

Component CSS should be minimal and only include styles that can't be achieved with utilities:

```typescript
// In route file
import styles from '~/features/my-feature/components/my-component.css?url';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles }
];
```

---

## Best Practices

### DO

- Use CSS variables from `variables.css`
- Use utility classes when available
- Keep component CSS minimal
- Use semantic class names
- Add vendor prefixes for backdrop-filter (`-webkit-backdrop-filter`)

### DON'T

- Hardcode colors (use `var(--color-primary)` instead of `#00d6cb`)
- Hardcode fonts (use `var(--font-primary)`)
- Create duplicate `:root` variables in component CSS
- Use high alpha values for glows (keep 0.2-0.4)
- Mix icon libraries (stick to Phosphor Duotone)

### Example: Before & After

**Before (Bad):**
```css
.my-button {
  background: rgba(0, 214, 203, 0.15);
  color: #00d6cb;
  font-family: 'Exo 2', sans-serif;
  border-radius: 8px;
}
```

**After (Good):**
```css
.my-button {
  background: var(--color-primary-alpha-15);
  color: var(--color-primary);
  font-family: var(--font-primary);
  border-radius: var(--radius-base);
}
```

---

## Quick Reference

| Element | Background | Blur | Border | Glow |
|---------|------------|------|--------|------|
| Standard card | `--glass-bg-medium` | 20px | `--glass-border-accent` | `--glow-subtle` |
| Input field | 5% white | 8px | 10% white | Focus: 3px ring |
| Button | `--color-primary-alpha-15` | 8px | `--color-primary` | `--glow-subtle` |
| Hover state | +5% opacity | - | Brighter | `--glow-hover` |

---

## Need Help?

- Check `app/styles/variables.css` for all available tokens
- Check `app/styles/utilities.css` for available utility classes
- Reference existing components in `app/features/` for patterns
