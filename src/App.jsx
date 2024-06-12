import { useState } from "react";
import TodoList from "./TodoList";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
    setTodos([...todos, { text, done: false }]);
  };

  const toggleTodo = (index) => {
    const newTodos = todos.slice();
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.done));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.done;
    if (filter === "completed") return todo.done;
    return true;
  });

  return (
    <section className="todoapp">
      <header className="header">
        <h1>Yapılacaklar</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (newTodo.trim()) {
              addTodo(newTodo.trim());
              setNewTodo("");
            }
          }}
        >
          <input
            className="new-todo"
            placeholder="Ne yapılması gerekiyor?"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            autoFocus
          />
        </form>
      </header>
      {todos.length > 0 && (
        <section className="main">
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            onChange={(e) => {
              const done = e.target.checked;
              setTodos(todos.map((todo) => ({ ...todo, done })));
            }}
            checked={todos.every((todo) => todo.done)}
          />
          <label htmlFor="toggle-all">Hepsini tamamla</label>
          <TodoList
            todos={filteredTodos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </section>
      )}
      {todos.length > 0 && (
        <Footer
          todos={todos}
          setFilter={setFilter}
          clearCompleted={clearCompleted}
          filter={filter}
        />
      )}
    </section>
  );
};

export default App;
