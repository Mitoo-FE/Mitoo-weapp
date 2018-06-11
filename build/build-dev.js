var gulp = require('gulp');
var less = require('gulp-less');
var rename = require('gulp-rename');
var watch = require('gulp-watch');

gulp.task('compile-less', function() {
    return watch('*.less', function() {
    	gulp.src('./*.less')
		.pipe(less())
		.pipe(rename({extname: '.wxss'}))
        	.pipe(gulp.dest('./'))
	});
})

gulp.task('compile-js', () => {
    return gulp.src(['../src/**/*.js'])
        .pipe(gulp.dest('../examples/dist/'));
});

gulp.task('compile-json', () => {
    return gulp.src(['../src/**/*.json'])
        .pipe(gulp.dest('../examples/dist/'));
});

gulp.task('compile-wxml', () => {
    return gulp.src(['../src/**/*.wxml'])
        .pipe(gulp.dest('../examples/dist/'));
});

gulp.task('auto', () => {
    gulp.watch('../src/**/*.less', ['compile-css']);
    gulp.watch('../src/**/*.js', ['compile-js']);
    gulp.watch('../src/**/*.json', ['compile-json']);
    gulp.watch('../src/**/*.wxml', ['compile-wxml']);
});

gulp.task('default', ['compile-less', 'compile-js', 'compile-json', 'compile-wxml', 'auto']);
