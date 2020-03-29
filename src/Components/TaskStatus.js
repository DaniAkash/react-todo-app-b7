import React, { Fragment } from "react";

const TaskStatus = ({ tasks }) => {
  return (
    <Fragment>
      <p>Pending Tasks: {
        tasks.filter(task => !task.isComplete).length
      }</p>
      <p>Completed Tasks: {
        tasks.filter(task => task.isComplete).length
      }</p>
    </Fragment>
  )
};

export default TaskStatus;