var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var kafka = require('kafka-node');
Producer = kafka.Producer,
    client = new kafka.Client(),
    producer = new Producer(client);

var Consumer = kafka.Consumer;
var options = {
    autoCommit : true,
    fetchMaxWaitMs : 1000,
    fetchMaxBytes: 1024*1024*2
};
var topics = [{topic: 'test-topic'}];
var lastMessage = [];
var consumer =  new Consumer(client,topics,options);

consumer.on('message',function(message){
    //lastMessage.push({'message':'test message','time':new Date()});
    lastMessage.push({'message':JSON.parse(message.value), 'time':new Date()});
    console.log(message.value);
});


router.get('/consumer', function (req, res) {

    res.status(200).send(JSON.parse(JSON.stringify(lastMessage)));
   lastMessage=[];

});

module.exports = router;