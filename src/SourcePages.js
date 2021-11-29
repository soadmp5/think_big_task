import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function SourcePages(props) {
  useEffect(() => {
    fetchItems();
  }, []);

  const [sources, setSources] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://newsapi.org/v2/top-headlines/sources?apiKey=b40f6c9be16a4b64b6b16d9523c688f0"
    );
    const sources = await data.json();
    setSources(sources.sources);
    // console.log(sources.sources);
    // console.log(sources.sources.map(element=> element));
    // sources.sources.map((element) => console.log(element.id));

    // console.log(sources.sources.filter((element) => (
    //   element.id === sources.sources
    // )))
  };

  return (
    <div className="source-pages">
      {sources.map((element) => (
        <h1 id={element.id} key={element.id}>
          <Link to={`/sources/${element.id}`}> {element.name}  </Link>
          {element.description}
        </h1>
      ))}
    </div>
  );
}

export default SourcePages;
