import express from "express"
import cors from "cors"
import { connectDb } from "./config/db.js"
import foodRouter from "./routers/foodRoute.js"
import userRouter from "./routers/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routers/cartRoute.js"



//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDb()

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart",cartRouter)

app.get("/" ,(req, res)=> {
    res.send("Api working")
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
})