import React, { Component } from 'react';
import ReactDOM  from 'react-dom';

class ReactReadingTime extends Component {
  render() {
      return (
          <div className='container'>
              Hello React!
          </div>    
      );
  }
}

ReactDOM.render(<ReactReadingTime />, document.getElementById('react'));

export default ReactReadingTime;
