var gulp = require('gulp');
var styl = require('gulp-stylus');
var rename = require('gulp-rename');
var watch = require('gulp-watch');

gulp.task('compile-styl', function() {
    return watch('*.styl', function() {
    	gulp.src('../src/**/*.styl')
		.pipe(styl())
		.pipe(rename({extname: '.wxss'}))
        	.pipe(gulp.dest('../demo/components/'))
	});
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
    gulp.watch('../src/**/*.styl', ['compile-css']);
    gulp.watch('../src/**/*.js', ['compile-js']);
    gulp.watch('../src/**/*.json', ['compile-json']);
    gulp.watch('../src/**/*.wxml', ['compile-wxml']);
});

gulp.task('default', ['compile-styl', 'compile-js', 'compile-json', 'compile-wxml', 'auto']);
