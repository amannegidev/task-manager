# Task Tracker Application

A full-stack web app to create and manage projects and tasks with user authentication.

## Features

- User signup and login with JWT authentication
- Create, update, and delete projects (limit: 4 per user)
- Add and manage tasks with status tracking (To Do, In Progress, Completed)
- Responsive UI built with React and TailwindCSS

## Tech Stack

- Backend: ExpressJS, MongoDB, Mongoose, JWT
- Frontend: ReactJS, TailwindCSS, React Toastify

## Getting Started

### Prerequisites
- Node.js v14+
- MongoDB (local or Atlas)
- Git

### Setup

1. Clone the repo:

   ```bash
   git clone https://github.com/<your-username>/task-tracker-app.git
   cd task-tracker-app
Backend:
cd backend
npm install
Create a .env file with:
JWT_SECRET=your_jwt_secret
DB_URI=your_mongodb_uri
Start the server:
npm start

Frontend:
cd ../frontend
npm install
npm run dev

BY:AMAN NEGI
   
