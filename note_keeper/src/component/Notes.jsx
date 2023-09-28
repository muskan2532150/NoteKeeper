import React, { useState } from 'react'
import Pagination from './Pagination'
import Note from './Note'
import { useNote } from './NoteContext'

const Notes = () => {
    let notePerPage = 6;
    const { note, updateNote } = useNote();
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(note.length / notePerPage);

    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <Note
                notes={note}
                updateNote={updateNote}
                notePerPage={notePerPage}
                currentPage={currentPage}
            />
            {totalPages > 1 ? <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
            /> : null}
        </div>
    )
}

export default Notes