var fs = require('fs');
var gulp = require('gulp');
var header = require('gulp-header');
var footer = require('gulp-footer');
var marked = require('gulp-marked');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./src/css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./_site/css'));
});

gulp.task('html', function () {
  gulp.src('./src/html/**/*.md')
    .pipe(marked({}))
    .pipe(header(fs.readFileSync('./src/_header.html', 'utf8')))
    .pipe(footer(fs.readFileSync('./src/_footer.html', 'utf8')))
    .pipe(gulp.dest('./_site/'))
});

gulp.task('index', ['html'], function () {
  gulp.src('./html/index.html')
    .pipe(gulp.dest('./'))
})

gulp.task('default', ['html', 'sass']);
