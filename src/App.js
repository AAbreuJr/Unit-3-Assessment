import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector';
import Circles from './components/Circles/Circles';

const circleNum = ['0','1','2','3']

class App extends Component {
  state = {
    circleIdx: 0
  }

  handleTheCircles = (idx) => {
    this.setState({ circleIdx: idx })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 3 ASSESSMENT</header>
        <main>
          <CircleSelector
            circleNum={circleNum}
            circleIdx={this.state.circleIdx}
            handleTheCircles={this.handleTheCircles} />
          <Circles 
            circleNum={circleNum}
            circleIdx={this.state.circleIdx}
            handleTheCircles={this.handleTheCircles} />
        </main>
      </div>
    );
  }
}

export default App;