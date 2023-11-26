import React, { useState, useEffect } from "react";
import axios from "axios";
import Good  from "./Good";
import Render from "./Render"
const Product = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
  .then((json) =>  setData(json));
  }, [data])
  return (
    <>
     <div>
        <Good data={data} />
      </div>
    </>
  );
};

export default Product;