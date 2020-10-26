import React from 'react';

class Clock extends React.Component {
  
     state = {date: new Date()};
   
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      })
    }
  
    render() {
      return (
        <div>
<h2>{this.state.date.toLocaleTimeString()}</h2>

<h1 style={{fontFamily:"cursive", backgroundColor:"blue"}}>My profile</h1>
        </div>
      );
    }
  }

  export default Clock