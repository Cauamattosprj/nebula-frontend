import { UUID } from "crypto"
import { Folder } from "./folder";

export interface Note {
    id: UUID;
    title: string;
    body: string;
    userId: UUID;
    folder?: Folder;
    createdAt: Date;
    deleted: boolean;
}

export interface NoteApiResponse {
    data: Note[];
    message: string;
    success: boolean;
    statusCode: number;
}

export interface SingleNoteApiResponse {
    data: Note | undefined;
    message: string;
    success: boolean;
    statusCode: number;
}