import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassedTrainingComponent } from './passed-training.component';

describe('PassedTrainingComponent', () => {
  let component: PassedTrainingComponent;
  let fixture: ComponentFixture<PassedTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassedTrainingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PassedTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
