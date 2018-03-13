import React, { Component } from 'react';
import './App.css';

import PresenceHistory from './PresenceHistory/PresenceHistory';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PresenceHistory guild={"303652810258513921"} />
      </div>
    );
  }
}

export default App;
