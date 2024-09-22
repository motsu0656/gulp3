const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss')  // SCSSファイルの読み込み元
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));  // コンパイル後の出力先
});

gulp.task('default', gulp.series('sass'));
