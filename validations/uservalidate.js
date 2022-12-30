const Joi=require('joi')

const Schemas = {
    createUserSchema:Joi.object().keys({ 
    username: Joi.string().min(3).max(20).required(),
    email: Joi.string().email().required(), 
    password: Joi.string().required().min(5).max(10),
    firstname: Joi.string().min(3).max(20).required(),
    lastname:Joi.string().min(3).max(20).required(),
    timezone:Joi.required(),
  })};

  module.exports=Schemas 