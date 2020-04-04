import React from "react";

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return tasks.map((task, taskIndex) => {
    const onClickCheckBox = () => {
      toggleTask(taskIndex);
    };

    const onClickDelete = () => {
      deleteTask(taskIndex);
    };

    return (
      <p key={taskIndex}>
        <input
          type="checkbox"
          checked={task.isComplete}
          onChange={onClickCheckBox}
        />
        {task.text}
        <button onClick={onClickDelete}>🗑</button>
      </p>
    );
  });
};

export default TaskList;
