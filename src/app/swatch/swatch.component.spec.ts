import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwatchComponent } from './swatch.component';

describe('SwatchComponent', () => {
  let component: SwatchComponent;
  let fixture: ComponentFixture<SwatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
