export const getAllNotesWithoutFolders = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes/list/notes-without-folders`, {
        method: "GET",
        mode: "cors"
    })

    if (!response.ok) {
        console.error(await response.text())
        return null;
    }

    return await response.json()
}
