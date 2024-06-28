import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTestscoresComponent } from './grid-testscores.component';

describe('GridTestscoresComponent', () => {
  let component: GridTestscoresComponent;
  let fixture: ComponentFixture<GridTestscoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridTestscoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridTestscoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
