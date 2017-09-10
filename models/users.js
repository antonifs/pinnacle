const Sequelize = require('sequelize');
const database = require('../config/database');
const bcrypt = require('bcrypt-nodejs');

const Article = database.define("user", {
    email: { Sequelize.STRING, unique: true },
    password: Sequelize.STRING
});

// run this before a function before saving
userSchema.pre('save', function(next) {

  // get access to the user model
  const user = this;

  // generate salt and then run callback
  bcrypt.genSalt(10, function(err, salt){
    if (err) { return next(err); }

    // hash (encrypt) our password using the salt
    bcrypt.hash(user.password, salt, null, function(err, hash){
      if (err) { return next(err); }

      // ovewrite the plain text with encrypted password
      user.password = hash;

      // go ahead you now can save the user to model
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, callback){
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
    if (err) { return callback(err); }

    callback(null, isMatch);
  });
}

// Create model class
const ModelClass = mongoose.model('user', userSchema);

// Export model
module.exports = ModelClass;


// force: true will drop the table if it already exists
Article.sync({force: true}).then(() => {});