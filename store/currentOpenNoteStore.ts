import { updateNoteById } from './../lib/api/services/notes/update-note-by-id';
import { getNoteById } from '@/lib/api/services/notes/get-note-by-id'
import { Note } from '@/types/note';
import { UUID } from 'crypto';
import { create } from 'zustand'

interface CurrentOpenNoteStore {
    currentOpenNoteId: UUID | null;
    currentOpenNote: Note | null;
    setCurrentOpenNoteId: (id: UUID) => void;
    setCurrentOpenNote: (id: UUID) => Promise<void>;
    updateCurrentOpenNoteBody: (newBody: string) => void;
}

export const useCurrentOpenNoteStore = create<CurrentOpenNoteStore>((set, get) => ({
    currentOpenNoteId: null,
    currentOpenNote: null,
    setCurrentOpenNoteId: (id) => set({ currentOpenNoteId: id }),
    setCurrentOpenNote: async (id) => {
        const noteData = await getNoteById(id);
        set({ currentOpenNote: noteData });
    },
    updateCurrentOpenNoteBody: (newBody: string) => {
        const currentNote = get().currentOpenNote;
        if (!currentNote) return;

        set({
            currentOpenNote: {
                ...currentNote,
                body: newBody,
            }
        })
    }
}))
