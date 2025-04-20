import { UUID } from "crypto";

const handleDragEnter = (
    folderId: UUID,
    setHoveredFolderId: React.Dispatch<React.SetStateAction<UUID | null>>
) => {
    setHoveredFolderId(folderId as UUID);
}

export default handleDragEnter;








