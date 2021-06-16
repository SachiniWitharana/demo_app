import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePaymenComponent } from './page-paymen.component';

describe('PagePaymenComponent', () => {
  let component: PagePaymenComponent;
  let fixture: ComponentFixture<PagePaymenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePaymenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePaymenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
