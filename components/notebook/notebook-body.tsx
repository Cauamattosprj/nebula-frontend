"use client";

import { useCurrentOpenNoteStore } from "@/store/note";
import { useEffect, useRef } from "react";

const NotebookBody = () => {
    const currentOpenNote = useCurrentOpenNoteStore(
        (state) => state.currentOpenNote
    );

    const titleRef = useRef<HTMLTextAreaElement>(null);

    // hooks for auto resizing
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

    return (
        // TODO: Define the correct height for this container based on the number of items in the notebook sidebar
        <div className="px-12 py-8 flex flex-col space-y-8 h-[3000px]">
            {/* note title */}
            <textarea
                ref={titleRef}
                onInput={handleTitleInput}
                className="note-title text-title text-4xl w-full font-bold text-left bg-transparent focus:outline-none resize-none overflow-hidden"
                defaultValue={currentOpenNote?.title ?? ""}
                rows={1}
            />

            {/* note body */}
            <textarea
                defaultValue={currentOpenNote?.body ?? ""}
                className="note-body text-paragraph min-h-screen bg-transparent focus:border-none focus:outline-none focus:ring-0"
            />
        </div>
    );
};

export default NotebookBody;
