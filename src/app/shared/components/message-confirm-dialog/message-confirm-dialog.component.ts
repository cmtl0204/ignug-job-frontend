import {Component, EventEmitter, inject, Output} from '@angular/core';
import {MessageDialogService} from "@servicesApp/core";
import {PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-message-confirm-dialog',
  templateUrl: './message-confirm-dialog.component.html',
  styleUrl: './message-confirm-dialog.component.scss'
})
export class MessageConfirmDialogComponent {
  protected readonly messageDialogService = inject(MessageDialogService);
  protected readonly PrimeIcons = PrimeIcons;
  @Output() result: EventEmitter<any> = new EventEmitter();
}
