import { useState } from "react";

const AddTodo = ({ setTodos }) => {
  //入力したタスクの保持
  const [task, setTask] = useState("");

  //タスク入力時
  const handleNewTask = (event) => {
    console.log(event.target.value);
    setTask(event.target.value);
  };

  //タスク追加時
  const handleSubmit = (event) => {
    //ページのリロードを停止
    event.preventDefault();
    if (task === "") return;
    setTodos((todos) => [...todos, { task, isCompleted: false }]);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      Add Task :
      <input value={task} placeholder="Add New Task" onChange={handleNewTask} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
