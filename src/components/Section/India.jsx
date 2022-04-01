import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/india.css";

export const India = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    axios
      .get("https://saurav.tech/NewsAPI/top-headlines/category/general/in.json")
      .then(({ data }) => {
        setData(data.articles);
        console.log(data);
      });
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexofFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexofFirstPost, indexOfLastPost);

  return (
    <div>
      <h1>India</h1>
      {currentPosts.map((data) => (
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
