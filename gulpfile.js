// gulpfile.js

var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('js', function () {
  return browserify('./src/main.js')
  .transform(babelify, {
    presets: ['es2015']
  })
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./build'))
});

var sass = require('gulp-sass')

gulp.task('styles', function () {
  return gulp.src('./styles/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build'));
});

gulp.task('default', ['js', 'styles']);

gulp.task('watch', function () {
  return gulp.watch('./src/**/*.{js,scss}', ['default']);
});