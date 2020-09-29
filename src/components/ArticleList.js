// src/components/ArticleList.js
import React, { useState, useEffect } from "react";
import Articlecard from "./Articlecard";
import Timeout from "await-timeout";
import axios from "axios";

export default function ArticleList() {
  const [articles, set_articles] = useState(false);

  // const articles = [
  //   {
  //     id: 1,
  //     title: "What is React all about?",
  //     body:
  //       "React is all about one-way data flow, the Virtual DOM, and transpiling JSX.",
  //   },
  //   {
  //     id: 2,
  //     title: "A lovely kid",
  //     body: "In fact, a kid is also the name of a baby goat!",
  //   },
  //   {
  //     id: 3,
  //     title: "On placeholder image URLs",
  //     body:
  //       "So yeah, you won't be able to look these images up. They're placeholders",
  //   },
  // ];

  const clear = () => {
    set_articles([]);
  };

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!");

      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      await Timeout.set(2000);
      console.log("Got back:", res);
      set_articles(res.data);
    }
    doSomeDataFetching();
  }, []);

  // FMI:
  // if (articles) {
  //   return articles.map((article) => (
  //     <Articlecard title={article.title} body={article.body} />
  //   ));
  // }
  // return <h1>Loading....</h1>;

  return (
    <div>
      <button onClick={clear}>clear</button>
      <h2>Here's a lovely list of articles, for your reading pleasure:</h2>
      {articles
        ? articles.map((article) => (
            <Articlecard title={article.title} body={article.body} />
          ))
        : "Loading..."}

      {/* {articles.map((article) => (
        <Articlecard title={article.title} body={article.body} />
      ))} */}
    </div>
  );
}
