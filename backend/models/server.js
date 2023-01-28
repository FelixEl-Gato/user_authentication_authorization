import express from "express";
import dbMongoConnection from "../database/config.js";
import userRoutes from "../routes/user-routes.js";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;

    this.dbConnection();

    this.middlewares();

    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
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