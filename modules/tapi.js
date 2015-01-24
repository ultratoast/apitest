var mongoose = require('mongoose'),
	config = require('./../config/config'),
	db = mongoose.connect(config.db.uri,config.db.options,function(err){
		if (err) {
			console.error('Mongo connection fucked')
			console.log(err)
		}
	})

var tapi = function() {
	this.getstuff = function(type,query) {
		if (type === 'pics') {
			return null//tumblr stuff
		} else if (type === 'posts') {
			return null//tumblr stuff
		} else {
			return 'error, missing type!'
		}
	}
}
module.exports = tapi