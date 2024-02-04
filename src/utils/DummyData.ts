import {Activity, ActivityContent, ActivityItem} from "@/utils/Interfaces";

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