import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestscoresComponent } from './testscores.component';

describe('TestscoresComponent', () => {
  let component: TestscoresComponent;
  let fixture: ComponentFixture<TestscoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestscoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestscoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
