'use strict';
const sharp = require('sharp');
// normal resize
const doResize = (file, size, newPath) => {
  return sharp(file).resize(size).toFile(newPath).then((data) => {
    console.log(data);
    return data;
  }).
      catch((err) => { console.log(err); });
};

module.exports =
    {
      doResize: doResize,
    };
