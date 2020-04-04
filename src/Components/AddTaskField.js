import React from "react";

const AddTaskField = ({ text, textChangeHandler, addTask, inputRef }) => {
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Add a new task!"
        value={text}
        onChange={textChangeHandler}
      />
      <button onClick={addTask}>Add!</button>
    </div>
  );
};

export default AddTaskField;
