

import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault(); // get rid of the navigation behaviour

    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id)); 
      toast.success("Note deleted successfully");
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Failed to delete note");
    }
  };

  return (
    <Link
      to={`/note/${note._id}`}
    className="card bg-base-50 hover:shadow-xl transition-all duration-300 
  border-2 border-[#0004ff] rounded-lg 
  hover:scale-[1.02] block"

    >
      <div className="card-body p-6">
        <h3 className="card-title text-xl font-bold text-gray-800 mb-2">
          {note.title}
        </h3>
        <p className="text-gray-900 line-clamp-3 text-xl mb-4">
          {note.content}
        </p>
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-200">
          <span className="text-xs text-gray-500">
            {formatDate(new Date(note.createdAt))}
          </span>
          <div className="flex items-center gap-2">
            <button className="btn btn-ghost btn-sm hover:bg-blue-50">
              <PenSquareIcon className="size-4 text-blue-600" />
            </button>
            <button
              className="btn btn-ghost btn-sm hover:bg-red-50"
              onClick={(e) => handleDelete(e, note._id)}
            >
              <Trash2Icon className="size-4 text-red-600" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default NoteCard;