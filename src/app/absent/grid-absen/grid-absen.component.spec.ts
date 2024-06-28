import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridAbsenComponent } from './grid-absen.component';

describe('GridAbsenComponent', () => {
  let component: GridAbsenComponent;
  let fixture: ComponentFixture<GridAbsenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridAbsenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridAbsenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
