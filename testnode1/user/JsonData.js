var mongoose = require('mongoose');


var JsonDataSchema = new mongoose.Schema({
    Operation:String,
    OneTransaction:String,
    ContinueOnError:String,
    objectType:String,
    key:String,
    callId:String,
    number:String,
    Region:String,
    dueData:Date,
    narrative:String,
    externalMemberId:String,
    reminderDate:String,
    startDate:String,
    taskActivityOption:String,
    taskPriority:String,


});


mongoose.model('JsonData', JsonDataSchema);

module.exports = mongoose.model('JsonData');