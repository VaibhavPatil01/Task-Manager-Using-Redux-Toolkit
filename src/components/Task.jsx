import React from "react";
import { deleteTask, toggleTask } from "../features/taskSlice";
import { useDispatch } from "react-redux";

const Task = ({ task }) => {
  let dispatch = useDispatch();
  let handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  let handleToggleTask = (id) => {
    dispatch(toggleTask(id));
  };
  return (
    <div id={task.id} className="flex items-center justify-between gap-5 border-b border-b-black p-3">
      <h1 className={`text-3xl ${task.isCompleted ? 'line-through' : ''}`}>{task.text}</h1>
      <div className="flex">
        <button onClick={() => handleToggleTask(task.id)} className="px-5 py-2  text-2xl border border-black rounded-md cursor-pointer mr-2 bg-yellow-300">
        {task.isCompleted ? "Undo" : "Done"}
      </button>
      <button onClick={() => handleDeleteTask(task.id)} className="px-5 py-2  text-2xl border border-black bg-red-500 rounded-md cursor-pointer ">Delete</button>
      </div>
    </div>
  );
};

export default Task;
