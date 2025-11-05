import mongoose from "mongoose"



const dbConfig = async() => {
    try {
        const response =await  mongoose.connect(process.env.DB_URI)
         console.log("mongose was sussfully cointion ", response.connection.host)
    } catch (error) {
        console.log("mognose db error was comming",error)
        process.exit(1)
    }
}



export{dbConfig}