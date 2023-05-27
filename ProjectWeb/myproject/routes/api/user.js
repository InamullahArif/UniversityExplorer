var express = require("express");
var router = express.Router();
var bcrypt = require("bcryptjs");
var config = require("config");
var jwt = require("jsonwebtoken");
const _ = require("lodash");
const validateLoginUser = require("../../middlewares/validateUser");
var { User } = require("../../models/userModel");
router.post("/login", validateLoginUser, async function (req, res, next) {
  let findLogin = await User.findOne({ email: req.body.email });
  if (!findLogin) return res.status(400).send("User not registered ");
  let userValid = await bcrypt.compare(req.body.password, findLogin.password);
  if (!userValid) return res.status(401).send("Invalid Password");
  let userToken = jwt.sign(
    {
      _id: findLogin._id,
      name: findLogin.name,
      role: findLogin.role,
    },
    config.get("jwtPrivateKey")
  );
  res.send(userToken);
});

router.post("/register", async function (req, res, next) {
  let find1 = await User.findOne({ email: req.body.email });
  if (find1)
    return res.status(400).send("User with given email id already exists");
  let user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;
  user.role = req.body.role;
  await user.generateHashedPassword();
  await user.save();
  let userToken = jwt.sign(
    {
      _id: user._id,
      name: user.name,
      role: user.role,
    },
    config.get("jwtPrivateKey")
  );
  let datatoReturn = {
    name: user.name,
    email: user.email,
    token: user.token,
  };
  res.send(datatoReturn);
});

module.exports = router;
