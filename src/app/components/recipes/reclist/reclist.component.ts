import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from "./recipe.model";
import {RecservService} from "../recserv.service";

@Component({
  selector: 'app-reclist',
  templateUrl: './reclist.component.html',
  styleUrls: ['./reclist.component.css']
})
export class ReclistComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[];

  constructor(private recService: RecservService) { }

  ngOnInit() {
    this.recipes = this.recService.getRecipes();
  }

  onRecSelect(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
