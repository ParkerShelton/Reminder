import React, { Component } from 'react';
import './Reminder.css';

class Reminder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reminder: ""
    }
  }

  handleChange(event) {
    let reminder = this.state.reminder;

    reminder = event.target.value;

    this.setState({
      reminder
    });
    
  }


  render() {

    return (
      <div className="Reminder">
        <input className="reminderInput" placeholder="Reminder" value={this.state.reminder} onChange={(e) => {this.handleChange(e)}} />
        {console.log(this.state.reminder)}
      </div>
    );
  }
}

export default Reminder;
