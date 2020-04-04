import React, { Fragment, useState, useEffect } from "react";
import Title from "./Components/Title";
import TaskList from "./Components/TaskList";
import TaskStatus from "./Components/TaskStatus";
import AddTaskField from "./Components/AddTaskField";

const App = () => {
  const [text, setText] = useState(
    window.localStorage.getItem("task-text") || ""
  );

  const textChangeHandler = event => {
    event.persist();
    setText(event.target.value);
  };

  useEffect(() => {
    window.localStorage.setItem("task-text", text);
  });

  const [tasks, setTasks] = useState([
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
      isComplete: false
    };

    setTasks([...tasks, newTask]);
    setText("");
  };

  const deleteTask = targetIndex => {
    setTasks(tasks.filter((task, taskIndex) => taskIndex !== targetIndex));
  };

  const toggleTask = index => {
    setTasks(
      tasks.map((task, taskIndex) => {
        if (index === taskIndex) {
          return {
            ...task,
            isComplete: !task.isComplete
          };
        }
        return task;
      })
    );
  };

  return (
    <Fragment>
      <Title />
      <AddTaskField
        text={text}
        textChangeHandler={textChangeHandler}
        addTask={addTask}
      />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
      <TaskStatus tasks={tasks} />
    </Fragment>
  );
};

export default App;
