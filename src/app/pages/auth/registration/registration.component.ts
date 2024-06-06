import {Component, inject, ViewEncapsulation} from '@angular/core';
import {RoutesService} from "@servicesApp/core";
import {AuthHttpService, AuthService} from "@servicesApp/auth";
import {PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class RegistrationComponent {
  protected readonly authService = inject(AuthService);
  private readonly routesService = inject(RoutesService);

  redirectLogin() {
    this.routesService.login();
  }

  redirectProfessionalRegistration() {
    this.routesService.professionalRegistration();
  }

  redirectCompanyRegistration() {
    this.routesService.companyRegistration();
  }

  protected readonly PrimeIcons = PrimeIcons;
}
