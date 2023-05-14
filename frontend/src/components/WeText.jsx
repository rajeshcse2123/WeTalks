import React from "react";
import WeTextHeader from "./WeTextHeader";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import "./CSS/WeText.css";
import Widget from "./Widget.jsx";

const WeText = () => {
  return (
    <div className="quora">
      <WeTextHeader />
      <div className="quora__contents">
        <div className="quora__content">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      </div>
    </div>
  );
};

export default WeText;
