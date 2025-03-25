import React from 'react';
import NotebookHeader from './notebook-header';
import NotebookBody from './notebook-body';

const Notebook = () => {
    return (
        <div className="bg-tab ">
            <NotebookHeader />
            <NotebookBody />
        </div>
    );
}

export default Notebook;
