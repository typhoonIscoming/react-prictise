const path = require('path')
const gulp = require('gulp');
const spritesmith = require('gulp.spritesmith');
const fs = require('fs')
const del = require('del')
const mv = require('mv')
const mkdirp = require('mkdirp')
const rmfr = require('rmfr')

// 待处理的icon图片根目录
const ICON_SOURCE = path.resolve(__dirname, 'src/assets/mine/')
// 生成的sprite图片根目录
const SPRITE_DEST = path.resolve(__dirname, 'src/assets/sprites/')
// 生成的scss文件根根目录
const SPRITE_SCSS = path.resolve(__dirname, 'src/assets/css/')

if(!fs.existsSync(SPRITE_DEST)) {
  mkdirp.sync(SPRITE_DEST)
}
if(!fs.existsSync(SPRITE_SCSS)) {
  mkdirp.sync(SPRITE_SCSS)
}

gulp.task('default', function () {
  readDirSync(ICON_SOURCE)

  function readDirSync(dir) {
    const files = fs.readdirSync(dir)
    const pngs = files.filter(file => /\.png/.test(file))
    if(pngs.length >= 1) {
      // 获取当前文件相对于ICON_SOURCE的路径
      const relativePath = path.relative(ICON_SOURCE, dir)
      const spirteDest = path.resolve(SPRITE_DEST, relativePath)
      // scss文件中引用的sprite图片地址
      const scssImgDest = path.relative(__dirname, spirteDest).replace(/^src\//g, '~/')
      // const scssImgDest = path.relative(__dirname, spirteDest).replace(/src/g, '~')
      // scss文件存放的地址
      const scssDest = path.resolve(SPRITE_SCSS, relativePath)
      gulp.src(`${dir}/*.png`)
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.scss',
            padding: 4,
            imgPath: `${scssImgDest}/sprite.png`,
            cssTemplate: 'gulp_templates/scss.2x.template.handlebars',
        }))
        .pipe(gulp.dest(spirteDest))
        .on('finish', () => {
          const tmpSrc = path.join(spirteDest, 'sprite.scss')
          const tmpDst = path.join(scssDest, 'sprite.scss')
          if(!fs.existsSync(scssDest)) {
            mkdirp.sync(scssDest)
          }
          fs.renameSync(tmpSrc, tmpDst)
        })
    }

    files.forEach(function(ele){
      const curPath = `${dir}/${ele}`
      const info = fs.statSync(curPath)
      if(info.isDirectory()){
        return readDirSync(curPath)
      }
    })
  }
})

gulp.task('clearSprite', function () {
  rmfr(SPRITE_DEST)
  rmfr(SPRITE_SCSS)
})
