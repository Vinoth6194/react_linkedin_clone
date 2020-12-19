import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
function App() {
  return (
    <div className="app">
      {/* <h1>Linkedin Clone</h1> */}
      {/* Header */}
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* widgets */}
      </div>
    </div>
  );
}

export default App;
