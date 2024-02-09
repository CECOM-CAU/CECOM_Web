import {FirebaseApp, initializeApp} from "@firebase/app";
import {doc, Firestore, getDoc, getFirestore} from "@firebase/firestore";
import dotenv from "dotenv";
import {AdminItem, Member} from "@/utils/Interfaces";

let firebaseApp: FirebaseApp | null = null;
let firestoreDB: Firestore | null = null;

dotenv.config();
const firebaseConfig = {
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    projectId: process.env.FB_PROJECT_ID,
    appId: process.env.FB_APP_ID
};

export const initFirebase = () => {
    if(firebaseApp == null || firestoreDB == null){
        firebaseApp = initializeApp(firebaseConfig);
        firestoreDB = getFirestore(firebaseApp);
    }
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

export const getAdminList = async (year: number) => {
    const adminDoc = await getDoc(doc(firestoreDB!, "Admin", year.toString()));
    const adminList: Array<AdminItem> = [];
    for (const doc of adminDoc.get("list")){
        adminList.push({
            member: await getMemberData(doc.member),
            role: doc.role
        });
    }
    return adminList;
}