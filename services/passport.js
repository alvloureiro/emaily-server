const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

module.exports = (keys, mongoose) => {
  const User = mongoose.model('users');
  passport.use(
    new GoogleStrategy(
      {
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/callback'
      },
      (accessToken, refreshToken, profile, done) => {
        new User({ googleId: profile.id }).save();
      }
    )
  );
};
