const mongoose = require("mongoose");

const talentSchema = new mongoose.Schema({
  firstname: { required: true, type: String },
  lastname: { required: true, type: String },
  username: { required: true, type: String },
  email:{required:true,type:String},
  timezone:{required:true,type:String},
  password: { type: String, required: true },
});

/* --------------------------------- sjdhaad -------------------------------- */
module.exports = mongoose.model("Talent", talentSchema);
