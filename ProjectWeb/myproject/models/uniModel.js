const Joi = require("@hapi/joi");
var mongoose = require("mongoose");
var uniSchema = mongoose.Schema({
  name: String,
  loc: String,
  rating: Number,
  image: String,
  apply: String,
});
function validateUni(data) {
  const SchemaUni = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    loc: Joi.string().min(3).max(100).required(),
    rating: Joi.number().min(0).max(4).required(),
    image: Joi.required(),
    apply: Joi.required(),
  });
  return SchemaUni.validate(data, { abortEarly: false });
}
var institute = mongoose.model("Institute", uniSchema);
module.exports.validate = validateUni;
module.exports.institute = institute;
