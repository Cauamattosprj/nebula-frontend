import { SingleNoteApiResponse } from "@/types/note";
import { UUID } from "crypto";

interface updateNoteByIdProps {
    id?: UUID,
    title?: string,
    body?: string,
    folderId?: UUID
}

export const updateNoteById = async ({ id, title, body, folderId }: updateNoteByIdProps) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes/update/${id}`, {
        method: "PUT",
        mode: "cors",
        body: JSON.stringify({
            title,
            folderId,
            body,
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (!response.ok) {
        console.error(await response.text())
        return null;
    }

    const responseBody: SingleNoteApiResponse = await response.json()

    return responseBody.data
}