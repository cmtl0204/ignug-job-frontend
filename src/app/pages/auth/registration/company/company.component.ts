import {Component, inject, OnInit} from '@angular/core';
import {AuthHttpService, AuthService} from "@servicesApp/auth";
import {CoreService, MessageDialogService, RoutesService} from "@servicesApp/core";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PrimeIcons} from "primeng/api";
import {
  CatalogueTypeEnum,
  ClassButtonActionEnum,
  CompanyRegistrationFormEnum,
  IconButtonActionEnum,
  LabelButtonActionEnum,
  SkeletonEnum
} from "@shared/enums";
import {CatalogueModel} from "@models/core";
import {CataloguesHttpService} from "@servicesHttp/core";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent implements OnInit {
  /** Services **/
  protected readonly authService = inject(AuthService);
  private readonly authHttpService = inject(AuthHttpService);
  protected readonly cataloguesHttpService = inject(CataloguesHttpService);
  protected readonly coreService = inject(CoreService);
  private readonly formBuilder = inject(FormBuilder);
  public readonly messageDialogService = inject(MessageDialogService);
  private readonly routesService = inject(RoutesService);

  /** Form **/
  protected form!: FormGroup;
  private formErrors: string[] = [];

  /** Foreign Keys **/
  protected personTypes: CatalogueModel[] = [];

  /** Enums **/
  protected readonly PrimeIcons = PrimeIcons;
  protected readonly SkeletonEnum = SkeletonEnum;
  protected readonly IconButtonActionEnum = IconButtonActionEnum;
  protected readonly LabelButtonActionEnum = LabelButtonActionEnum;
  protected readonly ClassButtonActionEnum = ClassButtonActionEnum;
  protected readonly CompanyRegistrationFormEnum = CompanyRegistrationFormEnum;

  constructor() {
    this.buildForm();
  }

  ngOnInit(): void {
    this.loadPersonTypes();
  }

  /** Form **/
  buildForm() {
    this.form = this.formBuilder.group({
      personTypeId: [null, [Validators.required]],
      tradeName: [null, [Validators.required]],
      web: [null],
    });
  }

  validateForm(): boolean {
    this.formErrors = [];

    if (this.personTypeIdField.invalid) this.formErrors.push(CompanyRegistrationFormEnum.personType);
    if (this.tradeNameField.invalid) this.formErrors.push(CompanyRegistrationFormEnum.tradeName);
    if (this.webField.invalid) this.formErrors.push(CompanyRegistrationFormEnum.web);

    return this.form.valid && this.formErrors.length === 0;
  }

  /** Foreign Keys  **/
  loadPersonTypes() {
    this.cataloguesHttpService.findByType(CatalogueTypeEnum.COMPANIES_PERSON_TYPE);
  }

  /** Actions **/
  onSubmit(): void {
    if (this.validateForm()) {
      this.register();
    } else {
      this.form.markAllAsTouched();
      this.messageDialogService.fieldErrors(this.formErrors);
    }
  }

  register(): void {
    this.authHttpService.login(this.form.value)
      .subscribe(
        response => {
          if (this.authService.roles.length === 0) {
            this.messageDialogService.errorCustom('Sin Rol', 'No cuenta con un rol asignado');
            this.authService.removeLogin();
            return;
          }

          this.routesService.roleSelect();
        });
  }

  /** Redirects **/
  redirectRegistration() {
    this.messageDialogService.questionDelete().subscribe(result => {
      if (result) {
        this.routesService.registration();
      }
    });
    // this.routesService.registration();
  }

  /** Getters Form**/
  get personTypeIdField(): AbstractControl {
    return this.form.controls['personTypeId'];
  }

  get tradeNameField(): AbstractControl {
    return this.form.controls['tradeName'];
  }

  get webField(): AbstractControl {
    return this.form.controls['web'];
  }
}
