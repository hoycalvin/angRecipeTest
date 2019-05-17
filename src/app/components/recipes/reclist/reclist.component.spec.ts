import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclistComponent } from './reclist.component';

describe('ReclistComponent', () => {
  let component: ReclistComponent;
  let fixture: ComponentFixture<ReclistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
