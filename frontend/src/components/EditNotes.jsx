import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const EditNotes = ({ note, show, onClose, onUpdated }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Preload instantly from props
  useEffect(() => {
    if (note && show) {
      setTitle(note.title || "");
      setContent(note.content || "");
    }
  }, [note, show]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    try {
      const res = await fetch(`http://localhost:5000/api/notes/${note._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });

      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      onUpdated(); // Refresh parent notes
      toast.success("Note updated successfully!");
      onClose();
    } catch (err) {
      console.error("Failed to update note:", err);
      toast.error("Failed to update note");
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
      <div className="bg-base-300 p-6 rounded-xl shadow-lg w-full max-w-md" data-theme="abyss">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-100">Edit Note</h2>
          <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost text-white">✕</button>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Note Title"
            className="input input-bordered w-full mb-3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Note Content"
            className="textarea textarea-bordered w-full mb-3"
            rows="4"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="submit" className="btn btn-primary w-full">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default EditNotes;
