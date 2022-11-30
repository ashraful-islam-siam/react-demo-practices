import { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div className="Skills">
        <h3>Skills : </h3>
        <ul>
          <li>{this.props.skillA}</li>
          <li>{this.props.skillB}</li>
          <li>{this.props.skillC}</li>
        </ul>
      </div>
    );
  }
}

export default Skills