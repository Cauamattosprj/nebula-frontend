import { UUID } from "crypto"

export const deleteNote = async (id: UUID) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes/delete/${id}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "DELETE",
        mode: "cors"
    })

    const responseBody = await response.json()

    if (!response.ok) {
        console.error(responseBody)
        throw new Error(responseBody.message)
    }

    return responseBody;
}