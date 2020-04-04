const loadTasks = () => {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(resolve)
      .catch(reject);
  });
};

export default loadTasks;
