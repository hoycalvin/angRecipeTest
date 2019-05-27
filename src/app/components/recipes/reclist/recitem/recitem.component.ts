import {Component, OnInit, Input } from '@angular/core';
import {Recipe} from "../../recipe.model";

@Component({
  selector: 'app-recitem',
  templateUrl: './recitem.component.html',
  styleUrls: ['./recitem.component.css']
})
export class RecitemComponent implements OnInit {

  @Input() recipe: Recipe;

  ngOnInit() {
  }


}
