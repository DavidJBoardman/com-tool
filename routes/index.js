var express = require('express');
var router = express.Router();

var pg = require('pg');
pg.defaults.ssl = true;

/* GET home page. */
router.get('/', function(req, res, next) {

  var results = [];
pg.connect(process.env.DATABASE_URL, function(err, client) {
  if (err) throw err;
  client
    .query('SELECT * FROM sentences ORDER BY pk_id ASC')
    .on('row', function(row) {
      results.push(row);
    })
    .on('end', function(){
      res.render('index', { list: results, title: 'Communication Tool' });
    });
});

});

//post /insert
router.post('/insert', function(req, res) {
  pg.connect(process.env.DATABASE_URL, function(err, client) {
    if (err) throw err;
    client
      .query('INSERT INTO sentences (title, sentence) VALUES ($1, $2)', [req.body.title, req.body.sentence])
      .on('end', function(){
        res.send('success');
      });
  });
});

//Delete an item
router.post('/delete', function(req, res) {
   pg.connect(process.env.DATABASE_URL, function(err, client) {
      if (err) throw err;
      client
        .query('DELETE FROM sentences WHERE pk_id='+req.body.id)
        .on('end', function(){
          res.send('success');
        });
   });
});

//Update an item
router.post('/update', function(req, res) {
   pg.connect(process.env.DATABASE_URL, function(err, client) {
      if (err) throw err;
      client
        .query('UPDATE sentences SET done='+req.body.done+' WHERE pk_id='+req.body.id)
        .on('end', function(){
          res.send('success');
        });
    });
});

module.exports = router;
