const gulp = require('gulp'),
 shell = require('gulp-shell'),
 clean = require('gulp-clean'),
 htmlreplace = require('gulp-html-replace'),
 runSequence = require('run-sequence'),
 Builder = require('systemjs-builder'),
 builder = new Builder('', 'src/systemjs.config.js'),
 sass = require('gulp-sass');

//var bundleHash = new Date().getTime();
const bundleHash = 'app';
const mainBundleName = bundleHash + '.main.bundle.js';
const vendorBundleName = bundleHash + '.vendor.bundle.js';

// This is main task for production use
gulp.task('dist', function(done) {
  runSequence('clean', 'compile_ts', 'bundle', 'copy_assets', function() {
    done();
  });
});

gulp.task('sass', function () {
  return gulp.src('./src/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/styles/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/styles/*.scss', ['sass']);
});

gulp.task('bundle', ['sass', 'bundle:vendor', 'bundle:app'], function () {
  return gulp.src('index.html')
    .pipe(htmlreplace({
      'app': mainBundleName,
      'vendor': vendorBundleName
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('bundle:vendor', function () {
  return builder
    .buildStatic('src/app/vendor.js', './dist/' + vendorBundleName)
    .catch(function (err) {
      console.log('Vendor bundle error');
      console.log(err);
    });
});

gulp.task('bundle:app', function () {
  return builder
    .buildStatic('src/main.js', './dist/' + mainBundleName)
    .catch(function (err) {
      console.log('App bundle error');
      console.log(err);
    });
});

gulp.task('compile_ts', ['clean:ts'], shell.task([
  'tsc'
]));

gulp.task('copy_assets', function() {
  return gulp.src(['assets/**/*'], {base:"."})
    .pipe(gulp.dest('./dist'));
});

gulp.task('clean', ['clean:ts', 'clean:dist']);

gulp.task('clean:dist', function () {
  return gulp.src(['./dist'], {read: false})
    .pipe(clean());
});

gulp.task('clean:ts', function () {
  return gulp.src(['./app/**/*.js', './app/**/*.js.map'], {read: false})
    .pipe(clean());
});
