import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import routers from "./routes/index"

dotenv.config()

const app =express();
app.use(express.json());
app.use(cors())
app.use(routers)

const PORT = process.env.PORT || 7000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
