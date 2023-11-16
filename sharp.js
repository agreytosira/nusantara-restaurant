const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const target = path.resolve(__dirname, 'src/public/images')
const destination = path.resolve(__dirname, 'dist/images')

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination)
}

fs.readdirSync(target).forEach((image) => {
  const extension = path.extname(image)
  if (extension.toLowerCase() === '.jpg') {
    sharp(`${target}/${image}`)
      .resize(1200)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.').slice(0, -1).join('.')}-desktop.jpg`), (err) => {
        if (err) {
          console.error(err)
        }
      })

    sharp(`${target}/${image}`)
      .resize(600)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.').slice(0, -1).join('.')}-mobile.jpg`), (err) => {
        if (err) {
          console.error(err)
        }
      })

    sharp(`${target}/${image}`)
      .resize(1200)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.').slice(0, -1).join('.')}-desktop.webp`), (err) => {
        if (err) {
          console.error(err)
        }
      })

    sharp(`${target}/${image}`)
      .resize(600)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.').slice(0, -1).join('.')}-mobile.webp`), (err) => {
        if (err) {
          console.error(err)
        }
      })
  }
})
