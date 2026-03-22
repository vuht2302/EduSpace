export type Category = 'Math' | 'Physics' | 'Biology' | 'History' | 'Economics' | 'All';
export type ResourceType = 'Past Exams' | 'Revision Notes' | 'Practice Problems';
export type FileFormat = 'PDF' | 'DOCX' | 'PPTX';

export interface User {
    id: string;
    name: string;
    avatar: string;
}

export interface Resource {
    id: string;
    title: string;
    category: Category;
    type: ResourceType;
    format: FileFormat;
    author: User;
    uploadDate: string;
    downloads: string;
    views: string;
}
