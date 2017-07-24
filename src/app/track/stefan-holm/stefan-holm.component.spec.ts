import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StefanHolmComponent } from './stefan-holm.component';

describe('StefanHolmComponent', () => {
  let component: StefanHolmComponent;
  let fixture: ComponentFixture<StefanHolmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StefanHolmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StefanHolmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
