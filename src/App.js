  
import React  from 'react';
import './App.css';
import Clock from './Clock';
import Person from './Person';

class App extends React.Component {

  render() {

    return (
      <div className="App">
      
        <Clock />
        <Person />

      </div>
    )
  }
}

export default App