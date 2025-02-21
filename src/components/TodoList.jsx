/* eslint-disable react/prop-types */

import { useEffect } from "react";
import Card from "./Card";

const TodoList = ({ todos, handleToggleComplete, handleDelete }) => {
  const allCompleted = todos.every((todo) => todo.completed);
  const anyCompleted = todos.some((todo) => todo.completed);
  const notCompleted = todos.filter((todo) => !todo.completed);
  const completed = todos.filter((todo) => todo.completed);
  console.log(`notCompleted->`, notCompleted);
  console.log(`Completed ->`, completed);
  useEffect(() => {
    console.log(`List Rendered..`);
  }, []);

  return (
    <div className="mt-4 w-full flex flex-col flex-wrap justify-start items-start border-t-2 border-black">
      <div className="w-full my-1 mx-1 flex flex-row flex-wrap items-start ">
        <div className="w-full flex flex-row flex-wrap">
          <strong className="text-fuchsia-300 text-left">
            Uncompleted Todos :
          </strong>
        </div>
        {todos.length > 0 ? (
          !allCompleted ? (
            notCompleted.map((todo) => (
              <Card
                key={todo.id}
                todo={todo}
                handleDelete={handleDelete}
                handleComplete={handleToggleComplete}
              />
            ))
          ) : (
            <div className="text-md text-gray-500">
              All tasks completed. Add new?
            </div>
          )
        ) : (
          <div className="text-md">No Data...</div>
        )}

        <div className="w-full flex flex-row flex-wrap">
          <strong className="text-fuchsia-300 text-left">
            {todos.length > 0 ? "Completed Todos :" : " "}
          </strong>
        </div>
        {!anyCompleted && todos.length > 0 && (
          <div className="text-md text-gray-500">No Task completed...</div>
        )}
        {completed.map((todo) => (
          <Card
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            handleComplete={handleToggleComplete}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
