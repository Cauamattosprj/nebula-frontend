"use client";

import { useCurrentOpenNoteStore } from "@/store/note";

const NotebookBody = () => {
    const id = useCurrentOpenNoteStore((state) => state.currentOpenNoteId);

    return (
        <div className="px-12 py-8 flex flex-col space-y-8 min-h-screen">
            {/* note title */}
            <input
                className="note-title text-title text-4xl font-bold folder-title text-left glowing bg-transparent focus:outline-none focus:border-none focus:ring-0"
                defaultValue={"Herança"}
            />
            {/* note body */}
            <textarea
                name=""
                id=""
                value={id || ""}
                className="note-body text-paragraph min-h-screen bg-transparent focus:border-none focus:outline-none focus:ring-0"
            />
        </div>
    );
};

export default NotebookBody;
