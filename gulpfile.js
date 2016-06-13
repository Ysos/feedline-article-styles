var del = require('del');
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');

gulp.task('default', function() {
    return gulp.src('./feedline.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('styles.css'))
        .pipe(gulp.dest('./dist'))
        .pipe(cleanCSS())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('clean', function() {
    return del(['./dist']);
});

gulp.task('watch', function() {
    gulp.watch('./**/*.scss', ['default']);
});
