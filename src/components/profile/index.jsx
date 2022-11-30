import { Component } from "react";
import "./profile.css"
import Bio from './Bio'
import Skills from './Skills'
import Links from './Links'
class Profile extends Component {
    me = {
        name: 'Ashraful Islam',
        title: 'Frontend Developer',
        skillA: "Javascript",
        skillB: "Python",
        skillC: "Ruby"
    }
  render() {
    return (
      <div className="Container">
        <Bio name={this.me.name} title={this.me.title} />
        <Skills skillA={this.me.skillA} skillB={this.me.skillB} skillC={this.me.skillC} />
        <Links 
            socialA={"Facebook"} socialAL={"https://www.facebook.com"}
            socialB={"Twitter"} socialBL={"https://www.twitter.com"}
            socialC={"Instagram"} socialCL={"https://www.instagram.com"}
        />
      </div>
    );
  }
}

export default Profile;
