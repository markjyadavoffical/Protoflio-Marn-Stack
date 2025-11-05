import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import { dbConfig } from "./config/DBConfig.js"
import dotenv from "dotenv"


dotenv.config({
    path:"./.env"
})

dbConfig()

const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded())



//secure routes 
import userRouter from "./routes/users.js"
app.use("/api/users",userRouter)
const  port = process.env.PORT 
app.listen(port, () => console.log(`Server running on port: ${port}`));