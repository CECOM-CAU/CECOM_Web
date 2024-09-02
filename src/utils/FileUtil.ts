import axios from "axios";
import {setDefaultResultOrder} from "dns";
import {unstable_noStore} from "next/cache";

export const getActivityContent = async (activityID: string) => {
    unstable_noStore();
    try{
        setDefaultResultOrder("ipv4first");
        const res = await axios.get(`http://${process.env.LOCALHOST_IP}:3001/getPost/${activityID}`);
        return res.data;
    }catch(e){
        return undefined;
    }
}

export const getActivityPhoto = async (activityID: string, photoIdx: number) => {
    unstable_noStore();
    try{
        setDefaultResultOrder("ipv4first");
        const res = await axios.get(`http://${process.env.LOCALHOST_IP}:3001/getImage/project/${activityID}/${photoIdx}.png`);
        return res.data;
    }catch(e){
        return undefined;
    }
}

export const getActivityThumbnail = async (activityID: string) => {
    unstable_noStore();
    try{
        setDefaultResultOrder("ipv4first");
        const res = await axios.get(`http://${process.env.LOCALHOST_IP}:3001/getImage/project/${activityID}/thumb.png`);
        return res.data;
    }catch(e){
        return undefined;
    }
}

export const getMainImage = async (imageID: string) => {
    unstable_noStore();
    try{
        setDefaultResultOrder("ipv4first");
        const res = await axios.get(`http://${process.env.LOCALHOST_IP}:3001/getImage/main/${imageID}/image.png`);
        return res.data;
    }catch(e){
        return undefined;
    }
}

export const getNoticePhoto = async (noticeID: string, photoIdx: number) => {
    unstable_noStore();
    try{
        setDefaultResultOrder("ipv4first");
        const res = await axios.get(`http://${process.env.LOCALHOST_IP}:3001/getImage/notice/${noticeID}/${photoIdx}.png`);
        return res.data;
    }catch(e){
        return undefined;
    }
}

export const getNoticeThumbnail = async (noticeID: string) => {
    unstable_noStore();
    try{
        setDefaultResultOrder("ipv4first");
        const res = await axios.get(`http://${process.env.LOCALHOST_IP}:3001/getImage/notice/${noticeID}/thumb.png`);
        return res.data;
    }catch(e){
        return undefined;
    }
}