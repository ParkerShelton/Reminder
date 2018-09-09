import React, { Component } from 'react';
import './RecipeList.css';

class RecipeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeList: {
        title: "",
        ingredients: [
          {
            id: 0,
            name: "",
            amount: "",
            notes: ""
          },                                  
        ]
      }
    }
  }

  clearInput(event) {
    event.target.value = "";
  }  

  handleChange(event, index) {
    let recipeList = this.state.recipeList;

    if(event.target.className === "recipeTitle") {
      recipeList.title = event.target.value;
    }
    if(event.target.className === "ingredientInput") {
      recipeList.ingredients[index].name = event.target.value;
    }
    if(event.target.className === "amountInput") {
      recipeList.ingredients[index].amount = event.target.value;
    }
    if(event.target.className === "recipeNotes") {
      recipeList.ingredients.notes = event.target.value;
    }

    this.setState(
      recipeList
    );
    
  }

  addIngredient() {
    let id = this.state.recipeList.ingredients.length;

    let ingredient = {
      id: id,
      name: "",
      amount: "",
      notes: ""
    }
    let recipeList = this.state.recipeList;

    recipeList.ingredients = [...recipeList.ingredients, ingredient];
    this.setState(recipeList);
  }

  removeIngredient(ingredient) {
    let recipeList = this.state.recipeList;

    for(let i = 0; i < (this.state.recipeList.ingredients.length); i++) {
      var newIngredients = this.state.recipeList.ingredients.filter(ingredientItem => ingredientItem.id !== ingredient.id);
    }

    this.state.recipeList.ingredients = newIngredients;
    this.setState({
      recipeList,
    });

  }

  render() {

    let recipeList = this.state.recipeList.ingredients.map((ingredient, index) => {      
      return(
        <li className="ingredientContainer" key={index}>

          <input className="ingredientInput" placeholder="Enter Ingredient" type="text" value={ingredient.name} onChange={(e) => {this.handleChange(e, index)}} />

          <input className="amountInput" placeholder="Qty" type="text" value={ingredient.amount} onChange={(e) => {this.handleChange(e, index)}} />

          <button className="ingredientRemove" onClick={() => {this.removeIngredient(ingredient)}} >X</button>
        </li>
      ); 
    });

    return (
      <div className="RecipeList">
        <h1>Recipe List</h1>
        
        <input placeholder="Enter Title" name="recipeTitle" onFocus={this.clearInput} className="recipeTitle" value={this.state.recipeList.title} onChange={(e) => this.handleChange(e)} type="text"/>

        <ul className="recipeList">
          {recipeList}
          {console.log(this.state.recipeList.ingredients)}
        </ul>        

        <div className="recipeBottom">
          <button className="addIngredient" onClick={() => this.addIngredient()}>Add Ingredient</button>
          <textarea className="recipeNotes" value={this.state.recipeList.ingredients.notes} placeholder="Notes" onChange={(e) => this.handleChange(e)}/>
        </div>
      </div>
    );
  }
}

export default RecipeList;
