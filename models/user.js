var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: { type: String },
  lastName: { type: String },
  password: { type: String }//,
 /*
  phone: { type: String },
  country: { type: String },
  gender: { type: String, enum:
    ['Male', 'Female']
  },
  LastLogin:  { type: String}
  */
});

module.exports = mongoose.model('User', userSchema);
