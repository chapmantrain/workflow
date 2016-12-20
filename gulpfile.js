var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');
var compass = require('gulp-compass');

var jsSources = [
  'components/scripts/test01.js',
  'components/scripts/test02.js'
];

var sassSources = [
  'components/sass/style.scss'
];

  gutil.log("Hello World!");


gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(browserify())
    .pipe(gulp.dest('builds/development/js'));
});

gulp.task('compass', function() {
  gulp.src(sassSources)
    .pipe(compass({
      sass: 'components/sass',
      image: 'builds/development/images',
      style: 'expanded'
    }))
});

gulp.task("default", ['compass', 'js']);

gulp.task('watch', function() {
  gulp.watch(sassSources)
});