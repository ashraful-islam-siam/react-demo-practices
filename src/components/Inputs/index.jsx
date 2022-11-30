import { Component } from "react";
// import Data from './component/data/index'
class Inputs extends Component {
  state = {
    name: "",
    country: "",
    bio: "",
    birthDay: "",
    gender: "",
    agree: false,
    skills: [],
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleCheckbox = (event) => {
    this.setState({
      agree: event.target.checked,
    });
  };

  handleSkillChange = (event) => {
    if(event.target.checked) {
      this.setState({
        skills: [...this.state.skills, event.target.value]
      })
    } else {
      const skills = this.state.skills.filter(skill => skill !== event.target.value)
      this.setState({
        skills
      })
    }
  }
  dataHandler = (data) => {
    console.log(data);
  };
  render() {
    const { name, country, bio, birthDay, gender, agree, skills } = this.state;
    return (
      <div className="container form-group">
        <div style={{ width: "650px", margin: "auto" }}>
          <input
            className="form-control my-2"
            type="text"
            name="name"
            placeholder="Ashraful Islam"
            value={name}
            onChange={this.handleChange}
          />
          <select
            onChange={this.handleChange}
            value={country}
            className="form-control my-2"
            name="country"
          >
            <option>Select Country</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="India">India</option>
            <option value="Srilanka">Srilanka</option>
            <option value="china">China</option>
          </select>
          <textarea
            value={bio}
            onChange={this.handleChange}
            className="form-control my-2"
            name="bio"
            placeholder="Tell me yourself"
          ></textarea>
          <input
            value={birthDay}
            onChange={this.handleChange}
            className="form-control my-2"
            type="date"
            name="birthDay"
          />{" "}
          <br />
          <div>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={this.handleChange}
            />
            Male
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={this.handleChange}
            />
            Female
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={this.handleChange}
            />
            Other
          </div>
          <div>
            <input
              type="checkbox"
              name="skills"
              value="Java"
              checked={skills.includes("Java")}
              onChange={this.handleSkillChange}
            />
            Java
            <input
              type="checkbox"
              name="skills"
              value="Javascript"
              checked={skills.includes("Javascript")}
              onChange={this.handleSkillChange}
            />
            Javascript
            <input
              type="checkbox"
              name="skills"
              value="Python"
              checked={skills.includes("Python")}
              onChange={this.handleSkillChange}
            />
            Python
            <input
              type="checkbox"
              name="skills"
              value="Ruby"
              checked={skills.includes("Ruby")}
              onChange={this.handleSkillChange}
            />
            Ruby
          </div>
          <div>
            <input
              type="checkbox"
              name="agree"
              checked={agree}
              onChange={this.handleCheckbox}
            />
            I agree all terms and conditions
          </div>
          <button
            className="btn btn-primary"
            onClick={() => this.dataHandler(this.state)}
          >
            Show data
          </button>
        </div>
      </div>
    );
  }
}

export default Inputs;