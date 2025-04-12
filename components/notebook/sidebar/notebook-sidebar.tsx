"use client";

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

const NotebookSidebar = () => {
    const [allNotesWithoutFolders, setAllNotesWithoutFolders] = useState([{}]);
    const [openNotebookSidebar, setOpenNotebookSidebar] = useState(false);
    const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({});
    const sidebarRef = useRef<HTMLDivElement>(null);

    const fetchAllNotesWithoutFolders = async () => {
        const notesWithoutFolders = await getAllNotesWithoutFolders();
        setAllNotesWithoutFolders(notesWithoutFolders.data);
    };

    useEffect(() => {
        fetchAllNotesWithoutFolders();
    }, []);

    useEffect(() => {
        fetchAllNotesWithoutFolders()
    }, [createNote])

    const handleCreateNote = async () => {
        await withToastFeedback(
            createNote(
                "Nova anotação",
                "Uma anotação vazia...",
                "57282eb4-302e-4d0f-8098-8242f0b79cdb"
            ),
            "Nota criada com sucesso",
            "Falha ao criar a nota"
        );

        await fetchAllNotesWithoutFolders();
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
            <div
                className="notebook-header-btn hover:cursor-pointer hover:bg-tab-400 hover:text-white p-1 rounded-xl transition-all duration-75"
                onClick={() => setOpenNotebookSidebar(!openNotebookSidebar)}
            >
                <Menu />
            </div>

            {/* bg-overlay */}
            <div
                className={`${
                    openNotebookSidebar ? "bg-black/60 inset-0 absolute " : ""
                } bg-black/00 transition-all duration-500`}
                onClick={() => setOpenNotebookSidebar(!openNotebookSidebar)}
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
                        <Edit className="w-6 h-6" />
                        <FolderPlus className="w-6 h-6" />
                        <ArrowUpNarrowWide className="w-6 h-6" />
                        <FoldVertical className="w-6 h-6" />
                    </div>

                    {/* folders and notes */}
                    <div>
                        {foldersData.data.map((folder) => {
                            const isOpen = openFolders[folder.id];

                            return (
                                <div
                                    key={folder.id}
                                    className="text-white flex flex-col p-2"
                                >
                                    <div className="flex flex-col justify-center">
                                        <div
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
                                        </div>

                                        {isOpen && (
                                            <div className="ml-3 bg-accent-foreground w-[0.5px] flex flex-col">
                                                {folder.notes.map((note) => (
                                                    <div
                                                        key={note.id}
                                                        className="text-white flex py-1 px-6"
                                                    >
                                                        <span className="text-nowrap">
                                                            {note.title}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                        {/* <div className="text-white flex p-2">
                            <ChevronRight />
                            <span>POO</span>
                        </div> */}
                    </div>
                </div>

                {/* close sidebar btn */}
                <div
                    className="absolute left-56 top-4 text-white bg-tab-400 p-1 rounded-xl"
                    onClick={() => setOpenNotebookSidebar(!openNotebookSidebar)}
                >
                    <SidebarClose />
                </div>
            </div>
        </div>
    );
};

export default NotebookSidebar;
