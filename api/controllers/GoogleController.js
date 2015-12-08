/**
 * GoogleController
 *
 * @description :: Server-side logic for managing Googles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
  callback: callback
};

function callback(req, res) {
  console.log('===Google callback called===');
  res.redirect('/#/internal?access_token=' + req.user);
}

