import React, { useState, useEffect } from "react";
import axios from "axios";

export const Tech = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json"
      )
      .then(({ data }) => {
        setData(data.articles);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h1>Technology</h1>
      {data.map((data) => (
        <div>
          <h2>{data.category}</h2>
          <h4>{data.content}</h4>
          {data.description}
          <img src={data.urlToImage} alt="" />
          {data.video_url}
        </div>
      ))}
    </div>
  );
};
