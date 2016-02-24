var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');


var Comment = new Schema({
	Visitor: String,
	Comment: String,
	CreateDate: String
})
// methods ======================


mongoose.model('Comment', Comment);
mongoose.connect('mongodb://my-website:asdf1234@ds051543.mongolab.com:51543/my-website');
