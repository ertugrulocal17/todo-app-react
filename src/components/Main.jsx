import React, { useState } from "react";

const Main = ({ article, setArticle }) => {
  const handleCheck = id => {
    setArticle(
      article.map(item =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };
  const handleDelete = e => {
    setArticle(article.filter(item => item.id != e.target.id));
  };
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all"> Mark all as complete </label>

      <ul className="todo-list">
        {article.map((item, index) => (
          <li className={item.isCompleted ? "completed" : ""} key={index}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                defaultChecked={item.isCompleted}
                onClick={() => handleCheck(item.id)}
                id={item.id}
              />
              <label>{item.title}</label>
              <button
                id={item.id}
                onClick={handleDelete}
                className="destroy"
              ></button>
            </div>
          </li>
        ))}
        {/* <li className="completed">
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>Learn JavaScript</label>
            <button className="destroy"></button>
          </div>
        </li>
        <li>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>Learn React</label>
            <button className="destroy"></button>
          </div>
        </li>

        <li>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>item.form.text</label>
            <button className="destroy"></button>
          </div>
        </li> */}
      </ul>
    </section>
  );
};

export default Main;
