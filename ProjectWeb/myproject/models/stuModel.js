const Joi = require("@hapi/joi");
var mongoose = require("mongoose");
var studentSchema = mongoose.Schema({
  name: String,
  fName: String,
  phoneNo: String,
  instituteName: String,
  // email: String,
  // password: String,
  currentCGPA: Number,
});
function validateStudent (data){
  const SchemaStudent = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    fName: Joi.string().min(3).max(30).required(),
    phoneNo: Joi.string().min(11).max(12).required(),
    instituteName: Joi.string().min(3).max(15).required(),
    // email: Joi.string().min(11).max(30).required(),
    // password: Joi.string().max(50).required(),
    currentCGPA: Joi.number().min(0).max(4),
  });
  return SchemaStudent.validate(data,{abortEarly:false});
}
var student = mongoose.model("Student", studentSchema);
module.exports.validate = validateStudent;
module.exports.student = student;
