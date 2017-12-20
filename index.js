const app = require('express')();
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');
require('./models/User')(mongoose);
require('./routes/authRoutes')(app);

mongoose.connect(keys.mongo.uri);

const SERVER_PORT = process.env.PORT || 5000;

app.listen(SERVER_PORT, () => console.log(`Server application running on port ${SERVER_PORT}`));
