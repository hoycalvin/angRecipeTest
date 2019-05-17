import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }

}
