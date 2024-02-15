import axios from "axios";
import {setDefaultResultOrder} from "dns";
import {unstable_noStore} from "next/cache";

export const getActivityPhoto = async (activityID: string, photoIdx: number) => {
    unstable_noStore();
    try{
        setDefaultResultOrder("ipv4first");
        const res = await axios.get(`http://${process.env.LOCALHOST_IP}:3001/getImage/${activityID}/${photoIdx}.png`);
        return res.data;
    }catch(e){
        return undefined;
    }
}

export const getActivityThumbnail = async (activityID: string) => {
    unstable_noStore();
    try{
        setDefaultResultOrder("ipv4first");
        const res = await axios.get(`http://${process.env.LOCALHOST_IP}:3001/getImage/${activityID}/thumb.png`);
        return res.data;
    }catch(e){
        return undefined;
    }
}