const Ach = require('../models/Ach');
const Blog = require('../models/Blog');
const CEC = require('../models/CEC');
const Chem = require('../models/Chem');
const Content = require('../models/Content');
const Design = require('../models/Design');
const EBs = require('../models/EBs');
const JP = require('../models/JP');
const K12 = require('../models/K12');
const Manage = require('../models/Manage');
const PastEvent = require('../models/PastEvent');
const UpEvent = require('../models/UpEvent');
const Web = require('../models/Web');






























exports.getHomePage = (req, res, next) => {
  UpEvent.fetchAll(events => {
      res.render('NavBar-Items/home', {
        pageTitle: 'Akhil',
        path: '/',
        events: events
      });
    });
};

exports.getK12AdminPage = (req, res, next) => {
  UpEvent.fetchAll(events => {
  res.render('adminPages/K12-admin', {
    pageTitle: 'K12-admin',
    path: '/',
    events: events
  });
});
};

exports.getCECAdminPage = (req, res, next) => {
  UpEvent.fetchAll(events => {
  res.render('adminPages/CEC-admin', {
    pageTitle: 'CEC-admin',
    path: '/',
    events: events
  });
});
};

exports.getJPAdminPage = (req, res, next) => {
  UpEvent.fetchAll(events => {
  res.render('adminPages/JP-admin', {
    pageTitle: 'JP-admin',
    path: '/',
    events: events
  });
});
};

exports.getContentAdminPage = (req, res, next) => {
  UpEvent.fetchAll(events => {
  res.render('adminPages/JP-Content', {
    pageTitle: 'Content-admin',
    path: '/',
    events : events
  });
});
};

exports.getDesignAdminPage = (req, res, next) => {
  UpEvent.fetchAll(events => {
  res.render('adminPages/Design-admin', {
    pageTitle: 'Design-admin',
    path: '/',
    events: events
  });
});
};

exports.getManageAdminPage = (req, res, next) => {
  UpEvent.fetchAll(events => {
  res.render('adminPages/Manage-admin', {
    pageTitle: 'Manage-admin',
    path: '/',
    events:events
  });
});
};


exports.getAddK12Page = (req, res, next) => {
  UpEvent.fetchAll(events => {
  res.render('Add-Info/addK12Pics', {
    pageTitle: 'Add K12 Pics',
    path: '/',
    events : events
  });
});
};

exports.getAddCECPage = (req, res, next) => {
  UpEvent.fetchAll(events => {
  res.render('Add-Info/addCECPics', {
    pageTitle: 'Add CEC Pics',
    path: '/',
    events: events
  });
});
};

exports.getAddJPPage = (req, res, next) => {
  UpEvent.fetchAll(events => {
  res.render('Add-Info/addJPPics', {
    pageTitle: 'Add JP Pics',
    path: '/',
    events: events
  });
});
};

exports.getAddContentPage = (req, res, next) => {
  UpEvent.fetchAll(events => {
  res.render('Add-Info/addContentPics', {
    pageTitle: 'Add Content Pics',
    path: '/',
    events: events
  });
});
};

exports.getAddDesignPage = (req, res, next) => {
  UpEvent.fetchAll(events => {
  res.render('Add-Info/addDesignPics', {
    pageTitle: 'Add Design Pics',
    path: '/',
    events: events
  });
});
};

exports.getAddManagePage = (req, res, next) => {
  UpEvent.fetchAll(events => {
  res.render('Add-Info/addManagePics', {
    pageTitle: 'Add Manage Pics',
    path: '/',
    events: events
  });
});
};


exports.getDeleteK12PicPage = (req, res, next) => {
  K12.fetchAll(photos => {
    UpEvent.fetchAll(events => {
    res.render('Delete-Info/deleteK12Pics', {
      pageTitle: 'Delete K12 Pics',
      path: '/admin/EBs?search=K12#',
      events: events.reverse(),
      photos: photos.reverse()
    });
  });
});
}

exports.getDeleteCECPicPage = (req, res, next) => {
  CEC.fetchAll(photos => {
    UpEvent.fetchAll(events => {
    res.render('Delete-Info/deleteCECPics', {
      pageTitle: 'Delete CEC Pics',
      path: '/admin/EBs?search=CEC#',
      events : events ,
      photos: photos.reverse()
    });
  });
  });
}

exports.getDeleteJPPicPage = (req, res, next) => {
  JP.fetchAll(photos => {
    UpEvent.fetchAll(events => {
    res.render('Delete-Info/deleteJPPics', {
      pageTitle: 'Delete JP Pics',
      path: '/admin/EBs?search=JP#',
      events: events,
      photos: photos.reverse()
    });
  });
});
}

