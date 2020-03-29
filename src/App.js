import React, { Fragment, useState } from "react";
import Title from "./Components/Title";
import TaskList from "./Components/TaskList";
import TaskStatus from "./Components/TaskStatus";
import AddTaskField from "./Components/AddTaskField";

const App = () => {

  const [ text, setText ] = useState("");

  const textChangeHandler = event => {
    event.persist();
    setText(event.target.value);
  };

  const [ tasks, setTasks ] = useState([
    {
      text: "Buy Vegetables",
      isComplete: false
    },
    {
      text: "Read Newspaper",
      isComplete: false
    },
    {
      text: "Get Supplies",
      isComplete: false
    }
  ]);

  const addTask = () => {
    const newTask = {
      text,
      isComplete: false,
    };

    setTasks([ ...tasks, newTask ]);
    setText("");
  }

  return (
    <Fragment>
      <Title />
      <AddTaskField 
        text={text}
        textChangeHandler={textChangeHandler}
        addTask={addTask}
      />
      <TaskList tasks={tasks} />
      <TaskStatus tasks={tasks} />
    </Fragment>
  )
};

export default App;