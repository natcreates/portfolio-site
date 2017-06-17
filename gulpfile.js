var gulp = require('gulp');
var less = require('gulp-less'); // Compile LESS
var plumber = require('gulp-plumber'); // Error handling
var notify = require('gulp-notify'); // Error messages
var autoprefixer = require('gulp-autoprefixer'); // Vendor prefixes

var plumberErrorHandler = { errorHandler: notify.onError({
 
    title: 'Gulp',
 
    message: 'Error: <%= error.message %>'
 
  })
 
};

gulp.task('less', function () {
 
    gulp.src('css/*.less')

    	.pipe(plumber(plumberErrorHandler))
 
        .pipe(less())

        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4')) // Prefixer applied after Sass
 
        .pipe(gulp.dest('.'))
 
});

// gulp.task('img', function() {
 
//   gulp.src('img/src/*.{png,jpg,gif}')

//  	.pipe(plumber(plumberErrorHandler))
 
//     .pipe(imagemin({
 
//       optimizationLevel: 7,
 
//       progressive: true
 
//     }))
 
//     .pipe(gulp.dest('img'))
 
// });

gulp.task('default', ['less']); // Default Gulp tasks



// Go to http://code.tutsplus.com/tutorials/using-gulp-for-wordpress-automation--cms-23081*/

// Other Gulp resources:
// http://code.tutsplus.com/tutorials/managing-your-build-tasks-with-gulpjs--net-36910
// http://webdesign.tutsplus.com/tutorials/the-command-line-for-web-design-automation-with-gulp--cms-23642
//https://scotch.io/tutorials/a-quick-guide-to-using-livereload-with-gulp
//http://www.sitepoint.com/introduction-gulp-js/
// Look into using Browsersync - need to reinstall Python 2
// See http://www.browsersync.io/docs/gulp/