import { v4 as uuidv4 } from "uuid"

const prompts = []

export const createPrompt = (req, res) => {
  const { content } = req.body

  const prompt = {
    id: uuidv4(),
    projectId: req.params.projectId,
    userId: req.user.id,
    content
  }

  prompts.push(prompt)

  res.status(201).json(prompt)
}

export const getPrompts = (req, res) => {
  const projectPrompts = prompts.filter(
    p => p.projectId === req.params.projectId && p.userId === req.user.id
  )

  res.json(projectPrompts)
}
