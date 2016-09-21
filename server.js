const express = require('express');
const app = express();

app.route('/')
  .get((request, response) => { //Simply for testing. No idea what to send back, otherwise.
    response.send('Testies!');
  });

let server = app.listen(91, () => { //Change that number right there to change the port that the server listens on.
  let host = server.address().address;
  let port = server.address().port;

  console.log('Server opened on port ' + port + '.');
})
