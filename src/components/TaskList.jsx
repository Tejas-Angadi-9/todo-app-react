import React from "react";
import TaskItem from "./TaskItem";

// Importing the styles
import styles from "./TaskList.module.css";

const TaskList = ({ allTasks, deletHandler }) => {
  return (
    <div>
      <div className={styles.tasks}>
        {allTasks
          .sort((a, b) => b.id - a.id)
          .map((task) => (
            <TaskItem key={task.id} task={task} deletHandler={deletHandler} />
          ))}
      </div>
    </div>
  );
};

export default TaskList;
