import axios from "axios";

export const getProjectThumbnail = async (projectID: string) => {
    const res = await axios.get(`http://127.0.0.1:3001/getImage/${projectID}/thumb.png`);
    return res.data;
}