export interface API_RESULT {
    RESULT_CODE: number
    RESULT_MSG: string
    RESULT_DATA: Activity | ActivityContent | Admin | Member | Thing | undefined
}

export interface Activity {
    count: number
    data: Array<ActivityItem>
}

export interface ActivityItem {
    member: Array<string>
    mento: string
    tag: Array<string>
    thumbnail: string
    title: string
}

export interface ActivityContent {
    id: string
    photo: ActivityContentRoleItemPhoto
    role: Array<ActivityContentRoleItem>
}

export interface ActivityContentRoleItem {
    member: Array<ActivityContentRoleItemMember>
    title: string
}

export interface ActivityContentRoleItemMember {
    icon: string
    name: string
    url: string
}

export interface ActivityContentRoleItemPhoto {
    count: number,
    data: Array<string>
}

export interface Admin {
    list: Array<AdminItem>
    year: number
}

export interface AdminItem {
    member: string
    role: string
}

export interface Member {
    comment: string
    department: string
    github: string
    id: string
    instagram: string
    name: string
    project: Array<string>
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