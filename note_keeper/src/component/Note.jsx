import React from 'react'
import { TrashIcon } from '@heroicons/react/24/outline'
import { useNote } from './NoteContext'


const Note = () => {
    const { note, updateNote } = useNote();

    const removeEvent = (index) => {
        let updatenote = [...note];
        updatenote = updatenote.filter((data, indx) => indx !== index);
        updateNote(updatenote);
    }

    return (
        <>
            <div className='p-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 h-[50vh] overflow-auto'>
                {note.map((item, index) => {
                    return (
                        <div key={index} className='my-4 border self-start h-auto border-gray-900/10 shadow-2xl p-4'>
                            <h1 className="font-bold ">{item.title}</h1>
                            <br />
                            <p className='font-bold text-gray-500'>{item.content} </p>
                            <div className='flex justify-end '>
                                <button className='text-lg cursor-pointer text-amber-500 hover:bg-amber-300 hover:rounded-full hover:p-2' onClick={() => removeEvent(index)}>
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