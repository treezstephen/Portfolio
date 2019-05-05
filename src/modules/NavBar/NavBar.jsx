import React, { Component } from "react";
import PropTypes from "prop-types";
import NumberedListItem from "../../components/NumberedListItem";
import { Button } from "antd";

class NavBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div className="nav-bar-container space-between">
            <div className="flex-start aligned"></div>
            <div className="flex-end aligned">
                <NumberedListItem num="01" text="About"/>
                <NumberedListItem num="02" text="Experience"/>
                <NumberedListItem num="03" text="Work"/>
                <NumberedListItem num="04" text="Projects"/>
                <NumberedListItem num="05" text="Contact"/>
                <Button type='ghost' className="button">Resume</Button>
            </div>
        </div>
    );
  }
}

export default NavBar;