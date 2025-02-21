// import React, { useState } from "react";
import { useEffect, useState } from "react";
import TodoFormNew from "./components/TodoFormNew";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() && description.trim()) {
      const newTodo = {
        id: Date.now(),
        title,
        description,
        tags: tags
          .split(/[, ]+/)
          .map((tag) => tag.trim())
          .filter((tag) => tag.length > 0),
        completed: false,
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);

      setTitle("");
      setDescription("");
      setTags("");
    }
  };

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
    console.log(`App Rendered..`);
  }, []);

  return (
    <div className="w-full flex flex-col items-center font-mono">
      <TodoFormNew
        todos={todos}
        title={title}
        description={description}
        tags={tags}
        setTitle={setTitle}
        setDescription={setDescription}
        setTags={setTags}
        handleSubmit={handleSubmit}
        handleClearList={handleClearList}
      />
      <TodoList
        todos={todos}
        handleToggleComplete={handleToggleComplete}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
