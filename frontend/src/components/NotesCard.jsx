import React from "react";
import { Edit, Trash2 } from "lucide-react";

const NotesCard = ({ title, content, date, time, onEdit, onDelete }) => {
  return (
    <div
      className="bg-base-300 rounded-xl shadow-lg hover:shadow-xl p-5 transition-all duration-300"
      data-theme="abyss"
    >
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-100 mb-2">{title}</h2>

      {/* Content */}
      <p className="text-gray-300 text-sm mb-4">{content}</p>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-gray-400">
        <span>{date} • {time}</span>
        <div className="flex gap-2">
          <button
            onClick={onEdit}
            className="p-1.5 rounded-lg hover:bg-blue-500/20 text-blue-400 transition"
          >
            <Edit className="h-4 w-4" />
          </button>
          <button
            onClick={onDelete}
            className="p-1.5 rounded-lg hover:bg-red-500/20 text-red-400 transition"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default NotesCard;
