const express = require('express');
const app = express();

const requestHandler = (request, response) => {
  response.send({
    hi: 'there'
  });
}

app.get('/', requestHandler);
app.listen(5000, () => console.log('Server application running on port 5000'));
