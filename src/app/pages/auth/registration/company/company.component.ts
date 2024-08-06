import {Component, inject, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {firstValueFrom} from "rxjs";
import {PrimeIcons} from "primeng/api";

import {OnExitInterface} from "@shared/interfaces";

import {CatalogueModel, CompanyModel} from "@models/core";

import {AuthHttpService, AuthService} from "@servicesApp/auth";
import {CoreService, MessageDialogService, RoutesService} from "@servicesApp/core";

import {CataloguesHttpService} from "@servicesHttp/core";

import {CatalogueTypeEnum, CompanyRegistrationFormEnum, RoutesEnum, SkeletonEnum, UsersFormEnum} from "@shared/enums";
import { CompanyHttpService } from '@servicesHttp/core/company-http.service';
import { UserModel } from '@models/auth/user.model';



@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent implements OnInit, OnExitInterface {
  /** Services **/
  protected readonly authService = inject(AuthService);
  private readonly companyHttpService = inject(CompanyHttpService);
  protected readonly cataloguesHttpService = inject(CataloguesHttpService);
  protected readonly coreService = inject(CoreService);
  private readonly formBuilder = inject(FormBuilder);
  public readonly messageDialogService = inject(MessageDialogService);
  private readonly routesService = inject(RoutesService);

  /** Form **/
  @Input({required: true}) id!: string;
  protected form!: FormGroup;
  private formErrors: string[] = [];
  private onLeave: boolean = true;

  /** Foreign Keys **/
  protected personTypes: CatalogueModel[] = [];
  protected activityTypes: CatalogueModel[] = [];
  protected types: CatalogueModel [] = [];
  protected identificationTypes: UserModel [] = [];

  /** Enums **/
  protected readonly CompanyRegistrationFormEnum = CompanyRegistrationFormEnum;
  protected readonly SkeletonEnum = SkeletonEnum;
  protected readonly PrimeIcons = PrimeIcons;//pending
  protected readonly UsersFormEnum = UsersFormEnum;

  constructor() {
    this.buildForm();
  }

  async onExit() {
    const res = await firstValueFrom(this.messageDialogService.questionOnExit());
    console.log(res);
    return res;
    // return this.messageDialogService.questionOnExit();
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
      activityTypeId: [null, [Validators.required]],
      typeId: [null, [Validators.required]],
      comercialActivities: [null, [Validators.required]],
      tradeName: [null, [Validators.required]],
      web: [null],
      user: this.userForm,
    });
  }
/** get other table (user)**/
  get userForm() {
    return this.formBuilder.group({
      identificationTypeId: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      username: [null, [Validators.required]],

    });
  }


  validateForm(): boolean {
    this.formErrors = [];

    if (this.personTypeIdField.invalid) this.formErrors.push(CompanyRegistrationFormEnum.personType);
    if (this.activityTypeIdField.invalid) this.formErrors.push(CompanyRegistrationFormEnum.activityType);
    if (this.typeIdField.invalid) this.formErrors.push(CompanyRegistrationFormEnum.type);
    if (this.comercialActivitiesField.invalid) this.formErrors.push(CompanyRegistrationFormEnum.comercialActivities);
    if (this.tradeNameField.invalid) this.formErrors.push(CompanyRegistrationFormEnum.tradeName);
    if (this.webField.invalid) this.formErrors.push(CompanyRegistrationFormEnum.web);

    if (this.identificationTypeIdField.invalid) this.formErrors.push(UsersFormEnum.identificationType);
    if (this.emailField.invalid) this.formErrors.push(UsersFormEnum.email);
    if (this.passwordField.invalid) this.formErrors.push(UsersFormEnum.password);
    if (this.phoneField.invalid) this.formErrors.push(UsersFormEnum.phone);
    if (this.usernameField.invalid) this.formErrors.push(UsersFormEnum.username);

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
    // this.messageDialogService.questionOnExit().subscribe(result => {
    //   if (result) {
    //     this.onLeave = true;
    //     this.routesService.registration();
    //   } else {
    //     this.onLeave = false;
    //   }
    // });

    this.routesService.registration();
  }

  /** Getters Form**/
  get personTypeIdField(): AbstractControl {
    return this.form.controls['personTypeId'];
  }

  get activityTypeIdField(): AbstractControl {
    return this.form.controls['activityTypeId'];
  }

  get typeIdField(): AbstractControl {
    return this.form.controls['typeId'];
  }

  get comercialActivitiesField(): AbstractControl {
    return this.form.controls['comercialActivities'];
  }

  get tradeNameField(): AbstractControl {
    return this.form.controls['tradeName'];
  }

  get webField(): AbstractControl {
    return this.form.controls['web'];
  }

  /** Getters user Form**/

  get userFormField(): FormGroup {
    return this.form.controls['user'] as FormGroup;
  }

  get identificationTypeIdField(): AbstractControl {
    return this.userFormField.controls['identificationTypeId'];
  }

  get emailField(): AbstractControl {
    return this.userFormField.controls['email'];
  }



  get passwordField(): AbstractControl {
    return this.userFormField.controls['password'];
  }

  get phoneField(): AbstractControl {
    return this.userFormField.controls['phone'];
  }

  get usernameField(): AbstractControl {
    return this.userFormField.controls['username'];
  }
}
