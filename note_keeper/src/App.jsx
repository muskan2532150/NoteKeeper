import react, { useState, createContext } from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import CreateNote from './component/CreateNote'
import Note from './component/Note'
import { NoteProvider } from './component/NoteContext'

const App = () => {

  const note = createContext();

  return (
    <>
      <Navbar />
      <NoteProvider>
        <CreateNote />
        <Note />
        <Footer />
      </NoteProvider>
    </>
  )
}

export default App
