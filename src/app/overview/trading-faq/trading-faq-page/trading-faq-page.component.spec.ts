import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingFaqPageComponent } from './trading-faq-page.component';

describe('TradingFaqViewComponent', () => {
  let component: TradingFaqPageComponent;
  let fixture: ComponentFixture<TradingFaqPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TradingFaqPageComponent]
    });
    fixture = TestBed.createComponent(TradingFaqPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
