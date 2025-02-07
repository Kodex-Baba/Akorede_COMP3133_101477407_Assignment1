# Employee Management System (GraphQL, Node.js, Express, MongoDB)

## Overview

This project is a **GraphQL-based Employee Management System** built using **Node.js, Express, MongoDB, and Apollo Server**. It supports **user authentication (JWT)** and **authorization** to restrict access to certain actions.

## Features

- **User Authentication**: Sign up, log in, and get a JWT token.
- **Authorization**: Protect specific mutations using JWT.
- **Employee Management**:
    - Create, update, delete employees.
    - Search employees by ID, designation, or department.
- **Validation**: Uses `express-validator` for input validation.
- **GraphQL API**: Built using `Apollo Server` or `express-graphql`.
- **Database**: MongoDB (via Mongoose ODM).
- **Testing**: API tested using **Postman** and **GraphiQL**.

## Technologies Used

- **Backend**: Node.js, Express.js, GraphQL, Apollo Server
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: express-validator
- **Testing Tools**: Postman, GraphiQL

## Installation & Setup

### 1. Clone the Repository

```sh
git clone https://github.com/Kodex-Baba/Akorede_COMP3133_101477407_Assignment1.git
cd Akorede_COMP3133_101477407_Assignment1
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Start the Server

```sh
npm run dev  # Uses nodemon for live reload
```

The server runs on: [http://localhost:5000/graphql](http://localhost:5000/graphql)

## API Usage

### 1. **User Authentication**

#### **Signup**

```graphql
mutation {
  signup(username: "testuser", email: "test@example.com", password: "password123") {
    id
    username
    email
    token
  }
}
```

#### **Login**

```graphql
mutation {
  login(email: "test@example.com", password: "password123") {
    id
    username
    email
    token
  }
}
```

### 2. **Employee Management (Requires Authorization)**

Add the **Authorization** header with the **JWT token** before making requests.

```
Authorization: Bearer your.jwt.token.here
```

#### **Add Employee**

```graphql
mutation {
  addEmployee(name: "John Doe", department: "IT", designation: "Software Engineer") {
    id
    name
    department
    designation
  }
}
```

#### **Get Employees**

```graphql
query {
  employees {
    id
    name
    department
    designation
  }
}
```

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Added feature X'`)
4. Push to your branch (`git push origin feature-name`)
5. Create a pull request

## License

This project is licensed under the MIT License.

## Author

**Akorede Osunkoya** - [GitHub](https://github.com/Kodex-Baba)

