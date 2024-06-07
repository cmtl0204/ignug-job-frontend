import {Component, EventEmitter, inject, Output, ViewEncapsulation} from '@angular/core';
import {MessageDialogService} from "@servicesApp/core";
import {MessageService, PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-message-confirm-dialog',
  templateUrl: './message-confirm-dialog.component.html',
  styleUrl: './message-confirm-dialog.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class MessageConfirmDialogComponent {
  private messageService = inject(MessageService);
  protected readonly messageDialogService = inject(MessageDialogService);
  protected readonly PrimeIcons = PrimeIcons;
  @Output() result: EventEmitter<any> = new EventEmitter();

  showSuccess() {
    this.messageService.add({
      key: 'messageConfirm',
      severity: 'success',
      summary: 'Registro Eliminado',
      detail: 'El registro fue eliminado correctamente!'
    });
  }

  showError() {
    this.messageService.add({key: 'messageConfirm', severity: 'error', summary: 'Error', detail: 'Message Content'});
  }

  accept() {
    this.messageDialogService.modalConfirmVisible = false;
    this.messageDialogService.accept();
    this.showSuccess();
  }

  reject() {
    this.messageDialogService.modalConfirmVisible = false;
    this.messageDialogService.reject();
    // this.showError();
  }
}
