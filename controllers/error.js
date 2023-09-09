exports.get404 = (req, res, next) => {
    res.status(404).render('NavBar-Items/404', { pageTitle: 'Page Not Found', path: '/404' });
  };
  