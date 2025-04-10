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
                <input className="folder-title text-center glowing text-title p-8 bg-transparent focus:outline-none focus:border-none focus:ring-0" defaultValue={"POO/Herança"}/>
                <div>
                    <MoreVertical />
                </div>
            </div>
        </>
    );
};

export default NotebookHeader;
