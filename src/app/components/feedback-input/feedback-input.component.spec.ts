import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackInputComponent } from './feedback-input.component';

describe('FeedbackInputComponent', () => {
  let component: FeedbackInputComponent;
  let fixture: ComponentFixture<FeedbackInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
