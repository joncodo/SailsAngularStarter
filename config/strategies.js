var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var google = new GoogleStrategy({
    clientID: 'xxx',
    clientSecret: 'xxx',
    callbackURL: "http://127.0.0.1:1337/google/callback"
      },
      function(accessToken, refreshToken, userProfile, done) {
        console.log('accessToken', accessToken);
        console.log('refreshToken', refreshToken);
        console.log('userProfile', userProfile);
        User.findOrCreate({googleId: userProfile.id.toString()}, {
          provider: accessToken,
          displayName: userProfile.displayName,
          emails: userProfile.emails,
          photos: userProfile.photos,
          googleId: userProfile.id.toString(),
          accessToken: accessToken,
          refreshToken: refreshToken
        }).then(function(){
          console.log('=== item saved ===');
          return done(null, accessToken);
        }).catch(function(err){
          console.log('=== error occured ===', err);
          return done(null, accessToken);
        });
      });

module.exports = {
  google: google
};
