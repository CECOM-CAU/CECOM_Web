export interface API_RESULT {
    RESULT_CODE: number
    RESULT_MSG: string
    RESULT_DATA: Activity | ActivityContent | Array<Admin> | MainImage | Member | Photo | RecruitSubmissionDetail | RecruitSubmissionList | Thing | undefined
}

export interface Activity {
    count: number
    data: Array<ActivityItem>
}

export interface ActivityItem {
    content: string
    id: string
    member: Array<string>
    mentor: string
    tag: Array<string>
    thumbnail: string
    title: string
}

export interface ActivityContent {
    content: string
    id: string
    photo: ActivityContentPhoto
    role: Array<ActivityContentRoleItem>
    tag: Array<string>
    title: string
}

export interface ActivityContentRoleItem {
    member: Array<ActivityContentRoleItemMember>
    title: string
}

export interface ActivityContentRoleItemMember {
    gender: string
    icon: string
    name: string
    url: string
}

export interface ActivityContentPhoto {
    count: number,
    data: Array<string>
}

export interface Admin {
    list: Array<AdminItem>
    year: number
}

export interface AdminItem {
    member: Member
    role: string
}

export interface MainImage {
    event: string | undefined
    mentoring: string | undefined
    project: string | undefined
    study: string | undefined
}

export interface Member {
    comment: string
    department: string
    gender: string
    github: string
    id: string
    image: string
    instagram: string
    name: string
    project: Array<string>
}

export interface Photo {
    data: string,
    filename: string,
}

export interface RecruitQuestionList {
    count: number
    list: Array<string>
}

export interface RecruitSubmissionDetail {
    department: string
    name: string
    id: string
    timestamp: number
}

export interface RecruitSubmissionItem {
    department: string
    name: string
    id: string
    timestamp: number
}

export interface RecruitSubmissionList {
    count: number
    data: Array<RecruitSubmissionItem>
}

export interface Thing {
    count: number
    data: Array<ThingItem>
}

export interface ThingItem {
    description: string
    id: string
    name: string
    photo: string
    tag: string
}