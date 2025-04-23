import { getNoteById } from '@/lib/api/services/notes/get-note-by-id'
import { Note } from '@/types/note';
import { UUID } from 'crypto';
import { create } from 'zustand'

interface CurrentOpenNoteStore {
    currentOpenNoteId: UUID | null;
    currentOpenNote: Note | null;
    setCurrentOpenNoteId: (id: UUID) => void;
    setCurrentOpenNote: (id: UUID) => Promise<void>;
    setCurrentNoteBody: (newBody: string) => void;
}

export const useCurrentOpenNoteStore = create<CurrentOpenNoteStore>((set) => ({
    currentOpenNoteId: null,
    currentOpenNote: null,
    setCurrentOpenNoteId: (id) => set({ currentOpenNoteId: id }),
    setCurrentOpenNote: async (id) => {
        const noteData = await getNoteById(id);
        set({ currentOpenNote: noteData });
    },
    setCurrentNoteBody: (newBody: string) =>
        set((state) => {
            if (!state.currentOpenNote) return {};

            return {
                currentOpenNote: {
                    ...state.currentOpenNote,
                    body: newBody,
                },
            };
        }),
}))
