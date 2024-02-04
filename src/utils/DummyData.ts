import {Activity, ActivityContent, ActivityItem, Admin, AdminItem} from "@/utils/Interfaces";

/**
 * TODO: Activity 관련 더미데이터
 */

const ActivityListItem: ActivityItem = {
    member: ["서유빈", "임수현", "정세린"],
    mento: "유용민",
    tag: ["#TEST", "#TAG"],
    thumbnail: "BASE64_STRING",
    title: "Test Activity"
}

const ActivityList: Activity = {
    count: 3,
    list: [ActivityListItem, ActivityListItem, ActivityListItem]
}

const ActivityContent: ActivityContent = {
    id: "Activity Content Data",
    photo: {count: 3, data: ["BASE64_STRING", "BASE64_STRING", "BASE64_STRING"]},
    role: [
        {
            member: [
                {icon: "BASE64_STRING", name: "유용민", url: "https://github.com/yymin1022"}
            ],
            title: "PM / Back-End"
        },
        {
            member: [
                {icon: "BASE64_STRING", name: "서유빈", url: "https://instagram.com/vini_u"}
            ],
            title: "Designer"
        },
        {
            member: [
                {icon: "BASE64_STRING", name: "임수현", url: "https://github.com/lims00"},
                {icon: "BASE64_STRING", name: "정세린", url: "https://github.com/sereene"}
            ],
            title: "Front-End"
        }
    ]
}

/**
 * TODO: Admin 관련 더미데이터
 */

const Admin2023_1: AdminItem = {
    member: "shiiinnnnsh",
    role: "회장"
}

const Admin2023_2: AdminItem = {
    member: "useful_min",
    role: "부회장"
}

const Admin2024_1: AdminItem = {
    member: "yuni_sang",
    role: "회장"
}

const Admin2024_2: AdminItem = {
    member: "vini_u",
    role: "부회장"
}

const Admin2023: Admin = {
    list: [Admin2023_1, Admin2023_2],
    year: 2023
}

const Admin2024: Admin = {
    list: [Admin2024_1, Admin2024_2],
    year: 2023
}