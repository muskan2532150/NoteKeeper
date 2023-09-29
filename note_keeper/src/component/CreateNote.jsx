import React, { useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'
import { useNote } from './NoteContext'

const CreateNote = () => {
    const [expand, setExpand] = useState(false);
    const { note, updateNote } = useNote();
    const [newnote, setNewnote] = useState({
        id: 0,
        title: '',
        content: '',
        pinned: false
    })

    const InputEvent = (e) => {
        setNewnote((prevnote) => {
            const { name, value } = e.target;
            return {
                ...prevnote,
                id:(note.length+1),
                [name]: value
            }
        });
    }

    const addEvent = (e) => {
        e.preventDefault();
        let updatenote = [...note, newnote]
        updateNote(updatenote);
        setNewnote({
            id: 0,
            title: '',
            content: '',
            pinned: false
        })
        setExpand(false);
    }

    return (
        <div className='' onDoubleClick={() => (setExpand(false))}>

            < form className='relative w-4/12 my-4 mx-auto' >
                <div className="border rounded border-gray-900/10 shadow-2xl p-4 pb-0 ">
                    <div className="flex sm:max-w-md  ">
                        {expand ? <input
                            type="text"
                            name="title"
                            id="title"
                            autoComplete="off"
                            className="block flex-1 w-full border-0 text-2xl text-gray-900 font-bold placeholder:text-xl placeholder:font-bold bg-transparent py-1.5 pl-1 placeholder:text-gray-900 placeholder:p-2 sm:text-sm sm:leading-6 focus:outline-none"
                            placeholder="Title"
                            onChange={InputEvent}
                            value={newnote.title}
                        /> : null}
                    </div>
                    <div>
                        <textarea
                            id="content"
                            name="content"
                            rows=''
                            className="block w-full border-0 text-gray-400 font-bold text-base p-2 placeholder:text-base placeholder:font-bold placeholder:text-gray-400  sm:text-sm sm:leading-6 focus:outline-none"
                            placeholder='Write a Note...'
                            onChange={InputEvent}
                            value={newnote.content}
                            onClick={() => (setExpand(true))}
                        />
                    </div>
                    {expand ? <div className="absolute -bottom-6 right-4 ">
                        <button
                            type="submit"
                            onClick={addEvent}
                            className="rounded-full shadow-xl bg-amber-500 text-lg cursor-pointer text-white hover:text-amber-500 hover:bg-white"
                        >
                            <PlusIcon className="h-10 w-10" aria-hidden="true" />
                        </button>
                    </div> : null}

                </div>
            </form >
        </div>
    )
}

export default CreateNote



