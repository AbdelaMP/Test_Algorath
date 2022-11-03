/* var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  let jsonResponse= {
    "Users" : [
      {User: 'User 1', id: 1, name: 'Carlos'},
      {User: 'User 2', id: 2, name: 'Manuel'},
      {User: 'User 3', id: 3, name: 'Pepe'},
      {User: 'User 4', id: 4, name: 'Marcos'},
    ]
  };
  res.json(jsonResponse);
});

module.exports = router; */



var express = require('express');
var dbAbstractionLayer = require('../public/javascripts/DbAbstractionLayer');

var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  
  dbAbstractionLayer.queryUsersCollection().then(response=>{
    res.json(response);
  }).catch(error=>{
    res.status(500).json({});
  });

});

module.exports = router;