import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecitemComponent } from './recitem.component';

describe('RecitemComponent', () => {
  let component: RecitemComponent;
  let fixture: ComponentFixture<RecitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
