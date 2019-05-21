import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecdescComponent } from './recdesc.component';

describe('RecdescComponent', () => {
  let component: RecdescComponent;
  let fixture: ComponentFixture<RecdescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecdescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecdescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
