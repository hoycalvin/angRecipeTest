import { Injectable, EventEmitter } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShopListServService {
  //make a new emitter to check if any changes are made to the Ingredient list
  ingChangedEmit = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient("apples",5),
    new Ingredient("pears",10),
  ];

  constructor() { }

  getIngredients(){
    return this.ingredients.slice()
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingChangedEmit.emit(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]){

    /* ### this is worse, as it emits after every add ###
    for (let ingredient of ingredients){
      this.addIngredient(ingredient);
    }
    */

    //This adds all ingredients and then emits, less performance intensive
    //push would normally push an entire array. the ... operator spreads() ingredients.
    this.ingredients.push(...ingredients);
    //after the spread, emit a copy of the new array of ingredients.
    this.ingChangedEmit.emit(this.ingredients.slice());
  }
}
