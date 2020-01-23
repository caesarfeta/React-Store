const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../models/user.model");
const _ = require("lodash");
router.use(require('../tokenChecker'));
router.post("/buy",(req,res)=>{
  User.updateOne(
    {_id:req.body.id},
    {$set: {purchased:_.map(req.body.itms,function(o){ 
      return o[0].id
    })}}
  )
  .then(json=>{
    return res.json({
      success: true
    })
  })
  .catch(err=>{
    return res.status(400).json({err:err})
  })
});
module.exports=router;