import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTeacherComponent } from './grid-teacher.component';

describe('GridTeacherComponent', () => {
  let component: GridTeacherComponent;
  let fixture: ComponentFixture<GridTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridTeacherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
