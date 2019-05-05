import React, { Component } from "react";
import PropTypes from "prop-types";
import NavBar from "./NavBar/NavBar";
import LeftSider from "./LeftSider/LeftSider";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='app-container'>
        <NavBar />
        <LeftSider/>
        <div className="right-sider-container">
        </div>
        <div className="main-content-container">
        </div>
      </div>
    );
  }
}

export default App;