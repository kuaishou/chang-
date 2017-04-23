/*
* @Author: Your Name
* @Date:   2017-04-04 10:22:31
* @Last Modified by:   Your Name
* @Last Modified time: 2017-04-04 11:53:16
*/

'use strict';

var gulp = require('gulp');
var less = require('gulp-less');


gulp.task('copy', function() {
  // 将你的默认的任务代码放在这
  //console.log('hello')
  gulp.src('demojs.html')
  .pipe(gulp.dest('de/'));

});
gulp.task('dist', function() {
  // 将你的默认的任务代码放在这
  //console.log('hello')
  gulp.watch('03 仿网易轮播图/demojs.html',['copy']);

});

gulp.task('style', function() {
  gulp.src('*.less')
    .pipe(less()) // 该环节过后就是CSS
    .pipe(gulp.dest('de/'));
});


var browserSync = require('browser-sync').create();

// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});