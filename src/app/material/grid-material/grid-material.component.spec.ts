import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridMaterialComponent } from './grid-material.component';

describe('GridMaterialComponent', () => {
  let component: GridMaterialComponent;
  let fixture: ComponentFixture<GridMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridMaterialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
