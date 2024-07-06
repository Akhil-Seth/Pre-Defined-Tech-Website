const fs = require('fs-extra');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'Blog.json'
);

const getImages = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File does not exist, return empty array
        cb([]);
      } else {
        // Other errors
        console.error('Error reading file:', err);
        cb([]);
      }
    } else {
      try {
        const data = JSON.parse(fileContent);
        cb(data);
      } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
        cb([]);
      }
    }
  });
};

module.exports = class Blog {
  constructor( imgUrl ,imgUrl1 , imgUrl2 , title , desc , conn) {
    this.imgUrl = imgUrl;
    this.imgUrl1 = imgUrl1;
    this.imgUrl2 = imgUrl2;
    this.title = title;
    this.desc = desc;
    this.conn = conn;
  }

  save() {
    getImages((photos) => {
      this.id = Math.random().toString();
      photos.push(this);
      fs.writeFile(p, JSON.stringify(photos), (err) => {
        if (err) {
          console.error('Error writing file:', err);
        }
      });
    });
  }

  static deleteById(id) {
    getImages((photos) => {
      const updatedPhotos = photos.filter((prod) => prod.id !== id);
      fs.writeFile(p, JSON.stringify(updatedPhotos), (err) => {
        if (err) {
          console.error('Error writing file:', err);
        }
      });
    });
  }

  static fetchAll(cb) {
    getImages(cb);
  }
};
