import React from "react";

const AddTaskField = ({
  text,
  textChangeHandler,
  addTask
}) => {
  return (
    <div>
      <input 
        type="text" 
        placeholder="Add a new task!" 
        value={text}
        onChange={textChangeHandler}
      />
      <button onClick={addTask}>Add!</button>
    </div>
  )
};

export default AddTaskField;