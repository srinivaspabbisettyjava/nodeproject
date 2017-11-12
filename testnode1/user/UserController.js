var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb');
var db = null;
MongoClient.connect('mongodb://localhost:27017/test',function (error,dbm) {
   if(error) throw  error;
    db = dbm;
});


router.use(bodyParser.urlencoded({extended: true})); // encoded




router.post('/clickTaskStatus', function (req, res) {

    db.collection("jsondatas").insert(req.body, function (err, jsond) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        res.status(200).send(jsond);
    });

});




// GETS A SINGLE USER FROM THE DATABASE


module.exports = router;