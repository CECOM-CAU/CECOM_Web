import {FirebaseApp, initializeApp} from "@firebase/app";
import {collection, doc, Firestore, getDoc, getFirestore, setDoc} from "@firebase/firestore";
import dotenv from "dotenv";
import {
    Activity,
    ActivityContent,
    ActivityContentPhoto,
    ActivityItem,
    Admin,
    AdminItem,
    Member, NoticeDetail, NoticeDetailPhoto, NoticeList, NoticeListItem,
    RecruitAvailability,
    RecruitQuestionList,
    RecruitSubmissionDetail,
    RecruitSubmissionItem,
    RecruitSubmissionList,
    Thing,
    ThingItem
} from "@/utils/Interfaces";
import {getDocs} from "firebase/firestore";
import {
    getActivityContent,
    getActivityPhoto,
    getActivityThumbnail,
    getNoticePhoto,
    getNoticeThumbnail
} from "@/utils/FileUtil";

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
        const thumbnailData = await getActivityThumbnail(activityDoc.id);
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

const getActivityPhotos = async (activityID: string, photoCnt: number) => {
    const photoData: ActivityContentPhoto = {
        count: 0,
        data: []
    }

    for(let photoIdx = 1; photoIdx <= photoCnt; photoIdx++){
        const photoItem = await getActivityPhoto(activityID, photoIdx);
        if(photoItem !== undefined){
            photoData.count++;
            photoData.data.push(photoItem);
        }
    }

    return photoData;
}

export const getActivityData = async (activityID: string) => {
    initFirebase();

    const activityDoc = await getDoc(doc(firestoreDB!, "Activities", activityID));
    const activityContent: ActivityContent = {
        content: await getActivityContent(activityID),
        id: activityDoc.id,
        photo: await getActivityPhotos(activityID, activityDoc.get("photoCnt")),
        role: activityDoc.get("role"),
        tag: activityDoc.get("tag"),
        title: activityDoc.get("title")
    }

    return activityContent;
}

const getMemberData = async (memberID: string)  => {
    const memberDoc = await getDoc(doc(firestoreDB!, "Members", memberID));
    const memberData: Member = {
        comment: memberDoc.get("comment"),
        department: memberDoc.get("department"),
        gender: memberDoc.get("gender"),
        github: memberDoc.get("github"),
        id: memberDoc.id,
        image: memberDoc.get("image"),
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
        adminList.push({list: adminItemList, year: Number(adminDoc.id)});
    }

    for(let i = 0;i < adminList.length; i++){
        for(let j = i + 1; j < adminList.length; j++){
            if(adminList[i].year < adminList[j].year){
                let tmp = adminList[i];
                adminList[i] = adminList[j];
                adminList[j] = tmp;
            }
        }
    }

    return adminList;
}

export const getNoticeDetail = async (id: string) => {
    initFirebase();

    const noticeDoc = await getDoc(doc(firestoreDB!, "Notice", id));
    if(!noticeDoc.exists()){
        return undefined;
    }

    let noticeID = noticeDoc.id;
    let photoCnt = noticeDoc.get("photoCnt");
    const noticeDetail: NoticeDetail = {
        content: noticeDoc.get("content"),
        date: noticeDoc.get("date"),
        id: noticeID,
        part: noticeDoc.get("part"),
        photo: await getNoticePhotos(noticeID, photoCnt),
        photoCnt: photoCnt,
        title: noticeDoc.get("title"),
    }

    return noticeDetail;
}

const getNoticePhotos = async (noticeID: string, photoCnt: number) => {
    const photoData: NoticeDetailPhoto = {
        count: 0,
        data: []
    };

    for(let photoIdx = 1; photoIdx <= photoCnt; photoIdx++){
        const photoItem = await getNoticePhoto(noticeID, photoIdx);
        if(photoItem !== undefined){
            photoData.count++;
            photoData.data.push(photoItem);
        }
    }

    return photoData;
}

export const getNoticeList = async () => {
    initFirebase();

    const noticeList: NoticeList = {
      count: 0,
      data: []
    };

    const noticeListDocs = await getDocs(collection(firestoreDB!, "Notice"));
    if(noticeListDocs.empty){
        return noticeList;
    }

    for(const noticeDoc of noticeListDocs.docs){
        const noticeItem: NoticeListItem = {
            date: noticeDoc.get("date"),
            id: noticeDoc.id,
            part: noticeDoc.get("part"),
            thumbnail: await getNoticeThumbnail(noticeDoc.id),
            title: noticeDoc.get("title"),
        };

        noticeList.count++;
        noticeList.data.push(noticeItem);
    }

    return noticeList;
}

