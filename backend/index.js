import express from "express"
import { connectDB } from "./db/connectDB.js"
import dotenv from "dotenv"
import authRoute from "./routes/auth.route.js"
import cookieParser from "cookie-parser"



dotenv.config()



const app = express()

const PORT = process.env.PORT || 5000

//global middlewares

app.use(express.json())   // allows us to parse incoming requests : req.body
app.use(cookieParser())   //allows us to parse incoming cookies


app.use("/api/v1/auth", authRoute)



app.listen(PORT, () => {
    connectDB()
    console.log(`Server is listening on PORT: ${PORT}`);
})