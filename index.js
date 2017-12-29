const cookieSession = require('cookie-session');
const passport = require('passport');
const app = require('express')();
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./models/User')(mongoose);
require('./services/passport')(keys, mongoose);

mongoose.connect(keys.mongo.uri);

const SERVER_PORT = process.env.PORT || 5000;

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookie.key]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

app.listen(SERVER_PORT, () => console.log(`Server application running on port ${SERVER_PORT}`));
