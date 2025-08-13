import React from "react";
import { Edit, Trash2 } from "lucide-react";
import { formatUTCToLocal } from "../utils/DateFormater";
// import { formatUTCToLocal } from "./utils/dateFormatter";
const NotesCard = ({ title, content, createdAt, onEdit, onDelete }) => {
  return (
    <div
      className="bg-base-300 rounded-xl shadow-lg hover:shadow-xl p-5 transition-all duration-300 flex flex-col justify-between h-full"
      data-theme="abyss"
    >
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-100 mb-2">{title}</h2>

      {/* Content */}
      <p className="text-gray-300 text-sm mb-4">{content.slice(0,150)}{content.length > 150 ? '...' : ''}</p>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-gray-400">
        <span className="font-bold ">{formatUTCToLocal(createdAt)}</span>
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
