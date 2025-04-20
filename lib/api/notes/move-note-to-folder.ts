import { UUID } from "crypto"

export const moveNoteToFolder = async (noteId: UUID, folderId: UUID) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes/update/${noteId}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify({
            folderId,
        }),
        mode: "cors"
    })

    const responseBody = await response.json()

    if (!response.ok) {
        console.error(responseBody)
        throw new Error(responseBody.message)
    }

    return responseBody;
}