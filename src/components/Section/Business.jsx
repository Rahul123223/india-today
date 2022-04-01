import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/business.css";

export const Business = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://saurav.tech/NewsAPI/top-headlines/category/business/in.json"
      )
      .then(({ data }) => {
        setData(data.articles);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <h1>Business</h1>
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
