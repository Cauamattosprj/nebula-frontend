import { UUID } from "crypto";
import { Note } from "./note";

export interface Folder {
    id: UUID;
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