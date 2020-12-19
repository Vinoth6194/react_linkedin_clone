import React from "react";
import "./App.css";
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
        {/* sidebar */}
        {/* feesd */}
        {/* widgets */}
      </div>
    </div>
  );
}

export default App;
