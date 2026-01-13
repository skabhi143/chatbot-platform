import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import authRoutes from "./routes/authRoutes.js"
import projectRoutes from "./routes/projectRoutes.js"
import promptRoutes from "./routes/promptRoutes.js"
import chatRoutes from "./routes/chatRoutes.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/projects", projectRoutes)
app.use("/api/projects/:projectId/prompts", promptRoutes)
app.use("/api/projects/:projectId/chat", chatRoutes)

app.get("/", (req, res) => {
  res.send("Backend running")
})

app.listen(process.env.PORT, () => {
  console.log("Server started")
})
