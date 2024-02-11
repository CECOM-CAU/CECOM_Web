import {FirebaseApp, initializeApp} from "@firebase/app";
import {collection, doc, Firestore, getDoc, getFirestore} from "@firebase/firestore";
import dotenv from "dotenv";
import {Activity, ActivityItem, Admin, AdminItem, Member} from "@/utils/Interfaces";
import { getDocs } from "firebase/firestore";
import * as fs from "fs";
import * as buffer from "buffer";
import {getProjectThumbnail} from "@/app/api/_utils/FileUtil";

let firebaseApp: FirebaseApp | null = null;
let firestoreDB: Firestore | null = null;

dotenv.config();
const firebaseConfig = {
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    projectId: process.env.FB_PROJECT_ID,
    appId: process.env.FB_APP_ID
};

const initFirebase = () => {
    if(firebaseApp == null || firestoreDB == null){
        firebaseApp = initializeApp(firebaseConfig);
        firestoreDB = getFirestore(firebaseApp);
    }
}

export const getActivityList = async () => {
    initFirebase();

    const activityList: Activity = {
        count: 0,
        data: []
    };
    const activityDocs = await getDocs(collection(firestoreDB!, "Activities"));
    if(activityDocs.empty){
        return activityList;
    }

    for(const activityDoc of activityDocs.docs){
        const thumbnailData = getProjectThumbnail(activityDoc.id);
        if(thumbnailData === undefined){
            continue;
        }

        const activityItem: ActivityItem = {
            content: activityDoc.get("content"),
            id: activityDoc.id,
            member: activityDoc.get("members"),
            mentor: activityDoc.get("mentor"),
            tag: activityDoc.get("tag"),
            thumbnail: thumbnailData!,
            title: activityDoc.get("title")
        }

        if(activityItem.content !== undefined
            && activityItem.member !== undefined
            && activityItem.mentor !== undefined
            && activityItem.tag !== undefined
            && activityItem.thumbnail !== undefined
            && activityItem.title !== undefined){
            activityList.count++;
            activityList.data.push(activityItem);
        }
    }

    return activityList;
}

const getMemberData = async (memberID: string)  => {
    const memberDoc = await getDoc(doc(firestoreDB!, "Members", memberID));
    const memberData: Member = {
        comment: memberDoc.get("comment"),
        department: memberDoc.get("department"),
        github: memberDoc.get("github"),
        id: memberDoc.id,
        instagram: memberDoc.get("instagram"),
        name: memberDoc.get("name"),
        project: memberDoc.get("project")
    };
    return memberData;
}

export const getAdminList = async () => {
    initFirebase();

    const adminList: Array<Admin> = [];
    const adminDocs = await getDocs(collection(firestoreDB!, "Admin"));
    if(adminDocs.empty){
        return adminList;
    }

    for(const adminDoc of adminDocs.docs){
        const adminItemList: Array<AdminItem> = [];
        for(const memberDoc of adminDoc.get("list")){
            adminItemList.push({
                member: await getMemberData(memberDoc.member),
                role: memberDoc.role
            });
        }
        adminList.push({list: adminItemList, year: adminDoc.get("year")});
    }

    return adminList;
}