import express, { Request, Response } from "express";

import dotenv from "dotenv";
import http from "http";

dotenv.config();
const app = express();
const server = http.createServer(app);
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get("/getImage", (req: Request, res: Response) => {
    res.send("Get Image");
});

app.get("/getPost", (req: Request, res: Response) => {
    res.send("Get Post");
})

server.listen(3001, "0.0.0.0", () => {
    console.log("Server listen on port 3001");
});