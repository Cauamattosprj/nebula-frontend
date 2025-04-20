import { UUID } from "crypto";

const handleDragStart = (e: React.DragEvent, noteId: UUID) => {
    e.dataTransfer.setData("text/plain", noteId);
}

export default handleDragStart;