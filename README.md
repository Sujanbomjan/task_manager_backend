# task_manager_backend
```
├── config
│   └── db.js
├── controllers
│   ├── authController.js
│   └── taskController.js
├── middleware
│   └── authMiddleware.js
├── models
│   ├── taskModel.js
│   └── userModel.js
├── package.json
├── package-lock.json
├── README.md
├── routes
│   ├── authRoutes.js
│   └── taskRoutes.js
└── server.js
```
# Task Manager API
This is a **Node.js-based backend application** that handles user authentication and task management. The project is designed to offer a simple RESTful API for user registration, login, and task CRUD operations. The backend uses PostgreSQL as the database, bcrypt for password hashing, and JWT for authentication.

---

## Project Structure

### **Directory Breakdown:**

#### 1. **`config/`**
   - **`db.js`**: Contains the database connection logic using `pg` (PostgreSQL). This file is responsible for connecting the application to the database and setting up any necessary database configurations.

#### 2. **`controllers/`**
   - **`authController.js`**: Manages authentication-related operations, such as handling user registration and login. It validates user inputs, hashes passwords, and generates JSON Web Tokens (JWT) for authentication.
   - **`taskController.js`**: Handles task-related operations, including creating, updating, deleting, and retrieving tasks from the database.

#### 3. **`middleware/`**
   - **`authMiddleware.js`**: A middleware used to verify the JWT token provided by the user during login to secure the routes. It ensures only authenticated users can access certain resources.

#### 4. **`models/`**
   - **`taskModel.js`**: Defines the structure for task-related database operations. It typically contains functions for querying and manipulating tasks in the database.
   - **`userModel.js`**: Defines the structure for user-related database operations, such as creating a new user, checking for existing users, and validating credentials during login.

#### 5. **`routes/`**
   - **`authRoutes.js`**: Contains the routing logic for authentication endpoints, such as user registration and login. It maps HTTP requests to the appropriate controller actions (e.g., `authController.js`).
   - **`taskRoutes.js`**: Defines routes for task-related functionality. It maps routes like `/tasks` to the corresponding functions in the `taskController.js`.

#### 6. **`server.js`**
   - The entry point of the application, where the Express server is initialized, and middleware and routes are set up. It listens on a specified port and starts the server.

---

## How it Works

### **User Authentication:**
- The `authController.js` is responsible for registering new users and logging them in.
- The `authMiddleware.js` ensures that all routes requiring authentication check for a valid JWT token.

### **Task Management:**
- The `taskController.js` handles CRUD operations for tasks. Users can add, update, or delete tasks, and the routes for these actions are defined in `taskRoutes.js`.

### **Database:**
- All data related to users and tasks are stored in a PostgreSQL database, and .env is also provided with the real data
