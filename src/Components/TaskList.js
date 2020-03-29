import React from "react";

const TaskList = ({ tasks }) => {
  return tasks.map((task, taskIndex) => {
    return (
      <p>
        <input
          type="checkbox"
          checked={task.isComplete}
        />
        {task.text}
      </p>
    )
  });
};

export default TaskList;