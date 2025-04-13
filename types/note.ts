import { UUID } from "crypto"

export interface Note {
    id: UUID;
    title: string;
    body: string;
    userId: UUID;
    createdAt: Date;
    deleted: boolean;
}

export interface NoteApiResponse {
    data: [Note];
    message: string;
    success: boolean;
    statusCode: number;
}