# RegainFlow

Marketing website for RegainFlow, an AI/ML consulting company providing senior C2C contract engineers and project-based consulting.

Built with **React Router v7**, **TypeScript**, and a custom **Glass Morphism + Neon** design system.

## Features

- **Services Overview** - 6 capability pages (AI Automation, RAG & Search, Data Validation, System Integration, Full-Stack Engineering, DevOps)
- **Engineer Profiles** - Team member showcases with tech stacks, project highlights, and expertise areas
- **ROI Calculator** - Interactive C2C vs W2 cost comparison tool
- **Projects Portfolio** - Case studies with capability tagging for cross-referencing
- **Responsive Design** - Mobile-first approach with glass morphism aesthetic
- **SEO Optimized** - Meta tags, sitemap, and robots.txt included

## Tech Stack

- **Framework**: React Router v7 (SSR enabled)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + Custom CSS with design tokens
- **Icons**: Phosphor Icons Duotone (`react-icons/pi`)
- **Build Tool**: Vite 6.0
- **Analytics**: Microsoft Clarity
- **Deployment**: Node.js >= 20.0.0

## Getting Started

### Prerequisites

- Node.js >= 20.0.0
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/R3d5tatic/regainflow-remix.git
cd regainflow-remix

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
├── components/           # Shared layout components
│   └── layout/          # Navbar, Footer, NotFound
├── config/              # Site configuration (URLs, analytics)
├── features/            # 13 feature modules (self-contained)
│   ├── services/        # Services overview + 6 capabilities
│   ├── engineers/       # Team profiles and expertise
│   ├── projects/        # Case studies portfolio
│   ├── w2-vs-c2c/       # W2 vs C2C calculation tool
│   ├── hero/            # Landing page hero section
│   ├── value-proposition/
│   ├── how-it-works/    # Process methodology
│   ├── w2-vs-c2c-preview/ # W2 vs C2C section preview
│   ├── case-studies-preview/
│   ├── faq/             # FAQ accordion
│   ├── final-cta/       # Call-to-action section
│   └── legal/           # Privacy & terms pages
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── routes/              # React Router file-based routes
├── styles/              # Global styles and design tokens
├── types/               # Shared TypeScript types
└── utils/               # General utilities

docs/
└── STYLING.md           # Design system documentation

.claude/
└── CLAUDE.md            # AI assistant context

public/
└── images/              # Static images and assets
```

## Architecture

This project follows a **feature-based architecture** inspired by [Bulletproof React](https://github.com/alan2207/bulletproof-react):

- **Features are self-contained** - Each feature has its own components, data, types, and styles
- **Clean exports** - Features expose a public API via `index.ts`
- **Colocation** - Related code stays together
- **Type safety** - TypeScript strict mode throughout
- **Path aliases** - Use `~/` to import from `app/`

### Feature Module Pattern

```
app/features/{feature-name}/
├── components/           # Feature components
│   ├── Component.tsx
│   └── component.css
├── data/                # Static data
│   └── featureData.ts
├── types/               # Type definitions
│   └── feature.types.ts
└── index.ts             # Public API
```

### Import Example

```typescript
import { ServicesOverview } from '~/features/services';
import { EngineerProfile } from '~/features/engineers';
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

### Utility Classes

```html
<!-- Glass card -->
<div class="glass-card">Content</div>

<!-- Neon button -->
<a href="#" class="neon-button-glass">Schedule a Call</a>

<!-- Highlighted text -->
<span class="text-highlight">Important</span>
```

### Documentation

See [docs/STYLING.md](docs/STYLING.md) for the complete design system guide including:
- Color system and design tokens
- Glass morphism patterns
- Neon glow effects
- Typography system
- Icon system (Phosphor Duotone)
- Utility classes
- Component patterns
- Best practices

## Routes

| Path                    | Description                            |
| ----------------------- | -------------------------------------- |
| `/`                     | Homepage                               |
| `/services`             | Services overview (all 6 capabilities) |
| `/services/:capability` | Individual capability pages            |
| `/engineers`            | Team overview                          |
| `/engineers/:name`      | Individual engineer profiles           |
| `/projects`             | Case studies & portfolio               |
| `/w2-vs-c2c`            | w2-vs-c2c calculator tool              |
| `/privacy`              | Privacy policy                         |
| `/terms`                | Terms of service                       |

### Capability Routes

- `/services/ai-automation` - AI Automation
- `/services/rag-search` - RAG & Search Systems
- `/services/data-validation` - Data Validation
- `/services/system-integration` - System Integration
- `/services/full-stack-engineering` - Full-Stack Engineering
- `/services/devops` - DevOps & Infrastructure

## Environment Variables

Create a `.env` file in the root directory:

```env
CLARITY_PROJECT_ID=your_clarity_id
```

Note: The Clarity ID is currently configured in `app/config/site.config.ts`.

## Deployment

Build and run in production:

```bash
npm run build
npm start
```

Deploy the output:
- `build/server` - Server-side code
- `build/client` - Client-side assets

### Docker (Optional)

```bash
docker build -t regainflow .
docker run -p 3000:3000 regainflow
```

## Contributing

1. Follow the feature-based architecture
2. Use TypeScript strict mode
3. Use design tokens from `variables.css`
4. Use Phosphor Icons Duotone
5. Update documentation when adding features
6. Run `npm run typecheck` and `npm run lint` before committing

### Adding a New Feature

1. Create feature directory in `app/features/`
2. Follow the feature module pattern
3. Export public API via `index.ts`
4. Add route in `app/routes/` if needed
5. Update `CLAUDE.md` with feature details

## Documentation

- **[CLAUDE.md](.claude/CLAUDE.md)** - AI assistant context and architecture reference
- **[STYLING.md](docs/STYLING.md)** - Complete design system guide
- **[Bulletproof React](https://github.com/alan2207/bulletproof-react)** - Architecture patterns reference

## License

Proprietary - All rights reserved.
