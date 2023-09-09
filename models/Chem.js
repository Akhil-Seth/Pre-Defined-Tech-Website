const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'Chem.json'
);

const getImages = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Chem {
  constructor(  imageUrl , title) {
    this.imgUrl = imageUrl;
    this.title = title;
  }

  save() {
    getImages(photos => {
        this.id = Math.random().toString();
        photos.push(this);
        fs.writeFile(p, JSON.stringify(photos), err => {
          console.log(err);
        });
    });
  }

  static deleteById(id) {
    getImages(photos => {
      const photo = photos.find(prod => prod.id === id);
      const updatedPhotos = photos.filter(prod => prod.id !== id);
      fs.writeFile(p, JSON.stringify(updatedPhotos), err => {
        if (err) {
          console.log(err);
        }
      });
    });
  }

  static fetchAll(cb) {
    getImages(cb);
  }

  // static findById(id, cb) {
  //   getProductsFromFile(products => {
  //     const product = products.find(p => p.id === id);
  //     cb(product);
  //   });
  // }
};