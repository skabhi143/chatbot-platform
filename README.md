# Chatbot Platform – Software Engineer Intern Assignment

This repository contains a backend implementation of a minimal chatbot platform built as part of the Software Engineer Intern assignment.

The platform supports user authentication, project/agent creation, prompt management, and a chat interface.

---

## 🚀 Features

- User registration and login
- JWT-based authentication
- Secure user-specific routes
- Project / Agent creation per user
- Prompt storage per project
- Chat API per project

---

## 🛠 Tech Stack

- Node.js
- Express.js
- JWT Authentication
- bcrypt
- dotenv

---

## 📂 Project Structure

backend/
- src/
  - controllers/
  - middleware/
  - routes/
  - index.js
- .gitignore
- package.json
- package-lock.json

---

## ⚙️ Setup Instructions

1. Clone the repository  
   git clone https://github.com/skabhi143/chatbot-platform.git

2. Go to backend folder  
   cd chatbot-platform/backend

3. Install dependencies  
   npm install

4. Start server  
   npm run dev

---

## 🔐 Authentication

JWT-based authentication is used to secure all protected routes.  
Each request requires a valid Bearer token.

---

## 📡 API Endpoints

- POST /api/auth/register  
- POST /api/auth/login  
- POST /api/projects  
- GET /api/projects  
- POST /api/projects/:projectId/prompts  
- POST /api/projects/:projectId/chat  

---

## Notes
This project focuses on backend functionality. APIs were tested locally and demonstrated via video. Environment variables are used for sensitive configuration such as JWT secrets.



## 👤 Author

S K Abhishek  
Software Engineer Intern Applicant
