import React from "react";
import "./widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />{" "}
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h3>Linkedin News </h3>
        <InfoIcon></InfoIcon>
      </div>
      {newsArticle(
        "CORONA 19",
        "New variation of corona is spreading arounf the world"
      )}
    </div>
  );
}

export default Widgets;
