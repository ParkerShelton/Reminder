import React, { Component } from 'react';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: {
        title: "",
        tasks: [
          {
            id: 0,
            name: "",
            isChecked: false
          },                                  
        ]
      }
    }
  }

  clearInput(event) {
    event.target.value = "";
  }

  handleChange(event, index) {
    let todoList = this.state.todoList;


    if(event.target.className === "taskTitle") {
      todoList.title = event.target.value;
    }

    if(event.target.className === "taskInput") {
      todoList.tasks[index].name = event.target.value;
    }

    if(event.target.className === "taskCheckbox") {
      if(event.target.checked === true) {
        todoList.tasks[index].isChecked = true;
        
      } else {
        todoList.tasks[index].isChecked = false;
      }
    }

    this.setState(
      todoList
    );
    
  }


  addTask() {
    let id = this.state.todoList.tasks.length;

    let task = {
      id: id,
      name: "",
      isChecked: false
    }
    let todoList = this.state.todoList;

    todoList.tasks = [...todoList.tasks, task];
    this.setState(todoList);
  }


  removeTask(task) {
    let todoList = this.state.todoList;
    // let tasks = this.state.todoList.tasks;

    for(let i = 0; i < (this.state.todoList.tasks.length); i++) {
      var newTasks = this.state.todoList.tasks.filter(taskItem => taskItem.id !== task.id);
    }

    this.state.todoList.tasks = newTasks;
    this.setState({
      todoList,
    });

  }


  render() {

    let taskList = this.state.todoList.tasks.map((task, index) => {      
      return(
        <li className="taskContainer" key={index}>
          <input className="taskCheckbox" type="checkbox" onChange={(e) => {this.handleChange(e, index)}} />

          <input className="taskInput" placeholder="Enter Task" type="text" value={task.name} onChange={(e) => {this.handleChange(e, index)}} />

          <button className="taskRemove" onClick={() => {this.removeTask(task)}} >X</button>
        </li>
      ); 
    });


    return (

      <div className="TodoList">
        <h1>Todo List</h1>

        <input placeholder="Enter Title" name="taskTitle" onFocus={this.clearInput} className="taskTitle" value={this.state.todoList.title} onChange={(e) => this.handleChange(e)} type="text"/>

        <ul className="taskList">
          {taskList}
          {console.log(this.state.todoList.tasks)}
        </ul>

        <button className="addTask" onClick={() => this.addTask()}>Add Task</button>
      </div>
    );
  }
}

export default TodoList;
