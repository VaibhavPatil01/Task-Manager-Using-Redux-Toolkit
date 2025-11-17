import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/taskSlice";

const InputForm = () => {
  let [input, setInput] = useState("");
  let dispatch = useDispatch();

  let handleAddClick = () => {
    if (!input) return;
    dispatch(addTask(input));
    setInput("");
  };
  return (
    <div className="flex gap-5 h-15 w-xl  justify-center ">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border w-full text-3xl px-2"
      />
      <button
        className="border border-black rounded-md text-3xl bg-green-600 text-white px-8 cursor-pointer"
        onClick={handleAddClick}
      >
        Add
      </button>
    </div>
  );
};

export default InputForm;
