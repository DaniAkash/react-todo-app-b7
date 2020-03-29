import React from "react";

const TaskList = ({ tasks }) => {
  return tasks.map((task, taskIndex) => {
    return (
      <p key={taskIndex}>
        {task.text}
      </p>
    )
  });
};

export default TaskList;