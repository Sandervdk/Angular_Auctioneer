import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Offers4Component } from './offers4.component';

describe('Offers4Component', () => {
  let component: Offers4Component;
  let fixture: ComponentFixture<Offers4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Offers4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Offers4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
