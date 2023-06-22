import React from "react";
import { Provider } from "react-redux";
import Signup from "./components/SignUp/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import NotesList from "../src/components/Notes/NoteList";
import Login from "./components/Login/Login";
import store from '../src/store/index'
import Dashboard from "./Dashboard";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/folders/:name" Component={NotesList}></Route>
          <Route exact path="/login" Component={Login}></Route>
          <Route exact path="/register" Component={Signup}></Route>
          <Route exact path="/dashboard" Component={Dashboard}></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
