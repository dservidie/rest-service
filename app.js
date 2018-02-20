var express = require("express");
var app = express();
var bodyParser  = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require('mongoose');

var port = 3000

// Connection to DB
console.log("SETTING UP THE SERVER");

mongoose.connect('mongodb://localhost:27017/happypoints', function(err) {
  if(err) throw err;
  console.log('Connected to Database');
});



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var models   = require('./models/user.js');
var userCtrl = require('./controllers/userController.js');

var usersRouter = express.Router();
usersRouter.route('/users')
  .get(userCtrl.findAll)
  .post(userCtrl.addUser);
app.use(usersRouter);

var userRouter = express.Router();
userRouter.route('/user')
  .get(userCtrl.findById);
app.use(userRouter);


app.listen(port, function() {
  console.log("Node server running on http://localhost:" + port);
});

console.log("SERVER UP");

