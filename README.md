# SkillTrack - Skill Tracker Application

A full-stack MERN application for tracking learning sessions and study progress. Built with Express, MongoDB, React, Redux Toolkit, and pure CSS.

---

## Features

- **Authentication**: Simulated login system with demo user accounts (using LocalStorage persistence).
- **Session Management**: 
  - Create study sessions with title validation (min 3 chars).
  - Select topic category (`React`, `Node`, `Database`, `Other`).
  - Log duration (1–24 hours).
  - Toggle completion status.
  - Full Update (Edit) and Delete support.
- **RESTful API**: Node.js & Express server with MongoDB Atlas integration.
- **State Management**: Managed using Redux Toolkit with `createAsyncThunk`.
- **Pure Custom CSS**: Responsive dark mode interface built without external CSS frameworks.
- **Error Handling**: Custom express error middlewares and dynamic status displays.

---

## Tech Stack

- **Backend**: Node.js, Express.js, MongoDB, Mongoose, CORS, Dotenv
- **Frontend**: React, Vite, Redux Toolkit, React Router DOM, Axios
- **Styling**: Pure Custom CSS

---

## Project Structure

```text
skilltrack/
├── client/          # Vite + React Frontend
│   ├── src/
│   │   ├── api/     # Axios client configuration
│   │   ├── app/     # Redux Store setup
│   │   ├── components/ # Reusable UI components
│   │   ├── features/   # Auth and Sessions Redux slices
│   │   ├── pages/      # Route pages (Login, Sessions, Edit, 404)
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
└── server/          # Express + MongoDB Backend
    ├── config/      # Database connection
    ├── middleware/  # Custom Logger and Error Handler
    ├── models/      # Mongoose Schemas
    ├── routes/      # CRUD API routes
    ├── server.js    # Entry point
    └── package.json