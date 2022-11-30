import { Component } from "react";

class Bio extends Component {
  render() {
    return (
      <div className="Bio">
        <h3>{this.props.name}</h3>
        <p>{this.props.title}</p>
      </div>
    );
  }
}

export default Bio;