export const createNote = async (title: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/folders/create`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            title,
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