import React, { createContext, useContext, useState } from 'react';

const NoteContext = createContext();

export const useNote = () => useContext(NoteContext);

export const NoteProvider = ({ children }) => {
  const [note, setNote] = useState([]);

  const updateNote = (newNote) => {
    setNote(newNote);
  };

  return (
    <NoteContext.Provider value={{ note, updateNote }}>
      {children}
    </NoteContext.Provider>
  );
};
