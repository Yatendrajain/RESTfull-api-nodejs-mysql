const sql = require('./tyag.db.js');

// constructor
const Tyag = function (tyag) {
  this.tyagname = tyag.tyagname;
  this.createdate = tyag.createdate;
};

//Creating New task
Tyag.create = (newTyag, result) => {
  sql.query('INSERT INTO tyaglist SET ?', newTyag, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    console.log('created Tyag: ', { id: res.insertId, ...newTyag });
    result(null, { id: res.insertId, ...newTyag });
  });
};

//Getting all task
Tyag.getAll = (result) => {
  sql.query('SELECT * FROM tyaglist', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }

    console.log('Tyag: ', res);
    result(null, res);
  });
};

//single task by date
Tyag.findByDate = (result) => {
  sql.query(
    'SELECT * FROM tyaglist WHERE createdate = CURRENT_DATE',
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }

      console.log('Tyag: ', res);
      result(null, res);
    },
  );
};

module.exports = Tyag;
