import React from "react";
import NotesCard from "./NotesCard";

const NotesCardContainer = ({ notes, onEdit, onDelete }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-theme="abyss">
      {notes.length > 0 ? (
        notes.map((note) => (
          <NotesCard
  key={note._id}
  title={note.title}
  content={note.content}
  createdAt={note.createdAt}
  onEdit={() => onEdit(note)}
  onDelete={() => onDelete(note._id)}
/>

        ))
      ) : (
        <p className="text-gray-400 col-span-full text-center h-[82vh]">
          No notes yet. Add one to get started!
        </p>
      )}
    </div>
  );
};

export default NotesCardContainer;
