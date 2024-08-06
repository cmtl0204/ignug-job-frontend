import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, PrimeIcons } from "primeng/api";
import { ColumnModel, CategoryModule } from '@models/core';
import { AuthService } from '@servicesApp/auth';
import { BreadcrumbService, CoreService, MessageService } from '@servicesApp/core';
import { BreadcrumbEnum, IconButtonActionEnum, LabelButtonActionEnum } from "@shared/enums";
import { CategoryHttpService } from "@servicesHttp/core";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})

export class CategoryListComponent implements OnInit {
  protected readonly authService = inject(AuthService);
  private readonly categoryHttpServices = inject(CategoryHttpService);
  protected readonly coreService = inject(CoreService);
  private readonly breadcrumbService = inject(BreadcrumbService);
  protected readonly messageService = inject(MessageService);
  private readonly router = inject(Router);

  protected readonly PrimeIcons = PrimeIcons;
  protected buttonActions: MenuItem[] = this.buildButtonActions;
  protected columns: ColumnModel[] = this.buildColumns;
  protected isButtonActions: boolean = false;
  protected selectedItem: CategoryModule = {};
  protected items: CategoryModule[] = [];

  constructor() {
    this.breadcrumbService.setItems([{label: BreadcrumbEnum.USERS}]);
  }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.categoryHttpServices.findAll().subscribe((response) => {
      this.items = response;
    });
  }

  get buildColumns(): ColumnModel[] {
    return [
      { field: 'code', header: 'Código' },
      { field: 'icon', header: 'Icono' },
      { field: 'name', header: 'Nombre' },

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
    this.router.navigate([`/core/categories/categories`]);
  }

  redirectEditForm(id: string) {
   // this.router.navigate([`/core/categories/${id}/edit`]);
  }

  remove(id: string) {
    // Implementación para eliminar una categoría
    // this.messageService.questionDelete()
    //   .then((result) => {
    //     if (result.isConfirmed) {
    //       this.categoryHttpServices.remove(id).subscribe((category) => {
    //         this.items = this.items.filter(item => item.id !== category.id);
    //         this.paginator.totalItems--;
    //       });
    //     }
    //   });
  }

  selectItem(item: CategoryModule) {
    this.isButtonActions = true;
    this.selectedItem = item;
  }
}