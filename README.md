# Mehwish Shahzad — Personal Portfolio

A sleek, interactive single-page portfolio built with **React (TypeScript)** and **Vite**, styled with **Tailwind CSS**. The app showcases your profile and sections such as **About, Skills, Experience, Projects, Contact**, and a **Footer**, with a dark/light mode toggle.

---

## Tech Stack
- **Vite** (build tooling)
- **React + TypeScript**
- **Tailwind CSS**
- UI/interaction libraries (Radix UI, shadcn/ui components, etc.)

---

## Getting Started

### Prerequisites
- Node.js (LTS recommended)
- npm (or pnpm)

### Install
```bash
npm install
```

### Run in Development
```bash
npm run dev
```
Then open the URL shown in the terminal (typically `http://localhost:5173`).

---

## Build for Production
```bash
npm run build
```
Build output will be placed in `dist/`.

---

## Deploy to GitHub Pages
This repo includes a `deploy` script using **gh-pages**.

```bash
npm run deploy
```

The deployment publishes the contents of `dist/` to GitHub Pages.

> If this is your first time: ensure the `gh-pages` target branch is configured in your GitHub repository settings.

---

## Repository Hierarchy

```text
.
├─ src/
│  ├─ main.tsx
│  ├─ app/
│  │  ├─ App.tsx
│  │  ├─ components/
│  │  │  ├─ About.tsx
│  │  │  ├─ Contact.tsx
│  │  │  ├─ Experience.tsx
│  │  │  ├─ Footer.tsx
│  │  │  ├─ Hero.tsx
│  │  │  ├─ Navbar.tsx
│  │  │  ├─ Projects.tsx
│  │  │  ├─ Skills.tsx
│  │  │  └─ figma/
│  │  │     └─ ImageWithFallback.tsx
│  │  └─ components/ui/
│  │     ├─ accordion.tsx
│  │     ├─ button.tsx
│  │     ├─ card.tsx
│  │     └─ ... (shadcn/ui components)
│  ├─ styles/
│  │  ├─ fonts.css
│  │  ├─ globals.css
│  │  └─ tailwind.css
│  └─ assets/
│     └─ videos/
│        └─ PowerBI.mp4
├─ index.html
├─ vite.config.ts
├─ package.json
├─ package-lock.json
├─ pnpm-workspace.yaml
└─ ATTRIBUTIONS.md
```

## Project Structure (High Level)
- `src/main.tsx` — React entry point
- `src/app/App.tsx` — App composition + dark mode handling
- `src/app/components/` — UI sections (Navbar, Hero, About, Skills, Experience, Projects, Contact, Footer)
- `src/styles/` — global and theme styles
- `vite.config.ts` — Vite config (includes Tailwind + a small custom asset resolver)


---

## Credits / Licensing
See [ATTRIBUTIONS.md](./ATTRIBUTIONS.md) for third-party asset and license attributions (e.g., shadcn/ui, Unsplash).

---

## License
Add your project license here (if applicable).
