export interface Activity {
    count: number
    list: Array<ActivityItem>
}

export interface ActivityItem {
    member: Array<string>
    mento: string
    tag: Array<string>
    thumbnail: string
    title: string
}

export interface ActivityContent {
    content: string
    role: Array<ActivityContentRoleItem>
}

export interface ActivityContentRoleItem {
    id: string
    member: Array<ActivityContentRoleItemMember>
    photo: ActivityContentRoleItemPhoto
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
    description: string
    id: string
    name: string
    photo: string
    tag: string
}