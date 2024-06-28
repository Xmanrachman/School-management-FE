import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridStudentsComponent } from './grid-students.component';

describe('GridStudentsComponent', () => {
  let component: GridStudentsComponent;
  let fixture: ComponentFixture<GridStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
