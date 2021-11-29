import React, { useState, useEffect } from "react";
import "./App.css";

function SourceDetails() {
  useEffect(() => {
    fetchItem();
  }, []);

  const [source, setSource] = useState([]);

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://newsapi.org/v2/top-headlines/sources?apiKey=b40f6c9be16a4b64b6b16d9523c688f0`
    );
    const source = await fetchItem.json();
   
    // const source2 = source.sources.filter(element => element.id === source.sources.id);
    // source.articles.map((element) =>  (
    //   console.log(element.source.id)
    // ));
    
    console.log(source);
    setSource(source);
    
  };
  
  return (
    <div className="articles-pages">
      {/* {source.map((element) => (
        <h1 key={element.id}>
          {element.id} {element.description} 
          {element.description}
        </h1>
      ))} */}
      s
    </div>
  );
}

export default SourceDetails;

// b40f6c9be16a4b64b6b16d9523c688f0 API KEY
