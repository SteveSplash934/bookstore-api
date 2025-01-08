# 📚 Bookstore REST API

A RESTful API for managing books, built with **TypeScript, Node.js, Express.js, and MongoDB**.

## 📦 Features

- **User Authentication:** JWT-based authentication.
- **Book Management:** Create, Read, Update, and Delete (CRUD) books.
- **MongoDB Integration:** Using Mongoose for schema and data management.
- **TypeScript:** Strongly typed backend development.
- **Security:** Basic security practices with Helmet and CORS.

---

## 📁 Project Structure

```plaintext
📦 bookstore-api
├── 📂 public/                # UI files (integration coming)
├── 📂 src
│   ├── 📂 config             # Database and server configurations
│   ├── 📂 controllers        # Business logic (e.g., bookController.ts)
│   ├── 📂 models             # Mongoose models/schemas
│   ├── 📂 routes             # Express route handlers
│   ├── 📂 middlewares        # Authentication, error handling
│   ├── 📂 services           # Reusable business logic (e.g., bookService.ts)
│   ├── 📂 utils              # Utility functions/helpers
│   ├── .env                  # Environment variables
│   └── index.ts              # Entry point for the API
├── 📂 tests                  # Unit and integration tests
├── tsconfig.json             # TypeScript config file
├── package.json              # Project dependencies
├── nodemon.json              # Nodemon config file
├── .gitignore                # Git ignored files
├── README.md                 # Project documentation
```

## config controllers models routes middlewares services utils

## 🚀 **Getting Started**

### **1. Clone the Repository**

```bash
git clone https://github.com/SteveSplash934/bookstore-api.git
cd bookstore-api
```

### **2. Install Dependencies**

```bash
npm install
```

### **3. Setup Environment Variables (`.env` file)**

Create a `.env` file in the src directory:

```plaintext
HOSTNAME=localhost
PORT=3000
DB_MANAGER=mongodb # Options: mysql, sqlite

DB_HOST=localhost
DB_USER=root
DB_PASS=12345
DB_NAME=bookstoreapi

# MongoDB (DEFAULT)
PORT=3000
MONGO_URI=mongodb://localhost:27017/bookstore
JWT_SECRET=your_jwt_secret_key
```

### **4. Run the Project**

- **Development Mode:**
  ```bash
  nodemon
  ```
- **Production Mode:**
  ```bash
  npm start
  ```

---

## 📡 **API Endpoints**

### **User Routes**

- `GET /user` - Default landing page for user (Protected)
- `POST /user/register` – Register a new user.
- `POST /user/login` – Log in and receive a token.

### **Book Routes (Protected)**

- `GET /api/books` – Retrieve all books.
- `POST /api/books` – Add a new book.
- `GET /api/books/:id` – Retrieve a single book.
- `PUT /api/books/:id` – Update book information.
- `DELETE /api/books/:id` – Remove a book.

---

## 🧪 **Running Tests**

```bash
npm test
```

---

## 📦 **Technologies Used**

- **TypeScript**
- **Node.js & Express.js**
- **MongoDB & Mongoose**
- **JWT Authentication**
- **Postman for Testing**

---

## 🛠️ **Contributing**

1. Fork the repository.
2. Create a new branch.
3. Commit changes.
4. Open a pull request.

---

## 📄 **License**

This project is licensed under the **MIT License**.
