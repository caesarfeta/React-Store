const jwt = require('jsonwebtoken');
require('dotenv').config();
module.exports=(req,res,next)=>{
  const token=req.body.token || req.query.token || req.headers['x-access-token'];
  console.log( token );
  if (token){
    // verifies secret and checks exp
    jwt.verify(token,process.env.PASS_KEY,
      function( err, decoded ){
        if (err){
            return res.status(401).json({
              "error": true,
              "message":'Unauthorized access.' 
            });
        }
      req.decoded = decoded;
      next();
    });
  }
  else {
    return res.status(403).send({
        "error": true,
        "message": 'No token.'
    });
  }
}