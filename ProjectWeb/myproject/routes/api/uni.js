var express = require("express");
let router = express.Router();
var { institute } = require("../../models/uniModel");
const validateUniversity = require("../../middlewares/validateUni");
const auth = require("../../middlewares/Authh");
const admin = require("../../middlewares/admin");
router.get("/",/*auth,admin*/async (req, res) => {
  let unis = await institute.find();
  res.send(unis);
});
router.delete("/:id",/*auth,admin*/ async (req, res) => {
  let unis = await institute.findByIdAndDelete(req.params.id);
  return res.send(unis);
});
router.post("/", /*auth, admin*/validateUniversity, async (req, res) => {
  let unis = new institute();
  unis.name = req.body.name;
  unis.loc = req.body.loc;
  unis.rating = req.body.rating;
  unis.image = req.body.image;
  unis.apply = req.body.apply;
  await unis.save();
  res.send(unis);
});
router.put("/:id", /*auth, admin*/validateUniversity, async (req, res) => {
  let unis = await institute.findById(req.params.id);
  unis.name = req.body.name;
  unis.loc = req.body.loc;
  unis.rating = req.body.rating;
  unis.image = req.body.image;
  unis.apply = req.body.apply;
  await unis.save();
  return res.send(unis);
});

router.get("/:id", async (req, res) => {
  try {
    let unis = await institute.findById(req.params.id);
    if (!unis)
      return res.status(400).send("Product with given ID is not present!");
    return res.send(unis);
  } catch (err) {
    return res.status(400).send("Invalid ID");
  }
});
module.exports = router;
