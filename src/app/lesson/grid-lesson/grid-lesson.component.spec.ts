import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridLessonComponent } from './grid-lesson.component';

describe('GridLessonComponent', () => {
  let component: GridLessonComponent;
  let fixture: ComponentFixture<GridLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridLessonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
