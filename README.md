# Himanshu Jangid - Personal Portfolio Website

This is the personal portfolio website of Himanshu Jangid, showcasing professional experience, skills, projects, and GitHub activity statistics.

## Project Overview

The website consists of two main pages:
- A professional resume/portfolio page (`index.html`)
- A GitHub statistics visualization page (`charts.html`)

Both pages feature responsive design with dark/light mode toggle functionality.

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **CSS Framework**: Tailwind CSS for utility-first styling
- **Build Tool**: Gulp.js for task automation
- **External Libraries**:
  - jsPDF & html2canvas for PDF resume generation
  - particles.js for background effects
  - FontAwesome for icons
  - Google Fonts for typography

## Project Structure

The website is built using a simple yet effective structure:

```
himanshujangid.com/
├── src/                  # Source files
│   ├── index.html        # Main resume/portfolio page
│   └── charts.html       # GitHub statistics page
├── assets/               # Static assets
│   └── images/           # Image files
├── dist/                 # Generated output (build folder)
├── gulpfile.js           # Gulp build configuration
├── package.json          # Project dependencies
└── README.md             # Project documentation
```

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Theme Toggle**: Dynamic light/dark mode with system preference detection
- **Dynamic Content**: JavaScript-populated content from structured data
- **GitHub Integration**: 
  - Live GitHub repository display
  - Contribution activity graphs
  - Language statistics
  - GitHub trophies and achievements
- **Resume Features**:
  - ATS-friendly PDF generation
  - Interactive skill visualization
  - Structured education and experience sections
- **Performance Optimized**:
  - Minified HTML, CSS, and JavaScript
  - Optimized image loading
  - Efficient DOM rendering
- **SEO Optimized**:
  - Structured data (JSON-LD)
  - Proper meta tags
  - Semantic HTML structure
  - Automatically generated sitemap

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Setup

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development Workflow

Start the development server with live reload:

```bash
npx gulp watch
```

This will start a local server at http://localhost:3000 that refreshes when you make changes.

### Building for Production

Build the site for production:

```bash
npx gulp build
```

The output will be in the `dist/` directory, ready for deployment.

## Gulp Tasks

The project uses Gulp for automating various development tasks:

- `html`: Process HTML files with partials and minification
- `css`: Minify CSS files
- `js`: Minify JavaScript files
- `assets`: Copy assets to dist folder
- `generateSitemap`: Create sitemap.xml for SEO
- `copyFiles`: Copy configuration files like robots.txt
- `build`: Run all production build tasks
- `watch`: Start development server with live reload

## Key Files

- `index.html`: Main portfolio and resume page with dynamic content generation
- `charts.html`: GitHub statistics visualization with API integration
- `gulpfile.js`: Build configuration and task automation

## Deployment

The website is designed to be deployed to any static hosting service. Simply:

1. Run `npx gulp build`
2. Copy the contents of the `dist/` directory to your web server or hosting service

## License

This project is licensed under the ISC License. 