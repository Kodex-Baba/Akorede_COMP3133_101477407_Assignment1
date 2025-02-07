const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const typeDefs = require("./schemas/schema");
const resolvers = require("./resolvers/resolver");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

async function startServer() {
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    server.applyMiddleware({ app });

    app.listen(process.env.PORT || 5000, () => {
        console.log(`🚀 Server running on port ${process.env.PORT}`);
        console.log(`🚀 GraphQL playground available at http://localhost:${process.env.PORT}/graphql`);
    });
}
startServer();