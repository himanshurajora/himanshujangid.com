# Himanshu Jangid - Personal Portfolio Website

This is the personal portfolio website of Himanshu Jangid, showcasing his professional experience, skills, and projects.

## Project Structure

The website is built using HTML, CSS, and JavaScript with Tailwind CSS for styling. Gulp is used as a build tool to process HTML partials, minify CSS and JavaScript, and provide a development server.

### Directory Structure

- `src/`: Source files
  - `partials/`: Reusable HTML components
  - `css/`: CSS files for page-specific styles
  - `js/`: JavaScript files
- `dist/`: Generated output files (created by Gulp)
- `assets/`: Images and other static assets

## Features

- Responsive design with dark/light mode
- Interactive GitHub statistics and charts
- Resume viewing and downloading functionality
- Automatic sitemap generation
- SEO optimized with meta tags and structured data

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

### Development Server

Run the development server which will watch for changes and reload the browser:

```bash
npm run dev
```

This will start a local server at http://localhost:3000

### Building for Production

To build the site for production:

```bash
npm run build
```

The output will be in the `dist/` directory. This process:
- Minifies HTML, CSS, and JavaScript
- Processes HTML templates
- Copies assets
- Generates a sitemap automatically

## Gulp Tasks

The site uses several Gulp tasks to automate the build process:

- `gulp html` - Process HTML files
- `gulp css` - Process and minify CSS files
- `gulp js` - Process and minify JavaScript files
- `gulp assets` - Copy assets to dist folder
- `gulp sitemap` - Generate the sitemap.xml file
- `gulp build` - Run all tasks for production
- `gulp watch` - Run build and watch for changes

## Structure

### HTML Structure

The website includes:

- `index.html` - Main resume/portfolio page
- `charts.html` - GitHub statistics and charts page

### CSS Organization

- Common styles are included in the head
- Tailwind CSS is used for styling components

## Deployment

The website is designed to be deployed to any static hosting service. Simply copy the contents of the `dist/` directory to your web server.

## License

This project is licensed under the ISC License. 