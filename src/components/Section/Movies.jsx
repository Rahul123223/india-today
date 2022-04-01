import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/movies.css";

export const Movies = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://saurav.tech/NewsAPI/top-headlines/category/entertainment/in.json"
      )
      .then(({ data }) => {
        setData(data.articles);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      {data.map((data) => (
        <>
          <div className="data-container">
            <img src={data.urlToImage} alt="" />
            <div className="inside-main">
              <h2>{data.title}</h2>
              {data.description}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};
