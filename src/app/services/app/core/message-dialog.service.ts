import {inject, Injectable} from '@angular/core';
import {ValidationErrors} from '@angular/forms';
import {default as Swal} from 'sweetalert2';
import {PaginatorModel} from '@models/core';
import {ServerResponse} from '@models/http-response';
import {CoreService} from "@servicesApp/core/core.service";
import {BehaviorSubject, Observable} from "rxjs";
import {MessageService} from "primeng/api";

type Severity =
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'help'
  | 'primary'
  | 'secondary'
  | 'contrast'
  | null
  | undefined;

@Injectable({
  providedIn: 'root'
})
export class MessageDialogService {
  private readonly messageService = inject(MessageService);
  private _modalVisible: boolean = false;
  private _modalConfirmVisible: boolean = false;
  private _modalTitle: string = '';
  private _modalAcceptSeverity: Severity = null;
  private _modalRejectSeverity: Severity = 'danger';
  private _modalMessage: string | string[] = '';
  private _modalResult = new BehaviorSubject<boolean>(false);
  public modalResult$ = this._modalResult.asObservable();

  accept(): void {
    this._modalResult.next(true);
  }

  reject(): void {
    this._modalResult.next(false);
  }

  constructor() {
  }

  error(error: ServerResponse) {
    if (error.statusCode === 422) {
      // const fields = Object.values(error.message).toString().split('.,');
      const fields = error.message;

      let html = '<ul>';
      for (let i = 0; i < fields.length; i++) {
        html += `<li class="pi pi-times"> ${fields[i]}.</li>`;
      }
      html += '</ul>';

      return Swal.fire({
        title: error.error,
        html,
        icon: 'error'
      });
    }

    return Swal.fire({
      title: error.error,
      text: error.message,
      icon: 'error'
    });
  }

  success(serverResponse: ServerResponse) {
    return Swal.fire({
      title: serverResponse.title,
      text: serverResponse.message,
      icon: 'success'
    });
  }

  successCustom(title: string, text: string) {
    return Swal.fire({
      title,
      text,
      icon: 'info'
    });
  }

  errorCustom(title: string, message: string | string[]) {
    if (Array.isArray(message)) message.sort();

    this._modalVisible = true;
    this._modalAcceptSeverity = 'danger';
    this._modalTitle = title;
    this._modalMessage = message;
  }

  fieldErrors(message: string | string[]) {
    if (Array.isArray(message)) message.sort();

    this._modalVisible = true;
    this._modalAcceptSeverity = 'info';
    this._modalTitle = 'Existen errores en los siguientes campos';
    this._modalMessage = message;
  }

  errorsFields(errors: string[] = []) {
    let html = '<ul>';
    for (let i = 0; i < errors.length; i++) {
      html += `<li>${errors[i]}</li>`;
    }
    html += '</ul>';

    return Swal.fire({
      title: 'Revise los campos',
      html,
      icon: 'error'
    });
  }

  questionDelete(title = '¿Está seguro de eliminar?', message = 'No podrá recuperar esta información!') {
    this._modalResult.next(false);

    this._modalConfirmVisible = true;
    this._modalAcceptSeverity = 'primary';
    this._modalRejectSeverity = 'danger';
    this._modalTitle = title;
    this._modalMessage = message;

    return this.modalResult$;
  }

  questionOnExit(title = '¿Está seguro de salir?', text = 'Se perderá la información que no haya guardado!') {
    return Swal.fire({
      title,
      text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: '<i class="pi pi-sign-out"> Si, salir</i>'
    });
  }

  questionVersion(version = '') {
    return Swal.fire({
      title: `Existe una nueva actualización \n V ${version}`,
      text: 'Antes de actualizar, guarde lo que esté haciendo!',
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: '#689F38',
      cancelButtonColor: '#3085d6',
      confirmButtonText: '<i class="pi pi-sync"> Actualizar</i>',
      cancelButtonText: 'Cancelar'
    });
  }

  questionCustom(title: string, text: string) {
    return Swal.fire({
      title,
      text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: '<i class="pi pi-check-circle"> Si</i>',
      cancelButtonText: 'Cancelar'
    });
  }

  showSuccess() {
    this.messageService.add({
      key: 'messageConfirm',
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content'
    });
  }

  showError() {
    this.messageService.add({key: 'messageConfirm', severity: 'error', summary: 'Error', detail: 'Message Content'});
  }

  get modalTitle(): string {
    return this._modalTitle;
  }

  get modalMessage(): string | string[] {
    return this._modalMessage;
  }

  get modalAcceptSeverity(): Severity {
    return this._modalAcceptSeverity;
  }

  get modalRejectSeverity(): Severity {
    return this._modalRejectSeverity;
  }

  get modalVisible(): boolean {
    return this._modalVisible;
  }

  set modalVisible(value: boolean) {
    this._modalVisible = value;
  }

  get modalConfirmVisible(): boolean {
    return this._modalConfirmVisible;
  }

  set modalConfirmVisible(value: boolean) {
    this._modalConfirmVisible = value;
  }
}
