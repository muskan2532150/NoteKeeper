import Navbar from './component/Navbar'
import CreateNote from './component/CreateNote'
import Notes from './component/Notes'
import { NoteProvider } from './component/NoteContext'

const App = () => {
  return (
    <>
      <Navbar />
      <NoteProvider>
        <CreateNote />
        <Notes />
      </NoteProvider>
    </>
  )
}

export default App
