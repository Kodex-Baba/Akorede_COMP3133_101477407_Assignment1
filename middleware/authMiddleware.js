const jwt = require("jsonwebtoken");

// Middleware to check JWT token
const authMiddleware = (context) => {
    const authHeader = context.req.headers.authorization;
    if (!authHeader) {
        throw new Error("Authorization header is missing.");
    }

    // Extract token (format: "Bearer <token>")
    const token = authHeader.split(" ")[1];
    if (!token) {
        throw new Error("Invalid authorization token format.");
    }

    try {
        const decodedUser = jwt.verify(token, "mySuperSecretKey");
        return decodedUser; // Return user details from token
    } catch (error) {
        throw new Error("Invalid or expired token.");
    }
};

module.exports = authMiddleware;
