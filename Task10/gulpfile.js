const gulp = require('gulp'),
    jasmine = require('gulp-jasmine'),
    protractor = require("gulp-protractor").protractor;

gulp.task('selenium', function () {
    gulp.src('./src/test/*Test.js')
        .pipe(protractor({
                configFile: "./conf.js"
            })
        );
});
