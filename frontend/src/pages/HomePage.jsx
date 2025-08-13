import React, { useState } from "react";
import AddNotes from "../components/AddNotes";
import DeleteNotes from "../components/DeleteNotes";
import NotesCardContainer from "../components/NotesCardSection";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [deleteId, setDeleteId] = useState(null);

  const handleAddNote = (note) => {
    setNotes([note, ...notes]);
  };

  const handleEditNote = () => {
    setIsAddModalOpen(true)
  };

  const handleDeleteNote = (id) => {
    setDeleteId(id);

  };

  const confirmDelete = () => {
    setNotes((prev) => prev.filter((note) => note.id !== deleteId));
    setDeleteId(null);
  };

  return (
    <div
      className="max-w-4xl mx-auto p-6 bg-base-100 min-h-screen"
      data-theme="abyss"
    >
      <Navbar onOpenAddModal={() => setIsAddModalOpen(true)} />
      <div className="mt-10">
        <AddNotes
          onAdd={handleAddNote}
          show={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
        />

        <NotesCardContainer
          notes={notes}
          onEdit={handleEditNote}
          onDelete={handleDeleteNote}
        />

        <DeleteNotes
          show={deleteId !== null}
          onConfirm={confirmDelete}
          onClose={() => setDeleteId(null)}
        />
      </div>
    </div>
  );
};

export default HomePage;
