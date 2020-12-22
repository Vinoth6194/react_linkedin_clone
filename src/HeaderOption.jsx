import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./headeroption.css";
function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div className="headerOption">
      {/* //*the && stands for If like condition in react  */}
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon">{user?.email[0]} </Avatar>
      )}
      <h3 className="headerOption__title" onClick={onClick}>
        {title}{" "}
      </h3>
    </div>
  );
}

export default HeaderOption;
