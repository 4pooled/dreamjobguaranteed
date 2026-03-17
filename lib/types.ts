export interface JobPost {
    id: number;
    title: string;
    description: string;
    category: string;
    hyperlink?: string;
    companyHyperlink?: string;
    createdByUserId?: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface User {
    id: number;
    userName: string;
    password: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
}