const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
router.use(require('../tokenChecker'))
router.post("/buy",(req,res)=>{
  return res.json({
    success: true,
    message: 'buy'
  })
});
module.exports=router;