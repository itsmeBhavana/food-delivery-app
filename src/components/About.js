import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namaste Reat Web Series</h2>
        <UserClass name={"Bhavana Matavalam"} location={"Hyderabad"} />
      </div>
    );
  }
}

export default About;
