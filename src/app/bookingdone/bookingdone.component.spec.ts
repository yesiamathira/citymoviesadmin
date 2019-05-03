import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingdoneComponent } from './bookingdone.component';

describe('BookingdoneComponent', () => {
  let component: BookingdoneComponent;
  let fixture: ComponentFixture<BookingdoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingdoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingdoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
