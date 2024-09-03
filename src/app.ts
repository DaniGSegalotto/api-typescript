// app.ts
import express, {Application} from "express"
import {AppDataSource} from "./data-source"
import cors from "cors"
import utils from "./routes/utilsRoute"
import usuarioRoute from "./routes/usuarioRoute"

const app: Application = express()
app.use(express.json())
app.use(cors())

app.use("/api", utils)
app.use("/api", usuarioRoute)

export default app