import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

import { Recipe } from "../recipe.model";
import {RecservService} from "../recserv.service";


@Component({
  selector: 'app-recdesc',
  templateUrl: './recdesc.component.html',
  styleUrls: ['./recdesc.component.css']
})
export class RecdescComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recServ: RecservService,
              private route: ActivatedRoute) {
  }

  //set the id by casting (+) the inputted string to a number
  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {

        this.id = +params['id'];
        this.recipe = this.recServ.getRecipeById(this.id);
      }
    );
  }

  onAddShopList() {
    this.recServ.addIngToShopList(this.recipe.ingredients);
  }
}
