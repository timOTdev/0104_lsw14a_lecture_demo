import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    isOn: false,
  };

  render() {
    const displayText = this.state.isOn ? 'On' : 'Off';

    return (
      <div className="App">
        <h1 className="display">{displayText}</h1>
        <div>
          <button onClick={this.toggle} className="toggle-btn">
            Toggle
          </button>
        </div>
      </div>
    );
  }

  toggle = () => {
    this.setState(prevState => ({ isOn: !prevState.isOn }));
  };
}

export default App;
