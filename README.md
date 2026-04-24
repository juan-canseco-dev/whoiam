# Juan Canseco Portfolio

Personal portfolio site for my transition back into software development after several years balancing hands-on coding with leadership work in IT operations.

The site is built as a lightweight multi-page static portfolio using HTML, Sass, and vanilla JavaScript. It highlights three projects that represent where I am now as a developer:

- `GameHub`: a modern C#/.NET learning project focused on clean architecture, real-time communication, and backend reliability.
- `Inventory App`: a full-stack inventory system split across an Angular frontend and a Spring Boot API, both refactored toward a more feature-oriented structure.
- `Sistema de Horarios`: a Windows Forms desktop application delivered for a secondary school, and an important learning step in my architecture journey.

## Project Links

- Portfolio repo: `https://github.com/juan-canseco-dev/portafolio`
- GameHub: `https://github.com/juan-canseco-dev/gaming-hub`
- Inventory frontend: `https://github.com/juan-canseco-dev/inventory-angular`
- Inventory API: `https://github.com/juan-canseco-dev/inventory-api-spring-boot`
- Sistema de Horarios: `https://github.com/juan-canseco-dev/sistema-horarios-cs`

## What Changed

- Replaced template project content with real project descriptions.
- Added repository screenshots under `assets/projects/`.
- Updated each case-study page with actual stack details and code links.
- Added YouTube-embed-ready video sections for project walkthroughs.
- Marked live demos as `Work in progress` where deployment is not ready yet.

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Compile Sass while you work:

```bash
npm run compile:scss
```

3. Open `index.html` with your preferred local server or browser.

## Structure

```text
assets/
  projects/        # screenshots pulled from project repositories
css/
  style.css
sass/
  abstracts/
  base/
  components/
  pages/
index.html
project-1.html
project-2.html
project-3.html
index.js
```

## Notes

- The case-study pages are ready for inline YouTube embeds. Add a video id to the project video button markup when a walkthrough is published.
- Live demos are intentionally labeled as work in progress until deployment and polish are ready.
