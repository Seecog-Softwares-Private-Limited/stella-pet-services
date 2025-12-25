// Authentication middleware for admin routes
module.exports = {
  // Check if user is authenticated
  requireAuth: (req, res, next) => {
    if (req.session && req.session.adminId) {
      return next();
    }
    req.flash('error', 'Please login to access admin area');
    res.redirect('/admin/login');
  },

  // Redirect if already authenticated
  redirectIfAuth: (req, res, next) => {
    if (req.session && req.session.adminId) {
      return res.redirect('/admin');
    }
    next();
  }
};

