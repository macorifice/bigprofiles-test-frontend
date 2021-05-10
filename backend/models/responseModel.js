var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var responseSchema = new Schema({
	'jobId' : Number,
	'data' : Date,
	'value' : Number,
	'status' : String,
	'responseTime': Number
});

module.exports = mongoose.model('response', responseSchema);
