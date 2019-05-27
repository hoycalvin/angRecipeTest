import { Injectable, EventEmitter } from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShopListServService} from "../shoplist/shop-list-serv.service";

@Injectable({
  providedIn: 'root'
})
export class RecservService {
  recSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Schnitzel Test Recipe",
      "This be Schnitzel",
      "https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg",
      [
          new Ingredient('Meat', 1),
          new Ingredient("Fries", 20)
      ]),
    new Recipe(
      "Rice Test Recipe",
      "This be Rice",
      "https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg",
      [
          new Ingredient('Rice', 300),
          new Ingredient('Meat', 1)
      ])
  ];

  constructor(private slServ: ShopListServService) { }

  getRecipes(){
    //copies the recipes array and returns that copy (to ensure no manipulation is possible)
    return this.recipes.slice();
  }

  addIngToShopList(ingredients: Ingredient[]){
    this.slServ.addIngredients(ingredients);
  }
}
