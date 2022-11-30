import { Component } from "react";

class Uncontrolled extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        const data = {};
        data.name = e.target.name.value
        data.email = e.target.email.value
        data.password = e.target.password.value
        console.log(data)
        e.target.reset()
    }
    render() {
        return (
            <div className="container mt-3">
                <h2 className="display-5 text-center">Working with forms in React</h2>
                <form onSubmit={this.handleSubmit} style={{width: "660px", margin: "auto"}}>
                <hr />
                    <input className="form-control my-2" type="text" name="name" placeholder="Ashraful Islam" />
                    <input className="form-control my-2" type="email" name="email" placeholder="ashrafulislam@gmail.com" />
                    <input className="form-control my-2" type="password"  
                    name="password"
                    placeholder="**********" />
                    <button style={{width: '100%'}} className="btn btn-primary" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default Uncontrolled