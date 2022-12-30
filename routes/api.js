const router = require("express").Router();
const createUserMiddleware = require("../middleware/validateuser");
const Schemas = require("../validations/uservalidate");
createUserMiddleware(Schemas.createUserSchema);

const Talentmodel = require("../models/talentmodel");
const Fanmodel = require("../models/fanmodel");

router.post(
  "/fansignup",
  createUserMiddleware(Schemas.createUserSchema),
  async (req, res) => {
    try {
      const userdetails = new Fanmodel({
        username: req.body.username,
        email: req.body.email,
        firstname: req.body.firstname,
        password: req.body.password,
        lastname: req.body.lastname,
        timezone: req.body.timezone,
      });
      let saveduser = await userdetails.save();
      res.json({ data: "fan created " });
    } catch (err) {
      res.json({ err: err });
    }
  }
);

router.post(
  "/talentsignup",
  createUserMiddleware(Schemas.createUserSchema),
  async (req, res) => {
    try {
      const userdetails = new Talentmodel({
        username: req.body.username,
        email: req.body.email,
        firstname: req.body.firstname,
        password: req.body.password,
        lastname: req.body.lastname,
        timezone: req.body.timezone,
      });
      let saveduser = await userdetails.save();
      res.json({ data: "talent created successfully" });
    } catch (err) {
      res.json({ err: err });
    }
  }
);
module.exports = router;
