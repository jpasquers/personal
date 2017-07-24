import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutazBarshimComponent } from './mutaz-barshim.component';

describe('MutazBarshimComponent', () => {
  let component: MutazBarshimComponent;
  let fixture: ComponentFixture<MutazBarshimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutazBarshimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutazBarshimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
