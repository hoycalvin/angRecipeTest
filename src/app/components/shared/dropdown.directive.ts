import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  //bind to 'class' the property of 'open'.
  //class is an array of all classes
  @HostBinding('class.open') isOpen = false;

  constructor() { }

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }
}
