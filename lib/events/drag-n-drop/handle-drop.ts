import { moveNoteToFolder } from "@/lib/api/services/notes/move-note-to-folder";
import { UUID } from "crypto";
import React from "react";

const handleDrop = async (
    e: React.DragEvent,
    folderId: UUID,
) => {
    const noteId = e.dataTransfer.getData("text/plain") as UUID;
    await moveNoteToFolder(noteId, folderId);
}

export default handleDrop;