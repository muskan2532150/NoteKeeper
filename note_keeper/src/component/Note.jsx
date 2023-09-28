import React from 'react'
import { TrashIcon, StarIcon } from '@heroicons/react/24/outline'
import {StarIcon as StarIconSolid} from '@heroicons/react/24/solid'


const Note = ({ notes, updateNote, notePerPage, currentPage }) => {
    const indexOfLastCard = currentPage * notePerPage;
    const indexOfFirstCard = indexOfLastCard - notePerPage;
    const currentNotes = notes.slice(indexOfFirstCard, indexOfLastCard);

    const removeEvent = (index) => {
    let updatenote = [...notes];
        updatenote = updatenote.filter((data) => data.id !== index);
        let updatearray = updatenote.map((obj, index) => {
            return {
                ...obj,
                id: index + 1,
            };
        });
        updateNote(updatearray);
    }

    const pinnedEvent = (id) => {
    let updatenote = [...notes];
        updatenote = updatenote.map((note) => {
            if (note.id !== id) return note;
            return { ...note, pinned: !note.pinned };
        });
        const pinnedNotes = updatenote.filter((note) => note.pinned);
        const unpinnedNotes = updatenote.filter((note) => !note.pinned);
        let filternote = [...pinnedNotes, ...unpinnedNotes];
        updateNote(filternote);
    }

    return (
        <>
            <div className='p-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 '>
                {currentNotes.map((item, index) => {
                    return (
                        <div key={index} className='my-4 border self-start h-auto border-gray-900/10 shadow-2xl p-4'>
                            <h1 className="font-bold ">{item.title}</h1>
                            <br />
                            <p className='font-bold text-gray-500'>{item.content} </p>
                            <div className='flex justify-end gap-2'>
                                <button className='text-lg cursor-pointer text-amber-500 hover:bg-amber-300 hover:rounded-full hover:p-2' onClick={() => pinnedEvent(item.id)}>
                                    {item.pinned ? <StarIconSolid className='h-6 w-6' /> : <StarIcon className='h-6 w-6' />}
                                </button>
                                <button className='text-lg cursor-pointer text-amber-500 hover:bg-amber-300 hover:rounded-full hover:p-2' onClick={() => removeEvent(item.id)}>
                                    <TrashIcon className='h-6 w-6' />
                                </button>

                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Note