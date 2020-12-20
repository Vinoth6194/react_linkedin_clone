import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { selectuser } from "./features/userSlice";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
function App() {
  const user = useSelector(selectuser);
  return (
    <div className="app">
      {/* <h1>Linkedin Clone</h1> */}
      {/* Header */}
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          {/* widgets */}
        </div>
      )}
    </div>
  );
}

export default App;
