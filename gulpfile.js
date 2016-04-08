var gulp        = require('gulp'),
    uglify      = require('gulp-uglify'),
    rename      = require('gulp-rename'),
    header      = require('gulp-header');

var pkg = require('./package.json');

var banner = [
  '/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @author <%= pkg.author %>',
  ' * @version v<%= pkg.version %>',
  ' */',
  ''
].join('\n');


gulp.task('build', function() {
    return gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(
        header(
            banner, {
                pkg: pkg
            }
        )
    )
    .pipe(gulp.dest('dist'));
});