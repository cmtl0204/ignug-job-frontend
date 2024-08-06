import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyQrOfferComponent } from './apply-qr-offer.component';

describe('ApplyQrOfferComponent', () => {
  let component: ApplyQrOfferComponent;
  let fixture: ComponentFixture<ApplyQrOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplyQrOfferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplyQrOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
