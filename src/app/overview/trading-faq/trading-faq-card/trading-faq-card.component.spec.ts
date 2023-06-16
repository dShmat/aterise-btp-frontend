import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingFaqCardComponent } from './trading-faq-card.component';

describe('TradingFaqCardComponent', () => {
  let component: TradingFaqCardComponent;
  let fixture: ComponentFixture<TradingFaqCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TradingFaqCardComponent]
    });
    fixture = TestBed.createComponent(TradingFaqCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
