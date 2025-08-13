import React from "react";

const DeleteNoteModal = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div
     className="fixed inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm z-50"
        >
      <div className="bg-base-300 p-6 rounded-xl shadow-lg w-full max-w-sm" data-theme="abyss">
        <h2 className="text-lg font-semibold text-gray-100 mb-4">Delete Note</h2>
        <p className="text-gray-300 mb-6">Are you sure you want to delete this note? This action cannot be undone.</p>
        
        <div className="flex justify-end gap-3">
          <button
            className="btn btn-sm btn-ghost"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="btn btn-sm btn-error"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteNoteModal;
