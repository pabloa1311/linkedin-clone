import React from "react";
import "../styles/Sidebar.css";
import { Avatar } from "@mui/material";
import background from "../images/beige-paintbrush-stroke-textured-background.jpg"

function Sidebar() {

    const recentItems = (topic) => (
        <div className="sidebar__recentItems">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={background} alt="Nice background" />
        <Avatar className="sidebar__avatar"/>
        <h2>Pablo Ramirez</h2>
        <h4>pabloa1311@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2.485</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on Posts</p>
          <p className="sidebar__statNumber">2.485</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItems("reactjs")}
        {recentItems("programming")}
        {recentItems("softwareengineering")}
        {recentItems("desing")}
        {recentItems("frontend")}
      </div>
    </div>
  );
}

export default Sidebar;
