import {Component, inject, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Router} from '@angular/router';
import {MenuItem, PrimeIcons} from "primeng/api";
import {SelectUserDto, UserModel} from '@models/auth';
import {ColumnModel, LanguageModule} from '@models/core';
import {AuthService} from '@servicesApp/auth';
import {BreadcrumbService, CoreService, MessageService} from '@servicesApp/core';
import {BreadcrumbEnum, IconButtonActionEnum, LabelButtonActionEnum} from "@shared/enums";
import {debounceTime} from "rxjs";
import { LanguageHttpService} from '@servicesHttp/core'

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrl: './language-list.component.scss'
})
export class LanguageListComponent implements OnInit {
  protected readonly authService = inject(AuthService);
  private readonly languageHttpService = inject(LanguageHttpService);
  protected readonly coreService = inject(CoreService);
  private readonly breadcrumbService = inject(BreadcrumbService);
  protected readonly messageService = inject(MessageService);
  private readonly router = inject(Router);

  protected readonly PrimeIcons = PrimeIcons;
  protected buttonActions: MenuItem[] = this.buildButtonActions;
  protected columns: ColumnModel[] = this.buildColumns;
  protected isButtonActions: boolean = false;
  protected selectedItem: LanguageModule = {};
  protected items: LanguageModule[] = [];

  constructor() {
    this.breadcrumbService.setItems([{label: BreadcrumbEnum.USERS}]);
  }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.languageHttpService.findAll().subscribe((response) => {
      this.items = response;
    });
  }

  get buildColumns(): ColumnModel[] {
    return [
      {field: 'idiomId', header: 'Idioma'},
      {field: 'readLevelId', header: 'Nivel de lectura'},
      {field: 'spokenLevelId', header: 'Nivel hablado'},
      {field: 'writtenLevelId', header: ' Nivel escrito'},
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
    this.router.navigate([`/core/professionals/1/languages/new`]);
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

  selectItem(item: LanguageModule) {
    this.isButtonActions = true;
    this.selectedItem = item;
  }
}
