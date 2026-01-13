import { v4 as uuidv4 } from "uuid"

const projects = []

export const createProject = (req, res) => {
  const { name } = req.body

  const project = {
    id: uuidv4(),
    userId: req.user.id,
    name
  }

  projects.push(project)

  res.status(201).json(project)
}

export const getProjects = (req, res) => {
  const userProjects = projects.filter(p => p.userId === req.user.id)
  res.json(userProjects)
}
