import { User } from "../models/user.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import bcrypt from "bcrypt"
import createToken from "../utils/createToken.js";


const risterUser = asyncHandler(async(req, res) => {
    const {name, email , password} = req.body;

    if(!name || !email , !password){
        res.status(401)
        throw new Error("all fileds are requred")
    }

    console.log(email)

    const salt  = await bcrypt.genSalt(10)
    const hashpassword = await bcrypt.hash(password, salt)
    const existuser = await User.findOne({email})
    if(existuser){
        res.status(401)
        throw new Error("user aleary exists")
    }
    const createUser =new User({
        name,
        email,
        password:hashpassword
    })

      try {
        await createUser.save()
        createToken(res,createUser._id)
        res.status(201).json({
           _id:createUser._id,
           name:createUser.name,
           email:createUser.email
        })
      } catch (error) {
        res.status(401);
        throw new Error("Invlaid data")
      }
   
  
})


const LoginUser = asyncHandler(async(req, res) => {
     const { email, password } = req.body;

  console.log(email);
  console.log(password);

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (isPasswordValid) {
      createToken(res, existingUser._id);

      res.status(201).json({
        _id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
        isAdmin: existingUser.isAdmin,
      });
      return;
    }
  }
})


const LogoutUser = asyncHandler(async(req, res) => {
    res.cookie("jwt", "", {
       httyOnly: true,
    expires: new Date(0),
    })

     res.status(200).json({ message: "Logged out successfully" });
})
export{
   risterUser,
   LoginUser,
   LogoutUser
}