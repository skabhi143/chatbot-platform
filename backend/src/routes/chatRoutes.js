import express from "express"
import { chatWithAgent } from "../controllers/chatController.js"
import authMiddleware from "../middleware/authMiddleware.js"

const router = express.Router({ mergeParams: true })

router.post("/", authMiddleware, chatWithAgent)

export default router
