import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInPageComponent } from './log-in-page.component';

describe('SignInPageComponent', () => {
  let component: LogInPageComponent;
  let fixture: ComponentFixture<LogInPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogInPageComponent]
    });
    fixture = TestBed.createComponent(LogInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
