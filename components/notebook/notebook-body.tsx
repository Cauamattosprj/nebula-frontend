"use client";

import { useCurrentOpenNoteStore } from "@/store/currentOpenNoteStore";
import { useEffect, useRef } from "react";

const NotebookBody = () => {
    const currentOpenNote = useCurrentOpenNoteStore(
        (state) => state.currentOpenNote
    );

    const setCurrentNoteBody = useCurrentOpenNoteStore(
        (state) => state.setCurrentNoteBody
    );

    // hook for auto resizing the title height
    const titleRef = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        const el = titleRef.current;
        if (el) {
            el.style.height = "auto";
            el.style.height = el.scrollHeight + "px";
        }
    }, [currentOpenNote?.title]);

    const handleTitleInput = () => {
        const el = titleRef.current;
        if (el) {
            el.style.height = "auto";
            el.style.height = el.scrollHeight + "px";
        }
    };

    const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setCurrentNoteBody(value);
    };

    return (
        <div className="px-12 py-8 flex flex-col space-y-8 h-[3000px]">
            {/* the Note contents comes from zustand as a global state, so, for any changes on note body is necessary to modifies the useCurrentOpenNoteStore file that is imported on the top of this file */}

            {/* note title */}
            <textarea
                ref={titleRef}
                onInput={handleTitleInput}
                className="note-title text-title text-4xl w-full font-bold text-left bg-transparent focus:outline-none resize-none overflow-hidden"
                value={currentOpenNote?.title ?? ""}
                rows={1}
            />

            {/* note body */}
            <textarea
                value={currentOpenNote?.body ?? ""}
                onChange={handleBodyChange}
                className="note-body text-paragraph min-h-screen bg-transparent focus:border-none focus:outline-none focus:ring-0"
            />
        </div>
    );
};

export default NotebookBody;
