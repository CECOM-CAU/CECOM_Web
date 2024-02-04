interface Activity {
    count: number
    list: Array<ActivityItem>
}

interface ActivityItem {
    member: Array<string>
    mento: string
    tag: Array<string>
    thumbnail: string
    title: string
}

interface ActivityContent {
    content: string
    role: Array<ActivityContentRoleItem>
}

interface ActivityContentRoleItem {
    id: string
    member: Array<ActivityContentRoleItemMember>
    photo: ActivityContentRoleItemPhoto
    title: string
}

interface ActivityContentRoleItemMember {
    icon: string
    name: string
    url: string
}

interface ActivityContentRoleItemPhoto {
    count: number,
    data: Array<string>
}

interface Admin {
    list: Array<AdminItem>
    year: number
}

interface AdminItem {
    member: string
    role: string
}

interface Member {
    comment: string
    department: string
    github: string
    id: string
    instagram: string
    name: string
    project: Array<string>
}

interface Thing {
    description: string
    id: string
    name: string
    photo: string
    tag: string
}