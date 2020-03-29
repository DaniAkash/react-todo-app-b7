import React, { Fragment } from "react";

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
      <h1>Todo List!</h1>
      <pre>{JSON.stringify(tasks)}</pre>
      {
        [
          <p key={0}>Element 1</p>,
          <p key={1}>Element 2</p>,
          <p key={2}>Element 3</p>,
        ]
      }
      <h2>List of Tasks</h2>
      {
        tasks.map((task, taskIndex) => {
          return <p key={taskIndex}>{task.text}</p>
        })
      }
    </Fragment>
  )
};

export default App;