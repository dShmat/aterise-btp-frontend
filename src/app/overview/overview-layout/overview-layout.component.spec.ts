import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewLayoutComponent } from './overview-layout.component';

describe('OverviewLayoutComponent', () => {
  let component: OverviewLayoutComponent;
  let fixture: ComponentFixture<OverviewLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverviewLayoutComponent]
    });
    fixture = TestBed.createComponent(OverviewLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
