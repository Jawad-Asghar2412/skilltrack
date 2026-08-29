# SkillTrack — Learning & Study Session Tracker

> A full-stack MERN application designed to help learners organize, track, and manage their learning sessions in a simple and structured way.

**SkillTrack** is a modern learning session management application built with the **MERN stack**. It allows users to create, manage, update, and track their study sessions while keeping their learning activities organized in one place.

The project demonstrates practical implementation of **React, Redux Toolkit, Node.js, Express.js, MongoDB, Mongoose, REST APIs, and responsive UI development**.

---

## ✨ Features

### 🔐 Authentication

* Simple login interface for accessing the application.
* Demo user credentials are available for testing.
* User authentication state is persisted using LocalStorage.
* Automatic navigation to the sessions dashboard after successful login.

### 📚 Session Management

SkillTrack provides complete CRUD functionality for learning sessions:

* Create new learning sessions.
* View all saved sessions.
* Edit existing sessions.
* Delete sessions.
* Mark sessions as completed or incomplete.
* Add notes to individual sessions.
* Track the number of hours spent learning.
* Organize sessions by topic.

### 🏷️ Topic Categories

Sessions can be organized into different learning categories:

* **React**
* **Node**
* **Database**
* **Other**

This makes it easier to keep different areas of learning structured and manageable.

### ✅ Validation

The application includes validation on both frontend and backend.

* Session titles must contain at least **3 characters**.
* Learning duration must be between **1 and 24 hours**.
* Required fields are validated before creating or updating sessions.
* Backend validation is handled through Mongoose schemas and Express routes.

### ⚡ State Management

The frontend uses **Redux Toolkit** for centralized state management.

It handles:

* Authentication state
* Session data
* Loading states
* Error states
* Asynchronous API operations

`createAsyncThunk` is used for communicating with the backend API.

### 🎨 Responsive UI

* Clean and modern interface.
* Custom CSS without external UI frameworks.
* Responsive layout for different screen sizes.
* Dark-themed visual design.
* Reusable React components for maintainability.

### 🚨 Error Handling

The backend includes custom error-handling middleware for:

* 404 Not Found errors
* Validation errors
* Server errors
* Invalid session requests

The frontend also provides appropriate loading and error states while communicating with the API.

---

## 🛠️ Tech Stack

### Frontend

* **React**
* **Vite**
* **Redux Toolkit**
* **React Router DOM**
* **Axios**
* **JavaScript (ES6+)**
* **CSS3**

### Backend

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **CORS**
* **Dotenv**

### Development Tools

* Git & GitHub
* VS Code
* MongoDB Atlas
* npm

---

## 🏗️ Project Architecture

SkillTrack follows a separated frontend/backend architecture.

```text
                    ┌─────────────────────┐
                    │       User          │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React Frontend    │
                    │      + Vite         │
                    └──────────┬──────────┘
                               │
                    ┌──────────▼──────────┐
                    │   Redux Toolkit     │
                    │   State Management   │
                    └──────────┬──────────┘
                               │
                         Axios / REST API
                               │
                               ▼
                    ┌─────────────────────┐
                    │  Express.js Server  │
                    │      + Node.js      │
                    └──────────┬──────────┘
                               │
                         Mongoose ODM
                               │
                               ▼
                    ┌─────────────────────┐
                    │      MongoDB        │
                    │       Database      │
                    └─────────────────────┘
```

---

## 📁 Project Structure

```text
skilltrack/
│
├── client/
│   ├── src/
│   │   ├── api/
│   │   │   └── axios configuration
│   │   │
│   │   ├── app/
│   │   │   └── Redux store configuration
│   │   │
│   │   ├── components/
│   │   │   └── Reusable UI components
│   │   │
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   └── sessions/
│   │   │
│   │   ├── pages/
│   │   │   ├── Login
│   │   │   ├── Sessions
│   │   │   ├── Edit Session
│   │   │   └── 404 Not Found
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   │   └── db.js
│   │
│   ├── middleware/
│   │   ├── errorHandler.js
│   │   └── logger.js
│   │
│   ├── models/
│   │   └── Session.js
│   │
│   ├── routes/
│   │   └── sessions.js
│   │
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🔄 Application Workflow

The application follows a straightforward learning-session workflow:

1. The user opens the application.
2. The user logs in using the available credentials.
3. After successful authentication, the user is redirected to the Sessions page.
4. Existing learning sessions are fetched from the backend.
5. The user can create a new session by providing:

   * Session title
   * Topic
   * Learning duration
6. The frontend sends the request to the Express REST API.
7. Express validates and processes the request.
8. Mongoose stores the session in MongoDB.
9. The updated data is returned to the frontend.
10. Redux updates the application state and the UI reflects the changes.

---

## 🔌 REST API

The backend exposes RESTful endpoints for managing learning sessions.

| Method   | Endpoint            | Description                |
| -------- | ------------------- | -------------------------- |
| `GET`    | `/api/sessions`     | Retrieve all sessions      |
| `GET`    | `/api/sessions/:id` | Retrieve a single session  |
| `POST`   | `/api/sessions`     | Create a new session       |
| `PUT`    | `/api/sessions/:id` | Update an existing session |
| `DELETE` | `/api/sessions/:id` | Delete a session           |

### Example Session Object

```json
{
  "title": "React Fundamentals",
  "topic": "React",
  "hours": 3,
  "notes": "Reviewed components and hooks",
  "completed": true
}
```

---

## 🗄️ Database Model

Each learning session is stored in MongoDB using a Mongoose schema.

### Session Fields

| Field       | Type    | Description                  |
| ----------- | ------- | ---------------------------- |
| `title`     | String  | Name of the learning session |
| `topic`     | String  | Learning category            |
| `hours`     | Number  | Duration of the session      |
| `notes`     | String  | Additional session notes     |
| `completed` | Boolean | Completion status            |
| `createdAt` | Date    | Session creation timestamp   |
| `updatedAt` | Date    | Last update timestamp        |

---

## ⚙️ Getting Started

Follow the steps below to run SkillTrack locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Jawad-Asghar2412/skilltrack
cd skilltrack
```

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

