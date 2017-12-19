const app = require('express')();
require('./services/passport.js');
require('./routes/authRoutes')(app);

const SERVER_PORT = process.env.PORT || 5000;

app.listen(SERVER_PORT, () => console.log(`Server application running on port ${SERVER_PORT}`));
