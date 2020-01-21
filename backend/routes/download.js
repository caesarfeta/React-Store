const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
router.route("/:file").get((req,res)=>{
  // check to see if user has puh-puh-payed!
  var file=`${__dirname}/../${req.originalUrl}`;
  res.download(file);
});
module.exports = router;