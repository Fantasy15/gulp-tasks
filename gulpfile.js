var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

//CSS Sprites
gulp.task('sprite', function () {
  var spriteData = gulp.src('images/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));
  return spriteData.pipe(gulp.dest('./'));
});