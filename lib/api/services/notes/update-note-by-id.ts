import { SingleNoteApiResponse } from "@/types/note";
import { UUID } from "crypto";

export const updateNoteById = async (id?: UUID, title?: string, body?: string, folderId?: UUID) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes/update/${id}`, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
            title,
            body,
            folderId
        })
    })

    if (!response.ok) {
        console.error(await response.text())
        return null;
    }

    const responseBody: SingleNoteApiResponse = await response.json()

    return responseBody.data
}