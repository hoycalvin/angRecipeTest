import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recdesc',
  templateUrl: './recdesc.component.html',
  styleUrls: ['./recdesc.component.css']
})
export class RecdescComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
