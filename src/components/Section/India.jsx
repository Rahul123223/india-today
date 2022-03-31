import axios from "axios";
import React, { useEffect, useState } from "react";

export const India = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=tesla&from=2022-02-28&sortBy=publishedAt&apiKey=0dcbbfcfc84a45d19d25a9367258820f"
      )
      .then(({ data }) => {
        setData(data.articles);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h1> All about India section</h1>
      {data.map((data) => (
        <div style={{ display: "flex", flexWrap: "wrap", width:"200px" }}>
          {data.author}
          <img
            src={data.urlToImage}
            style={{ height: "300px", width: "400px" }}
          ></img>
          {data.content}
        </div>
      ))}
    </div>
  );
};
