var del = require('del');
var electronServer = require('electron-connect').server;
var gulp = require('gulp');
var gulpif = require('gulp-if');
var install = require('gulp-install');
var packager = require('electron-packager');
var runSequence = require('run-sequence');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var useref = require('gulp-useref');

var buildDir = './build';
var releaseDir = './dist';

function isForProduction() {
  return process.env.NODE_ENV = 'production';
}

gulp.task('clean', function () {
  return del([buildDir, releaseDir]);
});

gulp.task('install', function () {
  return gulp.src('./package.json')
    .pipe(gulp.dest(buildDir))
    .pipe(install({ production: true }));
});

gulp.task('images', function () {
  return gulp.src('./src/images/**/*')
    .pipe(gulp.dest(buildDir + '/images'));
})

gulp.task('scripts', function () {
  return gulp.src('./src/scripts/**/*')
    .pipe(gulp.dest(buildDir + '/scripts'));
});

gulp.task('sass', function () {
  return gulp.src('./src/style/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(buildDir));
});

gulp.task('copyindex', function () {
  return gulp.src([ './src/index.html', './src/main.js'])
    .pipe(gulpif(isForProduction(), useref()))
    .pipe(gulp.dest(buildDir));
});

gulp.task('package', ['darwin'].map(function (platform) {
  var taskName = 'build:' + platform;

  gulp.task(taskName, ['compile'], function (done) {
    packager({
      dir: buildDir,
      name: 'Chromecaster',
      arch: 'x64',
      platform: platform,
      out: releaseDir + '/' + platform,
      version: '0.33.0'
    }, function (err) {
      done();
    });
  });

  return taskName;
}));

gulp.task('serve', ['compile'], function () {
  var electron = electronServer.create({ path: buildDir });
  electron.start();
  gulp.watch('./src/scripts/**/*', ['scripts']);
  gulp.watch('./src/style/**/*', ['sass']);
  gulp.watch('./src/images/**/*', ['images']);
  gulp.watch(['./src/index.html', './src/index.js'], ['copyindex']);
  gulp.watch(buildDir + '/**/*', electron.reload);
});

gulp.task('build', function () {
  runSequence('clean', 'package')
})

gulp.task('compile', ['copyindex', 'sass', 'scripts', 'images', 'install']);
gulp.task('default', ['serve']);
