import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridReporComponent } from './grid-repor.component';

describe('GridReporComponent', () => {
  let component: GridReporComponent;
  let fixture: ComponentFixture<GridReporComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridReporComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridReporComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
