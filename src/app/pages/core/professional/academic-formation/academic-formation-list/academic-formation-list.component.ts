import { Component,inject, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Router} from '@angular/router';
import {MenuItem, PrimeIcons} from "primeng/api";
import {SelectUserDto, UserModel} from '@models/auth';
import {ColumnModel, AcademicFormationsModel} from '@models/core';
import {AuthService} from '@servicesApp/auth';
import {BreadcrumbService, CoreService, MessageService} from '@servicesApp/core';
import {BreadcrumbEnum, IconButtonActionEnum, LabelButtonActionEnum} from "@shared/enums";
import {debounceTime} from "rxjs";
import {AcademicFormationsHttpService} from "@servicesHttp/core";


@Component({
  selector: 'app-academic-formation-list',
  templateUrl: './academic-formation-list.component.html',
  styleUrl: './academic-formation-list.component.scss'
})
export class AcademicFormationListComponent {
  protected readonly authService = inject(AuthService);
  private readonly academicFormationsHttpServices = inject(AcademicFormationsHttpService);
  protected readonly coreService = inject(CoreService);
  private readonly breadcrumbService = inject(BreadcrumbService);
  protected readonly messageService = inject(MessageService);
  private readonly router = inject(Router);

  protected readonly PrimeIcons = PrimeIcons;
  protected buttonActions: MenuItem[] = this.buildButtonActions;
  protected columns: ColumnModel[] = this.buildColumns;
  protected isButtonActions: boolean = false;
  protected selectedItem: AcademicFormationsModel= {};
  protected items: AcademicFormationsModel[] = [];
  constructor() {
    this.breadcrumbService.setItems([{label: BreadcrumbEnum.USERS}]);
  }
  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.academicFormationsHttpServices.findAll().subscribe((response) => {
      this.items = response;
    });
  }

  get buildColumns(): ColumnModel[] {
    return [
      {field: 'name', header: 'Formacion academica'},
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
    // this.router.navigate(['/core/professionals', this.authService.auth.professional.id, 'academic-formations/new']);
    // this.router.navigate([`/core/professionals/${this.authService.auth.professional.id}/academic-formations/new`]);
    this.router.navigate([`/core/professionals/1/academic-formations/new`]);
  }

  redirectEditForm(id: string) {
    this.router.navigate(['/core/professionals', this.authService.auth.professional.id, 'academic-formations', id]);
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

  selectItem(item: AcademicFormationsModel) {
    this.isButtonActions = true;
    this.selectedItem = item;
  }

}
