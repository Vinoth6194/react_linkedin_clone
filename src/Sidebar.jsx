import { Avatar } from "@material-ui/core";
import React from "react";
import "./sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1523961738618-3c1dde78b4c6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fGNvbG9yZnVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          alt=""
        />
        <Avatar className="sidebar__avatar"></Avatar>
        <h2>Vinothkumar</h2>
        <h4>linkedin.vino@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on Post</p>
          <p className="sidebar__statNumber">4135</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
    </div>
  );
}

export default Sidebar;
