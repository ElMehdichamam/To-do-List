import { useState, useRef } from "react";

function Item({ task, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const editRef = useRef();

  function handleSave() {
    if (editRef.current.value.trim() === "") return;
    onEdit(editRef.current.value);
    setIsEditing(false);
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-gray-50 hover:bg-gray-100/80 border border-gray-200 rounded-xl transition-all duration-200 gap-3 sm:gap-2 group">
      
      {isEditing ? (
        <div className="flex flex-col sm:flex-row w-full gap-2">
          <input
            type="text"
            ref={editRef}
            defaultValue={task}
            className="flex-1 px-3 py-2 sm:py-1 bg-white border border-gray-300 rounded-md text-gray-800 font-normal text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            autoFocus
          />
          <div className="flex gap-2 sm:shrink-0">
            <button
              type="button"
              onClick={handleSave}
              className="flex-1 sm:flex-none px-4 sm:px-3 py-2 sm:py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold tracking-wide rounded-md transition-colors"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="flex-1 sm:flex-none px-4 sm:px-3 py-2 sm:py-1 bg-gray-200 hover:bg-gray-300 text-gray-600 text-sm font-semibold tracking-wide rounded-md transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Task Text: Increased readability using medium contrast weight and proper leading */}
          <p className="text-gray-800 font-medium text-sm sm:text-[15px] leading-relaxed break-words whitespace-pre-wrap flex-1 min-w-0 tracking-normal">
            {task}
          </p>
          
          {/* Action buttons */}
          <div className="flex items-center gap-2 sm:gap-1.5 sm:shrink-0 w-full sm:w-auto opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-150">
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="flex-1 sm:flex-none text-center px-3 sm:px-2.5 py-2 sm:py-1 text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-md transition-colors"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={onDelete}
              className="flex-1 sm:flex-none text-center px-3 sm:px-2.5 py-2 sm:py-1 text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-md transition-colors"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Item;