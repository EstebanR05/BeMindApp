import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookiesParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import TaskRoute from "./routes/TaskRoute";

const app = express();
const _PORT = 3000;

app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookiesParser());
app.use(bodyParser.json());
app.use("/api", TaskRoute);

const server = http.createServer(app);

server.listen(_PORT, () => {
  console.log(`Server running on http://localhost:${_PORT}/api`);
});
