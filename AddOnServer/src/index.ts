import express, { Request, Response } from "express";

import dotenv from "dotenv";
import http from "http";
import * as fs from "fs";

dotenv.config();
const app = express();
const server = http.createServer(app);
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get("/getImage/:projectID/:fileName", (req: Request, res: Response) => {
    const params = req.params;
    const filePath = `${process.env.FILE_DIR}/project/${params.projectID}/${params.fileName}`;
    let fileBuffer: Buffer | undefined;
    try{
        fileBuffer = fs.readFileSync(filePath);
        res.send(Buffer.from(fileBuffer!).toString("base64"));
    }catch(e){
        res.sendStatus(500);
    }
});

app.get("/getPost", (req: Request, res: Response) => {
    res.send("Get Post");
});

server.listen(3001, "0.0.0.0", () => {
    console.log("Server listen on port 3001");
});