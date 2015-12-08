var passport = require('passport');

module.exports = function(req, res, next) {
  return passport.authenticate('google', {failureRedirect: '/auth/error'})(req, res, next);
};
