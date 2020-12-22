import { Avatar } from "@material-ui/core";
import React from "react";
import "./headeroption.css";
function HeaderOption({ avatar, Icon, title, onClick }) {
  return (
    <div className="headerOption">
      {/* //*the && stands for If like condition in react  */}
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
      <h3 className="headerOption__title" onClick={onClick}>
        {title}{" "}
      </h3>
    </div>
  );
}

export default HeaderOption;
