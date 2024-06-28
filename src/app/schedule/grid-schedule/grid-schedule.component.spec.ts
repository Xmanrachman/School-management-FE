import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridScheduleComponent } from './grid-schedule.component';

describe('GridScheduleComponent', () => {
  let component: GridScheduleComponent;
  let fixture: ComponentFixture<GridScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridScheduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
