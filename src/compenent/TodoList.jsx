import { useRef, useState } from "react";
import Item from "./Item";

function List() {
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    if (inputRef.current.value.trim() === "") return;
    setTasks([...tasks, inputRef.current.value]);
    inputRef.current.value = "";
  }

  function handleEdit(index, newTask) {
    setTasks(tasks.map((t, i) => (i === index ? newTask : t)));
  }

  function handleDelete(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    // Set a clean sans-serif stack for the whole app
    <div className="min-h-screen font-sans bg-gradient-to-br from-indigo-50 to-blue-100 py-6 px-4 sm:py-12 sm:px-6 lg:px-8 flex justify-center items-start antialiased">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-5 sm:p-6 border border-gray-100">
        
        {/* Title: Premium, bold, and tightly tracked */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-5 sm:mb-6 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
          My Tasks
        </h1>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
          <input
            type="text"
            ref={inputRef}
            placeholder="What needs to be done?"
            className="flex-1 min-w-0 px-3 py-2 text-sm sm:text-base font-normal text-gray-800 placeholder-gray-400 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          />
          <button className="px-4 sm:px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-base font-semibold tracking-wide rounded-lg shadow-sm transition-all shrink-0">
            Add
          </button>
        </form>

        {/* Task List */}
        <div className="space-y-3">
          {tasks.length === 0 ? (
            <p className="text-center text-gray-400 font-normal text-xs sm:text-sm py-4 italic tracking-wide">
              No tasks yet. Enjoy your day!
            </p>
          ) : (
            tasks.map((t, index) => (
              <Item
                key={index}
                task={t}
                onDelete={() => handleDelete(index)}
                onEdit={(newTask) => handleEdit(index, newTask)}
              />
            ))
          )}
        </div>

      </div>
    </div>
  );
}

export default List;