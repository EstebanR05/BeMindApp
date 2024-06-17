import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookiesParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import TaskRoute from "./routes/TaskRoute";
import UserRoute from "./routes/UserRoute";
import calendarRoute from "./routes/CalendarRoute";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const _PORT = process.env.PORT_APPLICATION;

app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookiesParser());
app.use(bodyParser.json());

//routes
app.use("/api", TaskRoute);
app.use("/api", UserRoute);
app.use("/api", calendarRoute);


const server = http.createServer(app);

server.listen(_PORT, () => {
  console.log(`Server running on http://localhost:${_PORT}/api`);
});
