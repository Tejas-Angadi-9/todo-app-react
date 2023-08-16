import { useState } from "react";
import CustomForm from "./components/CustomForm";
import TaskList from "./components/TaskList";

// Custom hooks
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [allTasks, setAllTasks] = useLocalStorage("react-todo.tasks", []);

  const addTask = (task) => {
    setAllTasks((prev) => [...prev, task]);
    console.log(allTasks);
  };

  const deletHandler = (id) => {
    setAllTasks((prevState) => prevState.filter((t) => t.id !== id));
  };

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>

      <CustomForm addTask={addTask} />
      <TaskList allTasks={allTasks} deletHandler={deletHandler} />
    </div>
  );
}

export default App;
