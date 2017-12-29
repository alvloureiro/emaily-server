const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

module.exports = (keys, mongoose) => {
  const User = mongoose.model('users');

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
      done(null, user);
    });
  });

  passport.use(
    new GoogleStrategy(
      {
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/callback'
      },
      (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id }).then(existingUser => {
          if (!existingUser) {
            User({ googleId: profile.id })
              .save()
              .then(user => {
                done(null, user);
              });
          } else {
            done(null, existingUser);
          }
        });
      }
    )
  );
};