exports.getDeleteContentPicPage = (req, res, next) => {
  Content.fetchAll(photos => {
    UpEvent.fetchAll(events => {
    res.render('Delete-Info/deleteContentPics', {
      pageTitle: 'Delete Content Pics',
      path: '/admin/EBs?search=Content#',
      events: events.reverse(),
      photos: photos.reverse()
    });
  });
});
}

exports.getDeleteDesignPicPage = (req, res, next) => {
  Design.fetchAll(photos => {
    UpEvent.fetchAll(events => {
    res.render('Delete-Info/deleteDesignPics', {
      pageTitle: 'Delete Design Pics',
      path: '/admin/EBs?search=Design#',
      events: events.reverse(),
      photos: photos.reverse()
    });
  });
  });
}

exports.getDeleteManagePicPage = (req, res, next) => {
  Manage.fetchAll(photos => {
    UpEvent.fetchAll(events => {
    res.render('Delete-Info/deleteManagePics', {
      pageTitle: 'Delete Manage Pics',
      path: '/admin/EBs?search=Manage#',
      events: events.reverse(),
      photos: photos.reverse()
    });
  });
  });
}


exports.postDeleleK12Pic = (req , res , next) => {
  const pass = req.body.password;
  const photoId = req.body.photoId;
  if(pass === 'AkhilAkhil') {
    K12.deleteById(photoId);
  }
  res.redirect('/admin/EBs?search=K12#');
}

exports.postDeleleCECPic = (req , res , next) => {
  const pass = req.body.password;
  const photoId = req.body.photoId;
  if(pass === 'AkhilAkhil') {
    CEC.deleteById(photoId);
  }
  res.redirect('/admin/EBs?search=CEC#');
}

exports.postDeleleJPPic = (req , res , next) => {
  const pass = req.body.password;
  const photoId = req.body.photoId;
  if(pass === 'AkhilAkhil') {
    JP.deleteById(photoId);
  }
  res.redirect('/admin/EBs?search=JP#');
}

exports.postDeleleContentPic = (req , res , next) => {
  const pass = req.body.password;
  const photoId = req.body.photoId;
  if(pass === 'AkhilAkhil') {
    Content.deleteById(photoId);
  }
  res.redirect('/admin/EBs?search=Content#');
}

exports.postDeleleManagePic = (req , res , next) => {
  const pass = req.body.password;
  const photoId = req.body.photoId;
  if(pass === 'AkhilAkhil') {
    Manage.deleteById(photoId);
  }
  res.redirect('/admin/EBs?search=Manage#');
}

exports.postDeleleDesignPic = (req , res , next) => {
  const pass = req.body.password;
  const photoId = req.body.photoId;
  if(pass === 'AkhilAkhil') {
    Design.deleteById(photoId);
  }
  res.redirect('/admin/EBs?search=Design#');
}


