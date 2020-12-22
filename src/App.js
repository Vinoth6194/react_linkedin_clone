import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { selectUser } from "./features/userSlice";
function App() {
  const user = useSelector(selectUser);
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
