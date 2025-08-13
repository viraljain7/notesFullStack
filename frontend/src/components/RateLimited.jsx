import React, { useState, useRef } from "react";

const AddNoteModal = ({ onAdd, onClose }) => {
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const lastAddTime = useRef(0);

  const handleAdd = () => {
    const now = Date.now();
    if (now - lastAddTime.current < 5000) {
      setError("⏳ Please wait 5 seconds before adding another note.");
      return;
    }
    if (!note.trim()) {
      setError("⚠️ Note cannot be empty.");
      return;
    }
    onAdd(note.trim());
    setNote("");
    setError("");
    lastAddTime.current = now;
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50" data-theme="abyss">
      <div className="bg-base-200 rounded-xl p-6 shadow-lg w-full max-w-md">
        <h2 className="text-lg font-semibold mb-3">Add New Note</h2>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="textarea textarea-bordered w-full resize-none h-28"
          placeholder="Write your note here..."
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <div className="flex justify-end gap-2 mt-4">
          <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={handleAdd}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddNoteModal;
