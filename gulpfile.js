var gulp = require('gulp');
var marked = require('gulp-marked');

gulp.task('html', function() {
  gulp.src('./src/*.md')
    .pipe(marked({}))
    .pipe(gulp.dest('./html/'))
});

gulp.task('default', ['html']);
