import {Component, OnInit, Input } from '@angular/core';
import {Recipe} from "../../recipe.model";
import {RecservService} from "../../recserv.service";

@Component({
  selector: 'app-recitem',
  templateUrl: './recitem.component.html',
  styleUrls: ['./recitem.component.css']
})
export class RecitemComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recService: RecservService) { }

  ngOnInit() {
  }

  onSelected(){
    this.recService.recSelected.emit(this.recipe);
  }

}
