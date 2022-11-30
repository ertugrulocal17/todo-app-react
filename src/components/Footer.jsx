import React, { useState } from "react";

const Footer = ({ article, setArticle }) => {
  const [select, setSelect] = useState("");

  const showAll = () => {
    setArticle(article => article.map(item => ({ ...item })));
    setSelect("all");
  };
  const showActive = () => {
    setArticle(article.filter(item => item.isCompleted === false));
    setSelect("active");
  };
  const showCompleted = () => {
    setArticle(article.filter(item => item.isCompleted === true));
    setSelect("completed");
  };
  const clearCompleted = () => {
    setArticle(article.filter(item => item.isCompleted === false));
  };

  return (
    <>
      <footer className="footer">
        <span className="todo-count">
          <strong>{article.length}</strong>
          items left
        </span>

        <ul className="filters">
          <li>
            <a
              onClick={showAll}
              href="#/"
              className={select == "all" ? "selected" : ""}
            >
              All
            </a>
          </li>
          <li>
            <a
              onClick={showActive}
              href="#/"
              className={select == "active" ? "selected" : ""}
            >
              Active
            </a>
          </li>
          <li>
            <a
              onClick={showCompleted}
              href="#/"
              className={select == "completed" ? "selected" : ""}
            >
              Completed
            </a>
          </li>
        </ul>

        {article.filter(item => item.isCompleted === true).length > 0 && (
          <button onClick={clearCompleted} className="clear-completed">
            Clear completed
          </button>
        )}
      </footer>
      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
