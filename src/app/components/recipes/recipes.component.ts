import { Component, OnInit } from '@angular/core';
import { Recipe } from "./recipe.model";
import {RecservService} from "./recserv.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecservService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;
  constructor(private recService: RecservService) { }

  ngOnInit() {
    //use subscribe to have the listener(recSelected) stay informed of any changes
    this.recService.recSelected.subscribe(
      //using the ES6 arrow function, set any Recipe to the newly selected recipe.
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }

}
