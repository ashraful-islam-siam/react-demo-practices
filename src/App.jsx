import React, { Component } from 'react';
// import UnderstandComponent from './components/understand-component';
// import Event from './components/event';
// import Clock from './components/clock';
// import SimpleTimer from './components/simple-timer';
// import Profile from './components/profile';
// import State from './components/state';
import Home from './components/understand-component/Home'
class App extends Component {
  render() {
    return (
      <div className="container">
        {/* <Profile /> */}
        {/* <State /> */}
        {/* <SimpleTimer /> */}
        {/* <Clock /> */}
        {/* <Event /> */}
        {/* <UnderstandComponent /> */}
        <Home />
      </div>
    )
  } 
}


export default App;