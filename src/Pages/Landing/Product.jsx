import React, { useState } from "react";
import "./Product.css";
import img_product from "../../img/pancake.png";
const Product = () => {
  const data = [
    {
      id: 1,
      name: "Huyyyy",
      price: 10,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: { img_product },
      type: "breakfast",
    },
    {
      id: 2,
      name: "RAMEN",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: { img_product },
      type: "lunch",
    },
    {
      id: 3,
      name: "GRILLED CHICKEN",
      price: 45,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: { img_product },
      type: "dinner",
    },
    {
      id: 4,
      name: "CAKE",
      price: 18,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: { img_product },
      type: "breakfast",
    },
    {
      id: 5,
      name: "BURGER",
      price: 23,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: { img_product },
      type: "lunch",
    },
    {
      id: 6,
      name: "PANCAKE",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: { img_product },
      type: "dinner",
    },
    {
      id: 7,
      name: "PANCAKE",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: { img_product },
      type: "dinner",
    },
    {
      id: 8,
      name: "PANCAKE",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: { img_product },
      type: "dinner",
    },
  ];
   const [searchName, setSearchName] = useState("");

  const handleSearchChange = (event) => {
    setSearchName(event.target.value);
  };
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchName.toLowerCase())
  );
  return (
    <div className="container-product">
      <div className="input-search">
        <input type="text" placeholder="Search product"  value={searchName} onChange={handleSearchChange}/>
        <button className="search">Search</button>
      </div>
      <div className="product-item">
        {filteredData.map((datas, index) => (
          <div className="product-list" key={datas.id}>
            <div className="left">
              <img src={datas.image.img_product} alt="" />
            </div>
            <div className="right">
              <h3>{datas.name}</h3>
              <p>{datas.text.slice(0, 20)}...</p>
              <span>{datas.price * 1000} VND</span>
              <div className="button-buy">
                <button>Buy</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Product;
