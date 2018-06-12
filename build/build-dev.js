const gulp = require('gulp');
const styl = require('gulp-stylus');
const rename = require('gulp-rename');

gulp.task('compile-styl', function() {

    // const f = filter(['../src/styles/*']);

    return gulp.src('../src/**/*.styl')
        .pipe(styl())
        // .pipe(f)
    return gulp.src(['../src/**/*.styl', '!../src/styles/default.styl'])
        .pipe(styl())
        .pipe(rename({extname: '.wxss'}))
        .pipe(gulp.dest('../demo/components/'))
})

gulp.task('compile-js', () => {
    return gulp.src(['../src/**/*.js'])
        .pipe(gulp.dest('../demo/components/'));
});

gulp.task('compile-json', () => {
    return gulp.src(['../src/**/*.json'])
        .pipe(gulp.dest('../demo/components/'));
});

gulp.task('compile-wxml', () => {
    return gulp.src(['../src/**/*.wxml'])
        .pipe(gulp.dest('../demo/components/'));
});

gulp.task('auto', () => {
    gulp.watch('../src/**/*.styl', ['compile-styl']);
    gulp.watch('../src/**/*.js', ['compile-js']);
    gulp.watch('../src/**/*.json', ['compile-json']);
    gulp.watch('../src/**/*.wxml', ['compile-wxml']);
});

gulp.task('default', ['compile-styl', 'compile-js', 'compile-json', 'compile-wxml', 'auto']);
