import { Sun } from "lucide-react";
import React from "react";

const Navbar = () => {
    return (
        <nav className="flex relative justify-between items-center px-4 bg-gradient-to-r from-[#383838] to-[#1A1A1A] text-center py-2 rounded-full border-[1px] border-white">
            {/* left */}
            <div className="absolute left-4">
                ...
            </div>
            {/* center */}
            <span className="text-xl flex-1 font-bold">Nebula</span>
            {/* right */}
            <div className="flex absolute right-4 gap-x-2 items-center">
                <div className="w-6 h-6 flex items-center justify-center bg-white/10 rounded-full border-white">
                    <Sun className="h-4 w-4" />
                </div>
                <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
            </div>
        </nav>
    );
};

export default Navbar;
