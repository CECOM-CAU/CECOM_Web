import buffer from "buffer";
import fs from "fs";

export const getProjectThumbnail = (projectID: string) => {
    const fileFullDir = `${process.env.FILE_DIR}/project/${projectID}/thumb.png`;
    let fileBuffer: buffer.Buffer | undefined;
    try {
        fileBuffer = fs.readFileSync(fileFullDir);
        return Buffer.from(fileBuffer!).toString("base64");
    }catch(e){
        return undefined;
    }
}