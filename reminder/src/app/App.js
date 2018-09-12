import React, { Component } from 'react';
import Header from './components/header/Header';
import TodoList from './components/todoList/TodoList';
import RecipeList from './components/recipeList/RecipeList';
import Reminder from './components/reminder/Reminder';
import Notes from './components/notes/Notes';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      components: [
          <TodoList />,
          <RecipeList />,
          <Reminder />,
          <Notes />
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Header />

       {this.state.components}
      </div>
    );
  }
}

export default App;
