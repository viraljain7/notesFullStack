import React, { useEffect, useState } from "react";
import AddNotes from "../components/AddNotes";
import DeleteNotes from "../components/DeleteNotes";
import NotesCardContainer from "../components/NotesCardSection";
import Navbar from "../components/Navbar";
import EditNotes from "../components/EditNotes";
import toast from "react-hot-toast";

const HomePage = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editNote, setEditNote] = useState(null);
  const [notes, setNotes] = useState([]);
  const [deleteId, setDeleteId] = useState(null);

  const fetchNotes = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/notes");
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      setNotes(await res.json());
    } catch (error) {
      console.error("Failed to fetch notes:", error);
      toast.error("Failed to load notes");
    }
  };

  const handleAddNote = async (note) => {
    try {
      const res = await fetch("http://localhost:5000/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note),
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      toast.success("New note added");
      setIsAddModalOpen(false);
      fetchNotes();
    } catch (error) {
      console.error("Error adding note:", error);
      toast.error("Failed to add note");
    }
  };

  const confirmDelete = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/notes/${deleteId}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      toast.success("Note deleted successfully!");
      fetchNotes();
    } catch (error) {
      console.error("Failed to delete note:", error);
      toast.error("Failed to delete note");
    }
    setDeleteId(null);
  };
  const handleEditNote = (note) => {
    setEditNote(note);
  };
  
  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div
      data-theme="abyss"
      className="absolute top-0 -z-10 h-full w-full mx-auto p-6 bg-base-100 min-h-screen"
    >
      <div className="absolute w-full bottom-auto left-auto right-0 top-0 h-[455px] -translate-x-[80%] translate-y-[80%] rounded-full bg-[rgba(143,233,135,0.5)] opacity-50 blur-[80px]" />

      <Navbar onOpenAddModal={() => setIsAddModalOpen(true)} />

      <div className="mt-10">
        <AddNotes
          onAdd={handleAddNote}
          show={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
        />

<EditNotes
  note={editNote}
  show={!!editNote}
  onClose={() => setEditNote(null)}
  onUpdated={fetchNotes}
/>


        <NotesCardContainer
          notes={notes}
          onEdit={handleEditNote}
          onDelete={setDeleteId}
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
