import React from "react";
import product from "../../img/hero-image.png";
import brand from "../../img/amazon.png";
import "./Content.css";
const Content = () => {
  return (
    <div className="container-content">
      <div className="content-left">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="content-button">
           <button className="shop-now">Shop Now</button>
            <button className="catelory">Category</button>
        </div>
        <p>Also Available On</p>
        <div className="brand-icon">
          <img src={brand} alt="brand" />
          <img src={brand} alt="brand" />
        </div>
      </div>
      <div className="content-right">
        <img src={product} alt="product" />
      </div>
    </div>
  );
};
export default Content;
