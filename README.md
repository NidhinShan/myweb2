# Dark Editorial Portfolio — Nidhin Shan

A modern, high-contrast dark editorial developer portfolio inspired by contemporary digital design studios and editorial magazine aesthetics. Features a dynamic split-screen hero composition, organic grayscale portrait blending, massive grotesque typography, an interactive works index with animated ticker ribbons, and floating 3D-tilted mockup previews.

## ✨ Highlights & Design Architecture

- **Dark Editorial Design System (`static/css/style.css`)**:
  - **Color Palette**: Deep dark tones (`--bg-base: #0d0d0e`, `--bg-canvas: #121215`), elevated matte surfaces (`--bg-surface: #17171a`, `--bg-surface-elevated: #1f1f24`), crisp white headlines (`#ffffff`), and muted off-white/gray metadata (`#9999a1`).
  - **Energetic Yellow Accent**: High-contrast punchy amber/gold (`--accent-yellow: #FFC700` / `#FFD027`) used on active pills, marquee tags, and primary CTAs.
  - **Typography**: Geometric grotesque headline treatment with Google Fonts **Syne** (weights 800 and 900) and **Plus Jakarta Sans**, paired with **JetBrains Mono** for technical telemetry and dates.

- **Split-Screen Editorial Hero Composition (`index.html`)**:
  - **Top Bar**: Inverted curved corner tab (`About Me ↘`) leading smoothly into the story section; Works counter (`Works (06)`) flanked by clean tech stack badges (`Node.js · Postgres · JavaScript · Tailwind · Python`).
  - **Left / Center-Left**: Black-and-white portrait of Nidhin Shan (`static/assets/mypro.jpeg`) with multi-stop linear and radial gradient masks dissolving cleanly into the dark canvas.
  - **Lower Overlay**: Massive grotesque headline (`Nidhin Shan`) layered across the lower section of the portrait with high-contrast text shadows.
  - **Right Column (Interactive Works Index)**: Clean bordered rows with count indicators. Hovering or focusing any item activates a vibrant yellow ticker pill with smooth infinite marquee animation (`LocalHaul → LocalHaul → ...`).
  - **Floating Mockup Previews**: Layered 3D-tilted mobile and telemetry cards (`rotate(-8deg)`, `rotate(2deg)`, `rotate(9deg)`) hovering dynamically over the works index with responsive cursor parallax.
  - **Bottom Meta Bar**: Real-time availability indicator (`Available Today 🟢`), location (`Palakkad, Kerala · India`), GitHub/LinkedIn action pills, and high-contrast `Book a Call ↗` button.

- **Editorial Content Sections**:
  - **01 · Biography & Live Status**: Narrative bio, "Right Now" live tiles (Building, Learning, Status), and animated key stats counter (5+ Hackathons, 1500+ Attendees, 4+ Leadership roles).
  - **02 · Portfolio / Projects**: Detailed project cards for `LocalHaul` (logistics route coordinator) and `GoPal Systems` (smart campus event utility) with live demo and GitHub buttons.
  - **03 · Leadership & Governance**: All 6 leadership roles at NSSCE (UUC, Event Head AGAM '26, Class Rep, STACS Treasurer, STACS Joint Treasurer, Union Volunteer) with impact points and skill chips.
  - **04 · Journey & Milestones**: Chronological timeline from 2026 down to 2024 with interactive category filters (`All`, `Academic`, `Hackathon`, `Competition`).
  - **05 · Beyond The Code**: 4 hobbies & passions (Football ⚽, Movies & Series 🎬, Books 📚, Geopolitics 🌍) with interactive category filter switcher.
  - **06 · Contact & Inquiry**: Direct contact form with `/api/contact` same-origin relay, Web3Forms, FormSubmit fallback, and instant Gmail & Mail app buttons.

- **Integrated Ambient Music Player Dock**:
  - Fixed dock in the bottom-right corner with full original song playback via YouTube audio stream, soundwave equalizer, seek scrub bar, and 8-track playlist queue.

## 📁 Project Structure

```
portfolio-v2/
├── index.html                 # Editorial split-screen hero & bento showcase
├── README.md
├── package.json
├── server.js                  # Node.js static server & /api/contact handler
├── api/
│   └── contact.js             # Serverless contact relay handler
├── static/
│   ├── assets/
│   │   └── mypro.jpeg         # Black-and-white editorial portrait
│   ├── css/
│   │   └── style.css          # Dark editorial design system tokens & animations
│   └── js/
│       ├── data.js            # Profile, stats, projects, hobbies, roles & timeline data
│       ├── main.js            # Editorial works index, mockup renderer, filters, contact
│       └── music-player.js    # Ambient audio player dock & queue drawer
└── templates/
    ├── contact.html           # Standalone contact & collaboration page
    ├── hobbies.html           # Dedicated Beyond The Code showcase
    ├── roles.html             # Campus governance & festival operations
    └── timeline.html          # Milestones & CTF competition timeline
```

## 🚀 Running Locally

1. Start with the local Node.js server:
   ```bash
   node server.js
   ```
2. Or open `index.html` with VS Code **Live Server** or any static server (`npx serve`, `python -m http.server`, etc.).
3. Update `static/js/data.js` to edit projects, bio, or contact information.
