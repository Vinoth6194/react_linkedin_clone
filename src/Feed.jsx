import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import "./feed.css";
function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text"></input>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Feed;
