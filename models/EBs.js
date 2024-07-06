// const fs = require('fs');
// const path = require('path');

// const p = path.join(
//   path.dirname(process.mainModule.filename),
//   'data',
//   'EBs.json'
// );

// const getImages = cb => {
//   fs.readFile(p, (err, fileContent) => {
//     if (err) {
//       cb([]);
//     } else {
//       cb(JSON.parse(fileContent));
//     }
//   });
// };

// module.exports = class EBs {
//   constructor( nameFA , imgFA , LinkFA , instaFA , messFA , namePre , imgPre , LinkPre , instaPre , messPre ,nameVpre , imgVpre , LinkVpre , instaVpre , messVpre ,nameGRH , imgGRH , LinkGRH , instaGRH , messGRH ,nameSC , imgSC , LinkSC , instaSC , messSC ,nameTS , imgTS , LinkTS , instaTS , messTS ,nameCEC , imgCEC , LinkCEC , instaCEC , messCEC , nameDH , imgDH , LinkDH , instaDH , messDH , nameCH , imgCH , LinkCH , instaCH , messCH ,nameWH , imgWH , LinkWH , instaWH , messWH ,nameKC , imgKC , LinkKC , instaKC , messKC ,nameSMC , imgSMC , LinkSMC , instaSMC , messSMC ,nameDC , imgDC , LinkDC , instaDC , messDC ,nameSPC , imgSPC , LinkSPC , instaSPC , messSPC) {
//     this.nameFA = nameFA;
//     this.imgFA = imgFA;
//     this.linkFA = LinkFA;
//     this.instaFA = instaFA;
//     this.messFA = messFA;
//     this.namePre = namePre;
//     this.imgPre = imgPre;
//     this.linkPre = LinkPre;
//     this.instaPre = instaPre;
//     this.messPre = messPre;
//     this.nameVpre = nameVpre;
//     this.imgVpre = imgVpre;
//     this.linkVpre = LinkVpre;
//     this.instaVpre = instaVpre;
//     this.messVpre = messVpre;
//     this.nameGRH = nameGRH;
//     this.imgGRH = imgGRH;
//     this.linkGRH = LinkGRH;
//     this.instaGRH = instaGRH;
//     this.messGRH = messGRH;
//     this.nameSC = nameSC;
//     this.imgSC = imgSC;
//     this.linkSC = LinkSC;
//     this.instaSC = instaSC;
//     this.messSC = messSC;
//     this.nameTS = nameTS;
//     this.imgTS = imgTS;
//     this.linkTS = LinkTS;
//     this.instaTS = instaTS;
//     this.messTS = messTS;
//     this.nameCEC = nameCEC;
//     this.imgCEC = imgCEC;
//     this.linkCEC = LinkCEC;
//     this.instaCEC = instaCEC;
//     this.messCEC = messCEC;
//     this.nameDH = nameDH;
//     this.imgDH = imgDH;
//     this.linkDH = LinkDH;
//     this.instaDH = instaDH;
//     this.messDH = messDH;
//     this.nameCH = nameCH;
//     this.imgCH = imgCH;
//     this.linkCH = LinkCH;
//     this.instaCH = instaCH;
//     this.messCH = messCH;
//     this.nameWH = nameWH;
//     this.imgWH = imgWH;
//     this.linkWH = LinkWH;
//     this.instaWH = instaWH;
//     this.messWH = messWH;
//     this.nameWH = nameWH;
//     this.imgWH = imgWH;
//     this.linkWH = LinkWH;
//     this.instaWH = instaWH;
//     this.messWH = messWH;
//     this.nameKC = nameKC;
//     this.imgKC = imgKC;
//     this.linkKC = LinkKC;
//     this.instaKC = instaKC;
//     this.messKC = messKC;
//     this.nameSMC = nameSMC;
//     this.imgSMC = imgSMC;
//     this.linkSMC = LinkSMC;
//     this.instaSMC = instaSMC;
//     this.messSMC = messSMC;
//     this.nameDC = nameDC;
//     this.imgDC = imgDC;
//     this.linkDC = LinkDC;
//     this.instaDC = instaDC;
//     this.messDC = messDC;
//     this.nameSPC = nameSPC;
//     this.imgSPC = imgSPC;
//     this.linkSPC = LinkSPC;
//     this.instaSPC = instaSPC;
//     this.messSPC = messSPC;
//   }

//   save() {
//     getImages(photos => {
//         this.id = Math.random().toString();
//         photos.push(this);
//         fs.writeFile(p, JSON.stringify(photos), err => {
//           console.log(err);
//         });
//     });
//   }

