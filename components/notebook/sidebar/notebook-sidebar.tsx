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

const NotebookSidebar = () => {
    const [openNotebookSidebar, setOpenNotebookSidebar] = useState(false);

    return (
        <div>
            <Menu
                onClick={() => setOpenNotebookSidebar(!openNotebookSidebar)}
            />
            <div
                className={`${
                    openNotebookSidebar ? "bg-black/60 inset-0 absolute " : ""
                } bg-black/00 transition-all duration-500`}
            ></div>
            <div
                className={`${
                    openNotebookSidebar ? "translate-x-0" : "-translate-x-full"
                } flex absolute inset-0 transition-all duration-300`}
            >
                <div className="bg-tab-500 h-[100%] absolute inset-0 mt-[0.5px] w-52 border-r shadow-xl shadow-black">
                    <div className="flex text-white justify-center gap-x-8 p-4 border-b">
                        <Edit className="w-6 h-6" />
                        <FolderPlus className="w-6 h-6" />
                        <ArrowUpNarrowWide className="w-6 h-6" />
                        <FoldVertical className="w-6 h-6" />
                    </div>
                    <div className="text-white flex p-2">
                        <ChevronRight />
                        <span>POO</span>
                    </div>
                    <div className="text-white flex flex-col p-2">
                        <div className="flex flex-col justify-center">
                            <div className="flex">
                                <ChevronDown />
                                <span>Herança</span>
                            </div>
                            <div className="ml-3 bg-white w-[0.5px] flex flex-col">
                                <div className="text-white flex py-1 px-6">
                                    <span>POO</span>
                                </div>
                                <div className="text-white flex py-1 px-6">
                                    <span>POO</span>
                                </div>
                                <div className="text-white flex py-1 px-6">
                                    <span>POO</span>
                                </div>
                                <div className="text-white flex py-1 px-6">
                                    <span>POO</span>
                                </div>
                                <div className="text-white flex py-1 px-6">
                                    <span>POO</span>
                                </div>
                                <div className="text-white flex py-1 px-6">
                                    <span>POO</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-white flex p-2">
                        <ChevronRight />
                        <span>POO</span>
                    </div>
                </div>
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
