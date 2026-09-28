import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {ConnectMongoDB } from "./Utils/mongodb.js";
import URLRoute from "./Routes/urls.js";

import dns from "dns/promises"
dns.setServers(["1.1.1.1","8.8.8.8"])

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
ConnectMongoDB();

app.use("/", URLRoute);
const PORT = process.env.PORT||5050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
