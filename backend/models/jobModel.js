var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var jobSchema = new Schema({
	'job' : Number,
	'data' : Date
});

module.exports = mongoose.model('job', jobSchema);
