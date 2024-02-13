import axios from "axios";
import {setDefaultResultOrder} from "dns";

export const getProjectThumbnail = async (projectID: string) => {
    try{
        setDefaultResultOrder("ipv4first");
        const res = await axios.get(`http://${process.env.LOCALHOST_IP}:3001/getImage/${projectID}/thumb.png`);
        console.log(res);
        return res.data;
    }catch(e){
        console.log(e);
        return undefined;
    }
}