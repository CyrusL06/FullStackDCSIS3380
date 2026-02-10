import React from "react";
import Navbar from "../sections/navbar";
import CardHero from "../sections/cardHero";

const Header = ({ title, sub, onPressed }) => {
  return (
    <>
      <Navbar />
      <CardHero ontitle={title} subtitle={sub} onPressed={onPressed} />
    </>
  );
};

export default Header;
