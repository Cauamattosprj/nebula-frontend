"use client";

import { createNote } from "@/lib/api/notes/create-note";
import { getAllNotesWithoutFolders } from "@/lib/api/notes/get-all-notes-without-folders";
import { getAllFolders } from "@/lib/api/folders/get-all-folders";
import { withToastFeedback } from "@/lib/ui/feedback/with-toast-feedback";
import { useCurrentOpenNoteStore } from "@/store/currentOpenNoteStore";
import { FolderAPIResponse } from "@/types/folder";
import { NoteApiResponse } from "@/types/note";
import { UUID } from "crypto";
import {
    ArrowUpNarrowWide,
    ChevronRight,
    Edit,
    FolderPlus,
    FoldVertical,
    Menu,
    SidebarClose,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { createFolder } from "@/lib/api/folders/create-folder";
import handleDragEnter from "@/lib/events/drag-n-drop/handle-drag-enter";
import handleDragLeave from "@/lib/events/drag-n-drop/handle-drag-leave";
import handleDrop from "@/lib/events/drag-n-drop/handle-drop";
import handleDragStart from "@/lib/events/drag-n-drop/handle-drag-start";
import { moveNoteToFolder } from "@/lib/api/notes/move-note-to-folder";

const NotebookSidebar = () => {
    const [allNotesWithoutFolders, setAllNotesWithoutFolders] =
        useState<NoteApiResponse>();
    const [allFolders, setAllFolders] = useState<FolderAPIResponse>();
    const [openNotebookSidebar, setOpenNotebookSidebar] = useState(false);
    const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({});
    const [noteId, setNoteId] = useState<UUID>();
    const [hoveredFolderId, setHoveredFolderId] = useState<string | null>(null);

    const { setCurrentOpenNoteId, setCurrentOpenNote } =
        useCurrentOpenNoteStore();
    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (noteId) {
            setCurrentOpenNote(noteId);
        }
    }, [noteId, setCurrentOpenNote]);

    const fetchAllNotesWithoutFolders = async () => {
        const notesWithoutFolders = await getAllNotesWithoutFolders();
        setAllNotesWithoutFolders(notesWithoutFolders);
    };

    const fetchAllFolders = async () => {
        const allFolders = await getAllFolders();
        setAllFolders(allFolders);
    };

    useEffect(() => {
        fetchAllFolders();
        fetchAllNotesWithoutFolders();
    }, []);

    useEffect(() => {
        fetchAllNotesWithoutFolders();
    }, [createNote]);

    const handleCreateNote = async () => {
        const response = await withToastFeedback(
            createNote(
                "Nova anotação com um imeeeeeeeeeeeeeeeeeeeeeeeenso titulo",
                "Uma anotação vazia...",
                "57282eb4-302e-4d0f-8098-8242f0b79cdb"
            ),
            "Nota criada com sucesso",
            "Falha ao criar a nota"
        );

        const createdNoteId = response.data.id;
        setCurrentOpenNoteId(createdNoteId);
        await fetchAllNotesWithoutFolders();
        setNoteId(createdNoteId);

        setOpenNotebookSidebar(false);
    };

    const handleSelectNote = (id: UUID) => {
        setCurrentOpenNote(id);

        setOpenNotebookSidebar(false);
    };

    const handleCreateFolder = async () => {
        await withToastFeedback(
            createFolder("Nova pasta 4"),
            "Pasta criada com sucesso",
            "Falha ao criar a nota"
        );

        fetchAllFolders();
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target as Node)
            ) {
                setOpenNotebookSidebar(!openNotebookSidebar);
            }
        };

        if (openNotebookSidebar) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openNotebookSidebar]);

    const toggleFolder = (folderId: string) => {
        setOpenFolders((prev) => ({
            ...prev,
            [folderId]: !prev[folderId],
        }));
    };

    return (
        <div>
            {/* open sidebar trigger */}
            <button
                className="notebook-header-btn hover:cursor-pointer hover:bg-tab-400 hover:text-white p-1 rounded-xl transition-all duration-75"
                onClick={() => setOpenNotebookSidebar(!openNotebookSidebar)}
            >
                <Menu />
            </button>

            {/* bg-overlay */}
            <div
                className={`${
                    openNotebookSidebar ? "bg-black/60 inset-0 absolute " : ""
                } bg-black/00 transition-all duration-500`}
                onClick={() => setOpenNotebookSidebar(!openNotebookSidebar)}
                aria-hidden="true"
            ></div>

            {/* sidebar */}
            <div
                className={`${
                    openNotebookSidebar ? "translate-x-0" : "-translate-x-full"
                } flex absolute inset-0 transition-all duration-300`}
            >
                {/* sidebar content */}
                <div
                    ref={sidebarRef}
                    className="bg-tab-500 h-[100%] absolute inset-0 mt-[0.5px] w-52 
                border-r shadow-xl shadow-black"
                >
                    {/* sidebar action buttons */}
                    <div className="flex text-white justify-center gap-x-8 p-4 border-b">
                        <Edit
                            className="w-6 h-6"
                            onClick={() => handleCreateNote()}
                        />
                        <FolderPlus
                            className="w-6 h-6"
                            onClick={() => handleCreateFolder()}
                        />
                        <ArrowUpNarrowWide className="w-6 h-6" />
                        <FoldVertical className="w-6 h-6" />
                    </div>

                    {/* folders and notes */}
                    <ul className="px-2">
                        {allFolders?.data.map((folder) => {
                            const isOpen = openFolders[folder.id];
                            const isHovered = hoveredFolderId === folder.id;

                            return (
                                <li
                                    key={folder.id}
                                    className={`text-white flex flex-col mb-2 p-2 transition-all duration-75 ${
                                        isHovered
                                            ? "bg-muted/20 rounded-md"
                                            : ""
                                    }`}
                                    onDragOver={async (e) => {
                                        e.preventDefault();
                                        if (hoveredFolderId !== folder.id) {
                                            setHoveredFolderId(folder.id);
                                            console.log("hovering", folder.id);
                                        }
                                        await fetchAllFolders();
                                        await fetchAllNotesWithoutFolders();
                                    }}
                                    onDrop={(e) => {
                                        // handleDrop(e, folder.id);
                                        setHoveredFolderId(null);
                                        console.log("handleDrop");
                                        const movedNoteId =
                                            e.dataTransfer.getData(
                                                "text/plain"
                                            ) as UUID;
                                        withToastFeedback(
                                            moveNoteToFolder(
                                                movedNoteId,
                                                folder.id
                                            ),
                                            "Nota movida com sucesso",
                                            "Falha ao mover a nota"
                                        );
                                    }}
                                >
                                    <div className="flex flex-col justify-center">
                                        <button
                                            className="flex items-center gap-1 cursor-pointer"
                                            onClick={() =>
                                                toggleFolder(folder.id)
                                            }
                                        >
                                            <ChevronRight
                                                className={`${
                                                    isOpen ? "rotate-90" : ""
                                                } transition-all duration-75`}
                                            />
                                            <span>{folder.title}</span>
                                        </button>

                                        {isOpen && (
                                            <div className="ml-3 border-l-[0.5px] border-l-accent-foreground flex flex-col">
                                                {folder.notes.map((note) => (
                                                    <button
                                                        key={note.id || ""}
                                                        className="hover:bg-tab-400 hover:cursor-pointer rounded-md w-full transition-all duration-75 text-white flex py-1 px-6"
                                                        onClick={() =>
                                                            handleSelectNote(
                                                                note.id
                                                            )
                                                        }
                                                    >
                                                        <span className="truncate text-nowrap w-full">
                                                            {note.title || ""}
                                                        </span>
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </li>
                            );
                        })}
                        {allNotesWithoutFolders?.data.map((note, index) => {
                            return (
                                <button
                                    key={note.id || index}
                                    onClick={() => handleSelectNote(note.id)}
                                    draggable
                                    onDragStart={(e) =>
                                        handleDragStart(e, note.id)
                                    }
                                    className="hover:bg-tab-400 hover:cursor-pointer rounded-md w-full transition-all duration-75 text-white flex py-1 px-6"
                                >
                                    {/* #TODO add a popup showing the complete name of the note when mouse hover */}
                                    <span className="truncate">
                                        {note.title || ""}
                                    </span>
                                </button>
                            );
                        })}
                    </ul>
                </div>

                {/* close sidebar btn */}
                <button
                    className="absolute left-56 top-4 text-white bg-tab-400 p-1 rounded-xl"
                    onClick={() => setOpenNotebookSidebar(!openNotebookSidebar)}
                >
                    <SidebarClose />
                </button>
            </div>
        </div>
    );
};

export default NotebookSidebar;
