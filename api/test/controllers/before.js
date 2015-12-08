var q = require('bluebird');

before(function (done) {
  console.log('Before All Tests');

  require('sails').load({
    models: {connection: 'localDiskDb', migrate: 'drop'}
  }, function () {
    console.log('here');
    done();
    //var destroyP = q.all([
    //  //Clear Old Data
    //  //Prize.destroy({}),
    //  //User.destroy({}),
    //  //PlayRecord.destroy({})
    //]);
    //
    //destroyP.then(function () {
    //  done();
    //});
  });

  //var sails = require('sails');
  //sails.lift(done);
});

