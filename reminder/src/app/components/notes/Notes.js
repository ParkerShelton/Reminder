import React, { Component } from 'react';
import './Notes.css';

class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      notes: ""
    }
  }

  handleChange(event) {
    let title = this.state.title; 
    let notes = this.state.notes;

    if(event.target.className === "noteTitle") {
      title = event.target.value;
    }
    if(event.target.className === "noteInput") {
      notes = event.target.value;
    }

    this.setState({
      title,
      notes
    });
    
  }


  render() {

    return (
      <div className="Notes">
        <input placeholder="Enter Note Title" className="noteTitle" value={this.state.title} onChange={(e) => this.handleChange(e)} type="text"/>

        <textarea className="noteInput" placeholder="Notes" value={this.state.notes} onChange={(e) => this.handleChange(e)} />
      </div>
    );
  }
}

export default Notes;
