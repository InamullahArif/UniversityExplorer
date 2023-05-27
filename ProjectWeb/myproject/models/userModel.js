const Joi = require("@hapi/joi");
var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    default: "user",
  },
});
userSchema.methods.generateHashedPassword = async function () {
  let salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
};

var User = mongoose.model("User", userSchema);

// function validateUser(data) {
//   const SchemaUser = Joi.object({
//     name: Joi.string().min(3).max(15).required(),
//     email: Joi.string().min(11).max(30).required(),
//     password: Joi.string().max(50).required(),
//     role: Joi.string().min(4).max(5),
//   });
//   return SchemaUser.validate(data, { abortEarly: false });
// }

function validateLoginUser(data) {
  const SchemaLogin = Joi.object({
    email: Joi.string().min(11).max(30).required(),
    password: Joi.string().max(50).required(),
  });
  return SchemaLogin.validate(data, { abortEarly: false });
}

module.exports.validate = validateLoginUser;
// module.exports.validate = validateUser;
module.exports.User = User;
