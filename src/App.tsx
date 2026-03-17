import { useState } from "react";
import Todo, { type TodoProps } from "./components/Todo";

function App() {
  const [todos, setTodos] = useState<TodoProps[]>([
    { id: 1, title: "Buy milk", done: false },
    { id: 2, title: "Study react", done: false },
  ]);
  const [newTodo, setNewTodo] = useState("")

  const handleAdd = () => {
    setTodos([...todos, { id: todos.length + 1, title: newTodo, done: false }]);
    setNewTodo("");
  };

  return (
    <>
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
      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)}></input><br />
      <button onClick={handleAdd}>Add</button>
    </>
  );
}

export default App;
