import { Component } from "react";
import '../simple-timer/timer.style.css';
class Clock extends Component {
    state = {
        second: 0,
        minute: 0,
        hour: 0
    }
    render () {
        setInterval(() => {
            this.setState({second: new Date().getSeconds()})
        }, 1000)
        setInterval(() => {
            this.setState({minute: new Date().getMinutes()})
        }, 1000*60)
        setInterval(() => {
            this.setState({hour: new Date().getHours()})
        }, 1000)
        return <div style={{padding: "20px"}} className="Container">
            <span style={{fontSize: "28px", margin: "3px"}}>{this.state.hour ? this.state.hour : new Date().getHours() - 12} :</span> 
            <span style={{fontSize: "28px", margin: "3px"}}>{this.state.minute  ? this.state.minute : new Date().getMinutes()} :</span>
            <span style={{fontSize: "28px", margin: "3px"}}>{this.state.second ? this.state.second : new Date().getSeconds()}</span>
        </div>
    }
}

export default Clock