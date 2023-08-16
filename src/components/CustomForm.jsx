import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

const CustomForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(task);
    let i = 1;
    addTask({
      title: task,
      id: Date.now(),
      checked: false,
    });
    setTask("");
  };

  return (
    <form className="todo" onSubmit={submitHandler}>
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          autoComplete="off"
          maxLength={60}
          placeholder="Enter task"
        />
        <label htmlFor="task" className="label">
          Enter Task
        </label>
      </div>

      <button className="btn" aria-label="Add Task" type="submit">
        <PlusIcon />
      </button>
    </form>
  );
};

export default CustomForm;
