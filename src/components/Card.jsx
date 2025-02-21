/* eslint-disable react/prop-types */
// import React from 'react'

const Card = ({ todo, handleComplete, handleDelete }) => {
  //   console.log(todo);
  return (
    <div className="my-2 mx-2 p-2 flex flex-row flex-wrap justify-evenly items-start">
      <div
        className="overflow-hidden p-4 m-3 w-[18rem] h-fit bg-slate-100 border-0 rounded-md shadow-slate-200"
        key={todo.id}
      >
        <h3>
          <strong>{todo.title}</strong>
        </h3>
        <p
          className={
            todo.completed
              ? "my-1.5 h-16 break-words overflow-auto overflow-x-hidden overflow-y-auto scroll-ps-3 line-through"
              : "my-1.5 h-16 break-words overflow-auto overflow-x-hidden overflow-y-auto scroll-ps-3"
          }
        >
          {todo.description}
        </p>
        <div>
          <strong>Tags:</strong>
          <ul className="flex flex-row flex-wrap">
            {todo.tags.map((tag, index) => (
              <li key={index}>{`#${tag}`}&nbsp;</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row justify-around">
          <button
            onClick={() => handleDelete(todo.id)}
            className="mt-2 p-1 text-white text-sm bg-red-500 border-0 rounded-sm"
          >
            Delete
          </button>
          <button
            onClick={() => handleComplete(todo.id)}
            className={
              todo.completed
                ? "w-22 mt-2 p-1 text-white text-sm bg-orange-500 border-0 rounded-sm"
                : "w-22 mt-2 p-1 text-white text-sm bg-blue-500 border-0 rounded-sm"
            }
          >
            {todo.completed ? `Redo` : `Mark-done`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
