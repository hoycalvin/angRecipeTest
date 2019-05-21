import {Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";

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

  //Adds a JS Object and sends it to EventEmitter
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
