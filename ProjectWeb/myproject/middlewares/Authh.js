const jwt = require("jsonwebtoken");
const config = require("config");
const {User} = require("../models/userModel");
async function Auth(req, res, next) {
  let token = req.header("x-auth-token");
  if (!token) return res.status(400).send("Token not provided");
  try{
  let user = jwt.verify(token,config.get("jwtPrivateKey"));
  req.user = await User.findById(user._id);
  } catch(err){
    return res.status(401).send("Invalid token");
  }
  next();
}
module.exports = Auth;