//   static deleteById(id) {
//     getImages(photos => {
//       const photo = photos.find(prod => prod.id === id);
//       const updatedPhotos = photos.filter(prod => prod.id !== id);
//       fs.writeFile(p, JSON.stringify(updatedPhotos), err => {
//         if (err) {
//           console.log(err);
//         }
//       });
//     });
//   }

//   static fetchAll(cb) {
//     getImages(cb);
//   }

//   // static findById(id, cb) {
//   //   getProductsFromFile(products => {
//   //     const product = products.find(p => p.id === id);
//   //     cb(product);
//   //   });
//   // }
// };
const fs = require('fs-extra');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'Ebs.json'
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

module.exports = class EBs {
  constructor( nameFA , imgFA , LinkFA , instaFA , messFA , namePre , imgPre , LinkPre , instaPre , messPre ,nameVpre , imgVpre , LinkVpre , instaVpre , messVpre ,nameGRH , imgGRH , LinkGRH , instaGRH , messGRH ,nameSC , imgSC , LinkSC , instaSC , messSC ,nameTS , imgTS , LinkTS , instaTS , messTS ,nameCEC , imgCEC , LinkCEC , instaCEC , messCEC , nameDH , imgDH , LinkDH , instaDH , messDH , nameCH , imgCH , LinkCH , instaCH , messCH ,nameWH , imgWH , LinkWH , instaWH , messWH ,nameKC , imgKC , LinkKC , instaKC , messKC ,nameSMC , imgSMC , LinkSMC , instaSMC , messSMC ,nameDC , imgDC , LinkDC , instaDC , messDC ,nameSPC , imgSPC , LinkSPC , instaSPC , messSPC) {
    this.nameFA = nameFA;
    this.imgFA = imgFA;
    this.linkFA = LinkFA;
    this.instaFA = instaFA;
    this.messFA = messFA;
    this.namePre = namePre;
    this.imgPre = imgPre;
    this.linkPre = LinkPre;
    this.instaPre = instaPre;
    this.messPre = messPre;
    this.nameVpre = nameVpre;
    this.imgVpre = imgVpre;
    this.linkVpre = LinkVpre;
    this.instaVpre = instaVpre;
    this.messVpre = messVpre;
    this.nameGRH = nameGRH;
    this.imgGRH = imgGRH;
    this.linkGRH = LinkGRH;
    this.instaGRH = instaGRH;
    this.messGRH = messGRH;
    this.nameSC = nameSC;
    this.imgSC = imgSC;
    this.linkSC = LinkSC;
    this.instaSC = instaSC;
    this.messSC = messSC;
    this.nameTS = nameTS;
    this.imgTS = imgTS;
    this.linkTS = LinkTS;
    this.instaTS = instaTS;
    this.messTS = messTS;
    this.nameCEC = nameCEC;
    this.imgCEC = imgCEC;
    this.linkCEC = LinkCEC;
    this.instaCEC = instaCEC;
    this.messCEC = messCEC;
    this.nameDH = nameDH;
    this.imgDH = imgDH;
    this.linkDH = LinkDH;
    this.instaDH = instaDH;
    this.messDH = messDH;
    this.nameCH = nameCH;
    this.imgCH = imgCH;
    this.linkCH = LinkCH;
    this.instaCH = instaCH;
    this.messCH = messCH;
    this.nameWH = nameWH;
    this.imgWH = imgWH;
    this.linkWH = LinkWH;
    this.instaWH = instaWH;
    this.messWH = messWH;
    this.nameWH = nameWH;
    this.imgWH = imgWH;
    this.linkWH = LinkWH;
    this.instaWH = instaWH;
    this.messWH = messWH;
    this.nameKC = nameKC;
    this.imgKC = imgKC;
    this.linkKC = LinkKC;
    this.instaKC = instaKC;
    this.messKC = messKC;
    this.nameSMC = nameSMC;
    this.imgSMC = imgSMC;
    this.linkSMC = LinkSMC;
    this.instaSMC = instaSMC;
    this.messSMC = messSMC;
    this.nameDC = nameDC;
    this.imgDC = imgDC;
    this.linkDC = LinkDC;
    this.instaDC = instaDC;
    this.messDC = messDC;
    this.nameSPC = nameSPC;
    this.imgSPC = imgSPC;
    this.linkSPC = LinkSPC;
    this.instaSPC = instaSPC;
    this.messSPC = messSPC;
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
