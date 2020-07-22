const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = new express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.get('/', (req: any, res: any) => {
  res.sendFile(path.resolve(__dirname, 'pages/index.html'));
});

require('./routes/tyag.routes.js')(app);

app.listen(4000, () => {
  console.log('App listening on port 4000');
});
