import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return tasks.map((task, taskIndex) => {
    const onClickCheckBox = () => {
      toggleTask(taskIndex);
    };

    const onClickDelete = () => {
      deleteTask(taskIndex);
    };

    return (
      <Task
        key={taskIndex}
        task={task}
        onClickDelete={onClickDelete}
        onClickCheckBox={onClickCheckBox}
      />
    );
  });
};

export default TaskList;
