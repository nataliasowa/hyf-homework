import React, { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [items, setItems] = useState([
    { date: "Wed Sep 13 2017", description: "get out of bed" },
    { date: "Thu Sep 14 2017", description: "brush teeth" },
    { date: "Fri Sep 15 201", description: "eat breakfast" },
  ]);

  return (
    <div className="app">
      {" "}
      {items.map((item) => (
        <TodoItem date={item.date} description={item.description} />
      ))}{" "}
    </div>
  );
}
export default App;
