var express = require('express');

var PORT = process.env.PORT || 5050;

var app = express();

app.use(express.static('public'));

app.listen(5050, () => {
  console.log(`Listening on port ${PORT}`);
});
