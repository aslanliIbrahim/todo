import React from "react";
import noTask from "../assets/no-task.png";
export default function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <ul>
      {tasks.length === 0 && <li className="flex items-center justify-center">
        <img className="object-cover" src={noTask} alt="no-task" />
        </li>}

      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-between bg-white border-b border-primary  px-4 py-3"
        >
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
              className="w-5 h-5 rounded border-primary focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <span
              className={`text-sm ${
                task.completed ? "line-through text-gray-400" : "text-black"
              }`}
            >
              {task.text}
            </span>
          </div>
          <button
            onClick={() => onDelete(task.id)}
            className="text-primary
             hover:text-red-500 font-bold text-lg"
            title="Delete"
          >
            ×
          </button>
        </li>
      ))}
    </ul>
  );
}
