var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var responseSchema = new Schema({
	'value' : Number,
	'status' : String,
	'responseTime': Number
});

module.exports = mongoose.model('response', responseSchema);
