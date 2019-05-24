import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";
import {ShopListServService} from "../shop-list-serv.service";

@Component({
  selector: 'app-shop-edit',
  templateUrl: './shop-edit.component.html',
  styleUrls: ['./shop-edit.component.css']
})
export class ShopEditComponent implements OnInit {

  //ViewChild injects nameInputRef (type: ElementRef) by matching it with a
  //value that matches 'nameInput' (local reference from .html file)
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private slService: ShopListServService) { }

  ngOnInit() {
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredient);
  }
}
