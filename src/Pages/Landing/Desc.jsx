import React from "react";
import "./Desc.css";
import img_contact from "../../img/image.png";
const Desc = () => {
  return (
    <div className="container-desc">
      <div className="desc-title">
        <div className="desc-left">
          <h1>From the big picture to every tiny detail, we got you covered.</h1>
        </div>
        <div className="desc-right">
          <button>Explore Now</button>
        </div>
      </div>
      <div className="desc">
        <div className="desc-title-left">
          <div className="desc-card">
            <h2>For developers</h2>
            <p>
              Exepteur sint occaecat cupidatat non proident, mollit laborum -
              semper quis lectus nulla.
            </p>
          </div>
          <div className="desc-card">
            <h2>For developers</h2>
            <p>
              Exepteur sint occaecat cupidatat non proident, mollit laborum -
              semper quis lectus nulla.
            </p>
          </div>
          <div className="desc-card">
            <h2>For developers</h2>
            <p>
              Exepteur sint occaecat cupidatat non proident, mollit laborum -
              semper quis lectus nulla.
            </p>
          </div>
        </div>
        <div className="desc-title-right">
          <img src={img_contact} alt="" className="img-1"/>
          <img src={img_contact} alt="" className="img-2"/>
          <img src={img_contact} alt="" className="img-3"/>
        </div>
      </div>
    </div>
  );
};
export default Desc;
