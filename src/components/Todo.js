import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Todo = () => {
  const initialState = [
    {
      task: "Reactの勉強をする",
      isCompleted: false,
    },
    {
      task: "githubに公開する",
      isCompleted: false,
    },
    {
      task: "買い物に行く",
      isCompleted: false,
    },
  ];

  const [todos, setTodos] = useState(initialState);

  return (
    <div>
      <h1>ToDo List</h1>
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todo;
