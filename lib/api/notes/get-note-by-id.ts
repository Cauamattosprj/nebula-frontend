import { SingleNoteApiResponse } from "@/types/note";
import { UUID } from "crypto";

export const getNoteById = async (id: UUID) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes/list/${id}`, {
        method: "GET",
        mode: "cors"
    })

    if (!response.ok) {
        console.error(await response.text())
        return null;
    }

    const responseBody: SingleNoteApiResponse = await response.json()

    return responseBody.data
}