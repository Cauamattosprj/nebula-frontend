import React from 'react';
import NotebookHeader from './notebook-header';
import NotebookBody from './notebook-body';

/**
 * This component represents all the content and data from a note.
 * 
 * Is built with a NotebookHeader and NotebookBody components.
 * In header we have the title of the folder where the note is stored and navigation icons for the user.
 * In body we have the note title and content.
 * 
 * I pretend to pass the data from Zustand, for grant future features using the global state management.
 * 
 * @name Notebook
 * 
 * @see NotebookHeader
 * @see NotebookBody
 * 
 * @returns {React.ReactElement} The notebook component.
 */

const Notebook = () => {
    return (
        <div className="bg-tab-500 ">
            <NotebookHeader />
            <NotebookBody />
        </div>
    );
}

export default Notebook;
