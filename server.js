let express = require('express');

let PORT = process.env.PORT || 5050;

let app = express();

app.use(express.static('public'));

app.listen(5050, () => {
  console.log(`Listening on port ${PORT}`);
});
