# Symbiotic Thinking Website

Marketing website for the Symbiotic Thinking Dojo — an AI-powered learning environment that builds human capability.

**Live site:** [symbioticthinking.ai](https://symbioticthinking.ai)
**Dojo app:** [dojo.symbioticthinking.ai](https://dojo.symbioticthinking.ai)

## The core claim

Symbiotic Thinking is **critical thinking, communication, and collaboration** — practiced
with AI in the room. Those three abilities are the spine of the site; every page should
either name them or serve them.

The triad lives in one place: [`app/content/abilities.ts`](app/content/abilities.ts). The
home page, Framework, Learners, and Evidence pages all read from it, so copy stays
consistent. Edit that file rather than restating the abilities inline.

Two naming rules, both easy to get wrong:

- These are **the Three Abilities**, never "the 3Cs." The 3Cs are Context, Choices, and
  Confirmation — a technique one level down, inside the Personal Stack.
- We name **three**, not the familiar four. Creativity is treated as what emerges when the
  three operate together, not as a fourth skill to drill. `/framework` and `/approach`
  both explain this; keep them in agreement.

## Pages

- **Home** — Value proposition, the three abilities, ways to practice, getting started
- **For Learners** — What each ability looks like in practice, and how to start
- **For Educators** — Classroom deployment (BYO key or institutional CTI keys), assignment
  design, and assessing against the three abilities
- **The Framework** — The Three Abilities over the Personal Stack (Mindset / Metacognition /
  Motivation)
- **The Evidence** — Labor-market and cognitive-science data behind the three abilities,
  with explicit caveats about what it does not show
- **Our Approach** — Build-measure-learn, classroom pilots, and sources
- **Portable Edition** — Using the framework with any AI chatbot (linked from Framework and
  the footer, not the main nav)
- **About** — Philosophy, team, transparency, FAQ
- **Support** — Feedback, contributions, and funding information

### Keeping claims accurate

The site makes verifiable claims about the Dojo, so two things need re-checking whenever
[the Dojo](https://github.com/profsathya/Symbiotic_Thinking_Dojo) changes:

- **Privacy.** Personal Gemini/Groq keys are browser-only. Institutional CTI keys are
  proxied through a backend that records token counts but not conversation content. Any
  blanket "nothing touches our servers" claim is wrong.
- **Persistence.** Nothing is stored server-side, but API keys, Practice Dojo progress,
  Architect runs, and earned belts persist in the browser. "Nothing is saved" is wrong.

Figures on `/evidence` carry a `LAST_REVIEWED` constant — update it when you re-check the
sources.

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment to GitHub Pages

### 1. Create GitHub Repository

Create a new repository named `symbioticthinking-website` (or any name).

### 2. Configure for Static Export

Add to `next.config.ts`:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

### 3. Add GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

### 4. Enable GitHub Pages

1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"

### 5. Configure Custom Domain

1. In repository Settings → Pages, add custom domain: `symbioticthinking.ai`
2. Create `public/CNAME` file with content: `symbioticthinking.ai`
3. In Squarespace DNS, add:
   - A record: `@` → `185.199.108.153`
   - A record: `@` → `185.199.109.153`
   - A record: `@` → `185.199.110.153`
   - A record: `@` → `185.199.111.153`
   - CNAME record: `www` → `<username>.github.io`

## DNS Configuration for Full Setup

### symbioticthinking.ai → GitHub Pages (this site)

In Squarespace DNS:
```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   <username>.github.io
```

### dojo.symbioticthinking.ai → Google Cloud Run

In Squarespace DNS:
```
CNAME dojo  ghs.googlehosted.com
```

Then in Google Cloud Console:
1. Go to Cloud Run → your service
2. Click "Manage Custom Domains"
3. Add `dojo.symbioticthinking.ai`
4. Verify domain ownership if prompted

## Technology

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** GitHub Pages (static export)

## License

MIT
