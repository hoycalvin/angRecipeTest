import { Component, OnInit } from '@angular/core';
import { Recipe } from "./reclist/recipe.model";
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
    this.recService.recSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }

}
