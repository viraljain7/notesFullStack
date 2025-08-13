import React, { useState } from "react";

const AddNotes = ({ onAdd, show, onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    onAdd({ title, content });
    setTitle("");
    setContent("");
    onClose();
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="bg-base-300 p-6 rounded-xl shadow-lg w-full max-w-md"
        data-theme="abyss"
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-100">
            Add New Note
          </h2>
          <button
            onClick={onClose}
            className="btn btn-sm btn-circle btn-ghost text-white"
          >
            ✕
          </button>
        </div>

        {/* Modal Form */}
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
          ></textarea>

          <button type="submit" className="btn btn-primary w-full">
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNotes;
