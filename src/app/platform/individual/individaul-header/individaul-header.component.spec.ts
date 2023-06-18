import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividaulHeaderComponent } from './individaul-header.component';

describe('IndividaulHeaderComponent', () => {
  let component: IndividaulHeaderComponent;
  let fixture: ComponentFixture<IndividaulHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividaulHeaderComponent]
    });
    fixture = TestBed.createComponent(IndividaulHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
