var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify-css');

gulp.task('sass', function () {
  gulp.src('assets/sass/main.scss')
    .pipe(sass({
      style: 'expanded'
    }))
    .pipe(minify())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', function () {
  gulp.watch('assets/sass/**.*', ['default']);
});

gulp.task('default', ['sass']);
