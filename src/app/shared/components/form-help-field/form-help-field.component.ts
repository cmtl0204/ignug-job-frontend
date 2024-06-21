import {Component, Input} from '@angular/core';
import {PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-form-help-field',
  templateUrl: './form-help-field.component.html',
  styleUrl: './form-help-field.component.scss'
})
export class FormHelpFieldComponent {
  @Input({required: true}) event: Event = new Event('');

  protected readonly PrimeIcons = PrimeIcons;
}
