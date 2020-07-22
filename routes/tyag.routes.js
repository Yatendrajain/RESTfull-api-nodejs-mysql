module.exports = (app) => {
  const tyag = require('../controllers/tyag.controller.js');

  // Create a new Tyag
  app.post('/tyag', tyag.create);

  // // Retrieve all Tyag
  // app.get("/tyag", tyag.getAll)

  // Retrieve a single Tyag with createdate
  app.get('/tyag', tyag.findByDate);
};
