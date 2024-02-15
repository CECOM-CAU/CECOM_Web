import axios from "axios";
import {setDefaultResultOrder} from "dns";
import {unstable_noStore} from "next/cache";

export const getActivityThumbnail = async (projectID: string) => {
    unstable_noStore();
    try{
        setDefaultResultOrder("ipv4first");
        const res = await axios.get(`http://${process.env.LOCALHOST_IP}:3001/getImage/${projectID}/thumb.png`);
        return res.data;
    }catch(e){
        return undefined;
    }
}