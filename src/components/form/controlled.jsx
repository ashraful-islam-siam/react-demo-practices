import { Component } from "react";

class Controlled extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    e.target.reset();
    this.setState({
      name: "",
      email: "",
      password: "",
    });
  };
  render() {
    return (
      <div className="container mt-3">
        <h2 className="display-5 text-center">Working with forms in React</h2>
        <form
          onSubmit={this.handleSubmit}
          style={{ width: "660px", margin: "auto" }}
        >
          <hr />
          <input
            className="form-control my-2"
            type="text"
            name="name"
            placeholder="Ashraful Islam"
          />
          <input
            className="form-control my-2"
            type="email"
            name="email"
            placeholder="ashrafulislam@gmail.com"
          />
          <input
            className="form-control my-2"
            type="password"
            name="password"
            placeholder="**********"
          />
          <button
            style={{ width: "100%" }}
            className="btn btn-primary"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Controlled;
