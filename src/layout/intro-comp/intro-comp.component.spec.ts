import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroCompComponent } from './intro-comp.component';

describe('IntroCompComponent', () => {
  let component: IntroCompComponent;
  let fixture: ComponentFixture<IntroCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
