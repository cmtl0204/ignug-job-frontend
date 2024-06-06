import {inject, Injectable} from '@angular/core';
import {ValidationErrors} from '@angular/forms';
import {default as Swal} from 'sweetalert2';
import {PaginatorModel} from '@models/core';
import {ServerResponse} from '@models/http-response';
import {CoreService} from "@servicesApp/core/core.service";
type Severity = 'success' | 'info' | 'warning' | 'danger' | 'help' | 'primary' | 'secondary' | 'contrast';

@Injectable({
  providedIn: 'root'
})
export class MessageDialogService {
  private _modalVisible: boolean = false;
  private _modalTitle: string = '';
  private _modalSeverity: Severity = 'info';
  private _modalMessage: string | string[] = '';

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
    this._modalSeverity = 'danger';
    this._modalTitle = title;
    this._modalMessage = message;
  }

  fieldErrors(message: string | string[]) {
    if (Array.isArray(message)) message.sort();

    this._modalVisible = true;
    this._modalSeverity = 'danger';
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

  questionDelete(title = '¿Está seguro de eliminar?', text = 'No podrá recuperar esta información!') {
    return Swal.fire({
      title,
      text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: '<i class="pi pi-trash"> Si, eliminar</i>',
      cancelButtonText: 'Cancelar'
    });
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

  get requiredFields(): string {
    return `Todos los campos con <b class="p-error">*</b> son obligatorios.`;
  }

  paginatorTotalRegisters(totalItems: number): string {
    return 'En total hay ' + (totalItems) + ' registros.';
  }

  get paginatorNoRecordsFound(): string {
    return 'No se encontraron registros.';
  }

  get buttonFormSaveOrUpdate(): string {
    return `Guardar`;
  }

  get buttonFormClose(): string {
    return `Cerrar`;
  }

  get progressBarProcess(): string {
    return `Procesando...`;
  }

  get progressBarSaveOrUpdate(): string {
    return `Guardando...`;
  }

  get progressBarDownload(): string {
    return `Descargando...`;
  }

  get progressBarUpload(): string {
    return `Cargando...`;
  }

  get progressBarLogin(): string {
    return `Ingresando...`;
  }

  get progressBarRequestPasswordReset(): string {
    return `Enviando correo...`;
  }

  get progressBarDelete(): string {
    return `Eliminando...`;
  }

  get messageSuccessDelete(): string {
    return `Se eliminó correctamente`;
  }

  get exceededMaxAttempts(): string {
    return 'Exceeded the maximum number of attempts allowed';
  }

  get modalTitle(): string {
    return this._modalTitle;
  }

  get modalMessage(): string | string[] {
    return this._modalMessage;
  }

  get modalSeverity(): Severity  {
    return this._modalSeverity;
  }

  get modalVisible(): boolean {
    return this._modalVisible;
  }

  set modalVisible(value: boolean) {
    this._modalVisible = value;
  }
}
