export const chatWithAgent = (req, res) => {
  const { message } = req.body

  const reply = `AI response to: ${message}`

  res.json({ reply })
}