export const getRecruitAvailability = async () => {
    initFirebase();

    const recruitAvailDoc = await getDoc(doc(firestoreDB!, "RecruitAvailability", "availability"));
    const recruitAvail: RecruitAvailability = {
        isAvail: recruitAvailDoc.get("isAvail"),
        message: recruitAvailDoc.get("message"),
    };

    return recruitAvail;
}

export const getRecruitQuestionList = async () => {
    initFirebase();

    const questionDoc = await getDoc(doc(firestoreDB!, "Question", "data"));
    const questionList: RecruitQuestionList = {
        count: questionDoc.get("count"),
        list: questionDoc.get("list")
    }

    return questionList;
}

export const getRecruitSubmissionDetail = async (studentID: string) => {
    initFirebase();

    const submissionDetail: RecruitSubmissionDetail = {
        age: "",
        answer: [],
        college: "",
        department: "",
        grade: "",
        id: "",
        isPrivacyCollectAgree: false,
        name: "",
        phone: "",
        timestamp: 0
    }

    const recruitSubmissionDocs = await getDocs(collection(firestoreDB!, "Recruit"));
    if(recruitSubmissionDocs.empty){
        return submissionDetail;
    }

    for(const recruitSubmissionDoc of recruitSubmissionDocs.docs){
        if(recruitSubmissionDoc.get("id") == studentID){
            submissionDetail.age = recruitSubmissionDoc.get("age");
            submissionDetail.answer = recruitSubmissionDoc.get("answer");
            submissionDetail.college = recruitSubmissionDoc.get("college");
            submissionDetail.department = recruitSubmissionDoc.get("department");
            submissionDetail.grade = recruitSubmissionDoc.get("grade");
            submissionDetail.id = recruitSubmissionDoc.get("id");
            submissionDetail.isPrivacyCollectAgree = recruitSubmissionDoc.get("isPrivacyCollectAgree");
            submissionDetail.name = recruitSubmissionDoc.get("name");
            submissionDetail.phone = recruitSubmissionDoc.get("phone");
            submissionDetail.timestamp = Number.parseInt(recruitSubmissionDoc.id);

            break;
        }
    }

    return submissionDetail;
}

export const getRecruitSubmissionList = async () => {
    initFirebase();

    const submissionList: RecruitSubmissionList = {
        count: 0,
        data: []
    }

    const recruitSubmissionDocs = await getDocs(collection(firestoreDB!, "Recruit"));
    if(recruitSubmissionDocs.empty){
        return submissionList;
    }

    for(const recruitSubmissionDoc of recruitSubmissionDocs.docs){
        const submissionItem: RecruitSubmissionItem = {
            age: recruitSubmissionDoc.get("age"),
            answer: recruitSubmissionDoc.get("answer"),
            college: recruitSubmissionDoc.get("college"),
            department: recruitSubmissionDoc.get("department"),
            grade: recruitSubmissionDoc.get("grade"),
            id: recruitSubmissionDoc.get("id"),
            isPrivacyCollectAgree: recruitSubmissionDoc.get("isPrivacyCollectAgree"),
            name: recruitSubmissionDoc.get("name"),
            phone: recruitSubmissionDoc.get("phone"),
            timestamp: Number.parseInt(recruitSubmissionDoc.id)
        }

        if(submissionItem.age !== undefined
            && submissionItem.answer !== undefined
            && submissionItem.college !== undefined
            && submissionItem.department !== undefined
            && submissionItem.grade !== undefined
            && submissionItem.id !== undefined
            && submissionItem.name !== undefined
            && submissionItem.phone !== undefined
            && submissionItem.timestamp !== undefined){
            submissionList.count++;
            submissionList.data.push(submissionItem);
        }
    }

    return submissionList;
}

export const getThingList = async () => {
    initFirebase();

    const thingList: Thing = {
        count: 0,
        data: []
    };
    const thingDocs = await getDocs(collection(firestoreDB!, "Things"));
    if(thingDocs.empty){
        return thingList;
    }

    for(const thingDoc of thingDocs.docs){
        const thingItem: ThingItem = {
            description: thingDoc.get("description"),
            id: thingDoc.id,
            name: thingDoc.get("name"),
            photo: thingDoc.get("photo"),
            tag: thingDoc.get("tag")
        }

        if(thingItem.description !== undefined
            && thingItem.name !== undefined
            && thingItem.photo !== undefined
            && thingItem.tag !== undefined){
            thingList.count++;
            thingList.data.push(thingItem);
        }
    }

    return thingList;
}

export const postRecruitingSubmission = async (submission: RecruitSubmissionDetail) => {
    initFirebase();

    let postTimestamp = Date.now();
    submission.timestamp = postTimestamp;
    await setDoc(doc(firestoreDB!, "Recruit", postTimestamp.toString()), submission);

    return postTimestamp;
}