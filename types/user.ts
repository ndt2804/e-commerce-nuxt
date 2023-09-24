export interface User {
    _id: string
    email: string;
    password: string;
    token: string;
}
export interface Profile {
    _id: string
    name: string;
    email: string;
    password: string;
    avatar?: string;
    role: string;
    created_at: Date;
}