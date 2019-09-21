import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Offers3Component } from './offers3.component';

describe('Offers3Component', () => {
  let component: Offers3Component;
  let fixture: ComponentFixture<Offers3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Offers3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Offers3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
