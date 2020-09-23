const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss into css
function style() { 
  // 1. Locate the scss file
  return gulp.src('./scss/**/*.scss')
  // 2. Pass file through SASS compiler
    .pipe(sass())
  // 3. Specify location to save compiled css.
    .pipe(gulp.dest('./css'))
  // 4. Stream to browsers
    .pipe(browserSync.stream());
}

function watch() { 
  browserSync.init({ 
    server: { baseDir: './'
    }
  });
  // 4a. execute style() whever scss or html files are changed
  gulp.watch('./scss/**/*.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;