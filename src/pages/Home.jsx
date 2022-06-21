import React from "react";
import Announcements from "../components/Announcements";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
// import Image from "../images/360_F_209863302_F46BYA1FAqxcJWTIAMDYKPVuHuz54CyA.jpeg";



const Home = () => {
  return (
    <div>
      <Navbar />
      <Announcements />
      {/* <img src={Image} />  */}
      <Products />
    </div>
  );
};

export default Home;
