import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from "./recipe.model";

@Component({
  selector: 'app-reclist',
  templateUrl: './reclist.component.html',
  styleUrls: ['./reclist.component.css']
})
export class ReclistComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This be a test", "https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg"),
    new Recipe("Other Test Recipe", "This be test", "https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecSelect(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
