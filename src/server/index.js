import { createServer } from "miragejs";
import productsList from "./storylineData.js";

const initializeServer = () => {
  const server = createServer();
  server.get("/products", productsList);
};

export default initializeServer;
