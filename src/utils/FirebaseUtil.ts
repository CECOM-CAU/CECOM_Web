import {FirebaseApp, initializeApp} from "@firebase/app";
import {Firestore, getFirestore} from "@firebase/firestore";
import dotenv from "dotenv";

let firebaseApp: FirebaseApp
let firestoreDB: Firestore

dotenv.config();
const firebaseConfig = {
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    projectId: process.env.FB_PROJECT_ID,
    appId: process.env.FB_APP_ID
};

export const initFirebase = () => {
    firebaseApp = initializeApp(firebaseConfig);
    firestoreDB = getFirestore(firebaseApp);
}