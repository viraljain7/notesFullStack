import React from "react";
import { Plus } from "lucide-react";

const Navbar = ({ onOpenAddModal }) => {
  return (
    <header className="bg-base-100 shadow-sm sticky top-0 z-50" data-theme="abyss">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">📝 Notes Manager</h1>
        <button
          onClick={onOpenAddModal}
          className="btn btn-primary btn-sm flex items-center gap-2"
        >
          <Plus size={16} />
          Add Note
        </button>
      </div>
    </header>
  );
};

export default Navbar;
