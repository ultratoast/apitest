 var express = require('express'),
	router = express.Router(),
	tapi = require('./../modules/tapi')


router.get('/',function(req,res,next){
	res.send('this is the api root')
	if (next) {
		next()
	}
})

router.get('/pics/:category',function(req,res,next){
	res.send(tapi.getstuff('pics',req.params.category))
	if (next) {
		next()
	}
})

router.get('/posts/:category',function(req,res,next){
	res.send(tapi.getstuff('posts',req.params.category))
	if (next) {
		next()
	}
})

module.exports = router