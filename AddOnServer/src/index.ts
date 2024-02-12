import express, { Request, Response } from "express";

import dotenv from "dotenv";
import http from "http";

dotenv.config();
const app = express();
const server = http.createServer(app);
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
});

server.listen(3001, "0.0.0.0", () => {
    console.log("Server listen on port 3001");
});