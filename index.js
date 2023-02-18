const fs = require('fs');

fs.writeFileSync("./script.js", 'let lodash = require("lodash");let arr = [1, 34, 6, 5, 7];console.log(lodash.sum(arr));console.log(lodash.reverse(arr));console.log(lodash.sortBy(arr));');
fs.writeFileSync("./index.html", '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport"content="width=device-width, initial-scale=1.0"><title>Document</title></head><body></body></html>');
fs.mkdirSync('./styles', () => {})
fs.writeFileSync("./styles/style.css", '* {padding: 0; margin: 0; box-sizing: border-box;}')


setTimeout(() => {
    fs.unlinkSync('./index.html', () => { })
  }, 1000)

  setTimeout(() => {
    fs.unlinkSync('./styles/style.css', () => { })
  }, 2000)

  setTimeout(() => {
    fs.rmdir('./styles', () => { })
  }, 3000)


