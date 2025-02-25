/* eslint-disable react/prop-types */

// import React from "react";
// import { useEffect } from "react";
import { useState } from "react";

const TodoFormNew = ({ todos, handleClearList, takeInput }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

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

      // setTodos((prevTodos) => [...prevTodos, newTodo]);
      takeInput(newTodo);

      setTitle("");
      setDescription("");
      setTags("");
    }
  };

  // useEffect(() => {
  //   console.log(`Form Rendered`);
  // }, []);

  return (
    <div className="w-full p-4">
      <div className="flex flex-row justify-evenly items-baseline">
        <form
          onSubmit={handleSubmit}
          className="mt-3 flex flex-row justify-evenly items-center"
        >
          <input
            type="text"
            value={title}
            placeholder="Enter the title..."
            onChange={(e) => setTitle(e.target.value)}
            required
            className="p-2 mx-2 border-sm shadow-md rounded-sm"
          />
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task..."
            autoComplete="off"
            required
            className="p-2 mx-2 border-sm shadow-md rounded-sm"
          />
          <input
            type="text"
            value={tags}
            placeholder="Enter tags..."
            onChange={(e) => setTags(e.target.value)}
            required
            className="p-2 mx-2 border-sm shadow-md rounded-sm"
          />
          <button
            type="submit"
            className="m-1 text-white w-22 h-10 bg-green-500 p-2 border-0 rounded-sm"
          >
            Submit
          </button>
        </form>

        {todos.length > 0 && (
          <button
            type="submit"
            className="m-1 text-white w-22 h-10 bg-gray-400 p-2 border-0 rounded-sm"
            onClick={handleClearList}
          >
            Clear&nbsp;All
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoFormNew;
