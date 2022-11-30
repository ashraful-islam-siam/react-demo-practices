import { Component } from "react";

class State extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         count: 0,
    //     }
    // }
    state = {
        count: 0
    }

    render() {
        return <div>
            <h3>Why do we need state?</h3>
            <h3>Count - {this.state.count}</h3>

            <button
                onClick={() => {
                    // this.state++
                    // this.setState({count: this.state.count+1})
                    this.setState(prev => {
                        return {
                            count: prev.count + 1
                        }
                    }, () => {
                        console.log("Clicked....", this.state.count)
                    })
                    
                }}
            >
                ADD +1
            </button>
        </div>
    }
}

export default State;