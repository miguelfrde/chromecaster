var gulp = require('gulp');
var runSequence = require('run-sequence');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var atom = require('gulp-atom');
var install = require('gulp-install');
var sass = require('gulp-sass');

gulp.task('browserify', function () {
  var bundler = browserify({
    entries: ['./src/scripts/app.js'],
    transform: [babelify]
  });
  return bundler.bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./compile'));
});

gulp.task('sass', function () {
  return gulp.src('./src/style/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./compile'));
});

gulp.task('install', function () {
  return gulp.src('./package.json')
    .pipe(gulp.dest('./compile'))
    .pipe(install({ production: true }));
});

gulp.task('copyindex', function () {
  return gulp.src([ './src/index.html', './src/index.js' ])
    .pipe(gulp.dest('./compile'));
});

gulp.task('build', function () {
  atom({
    srcPath: './compile',
    releasePath: './build',
    cachePath: './cache',
    version: 'v0.31.2',
    rebuild: false,
    platforms: ['darwin-x64']
  });
});

gulp.task('compile', ['browserify', 'copyindex', 'sass', 'install']);

gulp.task('watch-all', function () {
  gulp.watch('./src/scripts/**/*', ['browserify']);
  gulp.watch(['./src/index.html', './src/index.js'], ['copyindex']);
  gulp.watch('./src/style/**/*', ['sass']);
  gulp.watch(['./compile/**/*', '!./compile/node_modules/**/*'], ['build']);
});

gulp.task('default', runSequence('compile', 'build', 'watch-all'));
