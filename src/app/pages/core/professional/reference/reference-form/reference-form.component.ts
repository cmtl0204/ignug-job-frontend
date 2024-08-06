import { Component, inject, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { firstValueFrom } from "rxjs";
import { PrimeIcons } from "primeng/api";

import { OnExitInterface } from "@shared/interfaces";
import { CatalogueModel } from "@models/core";

import { AuthHttpService, AuthService } from "@servicesApp/auth";
import { CoreService, MessageDialogService, RoutesService } from "@servicesApp/core";
import { CataloguesHttpService } from "@servicesHttp/core";
import { CatalogueTypeEnum, referenceFormEnum, RoutesEnum, SkeletonEnum } from "@shared/enums";

@Component({
  selector: 'app-reference-form',
  templateUrl: './reference-form.component.html',
  styleUrls: ['./reference-form.component.scss'] 
})
export class ReferenceFormComponent implements OnInit, OnExitInterface {

  /* Services */
  protected readonly authService = inject(AuthService);
  private readonly authHttpService = inject(AuthHttpService);
  protected readonly cataloguesHttpService = inject(CataloguesHttpService);
  protected readonly coreService = inject(CoreService);
  private readonly formBuilder = inject(FormBuilder);
  public readonly messageDialogService = inject(MessageDialogService);
  private readonly routesService = inject(RoutesService);

  /* Form */
  @Input({ required: true }) id!: string;
  protected form!: FormGroup;
  private formErrors: string[] = [];

  /* Foreign Keys */
  protected contactEmailTypes: CatalogueModel[] = [];
  protected contactNameTypes: CatalogueModel[] = [];
  protected contactPhoneTypes: CatalogueModel[] = [];
  protected institutionTypes: CatalogueModel[] = [];
  protected positionTypes: CatalogueModel[] = [];

  /* Enums */
  protected readonly referenceFormEnum = referenceFormEnum;
  protected readonly SkeletonEnum = SkeletonEnum;
  protected readonly PrimeIcons = PrimeIcons;
contactEmailId: any;

  constructor() {
    this.buildForm();
  }

  async onExit() {
    const res = await firstValueFrom(this.messageDialogService.questionOnExit());
    console.log(res);
    return res;
  }

  ngOnInit(): void {
    /* Load Foreign Keys */
    this.loadContactEmailTypes();
    this.loadContactNameTypes();
    this.loadContactPhoneTypes();
    this.loadInstitutionTypes();
    this.loadPositionTypes();

    if (this.id !== RoutesEnum.NEW) {
      this.findReference(this.id); 
    }
  }

  findReference(id: string) { 
    this.form.patchValue({});
  }

  /* Form Builder & Validates */
  buildForm() {
    this.form = this.formBuilder.group({
      contactEmailId: [null, [Validators.required]],
      contactNameId: [null, [Validators.required]],
      contactPhoneId: [null, [Validators.required]],
      institutionId: [null, [Validators.required]],
      positionId: [null, [Validators.required]],
    });
  }

  validateForm(): boolean {
    this.formErrors = [];

    if (this.contactEmailIdField.invalid) this.formErrors.push(referenceFormEnum.contactEmail);
    if (this.contactNameIdField.invalid) this.formErrors.push(referenceFormEnum.contactName);
    if (this.contactPhoneIdField.invalid) this.formErrors.push(referenceFormEnum.contactPhone);
    if (this.institutionIdField.invalid) this.formErrors.push(referenceFormEnum.institution);
    if (this.positionIdField.invalid) this.formErrors.push(referenceFormEnum.position);
    return this.form.valid && this.formErrors.length === 0;
  }

  /* Load Foreign Keys */
  loadContactEmailTypes() {
    this.cataloguesHttpService.findByType(CatalogueTypeEnum.CONTACT_EMAIL);
  }

  loadContactNameTypes() {
    this.cataloguesHttpService.findByType(CatalogueTypeEnum.CONTACT_NAME);
  }

  loadContactPhoneTypes() {
    this.cataloguesHttpService.findByType(CatalogueTypeEnum.CONTACT_PHONE);
  }

  loadInstitutionTypes() {
    this.cataloguesHttpService.findByType(CatalogueTypeEnum.INSTITUTION);
  }

  loadPositionTypes() {
    this.cataloguesHttpService.findByType(CatalogueTypeEnum.POSITION);
  }

  /* Form Actions */
  onSubmit(): void {
    if (this.validateForm()) {
      this.create();
    } else {
      this.form.markAllAsTouched();
      this.messageDialogService.fieldErrors(this.formErrors);
    }
  }

  create(): void {
    // TODO
  }

  update(): void {
    // TODO
  }

  /* Redirects */
  redirectRegistration() {
    this.routesService.registration();
  }

  /* Getters Form */
  get contactEmailIdField(): AbstractControl {
    return this.form.controls['contactEmailId'];
  }

  get contactNameIdField(): AbstractControl {
    return this.form.controls['contactNameId'];
  }

  get contactPhoneIdField(): AbstractControl {
    return this.form.controls['contactPhoneId'];
  }

  get institutionIdField(): AbstractControl {
    return this.form.controls['institutionId'];
  }

  get positionIdField(): AbstractControl {
    return this.form.controls['positionId'];
  }
}
