import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwatchRowComponent } from './swatch-row.component';

describe('SwatchRowComponent', () => {
  let component: SwatchRowComponent;
  let fixture: ComponentFixture<SwatchRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwatchRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwatchRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
