import React from "react";
import Announcements from "../components/Announcements";
import Navbar from "../components/Navbar";
import Products from "../components/Products";




const Home = () => {
  return (
    <div>
      <Navbar />
      <Announcements />
      <Products />
    </div>
  );
};

export default Home;
