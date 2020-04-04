import React, { useEffect } from "react";

const Task = ({ task, onClickCheckBox, onClickDelete }) => {
  // useEffect(() => {
  //   // The code here will execute based on the
  //   // app's lifecycle
  //   /**
  //    * Gets executed at
  //    * componentDidMount & componentDidUpdate
  //    */

  //   return () => {
  //     /**
  //      * Get executed at
  //      * componentWillUnmount
  //      */
  //     alert("deleted - " + task.text);
  //   };
  // }, []);

  return (
    <p>
      <input
        type="checkbox"
        checked={task.isComplete}
        onChange={onClickCheckBox}
      />
      {task.text}
      <button onClick={onClickDelete}>🗑</button>
    </p>
  );
};

export default Task;
