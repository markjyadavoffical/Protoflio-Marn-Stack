import jwt from "jsonwebtoken"
import { asyncHandler } from "../utils/asyncHandler.js"
import { User } from "../models/user.models.js";


const authantitic = asyncHandler(async(req, res, next) => {
  let token ;
  token = req.cookies.id

  if(token){
    try {
        const decode = jwt.verify(token, process.env.JWT_Secret)
        req.user = await User.findById(decode.userId).select("-password")
        next()
    } catch (error) {
       res.status(401)
       throw new Error("no authrized no field")
    }
  }else{
    res.status(402);
    throw new Error("no authrized , no token")
  }
  
})


export{authantitic}