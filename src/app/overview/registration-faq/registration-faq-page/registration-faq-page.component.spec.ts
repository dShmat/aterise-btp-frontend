import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFaqPageComponent } from './registration-faq-page.component';

describe('RegistrationFaqViewComponent', () => {
  let component: RegistrationFaqPageComponent;
  let fixture: ComponentFixture<RegistrationFaqPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationFaqPageComponent]
    });
    fixture = TestBed.createComponent(RegistrationFaqPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
