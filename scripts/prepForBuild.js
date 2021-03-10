const fs = require('fs'),
 bundle = 'auro-back-to-top__bundled.js',
 indexFile = './build/index.html',

// File destination.txt will be created or overwritten by default.
 copyFiles = async function() {
  fs.copyFile(`./dist/${bundle}`, `./build/${bundle}`, (err) => {
    if (err) {
 throw err;
}
    console.log(`${bundle} was copied to ./build dir`);
  });

  fs.copyFile(`./demo/css/style.css`, `./build/css/style.css`, (err) => {
    if (err) {
 throw err;
}
    console.log(`CSS was copied to ./build dir`);
  });
}

// Edit string in new index.html file
fs.readFile(indexFile, 'utf8', (err, data) => {
  copyFiles();

  if (err) {
    return console.log(err);
  }

  const element = data.replace(`../src/auro-back-to-top.js`, `auro-back-to-top__bundled.js`);

  fs.writeFile(indexFile, element, 'utf8', (err) => {
     if (err) {
 return console.log(err);
}
  });
});