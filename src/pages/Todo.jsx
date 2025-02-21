// import React from 'react'
import { useEffect, useState } from "react";
import TodoFormNew from "../components/TodoFormNew";
import TodoList from "../components/TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const takeInput = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const handleToggleComplete = (todoId) => {
    const todo = todos.find((todo) => todo.id === todoId);
    if (todo) {
      todo.completed = !todo.completed;
      setTodos([...todos]);
    }
  };

  const handleDelete = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  const handleClearList = () => {
    setTodos([]);
  };

  useEffect(() => {
    console.log(`Todo Rendered..`);
  }, []);

  return (
    <div className="w-full flex flex-col items-center font-mono">
      <TodoFormNew
        todos={todos}
        handleClearList={handleClearList}
        takeInput={takeInput}
      />
      <TodoList
        todos={todos}
        handleToggleComplete={handleToggleComplete}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Todo;
