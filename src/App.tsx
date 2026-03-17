import { useState } from "react";
import Todo, { type TodoProps } from "./components/Todo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<TodoProps[]>([
    { id: 1, title: "Buy milk", done: false },
    { id: 2, title: "Study React", done: false },
    { id: 3, title: "Push to GitHub", done: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const handleAdd = () => {
    setTodos([...todos, { id: todos.length + 1, title: newTodo, done: false }]);
    setNewTodo("");
  };

  return (
    <>
      <div id="mainDiv">
        <h2 id="title">My Todos</h2>
        <div>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              done={todo.done}
            />
          ))}
        </div>
        <div id="inputDiv">
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo.."
            id="inputText"
          ></input>
          <button onClick={handleAdd} id="addButton">
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
