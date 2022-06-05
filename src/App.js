import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Counters from "./components/counters"

class App extends Component  {
  state = { 
    counrers: [
      {id:1, value: 5 },
      {id:2, value: 0 },
      {id:3, value: 0 },
      {id:4, value: 0 }
    ]
 } ;


handledDelet = counreid => {
const counrers= this.state.counrers.filter(c => c.id !== counreid)
this.setState({counrers})
};   


handlelReset = () => {
const counrers = this.state.counrers.map(c => { c.value = 0; return c;} )
this.setState({counrers})
};

handleIncrement = counter => {
const counrers = [...this.state.counrers];
const index = counrers.indexOf(counter)
counrers[index]= {...counter};
counrers[index].value++;
this.setState({ counrers })
};

  render() { 
  return (
      <React.Fragment>
      <NavBar 
       totalCounters = {this.state.counrers.filter(c => c.value > 0).length}
      />
      <main className="container">
       <Counters
       counters = {this.state.counrers}
       onReset={this.handlelReset}
       onIncrement={this.handleIncrement} 
       onDelete={this.handledDelet} 
       />
      </main>
      </React.Fragment>
  );
  }
}

export default App;
