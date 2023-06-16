import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFaqCardComponent } from './registration-faq-card.component';

describe('RegistrationFaqCardComponent', () => {
  let component: RegistrationFaqCardComponent;
  let fixture: ComponentFixture<RegistrationFaqCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationFaqCardComponent]
    });
    fixture = TestBed.createComponent(RegistrationFaqCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
