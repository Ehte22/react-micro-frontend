import express, { NextFunction, Request, Response } from "express"
import mongoose from "mongoose"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import auth_router from "./routes/auth.routes"

dotenv.config()

const app = express()

app.use(express.json())
app.use((cors({
    origin: "https://react-micro-frontend-zeta.vercel.app",
    credentials: true
})))
app.use(cookieParser())

app.get('/', (req: Request, res: Response) => {
    res.redirect(301, '/auth');  // 301 is for permanent redirection
});

app.use("/api/v1/auth", auth_router)

app.use("*", (req: Request, res: Response) => {
    res.status(404).json({ message: "Resource Not Found" })
})

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: "something went wrong", error: err })
})

mongoose.connect(process.env.MONGO_URL || "")

const PORT = process.env.PORT || 5000
mongoose.connection.once("open", () => {
    console.log("Mongo DB Connected");
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    })
})
