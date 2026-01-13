import express from "express"
import { createPrompt, getPrompts } from "../controllers/promptController.js"
import authMiddleware from "../middleware/authMiddleware.js"

const router = express.Router({ mergeParams: true })

router.post("/", authMiddleware, createPrompt)
router.get("/", authMiddleware, getPrompts)

export default router
