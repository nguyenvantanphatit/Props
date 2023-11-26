import React, { useState } from "react";
import axios from "axios";

const Header = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault(); 
    const response = await axios.post(`https://64e31273bac46e480e782010.mockapi.io/api/CURD`, {
      email,
      password,
    });
   
  };
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Login</button>
    </form>
    </>
  );
};

export default Header;