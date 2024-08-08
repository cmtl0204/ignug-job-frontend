import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OfferModel, OfferProfessionalModel, ProfessionalModel } from '@models/core';
import { OfferProfessionalHttpService } from '@servicesHttp/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.scss']
})
export class OfferDetailsComponent {
  @Input() offer!: OfferModel;
  @Input() professional!: ProfessionalModel;
  @Output() applicationSubmitted = new EventEmitter<OfferProfessionalModel>();
 

  constructor(private messageService: MessageService) {}
  applyOffer() {
    this.messageService.add({ severity: 'success', summary: 'Contacto', detail: `Usted ha aplicado a la oferta ${this.offer.activities} con éxito!` });
  }
  
}