import { useSelector } from "react-redux";
import Task from "./Task";

const TaskList = () => {
  let { items, filters } = useSelector((state) => state.task);

  let filteredTasks =
    filters == "completed" ? items.filter((task) => task.isCompleted) : items;

  return (
    <div className="flex flex-col gap-2  min-w-2xl max-w-4xl">
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
