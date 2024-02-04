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