# Office Portfolio (Batman + LEGO Noir)

A personal React + Vite portfolio themed around a Batman noir aesthetic blended with playful LEGO accents. Features a hero employee badge, achievement stats ("Dark Knight Achievements"), a minimal contact form with smooth cross-page scroll, custom LEGO Batman cursors, Spotify embed, and evolving paper/blog shelves.

## Tech Stack
- React 18 + Vite
- React Router DOM
- CSS (custom tokens, dark theme palette)
- Formspree (contact form backend placeholder)

## Key Features
- Employee ID style hero badge with rotating multilingual greeting sequence (Namaste!, Hello!, Ciao!)
- JSON-like CodePanel component showing profile data
- Custom 40x40px PNG cursors (LEGO Batman themed)
- Compact Spotify inline player (Rick Astley track as placeholder)
- Achievement grid with ICPC custom SVG logo and Postgres contributor badge
- Contact section: centered heading, minimalist underline form (Name, Email, Message) + placeholder panel for future visual
- Smooth scroll to contact section even from other routes via navigation state

## Getting Started
Install dependencies:

```powershell
npm install
```

Run dev server:

```powershell
npm run dev
```

Build production bundle:

```powershell
npm run build
```

Preview build:

```powershell
npm run preview
```

## Contact Form Backend
Replace `YOUR_FORM_ID` in `src/pages/Home.jsx` with your Formspree form ID after creating a form at https://formspree.io.

## GitHub Repository Guidance
This project is intended for a private repository. Node modules and build artifacts are excluded via `.gitignore`.

## Planned Improvements
- Theme toggle (lego vs code mode)
- Add actual visual/animation on contact placeholder
- Enhanced form success/error feedback

## License
Personal portfolio; not licensed for redistribution. Use design ideas freely.
