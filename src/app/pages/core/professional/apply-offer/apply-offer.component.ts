import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfferProfessionalModel, OfferModel } from '@models/core';
import { AuthService } from '@servicesApp/auth';
import { BreadcrumbService, CoreService } from '@servicesApp/core';
import { OfferHttpService } from '@servicesHttp/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-apply-offer',
  templateUrl: './apply-offer.component.html',
  styleUrls: ['./apply-offer.component.scss']
})
export class ApplyOfferComponent implements OnInit {
  protected readonly authService = inject(AuthService);
  private readonly offerHttpService = inject(OfferHttpService);
  protected readonly coreService = inject(CoreService);
  private readonly breadcrumbService = inject(BreadcrumbService);
  protected readonly messageService = inject(MessageService);
  private readonly router = inject(Router);
  protected isButtonActions = false;
  protected selectedOffer: OfferModel | null = null;
  protected items: OfferModel[] = [];

  Items: MenuItem[] = [];

  offers: OfferModel[] = [];

  ngOnInit() {
    this.initializeMenu();
    this.findAll();
  }

  initializeMenu() {
    this.Items = [
      { label: 'Inicio', icon: 'pi pi-fw pi-home' },
      { label: 'Profesionales', icon: 'pi pi-fw pi-users' },
      { label: 'Servicios', icon: 'pi pi-fw pi-briefcase' },
      { label: 'Contacto', icon: 'pi pi-fw pi-envelope' }
    ];
  }

  findAll() {
    this.offerHttpService.findAll().subscribe((response) => {
      this.items = response;
      this.offers = this.items.map(item => ({
        id: item.id,
        remuneration: item.remuneration,
        vacancies: item.vacancies,
        activities: item.activities,
        requirements: item.requirements,
        position: item.position,
        additionalInformation: item.additionalInformation
      }));
    });
  } 

}