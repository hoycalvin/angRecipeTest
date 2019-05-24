import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";
import {RecservService} from "../recserv.service";

@Component({
  selector: 'app-recdesc',
  templateUrl: './recdesc.component.html',
  styleUrls: ['./recdesc.component.css']
})
export class RecdescComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor(private recServ: RecservService) { }

  ngOnInit() {
  }

  onAddShopList() {
    this.recServ.addIngToShopList(this.recipe.ingredients);
  }
}
