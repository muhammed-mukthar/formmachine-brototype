const mongoose = require("mongoose");
const bcrypt =require("bcrypt") ;
const talentSchema = new mongoose.Schema({
  firstname: { required: true, type: String },
  lastname: { required: true, type: String },
  username: { required: true, type: String },
  email:{required:true,type:String},
  timezone:{required:true,type:String},
  password: { type: String, required: true },
});
// pre                                                                                                                                                                         
talentSchema.pre('save', function(next) {                                                                                                                                        
    if(this.password) {                                                                                                                                                        
        let salt = bcrypt.genSaltSync(10)                                                                                                                                     
        this.password  = bcrypt.hashSync(this.password, salt)                                                                                                                
    }                                                                                                                                                                          
    next()                                                                                                                                                                     
})            

talentSchema.methods.comparePassword = async function (
    passwordInput
  ) {

      return bcrypt.compare(passwordInput,this.password).catch((e)=>false)
  };
/* --------------------------------- sjdhaad -------------------------------- */
module.exports = mongoose.model("Talent", talentSchema);
