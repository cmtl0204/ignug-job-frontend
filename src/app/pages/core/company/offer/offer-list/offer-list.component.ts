import {Component, inject, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Router} from '@angular/router';
import {MenuItem, PrimeIcons} from "primeng/api";
import {SelectUserDto, UserModel} from '@models/auth';
import {ColumnModel, OfferModule} from '@models/core';
import {AuthService} from '@servicesApp/auth';
import {BreadcrumbService, CoreService, MessageService} from '@servicesApp/core';
import {BreadcrumbEnum, IconButtonActionEnum, LabelButtonActionEnum} from "@shared/enums";
import {debounceTime} from "rxjs";
import {OfferHttpService} from "@servicesHttp/core";

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrl: './offer-list.component.scss'
})
export class OfferListComponent implements OnInit {
  protected readonly authService = inject(AuthService);
  private readonly offerHttpServices = inject(OfferHttpService);
  protected readonly coreService = inject(CoreService);
  private readonly breadcrumbService = inject(BreadcrumbService);
  protected readonly messageService = inject(MessageService);
  private readonly router = inject(Router);

  protected readonly PrimeIcons = PrimeIcons;
  protected buttonActions: MenuItem[] = this.buildButtonActions;
  protected columns: ColumnModel[] = this.buildColumns;
  protected isButtonActions: boolean = false;
  protected selectedItem: OfferModule = {};
  protected items: OfferModule[] = [];

  constructor() {
    this.breadcrumbService.setItems([{label: BreadcrumbEnum.USERS}]);
  }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.offerHttpServices.findAll().subscribe((response) => {
      this.items = response;
    });
  }

  get buildColumns(): ColumnModel[] {
    return [
      {field: 'contractTypeId', header: 'Tipo de contrato'},
      {field: 'companyId', header: 'Compania'},
      {field: 'experienceTimeId', header: 'Tiempo de Experiencia'},
      {field: 'locationId', header: 'Ubicación'},
      {field: 'sectorId', header: 'Sector '},
      {field: 'stateId', header: 'Estado'},
      {field: 'trainingHoursId', header: 'Horas de Entrenamiento'},
      {field: 'workingDayId', header: 'Día de Trabajo'},
      {field: 'activities', header: 'Actividades'},
      {field: 'code', header: 'Codigo'},
      {field: 'contactCellphone', header: 'Contacto Telefono Celular'},
      {field: 'contactEmail', header: 'Email'},
      {field: 'contactName', header: 'Nombre de Contacto'},
      {field: 'contactPhone', header: 'Contacto Celular'},
      {field: 'endedAt', header: 'Termino'},
      {field: 'position', header: 'Position'},
      {field: 'remuneration', header: 'Remuneración'},
      {field: 'startedAt', header: 'Inicio'},
      {field: 'requirements', header: 'Requisitos'},
      {field: 'additionalInformation', header: 'Información Adicional'},
      {field: 'vacancies', header: 'Vacantes'},

    ];
  }

  get buildButtonActions(): MenuItem[] {
    return [
      {
        label: LabelButtonActionEnum.UPDATE,
        icon: IconButtonActionEnum.UPDATE,
        command: () => {
          if (this.selectedItem?.id) this.redirectEditForm(this.selectedItem.id);
        },
      },
      {
        label: LabelButtonActionEnum.DELETE,
        icon: IconButtonActionEnum.DELETE,
        command: () => {
          if (this.selectedItem?.id) this.remove(this.selectedItem.id);
        },
      },
    ];
  }

  redirectCreateForm() {
    // this.router.navigate(['/core/professionals', this.authService.auth.professional.id, 'courses/new']);
    // this.router.navigate([`/core/professionals/${this.authService.auth.professional.id}/courses/new`]);
    this.router.navigate([`/core/companies/offers/new`]);
  }

  redirectEditForm(id: string) {
   // this.router.navigate(['/core/professionals', this.authService.auth.professional.id, 'courses', id]);
  }

  remove(id: string) {
    // this.messageService.questionDelete()
    //   .then((result) => {
    //     if (result.isConfirmed) {
    //       this.courseHttpServices.remove(id).subscribe((user) => {
    //         this.users = this.users.filter(item => item.id !== user.id);
    //         this.paginator.totalItems--;
    //       });
    //     }
    //   });
  }

  selectItem(item: OfferModule) {
    this.isButtonActions = true;
    this.selectedItem = item;
  }
}