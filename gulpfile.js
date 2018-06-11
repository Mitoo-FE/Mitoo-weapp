var gulp = require('gulp');
var less = require('gulp-less');
var rename = require('gulp-rename');
var watch = require('gulp-watch');

gulp.task('less', function() {
    return watch('*.less', function() {
    	gulp.src('./*.less')
		.pipe(less())
		.pipe(rename({extname: '.wxss'}))
        	.pipe(gulp.dest('./'))
	});
})
