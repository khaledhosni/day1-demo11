import React from "react";
import SideBar from "../AppSideBar";
import "../App.css";

const Home = () => {
  return (
    <div className="app-container">
      <div className="sidebar">
        <SideBar />
      </div>

      <div className="content">
        <h>Home Page</h>
      </div>
    </div>
  );
};

export default Home;
