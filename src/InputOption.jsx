import React from "react";
import "./inputoption.css";
function InputOption({ title, Icon, color }) {
  return (
    <div className="inputOption">
      <Icon style={{ color: color }}></Icon>
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;
