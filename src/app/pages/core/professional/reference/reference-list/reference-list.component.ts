import {Component, inject, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Router} from '@angular/router';
import {MenuItem, PrimeIcons} from "primeng/api";
import {SelectUserDto, UserModel} from '@models/auth';
import {ColumnModel, ReferenceModule} from '@models/core';
import {AuthService} from '@servicesApp/auth';
import {BreadcrumbService, CoreService, MessageService} from '@servicesApp/core';
import {BreadcrumbEnum, IconButtonActionEnum, LabelButtonActionEnum} from "@shared/enums";
import {debounceTime} from "rxjs";
import { ReferenceHttpService } from '@servicesHttp/core';

@Component({
  selector: 'app-reference-list',
  templateUrl: './reference-list.component.html',
  styleUrl: './reference-list.component.scss'
})
export class ReferenceListComponent implements OnInit {
  protected readonly authService = inject(AuthService);
  private readonly referenceHttpService = inject(ReferenceHttpService);
  protected readonly coreService = inject(CoreService);
  private readonly breadcrumbService = inject(BreadcrumbService);
  protected readonly messageService = inject(MessageService);
  private readonly router = inject(Router);

  protected readonly PrimeIcons = PrimeIcons;
  protected buttonActions: MenuItem[] = this.buildButtonActions;
  protected columns: ColumnModel[] = this.buildColumns;
  protected isButtonActions: boolean = false;
  protected selectedItem: ReferenceModule = {};
  protected items: ReferenceModule[] = [];

  constructor() {
    this.breadcrumbService.setItems([{label: BreadcrumbEnum.USERS}]);
  }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.referenceHttpService.findAll().subscribe((response) => {
      this.items = response;
    });
  }

  get buildColumns(): ColumnModel[] {
    return [
      {field: 'contactEmailId', header: 'Email de contacto'},
      {field: 'contactNameId', header: 'Nombre de contacto'},
      {field: 'contactPhoneId', header: 'Telefono de contacto'},
      {field: 'institutionId', header: ' Institución'},
      {field: 'positionId', header: ' Posición '},
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
    // this.router.navigate([/core/professionals/${this.authService.auth.professional.id}/courses/new]);
    this.router.navigate([`/core/professionals/1/references/new`]);
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

  selectItem(item: ReferenceModule) {
    this.isButtonActions = true;
    this.selectedItem = item;
  }
}
