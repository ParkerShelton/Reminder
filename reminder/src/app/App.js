import React, { Component } from 'react';
import TodoList from './components/todoList/TodoList';
import RecipeList from './components/recipeList/RecipeList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
     
    }
  }




  render() {
    return (
      <div className="App">
        <TodoList />
        {/* <RecipeList /> */}
      </div>
    );
  }
}

export default App;
