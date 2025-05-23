import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddBug from "./components/add-bug.component";
import DeleteBug from "./components/delete-bug.component";
import BugsList from "./components/bug-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/bugs"} className="navbar-brand">
            Bug Crud
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/bugs"} className="nav-link">
                Bugs
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/delete"} className="nav-link">
                Delete
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<BugsList/>} />
            <Route path="/bugs" element={<BugsList/>} />
            <Route path="/add" element={<AddBug/>} />
            <Route path="/delete" element={<DeleteBug/>} /> 
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;