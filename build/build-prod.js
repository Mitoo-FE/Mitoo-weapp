const gulp = require('gulp');
const styl = require('gulp-stylus');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify-es').default;
const minify = require('gulp-minify-css');

gulp.task('compile-styl', function() {
    return gulp.src(['../src/**/*.styl', '!../src/styles/**/*.styl'])
        .pipe(styl())
		.pipe(minify())
        .pipe(rename({extname: '.wxss'}))
        .pipe(gulp.dest('../dist/components/'))
})

gulp.task('compile-js', () => {
    return gulp.src(['../src/**/*.js'])
		.pipe(uglify())
        .pipe(gulp.dest('../dist/components/'));
});

gulp.task('compile-json', () => {
    return gulp.src(['../src/**/*.json'])
        .pipe(gulp.dest('../dist/components/'));
});

gulp.task('compile-wxml', () => {
    return gulp.src(['../src/**/*.wxml'])
        .pipe(gulp.dest('../dist/components/'));
});
gulp.task('compile-md', () => {
    return gulp.src(['../src/**/*.MD'])
        .pipe(gulp.dest('../dist/components/'));
});

gulp.task('default', ['compile-styl', 'compile-js', 'compile-json', 'compile-wxml', 'compile-md']);