### 3. Configure Environment Variables

Create a `.env` file inside the `server` directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

Replace `your_mongodb_connection_string` with your MongoDB Atlas connection string.

### 4. Start the Backend

For development:

```bash
npm run dev
```

Or start normally:

```bash
npm start
```

The backend will run on:

```text
http://localhost:3000
```

### 5. Install Frontend Dependencies

Open a new terminal:

```bash
cd client
npm install
```

### 6. Start the Frontend

```bash
npm run dev
```

Vite will provide the local development URL in the terminal.

---

## 🔑 Demo Login

For testing purposes, the application includes a demo account:

```text
Email: student@uog.edu.pk
Password: 12345
```

> **Note:** The authentication system in this project is intended for demonstration and learning purposes and should not be considered production-grade authentication.

---

## 🧪 Validation & Error Handling

SkillTrack implements validation at multiple levels to improve application reliability.

### Frontend Validation

The frontend prevents invalid session data from being submitted and provides appropriate UI feedback.

For example:

* Session title must be at least 3 characters.
* Hours must be between 1 and 24.
* Submit actions are disabled when required input is invalid.

### Backend Validation

The Express server validates incoming requests before storing data in MongoDB.

Mongoose also enforces schema-level validation to maintain data consistency.

Custom middleware handles unexpected routes and server-side errors.

---

## 🎯 Learning Objectives

This project was developed to demonstrate practical understanding of full-stack web development.

Through SkillTrack, the following concepts are implemented:

* Building a complete MERN application.
* Creating RESTful APIs with Express.js.
* Connecting Node.js applications with MongoDB.
* Designing schemas with Mongoose.
* Managing global state using Redux Toolkit.
* Handling asynchronous API requests.
* Creating reusable React components.
* Implementing CRUD operations.
* Managing frontend and backend validation.
* Handling API errors gracefully.
* Structuring a scalable full-stack project.
* Using environment variables for configuration.
* Building responsive interfaces using custom CSS.

---

## 🚀 Future Improvements

The current version provides the core functionality required for managing learning sessions. Future versions could include:

* 🔐 JWT-based authentication and authorization.
* 👤 User-specific session management.
* 📊 Learning progress dashboards and statistics.
* 📈 Weekly and monthly learning analytics.
* 🔎 Search and filtering functionality.
* 🏆 Learning goals and achievement tracking.
* 🔔 Study reminders and notifications.
* 📅 Calendar-based session planning.
* 🌙 User-controlled theme preferences.
* ☁️ Production deployment with CI/CD.
* 🧪 Automated frontend and backend testing.

---

## 🔒 Security Considerations

For a production-ready version, additional security measures should be implemented, including:

* Secure password hashing.
* JWT access and refresh tokens.
* Protected API routes.
* Input sanitization.
* Rate limiting.
* Secure HTTP headers.
* Production environment configuration.
* Proper authentication and authorization.

The current authentication implementation is intentionally simplified for demonstration purposes.

---

## 📌 Project Highlights

**SkillTrack** showcases how a modern frontend can communicate with a backend REST API while maintaining clean separation of responsibilities.

The project combines:

> **React + Redux Toolkit + Express + MongoDB + Mongoose**

to create a practical learning management experience.

The architecture is designed to keep UI components, state management, API communication, database models, and server routes organized and maintainable.

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

To contribute:

1. Fork the repository.
2. Create a new feature branch.
3. Make your changes.
4. Commit your changes.
5. Push the branch to your repository.
6. Open a Pull Request.

---

## 📄 License

This project is created for **educational and demonstration purposes**.

You are free to modify and extend the project for learning, experimentation, and portfolio development.

---

## 👨‍💻 Author

**Jawad Asghar**

Full-Stack Development Project

---

Built using the MERN Stack
