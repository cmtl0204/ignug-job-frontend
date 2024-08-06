import { Component, inject, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { firstValueFrom } from "rxjs";
import { PrimeIcons } from "primeng/api";

import { OnExitInterface } from "@shared/interfaces";
import { CatalogueModel } from "@models/core";
import { AuthHttpService, AuthService } from "@servicesApp/auth";
import { CoreService, MessageDialogService, RoutesService } from "@servicesApp/core";
import { CataloguesHttpService } from "@servicesHttp/core";
import { CatalogueTypeEnum, RoutesEnum, SkeletonEnum } from "@shared/enums";
import { OffersFormEnum } from '@shared/enums';

@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.scss']
})
export class OfferFormComponent implements OnInit, OnExitInterface {
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
  protected readonly OfferFormEnum = OffersFormEnum;
  protected readonly SkeletonEnum = SkeletonEnum;
  protected readonly PrimeIcons = PrimeIcons;
 

  constructor() {
    this.buildForm();
  }

  async onExit() {
    const res = await firstValueFrom(this.messageDialogService.questionOnExit());
    console.log(res);
    return res;
  }

  ngOnInit(): void {
    /** Load Foreign Keys**/
    this.loadPersonTypes();

    if (this.id !== RoutesEnum.NEW) {
      this.findCompany(this.id);
    }
  }

  findCompany(id: string) {
    this.form.patchValue({});
  }

  /** Form Builder & Validates **/
  buildForm() {
    this.form = this.formBuilder.group({
      contractTypeId: [null, [Validators.required]],
      companyId: [null, [Validators.required]],
      experienceTimeId: [null, [Validators.required]],
      locationId: [null, [Validators.required]],
      sectorId: [null, [Validators.required]],
      stateId: [null, [Validators.required]],
      trainingHoursId: [null, [Validators.required]],
      workingDayId: [null, [Validators.required]],
      activities: [null, [Validators.required]],
      additionalInformation: [null],
      code: [null, [Validators.required]],
      contactCellphone: [null, [Validators.required]],
      contactEmail: [null, [Validators.email, Validators.required]],
      contactName: [null, [Validators.required]],
      contactPhone: [null, [Validators.required]],
      endedAt: [null, [Validators.required]],
      position: [null, [Validators.required]],
      remuneration: [null, [Validators.required]],
      startedAt: [null, [Validators.required]],
      requirements: [null, [Validators.required]],
      vacancies: [null, [Validators.required]],

    });
  }

  validateForm(): boolean {
    this.formErrors = [];

    if (this.contractTypeIdField.invalid) this.formErrors.push(OffersFormEnum.contractTypeId);
    if (this.companyIdField.invalid) this.formErrors.push(OffersFormEnum.companyId);
    if (this.experienceTimeIdField.invalid) this.formErrors.push(OffersFormEnum.experienceTimeId);
    if (this.locationIdField.invalid) this.formErrors.push(OffersFormEnum.locationId);
    if (this.sectorIdField.invalid) this.formErrors.push(OffersFormEnum.sectorId);
    if (this.stateIdField.invalid) this.formErrors.push(OffersFormEnum.startedAt);
    if (this.trainingHoursIdField.invalid) this.formErrors.push(OffersFormEnum.trainingHoursId);
    if (this.workingDayIdField.invalid) this.formErrors.push(OffersFormEnum.workingDayId);
    if (this.activitiesField.invalid) this.formErrors.push(OffersFormEnum.activities);
    if (this.additionalInformationField.invalid) this.formErrors.push(OffersFormEnum.additionalInformation);
    if (this.codeField.invalid) this.formErrors.push(OffersFormEnum.code);
    if (this.contactCellphoneField.invalid) this.formErrors.push(OffersFormEnum.contactCellphone);
    if (this.contactEmailField.invalid) this.formErrors.push(OffersFormEnum.contactEmail);
    if (this.contactNameField.invalid) this.formErrors.push(OffersFormEnum.contactName);
    if (this.contactPhoneField.invalid) this.formErrors.push(OffersFormEnum.contactPhone);
    if (this.endedAtField.invalid) this.formErrors.push(OffersFormEnum.endedAt);
    if (this.positionField.invalid) this.formErrors.push(OffersFormEnum.position);
    if (this.remunerationField.invalid) this.formErrors.push(OffersFormEnum.remuneration);
    if (this.startedAtField.invalid) this.formErrors.push(OffersFormEnum.startedAt);
    if (this.requirementsField.invalid) this.formErrors.push(OffersFormEnum.requirements);
    if (this.vacanciesField.invalid) this.formErrors.push(OffersFormEnum.vacancies);

    
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
    // FALTA IMPLEMENTAR LOGICA
  }

  update(): void {
    // FALTA IMPLEMENTAR LOGICA
  }

  /** Redirects **/
  redirectRegistration() {
    this.routesService.registration();
  }

  /** Getters Form**/
  get contractTypeIdField(): AbstractControl {
    return this.form.controls['contractTypeId'];
  }

  get companyIdField(): AbstractControl {
    return this.form.controls['companyId'];
  }

  get experienceTimeIdField(): AbstractControl {
    return this.form.controls['experienceTimeId'];
  }

  get locationIdField(): AbstractControl {
    return this.form.controls['locationId'];
  }

  get sectorIdField(): AbstractControl {
    return this.form.controls['sectorId'];
  }

  get stateIdField(): AbstractControl {
    return this.form.controls['stateId'];
  }

  get trainingHoursIdField(): AbstractControl {
    return this.form.controls['trainingHoursId'];
  }

  get workingDayIdField(): AbstractControl {
    return this.form.controls['workingDayId'];
  }

  get activitiesField(): AbstractControl {
    return this.form.controls['activities'];
  }

  get additionalInformationField(): AbstractControl {
    return this.form.controls['additionalInformation'];
  }

  get codeField(): AbstractControl {
    return this.form.controls['code'];
  }

  get contactCellphoneField(): AbstractControl {
    return this.form.controls['contactCellphone'];
  }

  get contactEmailField(): AbstractControl {
    return this.form.controls['contactEmail'];
  }

  get contactNameField(): AbstractControl {
    return this.form.controls['contactName'];
  }

  get contactPhoneField(): AbstractControl {
    return this.form.controls['contactPhone'];
  }

  get endedAtField(): AbstractControl {
    return this.form.controls['endedAt'];
  }

  get positionField(): AbstractControl {
    return this.form.controls['position'];
  }
  
  get remunerationField(): AbstractControl {
    return this.form.controls['remuneration'];
  }

  get startedAtField(): AbstractControl {
    return this.form.controls['startedAt'];
  }

  get requirementsField(): AbstractControl {
    return this.form.controls['requirements'];
  }

  get vacanciesField(): AbstractControl {
  return this.form.controls['vacancies'];
 }
}
