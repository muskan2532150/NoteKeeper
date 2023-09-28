import React from 'react'
import { useNote } from './NoteContext'

const Footer = () => {
  const { note } = useNote();
  console.log(note)
  return (
          <footer className={`bg-gray-200 py-4 w-full absolute bottom-0`}>
            <div className="container mx-auto text-center">
              <p className='text-gray-800 text-bold text-2xl'>Notekeeper App Copyright@{new Date().getFullYear()}, All rights reserved.  </p>
            </div>
          </footer>
  )
}

export default Footer
