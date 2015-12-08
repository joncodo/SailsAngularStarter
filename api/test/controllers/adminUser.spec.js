//TODO GET BACkend tests going

//var request = require('supertest');
//var q = require('bluebird');
////var chai = require("chai");
////chai.should();
//
//describe('AdminUserController', function() {
//  describe('.login()', function() {
//    var adminUser;
//
//    beforeEach(function (done) {
//      //AdminUser.create({username: 'testUser', password:'testLast'}).then(function (user) {
//      //  adminUser = user;
//      //  done();
//      //});
//      done();
//    });
//
//    afterEach(function (done) {
//      //q.all([AdminUser.destroy({})]).then(function () {
//      //  done();
//      //});
//      done();
//    });
//
//    it('returns true if the user had a play in the db', function (done) {
//      //create a play past
//
//      request(sails.hooks.http.app)
//        .post('/login')
//        .send({username: 'Bob', password: 'foobar'})
//        .expect(200)
//        .end(function (err, results) {
//
//          AdminUser.find().then(function(foundUsers){
//            foundUsers.length.should.equal(1);
//          });
//
//          if (err) throw err;
//          done();
//        });
//
//    });
//  });
//});
