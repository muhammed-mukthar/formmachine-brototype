const router=require('express').Router()
const createUserMiddleware = require("../middleware/validateuser");
const Schemas = require("../validations/uservalidate");
createUserMiddleware(Schemas.createUserSchema)
const Usermodel=require('../models/usermodel')
router.post('/',createUserMiddleware(Schemas.createUserSchema),async(req,res)=>{
try{
    const userdetails =  new Usermodel({
        username: req.body.username,
        email: req.body.email,
        firstname: req.body.firstname,
        password: req.body.password,
        lastname:req.body.lastname,
        timezone:req.body.timezone
      });
    let saveduser=  await userdetails.save();
    res.json({data:'user created successfully'})

}catch(err){
    res.json({err:err})
}
  
})
module.exports = router;