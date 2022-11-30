import { Component } from "react";

class Links extends Component {
  render() {
    const {  socialA, socialAL, socialB, socialBL, socialC, socialCL } = this.props;
    return (
      <div className="Links">
        <h3>Socials Links : </h3>
        <ul>
          <li>
            <a href={socialAL}>{socialA}</a>
          </li>
          <li>
            <a href={socialBL}>{socialB}</a>
          </li>
          <li>
            <a href={socialCL}>{socialC}</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Links;
