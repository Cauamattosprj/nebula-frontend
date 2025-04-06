"use client";

import {
    ArrowUpNarrowWide,
    ChevronDown,
    ChevronRight,
    Edit,
    FolderPlus,
    FoldVertical,
    Menu,
    SidebarClose,
} from "lucide-react";
import { useState } from "react";

const foldersData = {
    data: [
        {
            id: "f2b335d4-9f86-4055-a1fd-420f1ae1f36c",
            title: "Orientação a Objetos",
            notes: [
                {
                    id: "02e7bc36-1386-47d1-abb3-a7280c572bac",
                    title: "Exemplo 1 de OOP",
                    body: "Exemplo de texto",
                    userId: "57282eb4-302e-4d0f-8098-8242f0b79cdb",
                    createdAt: "2025-04-06T16:30:51.463868Z",
                    deletedAt: null,
                    deleted: false,
                },
                {
                    id: "02e7bc36-1386-47d1-abb3-a7280c572bac",
                    title: "Exemplo 2 de OOP",
                    body: "Exemplo de texto",
                    userId: "57282eb4-302e-4d0f-8098-8242f0b79cdb",
                    createdAt: "2025-04-06T16:30:51.463868Z",
                    deletedAt: null,
                    deleted: false,
                },
            ],
            createdAt: "2025-04-06T16:40:13.884861Z",
            deletedAt: null,
            deleted: false,
        },
        {
            id: "8f792a1e-2c1b-4ac8-8590-799d3cd83da4",
            title: "Flutter",
            notes: [
                {
                    id: "02e7bc36-1386-47d1-abb3-a7280c572bac",
                    title: "Exemplo 1 de Flutter",
                    body: "Exemplo de texto",
                    userId: "57282eb4-302e-4d0f-8098-8242f0b79cdb",
                    createdAt: "2025-04-06T16:30:51.463868Z",
                    deletedAt: null,
                    deleted: false,
                },
                {
                    id: "02e7bc36-1386-47d1-abb3-a7280c572bac",
                    title: "Exemplo 2 de Flutter",
                    body: "Exemplo de texto",
                    userId: "57282eb4-302e-4d0f-8098-8242f0b79cdb",
                    createdAt: "2025-04-06T16:30:51.463868Z",
                    deletedAt: null,
                    deleted: false,
                },
                {
                    id: "02e7bc36-1386-47d1-abb3-a7280c572bac",
                    title: "Exemplo 3 de Flutter",
                    body: "Exemplo de texto",
                    userId: "57282eb4-302e-4d0f-8098-8242f0b79cdb",
                    createdAt: "2025-04-06T16:30:51.463868Z",
                    deletedAt: null,
                    deleted: false,
                },
                {
                    id: "02e7bc36-1386-47d1-abb3-a7280c572bac",
                    title: "Exemplo 4 de Flutter",
                    body: "Exemplo de texto",
                    userId: "57282eb4-302e-4d0f-8098-8242f0b79cdb",
                    createdAt: "2025-04-06T16:30:51.463868Z",
                    deletedAt: null,
                    deleted: false,
                },
            ],
            createdAt: "2025-04-06T16:48:12.895797Z",
            deletedAt: null,
            deleted: false,
        },
    ],
    message: "Operation completed",
    success: true,
    statusCode: 200,
};
const NotebookSidebar = () => {
    const [openNotebookSidebar, setOpenNotebookSidebar] = useState(false);
    const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({});

    const toggleFolder = (folderId: string) => {
        setOpenFolders((prev) => ({
            ...prev,
            [folderId]: !prev[folderId],
        }));
    };

    return (
        <div>
            {/* open sidebar trigger */}
            <Menu
                onClick={() => setOpenNotebookSidebar(!openNotebookSidebar)}
            />

            {/* bg-overlay */}
            <div
                className={`${
                    openNotebookSidebar ? "bg-black/60 inset-0 absolute " : ""
                } bg-black/00 transition-all duration-500`}
            ></div>

            {/* sidebar */}
            <div
                className={`${
                    openNotebookSidebar ? "translate-x-0" : "-translate-x-full"
                } flex absolute inset-0 transition-all duration-300`}
            >
                {/* sidebar content */}
                <div
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
                                            <ChevronRight className={`${isOpen ? 'rotate-90' : ''} transition-all duration-75`} />
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
