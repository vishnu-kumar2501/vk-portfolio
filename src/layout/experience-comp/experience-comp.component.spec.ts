import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceCompComponent } from './experience-comp.component';

describe('ExperienceCompComponent', () => {
  let component: ExperienceCompComponent;
  let fixture: ComponentFixture<ExperienceCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
