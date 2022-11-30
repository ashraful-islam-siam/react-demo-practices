import { Component } from "react";
import "./timer.style.css";
class SimpleTimer extends Component {
  state = {
    count: 0,
  };
  intervalId = null;
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrementCount = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  startTimer = () => {
    if(this.state.count > 0 && !this.intervalId) {
        this.intervalId = setInterval(() => {
            this.setState({count: this.state.count - 1}, () => {
                if(this.state.count === 0) {
                    alert('Timer Finished');
                    clearInterval(this.intervalId)
                    this.intervalId = null
                }
            })
        }, 1000*60)
    }
  };

  stopTimer = () => {
    if(this.intervalId) {
        clearInterval(this.intervalId)
        this.intervalId  = null
    }
  }

  resetTimer = () => {
    this.setState({count: 0})
    clearInterval(this.intervalId)
    this.intervalId = null
  }


  render() {
    return (
      <div className="Container">
        <h3>Simple Timer</h3>
        <div>
          <button onClick={this.decrementCount} className="Btn">
            -
          </button>
          <span className="Text">{this.state.count}</span>
          <button onClick={this.incrementCount} className="Btn">
            +
          </button>
        </div>
        <div>
          <button onClick={this.startTimer} className="Btn">
            Start
          </button>
          <button onClick={this.stopTimer} className="Btn">Stop</button>
          <button onClick={this.resetTimer} className="Btn">Reset</button>
        </div>
      </div>
    );
  }
}

export default SimpleTimer;
