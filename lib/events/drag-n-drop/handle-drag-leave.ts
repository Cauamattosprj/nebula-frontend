import { UUID } from "crypto";

const handleDragLeave = (folderId: UUID, setHoveredFolderId: React.ComponentState) => {
    setHoveredFolderId((prev: string | null) => (prev === folderId ? null : prev));
};

export default handleDragLeave