import Heading from "./components/Heading";
import InputForm from "./components/InputForm";
import Filters from "./components/Filters";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="flex flex-col items-center gap-5">
      <Heading />
      <InputForm />
      <Filters />
      <TaskList />
    </div>
  );
}

export default App;
