import React from "react";
import "./headeroption.css";
function HeaderOption({ Icon, title }) {
  return (
    <div className="headerOption">
      {/* //*the && stands for If like condition in react  */}
      {Icon && <Icon className="headerOption__icon" />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
