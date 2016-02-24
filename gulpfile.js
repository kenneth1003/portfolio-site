var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
var rename = require('gulp-rename');

gulp.task('default', ['serve']);

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    //gulp.watch("sass/*.scss", ['sass']);
    gulp.watch("sass/**/*.scss", ['sass']);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("sass/*.scss")
        .pipe(sass())
        .pipe(uglifycss())
        .pipe(gulp.dest("public/css"));
});

