import React, { useState } from "react";

// import styles
import styles from "./TaskItem.module.css";

// Importing icons
import { CheckIcon, TrashIcon } from "@heroicons/react/24/outline";

const TaskItem = ({ task, deletHandler }) => {
  const [isChecked, setIsChecked] = useState(task.checked);

  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input
          type="checkbox"
          className={styles.checkbox}
          name={task.title}
          value={isChecked}
          id={task.id}
        />

        <label htmlFor={task.id} className={styles.label}>
          {task.title}
          <p className={styles.checkmark}>
            <CheckIcon></CheckIcon>
          </p>
        </label>
      </div>

      {/* Adding 2 buttons */}
      <div className={styles["task-group"]}>
        <button
          className={`btn ${styles.delete}`}
          aria-label={`Delete ${task.name} Task`}
          onClick={() => deletHandler(task.id)}>
          <TrashIcon width={24} height={24} />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
