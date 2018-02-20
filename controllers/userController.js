var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.findAll = function(req, res){
	console.log('GET /users');

    User.find(function(err, users){
        if(err) res.send(500, err.message);
		res.status(200).jsonp(users);
    });
}

//POST - Insert a new User in the DB
exports.addUser = function(req, res) {
	console.log('POST: ');
	console.log(req.body);

	var newUser = new User({
		name:     req.body.name,
		lastName: req.body.lastName,
		password: req.body.password
	});

	newUser.save(function(err, newUser) {
		if(err) return res.send(500, err.message);
        res.status(200).jsonp(newUser);
	});
};


//GET - Return a user with specified ID
exports.findById = function(req, res) {
	console.log('GET /user/' + req.headers.id);

	User.findById(req.headers.id, function(err, findUser) {
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(findUser);
	});
};

