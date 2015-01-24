var express = require('express'),
	router = express.Router()

router.get('/',function(req,res,next){
	res.render('admin')
	if (next) {
		next()
	}
})

module.exports = router