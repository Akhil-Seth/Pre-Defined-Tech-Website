const control = require('../controllers/NavBar');
const express = require('express');
const path = require('path');
const router = express.Router();

// /admin/Ebs => GET
router.get('/EBs', control.getEbsPage);

// /admin/adminK12Page => get
router.get('/adminK12Page', control.getK12AdminPage);

// /admin/adminCECPage => get
router.get('/adminCECPage', control.getCECAdminPage);

// /admin/adminJPPage => get
router.get('/adminJPPage', control.getJPAdminPage);

// /admin/adminContentPage => get
router.get('/adminContentPage', control.getContentAdminPage);

// /admin/adminDesignPage => get
router.get('/adminDesignPage', control.getDesignAdminPage);

// /admin/adminManagePage => get
router.get('/adminManagePage', control.getManageAdminPage);

// /admin/adminWebPage => get
// router.get('/adminWebPage', control.getWebAdminPage);

// /admin/addK12Pics => get
router.get('/addK12Pics' , control.getAddK12Page);

// /admin/addCECPics => get
router.get('/addCECPics' , control.getAddCECPage);

// /admin/addJPPics => get
router.get('/addJPPics' , control.getAddJPPage);

// /admin/addContentPics => get
router.get('/addContentPics' , control.getAddContentPage);

// /admin/addDesignPics => get
router.get('/addDesignPics' , control.getAddDesignPage);

// /admin/addManagePics => get
router.get('/addManagePics' , control.getAddManagePage);

// /admin/addWebPics => get
// router.get('/addWebPics' , control.getAddWebPage);

// /admin/addPicToK12 => Post
router.post('/addPicToK12', control.postAddK12Pics);

// /admin/addPicToCEC => Post
router.post('/addPicToCEC', control.postAddCECPics);

// /admin/addPicToJP => Post
router.post('/addPicToJP', control.postAddJPPics);

// /admin/addPicToContent => Post
router.post('/addPicToContent', control.postAddContentPics);

// /admin/addPicToManage => Post
router.post('/addPicToManage', control.postAddManagePics);

// /admin/addPicToDesign => Post
router.post('/addPicToDesign', control.postAddDesignPics);

// /admin/addPicToWeb => Post
// router.post('/addPicToWeb', control.postAddWebPics);

// /admin/deleteK12Pics => Get
router.get('/deleteK12Pics' , control.getDeleteK12PicPage);

// /admin/deleteCECPics => Get
router.get('/deleteCECPics' , control.getDeleteCECPicPage);

// /admin/deleteJPPics => Get
router.get('/deleteJPPics' , control.getDeleteJPPicPage);

// /admin/deleteContentPics => Get
router.get('/deleteContentPics' , control.getDeleteContentPicPage);

// /admin/deleteDesignPics => Get
router.get('/deleteDesignPics' , control.getDeleteDesignPicPage);

// /admin/deleteManagePics => Get
router.get('/deleteManagePics' , control.getDeleteManagePicPage);

// /admin/deleteWebPics => Get
// router.get('/deleteWebPics' , control.getDeleteWebPicPage);

// /admin/deleteK12Pics => Post
router.post('/deleteK12Pics' , control.postDeleleK12Pic);

// /admin/deleteCECPics => Post
router.post('/deleteCECPics' , control.postDeleleCECPic);

// /admin/deleteJPPics => Post
router.post('/deleteJPPics' , control.postDeleleJPPic);

// /admin/deleteContentPics => Post
router.post('/deleteContentPics' , control.postDeleleContentPic);

// /admin/deleteManagePics => Post
router.post('/deleteManagePics' , control.postDeleleManagePic);

// /admin/deleteDesignPics => Post
router.post('/deleteDesignPics' , control.postDeleleDesignPic);

// /admin/deleteWebPics => Post
// router.post('/deleteWebPics' , control.postDeleleWebPic);

// /admin/addInfoToEbs => Post
router.post('/addInfoToEbs' , control.postEbsUpdate);

// /admin//admin/FA-details => Get
router.get('/FA-details', control.getFADetails);

// /admin//admin/PRE-details => Get
router.get('/PRE-details', control.getPREDetails);

// /admin//admin/VPRE-details => Get
router.get('/Vpre-details', control.getVPREDetails);

// /admin//admin/GRH-details => Get
router.get('/GRH-details', control.getGRHDetails);

// /admin//admin/SC-details => Get
router.get('/SC-details', control.getSCDetails);

// /admin//admin/TS-details => Get
router.get('/TS-details', control.getTSDetails);

// /admin//admin/CEC-details => Get
router.get('/CEC-details', control.getCECDetails);

// /admin//admin/CH-details => Get
router.get('/CH-details', control.getCHDetails);

// /admin//admin/DH-details => Get
router.get('/DH-details', control.getDHDetails);

// /admin//admin/WH-details => Get
router.get('/WH-details', control.getWHDetails);

// /admin/Blog => Get
router.get('/Blog' , control.getBlogPage);

// /admin/addBlogInfo => Get
router.get('/addBlogInfo' , control.getBlogInfoPage);

// /admin/addBlogInformation => Post
router.post('/addBlogInformation', control.postAddBlogInfo);

// /admin/deleteBlog => Post 
router.post('/deleteBlog', control.postDeleteBlog);

// /admin/deleteBlog => Get
router.get('/deleteBlog' , control.getDeleteBlogPage);

// /admin/Ach => Get
router.get('/Ach' , control.getAchPage);

// /admin/addAchInfo => Get
router.get('/addAchInfo', control.getAddArchPage);

// /admin/addAchInformation => Post
router.post('/addAchInformation' , control.postAddAchInfo);

// /admin/deleteAch => Get
router.get('/deleteAch' , control.getDeleteAch);

// /admin/deleteAch => Post
router.post('/deleteAch' , control.postDeleteAch);

// /admin/Events => Get
router.get('/Events' , control.getEventPage);

// /admin/addUpEvent => Post
router.post('/addEvent', control.postAddEvent);

// /admin/deleteEvent => Post
router.post('/deleteEvent', control.postDeleteEvent);

// /admin/EventCompleted => post
router.post('/EventCompleted', control.postEvenCompleted);

// /admin/KC-details => Get
router.get('/KC-details',control.getKCDetails);

// /admin/DC-details => Get
router.get('/DC-details',control.getDCDetails);

// /admin/SPC-details => Get
router.get('/SPC-details',control.getSPCDetails);

// /admin/SMC-details => Get
router.get('/SMC-details',control.getSMCDetails);

// /admin/addWebPics => Get
router.get('/addWebPics', control.getAddWebPics);

// /admin/addPicToWeb => Post
router.post('/addPicToWeb', control.postAddWebPic);

// /admin/deleteWebPics => Get
router.get('/deleteWebPics', control.getDeleteWebPage);

// /admin/deleteWebPics => Post
router.post('/deleteWebPics', control.postDeleteWeb);

// /admin/addChemPics => Get
router.get('/addChemPics' , control.getAddChemPic);

// /admin/addPicToChem => post
router.post('/addPicToChem' , control.postAddChePic);

// /admin/deleteChemPics => Get
router.get('/deleteChemPics' , control.getDeleteChemPage);

// /admin/deleteChemPics => Post
router.post('/deleteChemPics' , control.postDeleteChem);

// /admin/AboutUs => Get
router.get('/AboutUs' , control.getAboutPage);

// /admin/ContactUs => Get
router.get('/ContactUs' , control.getContactPage);

module.exports = router;