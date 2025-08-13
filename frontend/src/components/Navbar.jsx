import React from "react";
import { Plus } from "lucide-react";

const Navbar = ({ onOpenAddModal }) => {
  return (
    <header
      className="bg-green-100/10 backdrop-blur-md shadow-md sticky top-0 z-50 rounded-xl"
      data-theme="abyss"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary flex items-center">
          <img src="/vite.svg" alt="Vite Logo" className="h-8 mr-2" />
          Notes Manager
        </h1>
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
