import logo from "./logo.svg";
import "./App.css";

import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [article, setArticle] = useState([
    {
      id: 1,
      title: "Learn React",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Learn Vue",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Learn Angular",
      isCompleted: true,
    },
  ]);
  return (
    <section className="todoapp">
      <Header article={article} setArticle={setArticle} />
      <Main article={article} setArticle={setArticle} />
      <Footer article={article} setArticle={setArticle} />
    </section>
  );
}

export default App;
