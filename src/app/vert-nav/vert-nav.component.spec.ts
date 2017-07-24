import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VertNavComponent } from './vert-nav.component';

describe('VertNavComponent', () => {
  let component: VertNavComponent;
  let fixture: ComponentFixture<VertNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VertNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VertNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
