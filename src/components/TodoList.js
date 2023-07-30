import React from "react";

const TodoList = ({ todos, setTodos }) => {
  //タスク削除時
  const handleRemoveTask = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  //タスク更新時
  const handleUpdateTask = (index) => {
    const newTodos = todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div>
      {/* <h1>ToDo List</h1>
      <form onSubmit={handleSubmit}>
        Todoを追加 :
        <input
          value={task}
          placeholder="Add New Task"
          onChange={handleNewTask}
        />
        <button type="submit">Add</button>
      </form> */}
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              textDecoration: todo.isCompleted ? "line-through" : "none",
            }}
          >
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => handleUpdateTask(index)}
            />
            {todo.task}
            <span
              onClick={() => handleRemoveTask(index)}
              style={{ cursor: "pointer" }}
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
