import React from "react";
import "./Footer.css";
import logo from "../../img/contact.svg";
const Footer = () => {
  const Service = ["Front-end", "Back-end", "Database","Server"];
  const About = ["Home", "About", "Blogs", "Contact"];
  const Infor = [
    " District 12, Ho Chi Minh City",
    "037 422 5294",
    "nguyenvantanphat.it@gmail.com",
    "nguyenvantanphat.it@gmail.com",
  ];
  return (
    <div className="container-footer">
      <div className="logo-footer">
        <img src={logo} alt="logo" />
      </div>
      <div className="desc-footer">
        <div className="service-footer">
          {Service.map((service, index) => (
            <h5 key={index}>
              <ul className="service-ul">
                <li>{service}</li>
              </ul>
            </h5>
          ))}
        </div>
        <div className="about-footer">
          {About.map((About, index) => (
            <h5 key={index}>
              <ul className="service-ul">
                <li>{About}</li>
              </ul>
            </h5>
          ))}
        </div>
        <div className="infor-footer">
          {Infor.map((Infor, index) => (
            <h5 key={index}>
              <ul className="service-ul">
                <li>{Infor}</li>
              </ul>
            </h5>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
