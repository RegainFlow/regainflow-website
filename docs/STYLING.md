# RegainFlow Neural Design System

This document provides a comprehensive guide to the RegainFlow "Neural" design system, reflecting a high-end, immersive aesthetic for Digital & AI Transformation consulting.

## Table of Contents

- [Overview](#overview)
- [Neural Color Palette](#neural-color-palette)
- [Sophisticated Glass Morphism](#glass-morphism)
- [Lustre Glows & Effects](#lustre-glows)
- [Typography & Hierarchy](#typography)
- [Animated Backgrounds](#backgrounds)
- [Bento Layout Patterns](#bento-layouts)
- [Component Library](#components)
- [Best Practices](#best-practices)

---

## Overview

RegainFlow uses a **Neural + Immersive** design system. The core principles are:
- **Cinematic Depth:** Utilizing multi-layered mesh gradients and noise textures.
- **Sophisticated Intelligence:** Replacing harsh neon with subtle lustre and reflective glows.
- **Consulting Authority:** Clean, high-end typography ('Inter') and structured "Bento" layouts.
- **Fluid Interactivity:** Smooth, eased transitions that feel organic and responsive.

All design tokens are defined in `app/styles/variables.css`.

---

## Neural Color Palette

### Core Brand Colors

```css
/* Neural & Sophisticated Palette */
--color-primary: #06b6d4;          /* Electric Cyan */
--color-indigo: #6366f1;           /* Deep Indigo */
--color-teal: #14b8a6;             /* AI Teal */

/* Primary Gradient */
--gradient-neural: linear-gradient(135deg, var(--color-indigo) 0%, var(--color-primary) 50%, var(--color-teal) 100%);
```

### Contextual Colors

```css
--color-bg-primary: #020617;       /* Deep Neural Navy */
--color-text-primary: #f8fafc;     /* Off-white for high contrast */
--color-text-secondary: #cbd5e1;   /* Muted slate for descriptions */
```

---

## Sophisticated Glass Morphism

The system uses refined glass effects with varying levels of blur and translucent backgrounds to create hierarchy.

### Variables

```css
--glass-bg: rgba(15, 23, 42, 0.7);
--glass-blur: blur(16px);
--border-glass: 1px solid rgba(255, 255, 255, 0.1);
```

### Usage: Neural Card

```css
.neural-card {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border: var(--border-glass);
  border-radius: var(--radius-lg);
  box-shadow: var(--glow-primary);
}
```

---

## Lustre Glows

Replacing dated box-shadows with "Lustre" — multi-layered filters and reflective gradients.

### Glow Tokens

```css
--glow-primary: 0 0 20px rgba(6, 182, 212, 0.3);
--glow-text: 0 0 10px rgba(6, 182, 212, 0.4);
```

### Reflective Border Pattern

Used on buttons and cards to create a "glass edge" effect.

```css
.reflective-edge {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%);
}
```

---

## Typography & Hierarchy

### Standard

- **Primary:** 'Inter' (Weighted 400 to 900)
- **Technical:** 'JetBrains Mono' (For data and AI snippets)
- **Accent:** 'Orbitron' (Used sparingly for logos/numbers)

### Text Gradients

```css
.heading-premium {
  background: linear-gradient(to right, #ffffff, var(--color-primary-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## Animated Backgrounds

The background is a living element, not a static color.

### Mesh Gradient

Implemented via `base.css` on `.background-wrapper::before`:
- Uses four moving radial gradients.
- Animated with `mesh-glow` keyframes.
- Layered with a 3% opacity SVG Noise texture for "Grain" (organic feel).

---

## Bento Layout Patterns

The "Bento Box" is our preferred layout for features and grids.

### Principles:
- Varied card sizes (1x1, 2x1, 2x2).
- Uniform gaps (`var(--spacing-lg)`).
- High-blur backdrop for the containers.

---

## Component Library

### Neural Button (`.btn-neon`)
- Glass background.
- Reflective border on hover.
- Subdued lustre shadow.

### Bento Card (`.glass-card`)
- High blur.
- Subtle inner gradient.
- Scales up and glows on hover.

### Progress Bars
- Use `var(--gradient-neural)` for the fill.
- Glass-morphism for the track.

---

## Best Practices

### Mobile Layout Standards (2026 Refresh)

- Use `.container` wrappers for all major sections that render cards or CTA blocks (especially on `/services` and `/client-results`) to keep consistent edge gutters.
- On mobile/tablet, prefer compact card spacing (`~1rem-1.25rem` inner padding) and avoid forced narrow text columns that create excessively tall cards.
- Mobile navbar drawer should:
  - Span the navbar content width (not fixed to the right side).
  - Use subdued glass borders/shadows instead of heavy neon outer glow.
  - Keep item rows and CTA full-width with centered button labels.
- Hide scrollbar visuals on mobile/tablet while preserving scroll behavior.

### DO
- Use `clamp()` for fluid typography.
- Use `var(--transition-slow)` for enter animations.
- Apply `grayscale(100%)` to non-hovered logos/images for a "discovery" feel.
- Stick to the `Indigo -> Cyan -> Teal` spectrum.

### DON'T
- Use hardcoded hex colors.
- Use sharp, 100% opacity borders.
- Use high-frequency animations (keep things slow and cinematic).
- Mix font families beyond the approved three.
