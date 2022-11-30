import { Component } from "react";

class Event extends Component {
    state =  {
        name: "Ashraful"
    }


    // inputChange(event) {
    //     // this.setState({name: event.target.value})
    //     this.setState({ name: event.target.value })
    // }

    handleChange = (e) => {
        this.setState({ name: e.target.value })
    }

    handleFocus = () => {
        console.log('I am focus event')
    }

    handleBlur = () => {
        if(!this.state.name) {
            alert("Fill up")
        }
    }

    render() {
        return (
            <>
                <div style={{margin: "10px"}}>
                <input type="text" value={this.state.name}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}

                />
                <h3>{this.state.name ?  `Hello, ${this.state.name}` : ""}</h3>
                </div>
            </>
        )
    }
}


export default Event