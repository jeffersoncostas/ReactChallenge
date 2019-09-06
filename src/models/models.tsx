export interface User {
    id: any;
    name?: string;
    login?: string;
    avatar_url?: string;
    bio?: string;
    email?: string;
    location?: string;
    company?: string;
    public_repos?: number;
    followers?: number;
    following?: number;
    stars?: number;
    projects?: number;

    repositories?: UserRepository[]

}

export interface UserRepository {
    name?: string;
    description?: string;
    language?: string;

}
