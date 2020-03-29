import React from "react";

const TaskList = ({ tasks, toggleTask }) => {
  
  return tasks.map((task, taskIndex) => {

    const onClickCheckBox = () => {
      toggleTask(taskIndex);
    }

    return (
      <p key={taskIndex}>
        <input
          type="checkbox"
          checked={task.isComplete}
          onChange={onClickCheckBox}
        />
        {task.text}
      </p>
    )
  });
};

export default TaskList;