import React from "react";
import SideBar from "../../Components/SideBar";

const Home = () => {
  return (
    <div className="w-screen h-screen flex flex-row  ">
      <SideBar />
      <div className=" h-screen w-5/6 bg-yellow-500"></div>
    </div>
  );
};

export default Home;
