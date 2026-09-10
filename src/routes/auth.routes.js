const {Router} = require('express'); /* kyuki hum api app.js mein nhi bna rhe hai uske liye alg se
 routes folder bnaya hai toh hume firse express require krna hota hai usme bhi route require krna
  hota jo hum directly aise kr skte hai */

const authRouter = Router();

/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 */

authRouter.post("/register",);

module.exports=authRouter;