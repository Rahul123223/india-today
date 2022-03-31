import axios from "axios";
import React, { useEffect, useState } from "react";


export const Ipl = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsdata.io/api/1/news?apikey=pub_5965cc077608927a90f6a98678e467c51d39&q=news&country=in&language=en&category=sports"
      )
      .then(({ data }) => {
        setData(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h1>IPL 2022</h1>
      {/* {data.map((data) => (
        <div>
          {data.description}
        </div>
      ))} */}
    </div>
  );
};
