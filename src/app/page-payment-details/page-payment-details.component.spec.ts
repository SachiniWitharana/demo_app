import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePaymentDetailsComponent } from './page-payment-details.component';

describe('PagePaymentDetailsComponent', () => {
  let component: PagePaymentDetailsComponent;
  let fixture: ComponentFixture<PagePaymentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePaymentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePaymentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
