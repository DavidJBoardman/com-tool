var express = require('express');
var router = express.Router();

var todolist = [{title: "todo1", description: "desc1"}, {title: "todo2", description: "desc2"}, {title: "todo3", description: "desc3"}];

7/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { list: todolist, title: 'Communication tool' });
});

module.exports = router;
