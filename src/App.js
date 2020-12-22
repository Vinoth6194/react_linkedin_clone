import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import Widgets from "./Widgets";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.profilePic,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
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
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
