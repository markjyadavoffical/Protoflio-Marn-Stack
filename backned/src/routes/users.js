import express, { Router } from "express"
import { authantitic } from "../middlwere/authmiddlwere.js"
import { LoginUser, risterUser , LogoutUser} from "../controllers/user.controlles.js"


const router = Router()


router.route("/rister").post( risterUser)
router.route("/login").post(LoginUser)
router.route("/logout").post(LogoutUser)

export default router;