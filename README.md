# RegainFlow

Marketing website for RegainFlow, an AI/ML consulting company providing senior C2C contract engineers and project-based consulting.

Built with **React Router v7**, **TypeScript**, and a custom **Glass Morphism + Neon** design system.

## Features

- **Services Overview** - 6 capability pages (AI Automation, RAG & Search, Data Validation, System Integration, Full-Stack Engineering, DevOps)
- **Engineer Profiles** - Team member showcases with tech stacks and project highlights
- **ROI Calculator** - Interactive C2C vs W2 cost comparison tool
- **Projects** - Case studies and portfolio
- **Responsive Design** - Mobile-first approach with glass morphism aesthetic

## Tech Stack

- **Framework**: React Router v7 (SSR enabled)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + Custom CSS with design tokens
- **Icons**: Phosphor Icons Duotone
- **Deployment**: Node.js >= 20.0.0

## Getting Started

### Prerequisites

- Node.js >= 20.0.0
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/regainflow/regainflow.git
cd regainflow

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Other Commands

```bash
npm run build        # Build for production
npm run typecheck    # Run TypeScript type checking
npm run lint         # Run ESLint
npm start            # Run production server (requires build first)
```

## Project Structure

```
app/
├── components/       # Shared layout components (Navbar, Footer)
├── config/          # Site configuration
├── features/        # Feature modules (self-contained)
│   ├── services/
│   ├── engineers/
│   ├── roi-calculator/
│   ├── hero/
│   └── ...
├── hooks/           # Custom React hooks
├── routes/          # React Router file-based routes
├── styles/          # Global styles and design tokens
├── types/           # Shared TypeScript types
└── utils/           # Utility functions

docs/
└── STYLING.md       # Design system documentation

public/
└── images/          # Static images
```

## Architecture

This project follows a **feature-based architecture** inspired by [Bulletproof React](https://github.com/alan2207/bulletproof-react):

- **Features are self-contained** - Each feature has its own components, data, types, and styles
- **Clean exports** - Features expose a public API via `index.ts`
- **Colocation** - Related code stays together
- **Type safety** - TypeScript strict mode throughout

### Feature Module Pattern

```
app/features/{feature-name}/
├── components/           # Feature components
│   ├── Component.tsx
│   └── component.css
├── data/                # Static data
├── types/               # Type definitions
└── index.ts             # Public API
```

## Styling

The project uses a **Glass Morphism + Neon Aesthetic** design system.

### Quick Start

```css
/* Use global variables */
.my-card {
  background: var(--glass-bg-medium);
  backdrop-filter: var(--glass-blur-lg);
  border: 1px solid var(--glass-border-accent);
  border-radius: var(--radius-lg);
}

/* Use neon accents sparingly */
.my-button {
  color: var(--color-primary);
  box-shadow: var(--glow-subtle);
}
```

### Documentation

See [docs/STYLING.md](docs/STYLING.md) for the complete design system guide including:
- Color system
- Glass morphism patterns
- Neon glow effects
- Typography
- Icon system
- Utility classes

## Routes

| Path | Description |
|------|-------------|
| `/` | Homepage |
| `/services` | Services overview |
| `/services/:capability` | Individual capability pages |
| `/engineers` | Team overview |
| `/engineers/:name` | Individual engineer profiles |
| `/projects` | Case studies |
| `/roi-calculator` | ROI calculator tool |
| `/contact-us` | Contact page |

## Environment Variables

Create a `.env` file in the root directory:

```env
CLARITY_PROJECT_ID=your_clarity_id
```

## Deployment

Build and run in production:

```bash
npm run build
npm start
```

Deploy the output of `npm run build`:
- `build/server`
- `build/client`

## Contributing

1. Follow the feature-based architecture
2. Use TypeScript strict mode
3. Use design tokens from `variables.css`
4. Use Phosphor Icons Duotone
5. Update documentation when adding features

## License

Proprietary - All rights reserved.
