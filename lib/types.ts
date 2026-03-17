export interface JobPost {
    id: number;
    title: string;
    description: string;
    category: string;
    hyperlink?: string;
    companyHyperlink?: string;
    createdByUserId?: number;
    createdAt: string;
    updatedAt: string;
}

export interface User {
    id: number;
    userName: string;
    password: string;
    role: string;
    createdAt: string;
    updatedAt: string;
}