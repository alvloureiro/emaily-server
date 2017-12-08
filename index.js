const express = require('express');
const app = express();

const requestHandler = (request, response) => {
  response.send({
    hi: 'there'
  });
}

app.get('/', requestHandler);

const SERVER_PORT = process.env.PORT || 5000;

app.listen(SERVER_PORT, () => console.log(`Server application running on port ${SERVER_PORT}`));
