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

    return await response.json()
}
