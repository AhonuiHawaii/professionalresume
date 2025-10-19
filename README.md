# Interactive Resume - Neill Holloman

An interactive, single-page resume application built with Vue 3, Vuetify 3, and Pinia. This project presents a professional resume as a modern, static website deployable to GitHub Pages.

## Project Overview

This is a hero-style, card-based interactive resume featuring:
- Full-width hero background with overlay navigation
- Centered profile card with photo, contact info, and action buttons
- Visual skill displays with progress indicators
- Responsive, Material Design-based layout
- 100% client-side, static site (no backend required)

## Tech Stack

- **Vue 3** - Progressive JavaScript framework using Composition API
- **Vuetify 3** - Material Design component framework
- **Vite** - Fast build tool and dev server
- **Pinia** - Lightweight state management for UI state
- **JSON-driven content** - All resume data stored in static JSON file

## Features

- Hero background image with transparent navigation overlay
- Centered profile card with personal information
- Two-column skills section with visual progress bars
- Experience, education, and projects sections
- Download CV and contact action buttons
- Social media profile links
- Fully responsive layout
- Optional light/dark mode toggle

## Installation

Install dependencies using your preferred package manager:

```bash
npm install
# or
yarn install
# or
pnpm install
```

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

Build the project for production deployment:

```bash
npm run build
```

The built files will be in the `dist` directory, ready for static hosting.

## Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
resume/
├── public/
│   └── resume.json          # Resume data source
├── src/
│   ├── components/          # Vue components
│   │   ├── NavigationBar.vue
│   │   ├── ProfileCard.vue
│   │   ├── SkillsSection.vue
│   │   ├── ExperienceSection.vue
│   │   ├── EducationSection.vue
│   │   ├── ProjectsSection.vue
│   │   └── AppFooter.vue
│   ├── stores/              # Pinia stores
│   ├── App.vue              # Main app shell
│   └── main.js              # App entry point
├── CLAUDE.md                # Project documentation
└── package.json
```

## Resume Data

All resume content is stored in `public/resume.json` and follows this structure:

```json
{
  "base": {
    "name": "Neill Holloman",
    "title": "Your professional title",
    "summary": "Professional summary text"
  },
  "skills": [...],
  "experience": [...],
  "education": [...],
  "projects": [...]
}
```

Edit this file to update your resume content without touching the code.

## Deployment

This project is designed for static hosting and can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

Simply build the project and upload the `dist` folder contents to your hosting provider.

## Color Palette

The application uses a professional color scheme:
- **Primary Blue**: #42A5F5 (buttons, links)
- **Secondary Green**: #66BB6A (accents, success states)
- **Amber**: #FFA726 (highlights)
- **Dark Text**: #212121 (headings)
- **Medium Gray**: #757575 (body text)

## Design Philosophy

This resume application follows a clean, modern aesthetic with:
- Card-based component design
- Subtle elevation and shadows
- Visual skill indicators (no plain lists)
- Responsive grid layout
- Professional typography
- Accessibility-focused interactions

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2025 Neill Holloman
