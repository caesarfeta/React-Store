const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
router.post("/buy",(req,res)=>{
  res.json({
    success: true,
    msg: 'buy'
  });
});
module.exports = router;