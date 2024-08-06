import {Component, inject, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Router} from '@angular/router';
import {MenuItem, PrimeIcons} from "primeng/api";
import {SelectUserDto, UserModel} from '@models/auth';
import {ColumnModel, CourseModel, CompanyProfessionalModel} from '@models/core';
import {AuthService} from '@servicesApp/auth';
import {BreadcrumbService, CoreService, MessageService} from '@servicesApp/core';
import {BreadcrumbEnum, IconButtonActionEnum, LabelButtonActionEnum} from "@shared/enums";
import {debounceTime} from "rxjs";
import {CompanyProfessionalHttpService,} from "@servicesHttp/core";

@Component({
  selector: 'app-course-list',
  templateUrl: './offer-list.component.html',
  styleUrl: './offer-list.component.scss'
})
export class OfferListComponent implements OnInit {
  protected readonly authService = inject(AuthService);
  private readonly CompanyProfessionalHttpService = inject(CompanyProfessionalHttpService);
  protected readonly coreService = inject(CoreService);
  private readonly breadcrumbService = inject(BreadcrumbService);
  protected readonly messageService = inject(MessageService);
  private readonly router = inject(Router);

  protected readonly PrimeIcons = PrimeIcons;
  protected buttonActions: MenuItem[] = this.buildButtonActions;
  protected columns: ColumnModel[] = this.buildColumns;
  protected isButtonActions: boolean = false;
  protected selectedItem: CompanyProfessionalModel = {};
  protected items: CompanyProfessionalModel[] = [];

  constructor() {
    this.breadcrumbService.setItems([{label: BreadcrumbEnum.USERS}]);
  }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.CompanyProfessionalHttpService.findAll().subscribe((response) => {
      this.items = response;
    });
  }

  get buildColumns(): ColumnModel[] {
    return [
      {field: 'name', header: 'Nombre del Curso'},
      {field: 'lastname', header: 'Apellidos'},
      {field: 'name', header: 'Nombres'},
      {field: 'email', header: 'Correo'},
      {field: 'roles', header: 'Roles'},
      {field: 'suspendedAt', header: 'Estado'}
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
    // this.router.navigate(['/core/company', this.authService.auth.professional.id, 'courses/new']);
    // this.router.navigate([`/core/company/${this.authService.auth.professional.id}/courses/new`]);
    this.router.navigate([`/core/company/1/offer/new`]);
  }

  redirectEditForm(id: string) {
    this.router.navigate(['/core/company', this.authService.auth.professional.id, 'courses', id]);
  }

  remove(id: string) {
    // this.messageService.questionDelete()
    //   .then((result) => {
    //     if (result.isConfirmed) {
    //       this.CompanyProfessionalHattpService.remove(id).subscribe((user) => {
    //         this.users = this.users.filter(item => item.id !== user.id);
    //         this.paginator.totalItems--;
    //       });
    //     }
    //   });
  }

  selectItem(item: CompanyProfessionalModel) {
    this.isButtonActions = true;
    this.selectedItem = item;
  }
}
