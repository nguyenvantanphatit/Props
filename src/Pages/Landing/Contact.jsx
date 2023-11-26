import React from "react";
import "./Contact.css";
import img_contact from "../../img/contact.svg";
const Contact = () => {
  return (
    <div className="container-contact">
      <h3>CONTACT US</h3>
      <p>
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.
      </p>
      <div className="contact-form">
        <div className="contact-left">
          <div className="contact-button">
            <button className="chat">Chat</button>
            <button className="call">Call</button>
          </div>
          <div className="contact-input">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <textarea name="" id="" cols="30" rows="10" />
          </div>
          <div className="contact-button">
            <button className="submit">submit</button>
          </div>
        </div>
        <div className="contact-right">
          <img src={img_contact} alt="img_contact" />
        </div>
      </div>
    </div>
  );
};
export default Contact;
