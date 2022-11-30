import React, { useEffect, useState } from "react";

const Header = ({ article, setArticle }) => {
  const [text, setText] = useState("");
  useEffect(() => {
    setText("");
  }, [article]);
  const handleChange = e => {
    setText(e.target.value);
  };
  const handleClick = e => {
    e.preventDefault();

    setArticle([
      ...article,
      { id: article.length + 1, title: text, isCompleted: false },
    ]);
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <form onClick={handleClick}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={text}
          name="text"
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default Header;
