import React from "react";
import NotesCard from "./NotesCard";

const NotesCardContainer = ({ notes, onEdit, onDelete }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-theme="abyss">
      {notes.length > 0 ? (
        notes.map((note) => (
          <NotesCard
            key={note.id}
            title={note.title}
            content={note.content}
            date={note.date}
            time={note.time}
            onEdit={() => onEdit(note.id)}
            onDelete={() => onDelete(note.id)}
          />
        ))
      ) : (
        <p className="text-gray-400 col-span-full text-center">
          No notes yet. Add one to get started!
        </p>
      )}
    </div>
  );
};

export default NotesCardContainer;
