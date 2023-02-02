import express from "express";
import dbMongoConnection from "../database/config.js";
import userRoutes from "../routes/user-routes.js";
import cookieParser from "cookie-parser";
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;

    this.dbConnection();

    this.middlewares();

    this.routes();
  }

  middlewares() {
    // JSON parsing
    this.app.use(express.json());

    // Cookie settings
    this.app.use(cookieParser());
  }

  routes() {
    this.app.use("/api/users", userRoutes);
  }

  async dbConnection() {
    await dbMongoConnection();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running on port", this.port);
    });
  }
}

export default Server;
