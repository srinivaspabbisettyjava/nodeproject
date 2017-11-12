var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var kafka = require('kafka-node'),
    Producer = kafka.Producer,
    client = new kafka.Client(),
    producer = new Producer(client);
var sqlDbInstance = require('mssql');

var config = {server: 'localhost', user: 'Owner', password: '', database: 'TaskInfo'};
router.use(bodyParser.urlencoded({extended: true}));
//const pool =  sqlDbInstance.connect('mssql://Owner@localhost/TaskInfo');
router.get('/producer', function (req, res) {
    var payloadString = new Array();
    sqlDbInstance.connect(config,function (error) {
       if(error)console.log(error);
       var request = new sqlDbInstance.Request();
       request.query('select * from abc',function (err,data) {
           if(error)console.log(err);
           console.log(data);
       });
        res.status(200).send("ok");
    });


});




module.exports = router;