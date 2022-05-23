const withAuth = (req, res, next) => {
    if (!req.session.User_id) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;

  //this js file will redirect the user to the login page if they are not currently logged in