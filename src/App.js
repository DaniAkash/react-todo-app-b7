import React, { Fragment } from "react";
import Title from "./Components/Title";
import TaskList from "./Components/TaskList";

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
      <TaskList tasks={tasks} />
    </Fragment>
  )
};

export default App;