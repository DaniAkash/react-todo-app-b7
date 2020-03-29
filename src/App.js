import React, { Fragment } from "react";
import Title from "./Components/Title";
import TaskList from "./Components/TaskList";
import TaskStatus from "./Components/TaskStatus";

const App = () => {

  const tasks = [
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
  ];

  return (
    <Fragment>
      <Title />
      <input type="text" placeholder="Add a new task!" />
      <button>Add!</button>
      <TaskList tasks={tasks} />
      <TaskStatus tasks={tasks} />
    </Fragment>
  )
};

export default App;