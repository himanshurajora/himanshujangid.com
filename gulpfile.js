const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const browserSync = require('browser-sync').create();
const sitemap = require('gulp-sitemap');

// HTML task - process HTML files with partials
function html() {
  return gulp.src(['./src/*.html', '!./src/partials/**'])
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(htmlmin({ 
      collapseWhitespace: true,
      removeComments: true 
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
}

// CSS task - copy and minify CSS files
function css() {
  return gulp.src('./src/css/**/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
}

// JavaScript task - copy and minify JS files
function js() {
  return gulp.src('./src/js/**/*.js')
    .pipe(terser())
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.stream());
}

// Assets task - copy assets to dist
function assets() {
  return gulp.src('./assets/**/*')
    .pipe(gulp.dest('./dist/assets'));
}

// Generate sitemap
function generateSitemap() {
  return gulp.src(['./dist/**/*.html', '!./dist/404.html'])
    .pipe(sitemap({
      siteUrl: 'https://himanshujangid.com',
      changefreq: 'monthly',
      priority: function(siteUrl, loc, entry) {
        // Set priorities based on path depth
        if (loc === '/index.html' || loc === '/') return 1.0;
        return 0.8;
      }
    }))
    .pipe(gulp.dest('./dist'));
}

// Copy task - copy miscellaneous files to dist
function copyFiles() {
  return gulp.src([
    './robots.txt'
  ])
    .pipe(gulp.dest('./dist'));
}

// Watch task
function watchFiles() {
  browserSync.init({
    server: {
      baseDir: './dist',
      serveStaticOptions: {
        extensions: ['html'] // Serve index.html when requesting a directory
      }
    },
    open: true,
    // Set this option to ensure absolute paths work correctly
    serveStatic: ['.', './dist'],
    // Set basepath as / for proper absolute path resolution
    startPath: '/'
  });

  gulp.watch('./src/**/*.html', html);
  gulp.watch('./src/css/**/*.css', css);
  gulp.watch('./src/js/**/*.js', js);
  gulp.watch('./assets/**/*', assets);
}

// Clean dist folder
function clean(cb) {
  // For simplicity, we're not implementing a full clean function here
  // You might want to add 'del' as a dependency for this
  cb();
}

// Define complex tasks
const build = gulp.series(clean, gulp.parallel(html, css, js, assets, copyFiles), generateSitemap);
const watch = gulp.series(build, watchFiles);

// Export tasks
exports.html = html;
exports.css = css;
exports.js = js;
exports.assets = assets;
exports.clean = clean;
exports.sitemap = generateSitemap;
exports.build = build;
exports.watch = watch;
exports.default = build; 