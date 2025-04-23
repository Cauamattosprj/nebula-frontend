export const createNote = async (title, body, userId) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes/create`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            title,
            body,
            userId
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