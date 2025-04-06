import { Menu, MoreVertical } from "lucide-react";
import React from "react";
import NotebookSidebar from "./sidebar/notebook-sidebar";

const NotebookHeader = () => {
    return (
        <>
            <div className="glowing-border"></div>
            <div className="flex px-4 text-tab-300 justify-between items-center border-b border-white/20">
                <div>
                    <NotebookSidebar />
                </div>
                <div className="folder-title text-center glowing text-title p-12  ">
                    POO/Herança
                </div>
                <div>
                    <MoreVertical />
                </div>
            </div>
        </>
    );
};

export default NotebookHeader;
