import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSpecimenComponent } from './font-specimen.component';

describe('FontSpecimenComponent', () => {
  let component: FontSpecimenComponent;
  let fixture: ComponentFixture<FontSpecimenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontSpecimenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontSpecimenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
