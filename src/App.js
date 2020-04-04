import React, { Fragment, useState, useEffect, useRef } from "react";
import Title from "./Components/Title";
import TaskList from "./Components/TaskList";
import TaskStatus from "./Components/TaskStatus";
import AddTaskField from "./Components/AddTaskField";
import loadTasks from "./utils/loadTasks";

const App = () => {
  const $inputText = useRef(null);

  const [text, setText] = useState(
    window.localStorage.getItem("task-text") || ""
  );

  const textChangeHandler = event => {
    event.persist();
    setText(event.target.value);
  };

  /**
   * componentDidUpdate gets called for every update
   */
  useEffect(() => {
    window.localStorage.setItem("task-text", text);
  });

  /**
   * componentDidUpdate will get called only when
   * the variables in the following dependencies array change
   */
  useEffect(() => {
    loadTasks()
      .then(taskArray => {
        setTasks(
          taskArray.map(item => ({
            text: item.title,
            isComplete: item.complete
          }))
        );
      })
      .catch(console.error);
  }, []);

  /**
   * DidMount for doing focus on input field
   */
  useEffect(() => {
    if ($inputText.current) {
      $inputText.current.focus();
    }
  }, []);

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
        inputRef={$inputText}
      />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
      <TaskStatus tasks={tasks} />
    </Fragment>
  );
};

export default App;
