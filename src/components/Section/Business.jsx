import React, { useState, useEffect } from "react";
import axios from "axios";

export const Business = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsdata.io/api/1/news?apikey=pub_5965cc077608927a90f6a98678e467c51d39&q=business&country=in&category=business,food,politics,science,technology "
      )
      .then(({ data }) => {
        setData(data.results);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h1>Business</h1>
      {data.map((data) => (
        <div>
          <h3>{data.title}</h3>
          {data.description}
          <img src={data.image_url} alt="" />
        </div>
      ))}
    </div>
  );
};
