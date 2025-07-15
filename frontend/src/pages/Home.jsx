import React, { useContext } from "react";
import Hero from "../components/Hero.jsx";
import Biography from "../components/Biography.jsx";
import MessageForm from "../components/MessageForm.jsx";
import Departments from "../components/Departments.jsx";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to Astha Medical Institute | Your Trusted Healthcare Provider"
        }
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/about.png"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;