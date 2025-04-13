import { Note } from "./note";

export interface Folder {
    id: string;
    title: string;
    notes: Note[];
    createdAt: Date;
    deleted: boolean;
}

export interface FolderAPIResponse {
    data: Folder[];
    message: string;
    success: boolean;
    statusCode: number;
}