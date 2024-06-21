import {Component, inject, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PrimeIcons} from "primeng/api";

import {CatalogueModel} from "@models/core";

import {AuthHttpService, AuthService} from "@servicesApp/auth";
import {CoreService, MessageDialogService, RoutesService} from "@servicesApp/core";

import {CataloguesHttpService} from "@servicesHttp/core";

import {CatalogueTypeEnum, CompanyRegistrationFormEnum, RoutesEnum, SkeletonEnum} from "@shared/enums";

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
  @Input({required: true}) id!: string;
  protected form!: FormGroup;
  private formErrors: string[] = [];

  /** Foreign Keys **/
  protected personTypes: CatalogueModel[] = [];

  /** Enums **/
  protected readonly CompanyRegistrationFormEnum = CompanyRegistrationFormEnum;
  protected readonly SkeletonEnum = SkeletonEnum;
  protected readonly PrimeIcons = PrimeIcons;//pending

  constructor() {
    this.buildForm();
  }

  ngOnInit(): void {
    /** Load Foreign Keys**/
    this.loadPersonTypes();

    if (this.id !== RoutesEnum.NEW) {
      this.find(this.id);
    }
  }

  find(id: string) {
    /*
    TODO
    */
    this.form.patchValue({});
  }

  /** Form Builder & Validates **/
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

  /** Load Foreign Keys  **/
  loadPersonTypes() {
    this.cataloguesHttpService.findByType(CatalogueTypeEnum.COMPANIES_PERSON_TYPE);
  }

  /** Form Actions **/
  onSubmit(): void {
    if (this.validateForm()) {
      this.create();
    } else {
      this.form.markAllAsTouched();
      this.messageDialogService.fieldErrors(this.formErrors);
    }
  }

  create(): void {

  }

  update(): void {

  }

  /** Redirects **/
  redirectRegistration() {
    this.messageDialogService.questionOnExit().subscribe(result => {
      if (result) {
        this.routesService.registration();
      }
    });
  }

  //Reviewer
  showOverlay(event: Event, overlayPanel:any) {
    overlayPanel.toggle(event);
  }

  hideOverlay(event: Event, overlayPanel:any) {
    overlayPanel.hide(event);
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