exports.getEbsPage = async (req, res, next) => {
  const search = req.query.search;
  try {
    if (search === 'K12') {
      const photos = await new Promise((resolve, reject) => {
        K12.fetchAll(photos => {
          UpEvent.fetchAll(events => {
          resolve(photos);
          res.render('SercetPages/K12', {
            pageTitle: 'K12',
            path: '/admin/EBs?search=K12#',
            events:events.reverse(),
            photos: photos.reverse()
          });
        });
      });
      });
    }
    else if (search === 'CEC') {
      const photos = await new Promise((resolve, reject) => {
        CEC.fetchAll(photos => {
          UpEvent.fetchAll(events => {
          resolve(photos);
          res.render('SercetPages/CEC', {
            pageTitle: 'CEC',
            path: '/admin/EBs?search=K12#',
            photos: photos.reverse(),
            events: events.reverse()
          });
        });
      });
      });
    }
    else if (search === 'JP') {
      const photos = await new Promise((resolve, reject) => {
        JP.fetchAll(photos => {
          UpEvent.fetchAll(events => {
          resolve(photos);
          res.render('SercetPages/JP', {
            pageTitle: 'JP',
            path: '/admin/EBs?search=JP#',
            photos: photos.reverse(),
            events: events.reverse()
          });
        });
      });
      });
    }
    else if (search === 'Content') {
      const photos = await new Promise((resolve, reject) => {
        Content.fetchAll(photos => {
          UpEvent.fetchAll(events => {
          resolve(photos);
          res.render('SercetPages/Content', {
            pageTitle: 'Content',
            path: '/admin/EBs?search=Content#',
            photos: photos.reverse(),
            events: events.reverse()
          });
        });
      });
      });
    }
    else if (search === 'Manage') {
      const photos = await new Promise((resolve, reject) => {
        Manage.fetchAll(photos => {
          UpEvent.fetchAll(events => {
          resolve(photos);
          res.render('SercetPages/Manage', {
            pageTitle: 'Manage',
            path: '/admin/EBs?search=Manage#',
            photos: photos.reverse(),
            events: events.reverse()
          });
        });
      });
      });
    }
    else if (search === 'Web') {
      const photos = await new Promise((resolve, reject) => {
        Web.fetchAll(photos => {
          UpEvent.fetchAll(events => {
          resolve(photos);
          res.render('SercetPages/Web', {
            pageTitle: 'Web',
            path: '/admin/EBs?search=Manage#',
            photos: photos.reverse(),
            events: events.reverse()
          });
        });
      });
      });
    }
    else if (search === 'Design') {
      const photos = await new Promise((resolve, reject) => {
        Design.fetchAll(photos => {
          UpEvent.fetchAll(events => {
          resolve(photos);
          res.render('SercetPages/Design', {
            pageTitle: 'Design',
            path: '/admin/EBs?search=Design#',
            photos: photos.reverse(),
            events: events.reverse()
          });
        });
      });
      });
    }
    else if (search === 'EBs') {
      UpEvent.fetchAll(events => {
          res.render('Add-Info/addEbsDetails', {
            pageTitle: 'Ebs Add Info',
            path: '/admin/EBs',
            events: events.reverse()
          });
        });
      }
      else if (search === 'AddUpEvent') {
        UpEvent.fetchAll(events => {
        res.render('Add-Info/addUpEvent', {
          pageTitle: 'Add Events',
          path: '/admin/EBs',
          events : events.reverse()
        });
      });
    }
    else if (search === 'EditUpEvent') {
      UpEvent.fetchAll(events => {
        res.render('Delete-Info/deleteUpEvent', {
          pageTitle: 'Delete Events',
          path: '/admin/EBs',
          events: events.reverse()
        });
      });
    }
    else if (search === 'Credits') {
      UpEvent.fetchAll(events => {
        res.render('SercetPages/Credits', {
          pageTitle: 'Credits',
          path: '/',
          events:events.reverse()
        });
      });
    }
    else if( search === 'Student'){
      Chem.fetchAll(photos => {
        UpEvent.fetchAll(events => {
        res.render('SercetPages/Chem' , {
          photos : photos , 
          path: '/',
          pageTitle: 'Chemicals Students',
          events: events.reverse()
        });
      });
      });
    }

    else {
      EBs.fetchAll(infos => {
        UpEvent.fetchAll(events => {
        const revArr = infos.reverse();
        const currEbs = revArr[0];
        res.render('NavBar-Items/EBs', {
                pageTitle: 'Ebs',
                currEbs: currEbs,
                path: '/',
                events: events.reverse()
          });
        });
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.postAddK12Pics = (req , res , next) => {
  console.log("Akhil");
  console.log(req.body);
  const imgUrl = req.body.imageUrl;
  const pass = req.body.password;
  const title = req.body.title;
  if(pass === 'AkhilAkhil'){
    const updatedList = new K12(imgUrl , title);
    updatedList.save();
    console.log(updatedList);
    res.redirect('/admin/EBs?search=K12#');
  }
  else {
    res.redirect('/admin/EBs?search=K12#');
  }
}

exports.postAddCECPics = (req , res , next) => {
  console.log("Akhil");
  console.log(req.body);
  const imgUrl = req.body.imageUrl;
  const pass = req.body.password;
  const title = req.body.title;
  if(pass === 'AkhilAkhil'){
    const updatedList = new CEC(imgUrl , title);
    updatedList.save();
    console.log(updatedList);
    res.redirect('/admin/EBs?search=CEC#');
  }
  else {
    res.redirect('/admin/EBs?search=CEC#');
  }
}

exports.postAddJPPics = (req , res , next) => {
  console.log("Akhil");
  console.log(req.body);
  const imgUrl = req.body.imageUrl;
  const pass = req.body.password;
  const title = req.body.title;
  if(pass === 'AkhilAkhil'){
    const updatedList = new JP(imgUrl , title);
    updatedList.save();
    console.log(updatedList);
    res.redirect('/admin/EBs?search=JP#');
  }
  else {
    res.redirect('/admin/EBs?search=JP#');
  }
}

exports.postAddContentPics = (req , res , next) => {
  console.log("Akhil");
  console.log(req.body);
  const imgUrl = req.body.imageUrl;
  const pass = req.body.password;
  const title = req.body.title;
  if(pass === 'AkhilAkhil'){
    const updatedList = new Content(imgUrl , title);
    updatedList.save();
    console.log(updatedList);
    res.redirect('/admin/EBs?search=Content#');
  }
  else {
    res.redirect('/admin/EBs?search=Content#');
  }
}

exports.postAddDesignPics = (req , res , next) => {
  console.log("Akhil");
  console.log(req.body);
  const imgUrl = req.body.imageUrl;
  const pass = req.body.password;
  const title = req.body.title;
  if(pass === 'AkhilAkhil'){
    const updatedList = new Design(imgUrl , title);
    updatedList.save();
    console.log(updatedList);
    res.redirect('/admin/EBs?search=Design#');
  }
  else {
    res.redirect('/admin/EBs?search=Design#');
  }
}

exports.postAddManagePics = (req , res , next) => {
  console.log("Akhil");
  console.log(req.body);
  const imgUrl = req.body.imageUrl;
  const title = req.body.title;
  const pass = req.body.password;
  if(pass === 'AkhilAkhil'){
    const updatedList = new Manage(imgUrl , title);
    updatedList.save();
    console.log(updatedList);
    res.redirect('/admin/EBs?search=Manage#');
  }
  else {
    res.redirect('/admin/EBs?search=Manage#');
  }
}


exports.postEbsUpdate = (req , res , next) => {
  const ebs = new EBs ( req.body.nameFA , req.body.imgFA , req.body.LinkFA , req.body.instaFA , req.body.messFA , req.body.namePre , req.body.imgPre , req.body.LinkPre , req.body.instaPre , req.body.messPre ,req.body.nameVpre , req.body.imgVpre , req.body.LinkVpre , req.body.instaVpre , req.body.messVpre ,req.body.nameGRH , req.body.imgGRH , req.body.LinkGRH , req.body.instaGRH , req.body.messGRH ,req.body.nameSC , req.body.imgSC , req.body.LinkSC , req.body.instaSC , req.body.messSC ,req.body.nameTS , req.body.imgTS , req.body.LinkTS , req.body.instaTS , req.body.messTS ,req.body.nameCEC , req.body.imgCEC , req.body.LinkCEC , req.body.instaCEC , req.body.messCEC , req.body.nameDH , req.body.imgDH , req.body.LinkDH , req.body.instaDH , req.body.messDH , req.body.nameCH , req.body.imgCH , req.body.LinkCH , req.body.instaCH , req.body.messCH ,req.body.nameWH , req.body.imgWH , req.body.LinkWH , req.body.instaWH , req.body.messWH ,req.body.nameKC , req.body.imgKC , req.body.LinkKC , req.body.instaKC , req.body.messKC ,req.body.nameSMC , req.body.imgSMC , req.body.LinkSMC , req.body.instaSMC , req.body.messSMC ,req.body.nameDC , req.body.imgDC , req.body.LinkDC , req.body.instaDC , req.body.messDC ,req.body.nameSPC , req.body.imgSPC , req.body.LinkSPC , req.body.instaSPC , req.body.messSPC   );
  if(req.body.password === 'AkhilAkhil'){
    ebs.save();
  }
  res.redirect('/admin/EBs');
}

exports.getFADetails = (req , res , next) => {
  EBs.fetchAll(infos => {
    UpEvent.fetchAll(events => {
    res.render('Details/FADetails', {
            pageTitle: 'Faculty Advisor',
            infos: infos.reverse(),
            path: '/',
            events: events.reverse()
      });
    });
  });
}

exports.getPREDetails = (req , res , next) => {
  EBs.fetchAll(infos => {
    UpEvent.fetchAll(events => {
    res.render('Details/PREDetails', {
            pageTitle: 'President',
            infos: infos.reverse(),
            path: '/',
            events: events.reverse()
      });
    });
  });
}

exports.getVPREDetails = (req , res , next) => {
  EBs.fetchAll(infos => {
    UpEvent.fetchAll(events => {
    res.render('Details/VPREDetails', {
            pageTitle: 'vice President',
            infos: infos.reverse(),
            path: '/',
            events: events.reverse()
      });
    });
  });
}

exports.getKCDetails = (req , res , next) => {
  EBs.fetchAll(infos => {
    UpEvent.fetchAll(events => {
    res.render('Details/KCDetails', {
            pageTitle: 'K12 Coordinator',
            infos: infos.reverse(),
            path: '/',
            events: events.reverse()
      });
    });
  });
}

exports.getSMCDetails = (req , res , next) => {
  EBs.fetchAll(infos => {
    UpEvent.fetchAll(events => {
    res.render('Details/SMCDetails', {
            pageTitle: 'Media Coordinator',
            infos: infos.reverse(),
            path: '/',
            events: events.reverse()
      });
    });
  });
}

exports.getDCDetails = (req , res , next) => {
  EBs.fetchAll(infos => {
    UpEvent.fetchAll(events => {
    res.render('Details/DCDetails', {
            pageTitle: 'Documentation Coordinator',
            infos: infos.reverse(),
            path: '/',
            events: events.reverse()
      });
    });
  });
}

exports.getSPCDetails = (req , res , next) => {
  EBs.fetchAll(infos => {
    UpEvent.fetchAll(events => {
    res.render('Details/SPCDetails', {
            pageTitle: 'Sophomore Coordinator',
            infos: infos.reverse(),
            path: '/',
            events: events.reverse()
      });
    });
  });
}

exports.getGRHDetails = (req , res , next) => {
  EBs.fetchAll(infos => {
    UpEvent.fetchAll(events => {
    res.render('Details/GRHDetails', {
            pageTitle: 'Relation Head',
            infos: infos.reverse(),
            path: '/',
            events: events.reverse()
      });
    });
  });
}

exports.getSCDetails = (req , res , next) => {
  EBs.fetchAll(infos => {
    UpEvent.fetchAll(events => {
    res.render('Details/SCDetails', {
            pageTitle: 'Secretary',
            infos: infos.reverse(),
            path: '/',
            events: events.reverse()
      });
    });
  });
}

exports.getTSDetails = (req , res , next) => {
  EBs.fetchAll(infos => {
    UpEvent.fetchAll(events => {
    res.render('Details/TSDetails', {
            pageTitle: 'Treasurer',
            infos: infos.reverse(),
            path: '/',
            events: events.reverse()
      });
    });
  });
}

exports.getCECDetails = (req , res , next) => {
  EBs.fetchAll(infos => {
    UpEvent.fetchAll(events => {
    res.render('Details/CECDetails', {
            pageTitle: 'Chemi-E-Car Head',
            infos: infos.reverse(),
            path: '/',
            events: events.reverse()
      });
    });
  });
}

exports.getDHDetails = (req , res , next) => {
  EBs.fetchAll(infos => {
    UpEvent.fetchAll(events => {
    res.render('Details/DHDetails', {
            pageTitle: 'Design Head',
            infos: infos.reverse(),
            path: '/',
            events: events.reverse()
      });
    });
  });
}

exports.getCHDetails = (req , res , next) => {
  EBs.fetchAll(infos => {
    UpEvent.fetchAll(events => {
    res.render('Details/CHDetails', {
            pageTitle: 'Content Head',
            infos: infos.reverse(),
            path: '/',
            events: events.reverse()
      });
  });
});
}

exports.getWHDetails = (req , res , next) => {
  EBs.fetchAll(infos => {
    UpEvent.fetchAll(events => {
    res.render('Details/WHDetails', {
            pageTitle: 'Web Head',
            infos: infos.reverse(),
            path: '/',
            events: events.reverse()
      });
    });
  });
}

exports.getBlogPage = (req , res , next) => {
  Blog.fetchAll(blogs => {
    UpEvent.fetchAll(events => {
    res.render('NavBar-Items/Blog' , {
    pageTitle: 'Blogs',
    blogs : blogs.reverse(),
    path : '/',
    events: events.reverse()
  });
});
});
}

exports.getAchPage = (req , res , next) => {
  Ach.fetchAll(achs => {
    UpEvent.fetchAll(events => {
    res.render('NavBar-Items/Ach' , {
    pageTitle: 'Ach',
    achs : achs.reverse(),
    path : '/',
    events: events.reverse()
  });
  });
});
}


exports.postAddBlogInfo = (req , res , next) => {
  const imgUrl = req.body.imageUrl;
  const imgUrl1 = req.body.imageUrl1;
  const imgUrl2 = req.body.imageUrl2;
  const title = req.body.titleBlog;
  const desc = req.body.descBlog;
  const conn = req.body.connBlog;
  const pass = req.body.password;
  if(pass === 'AkhilAkhil') {
    const blog = new Blog(imgUrl ,imgUrl1, imgUrl2, title , desc , conn);
    blog.save();
    console.log('saving sone')
  }
  res.redirect('/admin/Blog');
}
 
exports.postAddAchInfo = (req , res , next) => {
  const imgUrl = req.body.imageUrl;
  const name = req.body.name;
  const desc = req.body.desc;
  const conn = req.body.conn;
  const pass = req.body.password;
  if(pass === 'AkhilAkhil') {
    const ach = new Ach(imgUrl , name , desc , conn);
    ach.save();
  }
  res.redirect('/admin/Ach');
}

exports.getBlogInfoPage = (req , res , next) => {
  UpEvent.fetchAll(events => {
  res.render('Add-Info/addBlogInfo' , {
    pageTitle: 'Add Blogs',
    path : '/',
    events: events.reverse()
  });
});
}

exports.getAddArchPage = (req , res , next) => {
  UpEvent.fetchAll(events => {
  res.render('Add-Info/addAchInfo' , {
    pageTitle: 'Add Ach',
    path : '/',
    events: events.reverse()
  });
});
}

exports.postDeleteBlog = (req , res , next) => {
  const pass = req.body.password;
  const blogId = req.body.blogId;
  if(pass === 'AkhilAkhil') {
    Blog.deleteById(blogId);
  }
  res.redirect('/admin/Blog');
}

exports.postDeleteAch = (req , res , next) => {
  const pass = req.body.password;
  const achId = req.body.AchId;
  if(pass === 'AkhilAkhil') {
    Ach.deleteById(achId);
  }
  res.redirect('/admin/Ach');
}

exports.postDeleteEvent = (req , res , next) => {
  const pass = req.body.password;
  const eventId = req.body.eventId;
  if(pass === 'AkhilAkhil') {
    UpEvent.deleteById(eventId);
  }
  res.redirect('/admin/Events');
}

exports.getDeleteBlogPage = (req , res , next) => {
  Blog.fetchAll(blogs => {
    UpEvent.fetchAll(events => {
    res.render('Delete-Info/deleteBlog' , {
    pageTitle: 'Delete Blogs',
    blogs : blogs.reverse(),
    path : '/',
    events: events.reverse()
  });
  });
});
}

exports.getDeleteAch = (req , res , next) => {
  Ach.fetchAll(achs => {
    UpEvent.fetchAll(events => {
    res.render('Delete-Info/deleteAch' , {
    pageTitle: 'Delete Ach',
    achs : achs.reverse(),
    path : '/',
    events: events.reverse()
  });
});
  });
}


exports.getEventPage = async (req, res, next) => {
  const search = req.query.search;
  try {
    if (search === 'K12') {
      const photos = await new Promise((resolve, reject) => {
        K12.fetchAll(photos => {
          UpEvent.fetchAll(events => {
          resolve(photos);
          res.render('SercetPages/K12', {
            pageTitle: 'K12',
            path: '/admin/EBs?search=K12#',
            events:events.reverse(),
            photos: photos.reverse()
          });
        });
      });
      });
    }
    else if (search === 'CEC') {
      const photos = await new Promise((resolve, reject) => {
        CEC.fetchAll(photos => {
          UpEvent.fetchAll(events => {
          resolve(photos);
          res.render('SercetPages/CEC', {
            pageTitle: 'CEC',
            path: '/admin/EBs?search=K12#',
            photos: photos.reverse(),
            events: events.reverse()
          });
        });
      });
      });
    }
    else if (search === 'JP') {
      const photos = await new Promise((resolve, reject) => {
        JP.fetchAll(photos => {
          UpEvent.fetchAll(events => {
          resolve(photos);
          res.render('SercetPages/JP', {
            pageTitle: 'JP',
            path: '/admin/EBs?search=JP#',
            photos: photos.reverse(),
            events: events.reverse()
          });
        });
      });
      });
    }
    else if (search === 'AddAch') {
      const photos = await new Promise((resolve, reject) => {
        Ach.fetchAll(achs => {
          UpEvent.fetchAll(events => {
          resolve(achs);
          res.render('Add-Info/addAchInfo', {
            pageTitle: 'JP',
            path: '/admin/EBs?search=JP#',
            achs: achs.reverse(),
            events: events.reverse()
          });
        });
      });
      });
    }
    else if (search === 'Content') {
      const photos = await new Promise((resolve, reject) => {
        Content.fetchAll(photos => {
          UpEvent.fetchAll(events => {
          resolve(photos);
          res.render('SercetPages/Content', {
            pageTitle: 'Content',
            path: '/admin/EBs?search=Content#',
            photos: photos.reverse(),
            events: events.reverse()
          });
        });
      });
      });
    }
    else if (search === 'Manage') {
      const photos = await new Promise((resolve, reject) => {
        Manage.fetchAll(photos => {
          UpEvent.fetchAll(events => {
          resolve(photos);
          res.render('SercetPages/Manage', {
            pageTitle: 'Manage',
            path: '/admin/EBs?search=Manage#',
            photos: photos.reverse(),
            events: events.reverse()
          });
        });
      });
      });
    }
    else if (search === 'Web') {
      const photos = await new Promise((resolve, reject) => {
        Web.fetchAll(photos => {
          UpEvent.fetchAll(events => {
          resolve(photos);
          res.render('SercetPages/Web', {
            pageTitle: 'Web',
            path: '/admin/EBs?search=Manage#',
            photos: photos.reverse(),
            events: events.reverse()
          });
        });
      });
      });
    }
    else if (search === 'Design') {
      const photos = await new Promise((resolve, reject) => {
        Design.fetchAll(photos => {
          UpEvent.fetchAll(events => {
          resolve(photos);
          res.render('SercetPages/Design', {
            pageTitle: 'Design',
            path: '/admin/EBs?search=Design#',
            photos: photos.reverse(),
            events: events.reverse()
          });
        });
      });
      });
    }
    else if (search === 'EBs') {
      UpEvent.fetchAll(events => {
          res.render('Add-Info/addEbsDetails', {
            pageTitle: 'Ebs Add Info',
            path: '/admin/EBs',
            events: events.reverse()
          });
        });
      }
      else if (search === 'AddUpEvent') {
        UpEvent.fetchAll(events => {
        res.render('Add-Info/addUpEvent', {
          pageTitle: 'Add Events',
          path: '/admin/EBs',
          events : events.reverse()
        });
      });
    }
    else if (search === 'AddBlog') {
      Blog.fetchAll(blogs => {
      res.render('Add-Info/addBlogInfo', {
        pageTitle: 'Add Events',
        path: '/admin/EBs',
        events : blogs.reverse()
      });
    });
  }
    else if (search === 'EditUpEvent') {
      UpEvent.fetchAll(events => {
        res.render('Delete-Info/deleteUpEvent', {
          pageTitle: 'Delete Events',
          path: '/admin/EBs',
          events: events.reverse()
        });
      });
    }
    else if (search === 'Credits') {
      UpEvent.fetchAll(events => {
        res.render('SercetPages/Credits', {
          pageTitle: 'Credits',
          path: '/',
          events:events.reverse()
        });
      });
    }
    else if( search === 'Student'){
      Chem.fetchAll(photos => {
        UpEvent.fetchAll(events => {
        res.render('SercetPages/Chem' , {
          photos : photos , 
          path: '/',
          pageTitle: 'Chemicals Students',
          events: events.reverse()
        });
      });
      });
    }
    else if (search === 'AddWeb'){
      res.render('Add-Info/addWebPics', {
        pageTitle: 'Add Web Pics',
        path: '/'
      });
    }
    else if (search === 'DeleteWeb'){
      Web.fetchAll(photos => {
        res.render('Delete-Info/deleteWebPics', {
          pageTitle: 'Add Web Pics',
          path: '/',
          photos : photos.reverse()
        });
      });
    }
    else if (search === 'AddManage'){
      res.render('Add-Info/addManagePics', {
        pageTitle: 'Add Manage Pics',
        path: '/'
      });
    }
    else if (search === 'DeleteManage'){
      Manage.fetchAll(photos => {
        res.render('Delete-Info/deleteManagePics', {
          pageTitle: 'Add Manage Pics',
          path: '/',
          photos : photos.reverse()
        });
      });
    }
    else if (search === 'AddK12'){
      res.render('Add-Info/addK12Pics', {
        pageTitle: 'Add K12 Pics',
        path: '/'
      });
    }
    else if (search === 'DeleteK12'){
      K12.fetchAll(photos => {
        res.render('Delete-Info/deleteK12Pics', {
          pageTitle: 'Add K12 Pics',
          path: '/',
          photos : photos.reverse()
        });
      });
    }
    else if (search === 'AddJP'){
      res.render('Add-Info/addJPPics', {
        pageTitle: 'Add JP Pics',
        path: '/'
      });
    }
    else if (search === 'DeleteJP'){
      JP.fetchAll(photos => {
        res.render('Delete-Info/deleteJPPics', {
          pageTitle: 'Add JP Pics',
          path: '/',
          photos : photos.reverse()
        });
      });
    }
    else if (search === 'AddDesign'){
      res.render('Add-Info/addDesignPics', {
        pageTitle: 'Add Design Pics',
        path: '/'
      });
    }
    else if (search === 'DeleteK12'){
      Design.fetchAll(photos => {
        res.render('Delete-Info/deleteDesignPics', {
          pageTitle: 'Add Design Pics',
          path: '/',
          photos : photos.reverse()
        });
      });
    }
    else if (search === 'AddContent'){
      res.render('Add-Info/addContentPics', {
        pageTitle: 'Add Content Pics',
        path: '/'
      });
    }
    else if (search === 'DeleteContent'){
      Content.fetchAll(photos => {
        res.render('Delete-Info/deleteContentPics', {
          pageTitle: 'Add content Pics',
          path: '/',
          photos : photos.reverse()
        });
      });
    }
    else if (search === 'AddCEC'){
      res.render('Add-Info/addCECPics', {
        pageTitle: 'Add CEC Pics',
        path: '/'
      });
    }
    else if (search === 'DeleteCEC'){
      CEC.fetchAll(photos => {
        res.render('Delete-Info/deleteCECPics', {
          pageTitle: 'Add CEC Pics',
          path: '/',
          photos : photos.reverse()
        });
      });
    }
    else if (search === 'AddChem'){
      res.render('Add-Info/addChemInfo', {
        pageTitle: 'Add Chem Pics',
        path: '/'
      });
    }
    else if (search === 'DeleteChem'){
      Chem.fetchAll(photos => {
        res.render('Delete-Info/deleteChem', {
          pageTitle: 'Add Chem Pics',
          path: '/',
          photos : photos.reverse()
        });
      });
    }
    else {
      UpEvent.fetchAll(events => {
        UpEvent.fetchAll(events => {
        PastEvent.fetchAll(pastEvents => {
          res.render('NavBar-Items/Event' , {
            pageTitle: 'Events',
            events: events.reverse(),
            pastEvents: pastEvents.reverse(),
            path: '/',
            events: events.reverse()
          });
        });
      });
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.postAddEvent = (req , res , next) => {
    const name = req.body.name;
    const img = req.body.img;
    const conn = req.body.conn;
    const mess = req.body.mess;
    const pass = req.body.password;
    if(pass === 'AkhilAkhil'){
      const upEvent = new UpEvent(name , img , conn , mess);
      upEvent.save();
    }
    res.redirect('/admin/Events');
}

exports.postEvenCompleted = ( req , res , next) => {
  const eventId = req.body.eventId;
  const pass = req.body.password;
  const name = req.body.name;
  const conn = req.body.conn;
  const mess = req.body.mess;
  const imgUrl = req.body.imgUrl;
  if(pass === 'AkhilAkhil'){
    UpEvent.deleteById(eventId);
    const pastEvent = new PastEvent(name , imgUrl , conn , mess);
    pastEvent.save();
  }
  res.redirect('/admin/Events');
}

exports.getAddWebPics = ( req , res , next) => {
  Web.fetchAll(photos => {
    UpEvent.fetchAll(events => {
    res.render('Add-Info/addWebPics' , {
      pageTitle: 'Add Web',
      photos:photos,
      path: '/',
      events: events.reverse()
    });
  });
  });
}

exports.getAddChemPic = ( req , res , next) => {
  Chem.fetchAll(photos => {
    UpEvent.fetchAll(events => {
    res.render('Add-Info/addChemInfo' , {
      pageTitle: 'Add Our Pics',
      photos:photos,
      path: '/',
      events: events.reverse()
    });
  });
  });
}

exports.postAddWebPic = (req , res , next) => {
  const imageUrl = req.body.imageUrl;
  const title = req.body.title;
  const pass = req.body.password;
  if(pass === 'AkhilAkhil'){
    const web = new Web(imageUrl , title);
    web.save();
  }
  res.redirect('/admin/EBs?search=Web');
}

exports.postAddChePic = (req , res , next) => {
  const imageUrl = req.body.imageUrl;
  const pass = req.body.password;
  const title = req.body.title;
  if(pass === 'AkhilAkhil'){
    const chem = new Chem(imageUrl , title);
    chem.save();
  }
  res.redirect('/admin/EBs?search=Student');
}

exports.getDeleteWebPage = (req , res , next) => {
  Web.fetchAll(photos => {
    UpEvent.fetchAll(events => {
    res.render('Delete-Info/deleteWebPics' , {
      pageTitle:'Delete Web',
      path: '/',
      photos: photos,
      events:events.reverse()
    });
  });
  });
}

exports.getDeleteChemPage = (req , res , next) => {
  Chem.fetchAll(photos => {
    UpEvent.fetchAll(events => {
    res.render('Delete-Info/deleteChem' , {
      pageTitle:'Delete Chemical',
      path: '/',
      photos: photos,
      events: events.reverse()
    });
  });
  });
}

exports.postDeleteWeb = (req , res , next) => {
  const photoId = req.body.photoId;
  const pass = req.body.password;
  if(pass === 'AkhilAkhil'){
    Web.deleteById(photoId);
  }
  res.redirect('/admin/EBs?search=Web');
}

exports.postDeleteChem = (req , res , next) => {
  const photoId = req.body.photoId;
  const pass = req.body.password;
  if(pass === 'AkhilAkhil'){
    Chem.deleteById(photoId);
  }
  res.redirect('/admin/EBs?search=Student');
}

exports.getAboutPage = (req , res , next) => {
  res.render('NavBar-Items/AboutUs' , {
    pageTitle: 'About Us',
    path: '/'
  });
}

exports.getContactPage = (req , res , next) => {
  res.render('NavBar-Items/ContactUs' , {
    pageTitle: 'Contact Us',
    path: '/'
  });
}