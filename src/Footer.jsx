import React from "react";

const Footer = ({ todos, setFilter, clearCompleted, filter }) => {
  const todoLeft = todos.filter((todo) => !todo.done).length;
  const todoDone = todos.length - todoLeft;

  return (
    <footer className="footer">
      <span className="todo-count">
        {todoLeft} {todoLeft === 1 ? "öğe" : "öğe"} kaldı
      </span>
      <ul className="filters">
        <li>
          <a
            href="#/"
            className={filter === "all" ? "selected" : ""}
            onClick={() => setFilter("all")}
          >
            Tümü
          </a>
        </li>
        <li>
          <a
            href="#/active"
            className={filter === "active" ? "selected" : ""}
            onClick={() => setFilter("active")}
          >
            Aktif
          </a>
        </li>
        <li>
          <a
            href="#/completed"
            className={filter === "completed" ? "selected" : ""}
            onClick={() => setFilter("completed")}
          >
            Tamamlananlar
          </a>
        </li>
      </ul>
      {todoDone > 0 && (
        <button className="clear-completed" onClick={clearCompleted}>
          Tamamlananları Temizle
        </button>
      )}
    </footer>
  );
};

export default Footer;
