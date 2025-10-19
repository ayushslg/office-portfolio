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

## Deployment (GitHub Pages)

The site is deployed using GitHub Actions + GitHub Pages.

### Workflow
Located at `.github/workflows/pages.yml` – builds with:
```
VITE_DEPLOY_BASE=/office-portfolio/
```
This sets the Vite `base` so built asset URLs become `/office-portfolio/...`.

### Router Basename
`BrowserRouter` uses `basename={import.meta.env.BASE_URL || '/office-portfolio/'}` ensuring routes resolve under the project path.

### One‑Time Setup
1. Go to Settings → Pages.
2. Set Source = GitHub Actions and Save (initializes Pages infrastructure).

### Redeploy
Push to `master` (or dispatch workflow manually). The action builds, copies `index.html` to `404.html` (SPA fallback), uploads artifact, and deploys.

### Common Issues
| Symptom | Likely Cause | Fix |
|---------|--------------|-----|
| 404 GitHub Pages site | Pages not enabled yet | Enable Pages → GitHub Actions, then re-run workflow |
| Blank page, console 404 for assets | Wrong base path | Ensure `VITE_DEPLOY_BASE=/office-portfolio/` in workflow |
| Assets load but favicon missing | Absolute `/vite.svg` reference | Use `./vite.svg` (already patched) |
| History navigation 404 | Missing `404.html` fallback | Ensure step copying `index.html` → `404.html` exists |

### Local Build Verification
```
$env:VITE_DEPLOY_BASE="/office-portfolio/"
npm run build
```
Inspect `dist/index.html` – script/link tags should start with `/office-portfolio/`.

### Custom Domain (Optional)
Add `CNAME` file to `public/` and configure DNS. Remove `basename` or adjust to `/` once using a root custom domain.

### Troubleshooting Flow
1. Confirm Pages enabled.
2. Check Actions log for `Deploy to GitHub Pages` success.
3. Hard refresh (Ctrl+Shift+R). Try incognito.
4. Verify base path in built HTML.
5. Open browser console for 404s and adjust paths.

If still stuck, query GitHub Pages status: https://www.githubstatus.com/

---

## License
Personal portfolio; not licensed for redistribution. Use design ideas freely.
