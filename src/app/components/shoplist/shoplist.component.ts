import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShopListServService} from "./shop-list-serv.service";

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css']
})
export class ShoplistComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private slServ: ShopListServService) { }

  ngOnInit() {
    this.ingredients = this.slServ.getIngredients();
    this.slServ.ingChangedEmit.subscribe(
      (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
      }
    );
  }

}
