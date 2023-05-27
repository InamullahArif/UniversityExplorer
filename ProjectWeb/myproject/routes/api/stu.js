var express = require("express");
let router = express.Router();
var { student } = require("../../models/stuModel");
const auth = require("../../middlewares/Authh");
const validateStudent = require("../../middlewares/validateStu");
const admin = require("../../middlewares/admin");
const validateLoginUser = require("../../middlewares/validateUser");

router.get(
  "/",
  /*auth,admin*/ async (req, res) => {
    let stu = await student.find();
    res.send(stu);
  }
);
router.delete("/:id" /*auth,admin,*/, async (req, res) => {
  let stu = await student.findByIdAndDelete(req.params.id);
  res.send(stu);
});

router.post("/", /*auth*/ validateStudent, async (req, res) => {
  console.log(req.user);
  let stu = new student();
  stu.name = req.body.name;
  stu.fName = req.body.fName;
  stu.phoneNo = req.body.phoneNo;
  stu.instituteName = req.body.instituteName;
  stu.currentCGPA = req.body.currentCGPA;
  await stu.save();
  res.send(stu);
});

router.put("/:id" /*auth,admin*/, validateStudent, async (req, res) => {
  let stu = await student.findById(req.params.id);
  stu.name = req.body.name;
  stu.fName = req.body.fName;
  stu.phoneNo = req.body.phoneNo;
  stu.institute = req.body.institute;
  stu.currentCGPA = req.body.currentCGPA;
  await stu.save();
  res.send(stu);
});

module.exports = router;
