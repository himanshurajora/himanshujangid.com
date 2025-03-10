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

The output will be in the `dist/` directory.

## Structure

### HTML Partials

The website uses a partials system to avoid code duplication. Common elements like the header, navigation, and footer are stored in the `src/partials/` directory and included in the main HTML files.

- `head.html`: Contains the head element with meta tags, CSS imports, etc.
- `nav.html`: The navigation bar
- `footer.html`: The footer section
- `scripts.html`: Common JavaScript code

### CSS Organization

- Common styles are included in the head partial
- Page-specific styles are in the `src/css/` directory

## Deployment

The website is designed to be deployed to any static hosting service. Simply copy the contents of the `dist/` directory to your web server.

## License

This project is licensed under the ISC License. 