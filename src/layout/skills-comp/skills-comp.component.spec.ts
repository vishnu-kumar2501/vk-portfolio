import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCompComponent } from './skills-comp.component';

describe('SkillsCompComponent', () => {
  let component: SkillsCompComponent;
  let fixture: ComponentFixture<SkillsCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
