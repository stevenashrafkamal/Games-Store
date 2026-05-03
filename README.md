# 🎮 Games Store Backend API

This is the backend service for a Games Store e-commerce platform, developed as the final project for the NTI (National Telecommunication Institute) training program. It provides a robust and secure RESTful API for managing users, games, shopping carts, orders, and ratings.

## 🚀 Tech Stack

*   **Runtime Environment:** Node.js
*   **Web Framework:** Express.js
*   **Database:** MongoDB (with Mongoose ODM)
*   **Authentication & Security:** JWT (JSON Web Tokens) and bcrypt for password hashing
*   **File Uploads:** Multer (for handling game images)

## ✨ Key Features

*   **User Management:** Secure user registration, login, and profile management.
*   **Role-Based Access Control:** Custom middleware (`checkAdmin.js`) to separate standard user privileges from Admin operations.
*   **Games Catalog:** Full CRUD operations for managing the games inventory.
*   **Shopping Cart & Orders:** Endpoints for users to add items to their cart and securely checkout/place orders.
*   **Interactive Features:** Users can rate games and add them to their personal favorites list.
*   **Data Validation:** Request validation to ensure data integrity before hitting the database.

## 📂 Project Structure

```text
├── controllers/       # Business logic for all routes
├── dbconnection/      # MongoDB connection configuration
├── middleware/        # Custom middleware (Token verification, Admin checks, Error handling)
├── models/            # Mongoose schemas (User, Game, Order, Cart, etc.)
├── public/uploads/    # Static directory for uploaded image assets
├── routes/            # Express route definitions 
├── validation/        # Joi/express-validator schemas for input validation
└── app.js / index.js  # Application entry points
```

## 🛠️ Installation & Setup

To run this project locally, follow these steps:

**1. Clone the repository:**
```bash
git clone [https://github.com/stevenashrafkamal/Games-Store.git](https://github.com/stevenashrafkamal/Games-Store.git)
```
**2. Navigate to the project directory:**

```Bash
cd Games-Store
```
**3. Install dependencies:**

```Bash
npm install
```
**4. Environment Variables Configuration:**
Create a .env file in the root directory of the project and add your specific configuration:

PORT=3000
DB_CONNECTION=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Note: The .env file is ignored by Git for security purposes.

**5. Start the server:**

```Bash
npm start
```
(Or use npm run dev if you have nodemon configured).

## 👨‍💻 Developer
Steven Ashraf - Full-Stack Developer
