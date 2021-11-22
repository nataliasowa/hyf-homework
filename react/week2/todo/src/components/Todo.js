import React, { useState } from "react";

function Todo(props) {
  const [state, setDone] = useState([...props.items]);

  const addTodo = () => {
    // Add random item
    const addRandomItem = (arr) => {
      const newId = arr.length
        ? Math.max(...arr.map((item) => item.id)) + 1
        : 1;
      const addRandomArr = arr.concat({
        id: newId,
        description: "Go to school",
        done: false,
      });
      setDone(addRandomArr);
    };

    return (
      <button
        onClick={() => {
          addRandomItem(state);
        }}
      >
        Add todo{" "}
      </button>
    );
  };
  //Mark todo item as done
  const handleCheck = (id) => {
    const newState = state.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    setDone(newState);
  };

  //Delete item
  const deleteItem = (id) => {
    setDone(state.filter((item) => item.id !== id));
  };

  const items = state.map((item) => {
    return (
      <li key={item.id}>
        <span className={item.done ? "line-through" : "no-decoration"}>
          {" "}
          {item.description}{" "}
        </span>{" "}
        <input
          type="checkbox"
          name={item.description}
          checked={item.done && "checked"}
          onChange={() => handleCheck(item.id)}
        />{" "}
        <button onClick={() => deleteItem(item.id)}> Delete </button>{" "}
      </li>
    );
  });

  //If no items render "No items"
  return (
    <>
      {" "}
      {addTodo()} {state.length === 0 && <span> No items </span>}{" "}
      <ul> {items} </ul>{" "}
    </>
  );
}

export default Todo;
