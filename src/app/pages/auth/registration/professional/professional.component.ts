import { Component, Input, OnInit, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PrimeIcons } from "primeng/api";

import { CatalogueModel, ProfessionalModel } from "@models/core";

import { AuthHttpService, AuthService } from "@servicesApp/auth";
import { CoreService, MessageDialogService, RoutesService } from "@servicesApp/core";

import { CatalogueTypeEnum, ProfessionalsFormEnum, RoutesEnum, SkeletonEnum, UsersFormEnum } from "@shared/enums";
import { OnExitInterface } from '@shared/interfaces';
import { CataloguesHttpService } from '@servicesHttp/core';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { ProfessionalHttpService } from '@servicesHttp/core/professsional-http.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrl: './professional.component.scss'
})
export class ProfessionalComponent implements OnInit, OnExitInterface {

  protected readonly authService = inject(AuthService);
  private readonly professionalHttpService = inject(ProfessionalHttpService);
  protected readonly cataloguesHttpService = inject(CataloguesHttpService);
  protected readonly coreService = inject(CoreService);
  private readonly formBuilder = inject(FormBuilder);
  public readonly messageDialogService = inject(MessageDialogService);
  private readonly routesService = inject(RoutesService);

  @Input({ required: true }) id!: string;
  protected form!: FormGroup;
  private formErrors: string[] = [];
  private onLeave: boolean = true;

  /** Foreign Keys **/
  protected identificationTypes: CatalogueModel[] = [];

  /** Enums **/
  protected readonly UsersFormEnum = UsersFormEnum;
  protected readonly ProfessionalsFormEnum = ProfessionalsFormEnum;
  protected readonly SkeletonEnum = SkeletonEnum;
  protected readonly PrimeIcons = PrimeIcons;//pending

  protected items: ProfessionalModel[] = [];
  private readonly router = inject(Router);

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
    this.loadIdentificationTypes();

    this.findAll();
  }

  findAll() {
    this.professionalHttpService.findAll().subscribe((response) => {
      this.items = response;
    });
  }
  
  redirectCreateForm() {
    // this.router.navigate(['/core/professionals', this.authService.auth.professional.id, 'courses/new']);
    // this.router.navigate([`/core/professionals/${this.authService.auth.professional.id}/courses/new`]);
    this.router.navigate([`/auth/professional/`]);
  }

  /** Form Builder & Validates **/
  buildForm() {
    this.form = this.formBuilder.group({
      user: this.userForm,
      aboutMe: [null, [Validators.required]],
      catastrophicDiseased: [false, [Validators.required]],
      disabled: [false, [Validators.required]],
      familiarCatastrophicDiseased: [false, [Validators.required]],
      familiarDisabled: [false, [Validators.required]],
      identificationFamiliarDisabled: [null, [Validators.required]],
      traveled: [false, [Validators.required]],
    });
  }
  
  get userForm() {
    return this.formBuilder.group({
      identificationTypeId: [null, [Validators.required]],
      email: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      name: [null, [Validators.required]],
      password: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      username: [null, [Validators.required]],
    });
  }

  validateForm(): boolean {
    this.formErrors = [];

    if (this.identificationTypeIdField.invalid) this.formErrors.push(UsersFormEnum.identificationType);
    if (this.emailField.invalid) this.formErrors.push(UsersFormEnum.email);
    if (this.lastnameField.invalid) this.formErrors.push(UsersFormEnum.lastname);
    if (this.nameField.invalid) this.formErrors.push(UsersFormEnum.name);
    if (this.passwordField.invalid) this.formErrors.push(UsersFormEnum.password);
    if (this.passwordField.invalid) this.formErrors.push(UsersFormEnum.password);
    if (this.phoneField.invalid) this.formErrors.push(UsersFormEnum.phone);
    if (this.usernameField.invalid) this.formErrors.push(UsersFormEnum.username);

    if (this.aboutMeField.invalid) this.formErrors.push(ProfessionalsFormEnum.aboutMe);
    if (this.catastrophicDiseasedField.invalid) this.formErrors.push(ProfessionalsFormEnum.catastrophicDiseased);
    if (this.familiarCatastrophicDiseasedField.invalid) this.formErrors.push(ProfessionalsFormEnum.familiarCatastrophicDiseased);
    if (this.familiarDisabledField.invalid) this.formErrors.push(ProfessionalsFormEnum.familiarDisabled);
    if (this.identificationFamiliarDisabledField.invalid) this.formErrors.push(ProfessionalsFormEnum.identificationFamiliarDisabled);
    if (this.traveledField.invalid) this.formErrors.push(ProfessionalsFormEnum.traveled);
    if (this.disabledField.invalid) this.formErrors.push(ProfessionalsFormEnum.disabled);
    



    return this.form.valid && this.formErrors.length === 0;
  }

  loadIdentificationTypes() {
    this.cataloguesHttpService.findByType(CatalogueTypeEnum.IDENTIFICATION_TYPE);
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


  //Reviewer
  showOverlay(event: Event, overlayPanel: any) {
    overlayPanel.toggle(event);
  }

  hideOverlay(event: Event, overlayPanel: any) {
    overlayPanel.hide(event);
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

  // Getters profesional
  get aboutMeField(): AbstractControl {
    return this.form.controls['aboutMe'];
  }
  get catastrophicDiseasedField(): AbstractControl {
    return this.form.controls['catastrophicDiseased'];
  }
  get disabledField(): AbstractControl {
    return this.form.controls['disabled'];
  }
  get familiarCatastrophicDiseasedField(): AbstractControl {
    return this.form.controls['familiarCatastrophicDiseased'];
  }
  get familiarDisabledField(): AbstractControl {
    return this.form.controls['familiarDisabled'];
  }
  get identificationFamiliarDisabledField(): AbstractControl {
    return this.form.controls['identificationFamiliarDisabled'];
  }
  get traveledField(): AbstractControl {
    return this.form.controls['traveled'];
  }



  // Getters user
      
  get lastnameField(): AbstractControl {
    return this.userFormField.controls['lastname'];
  }
  get identificationTypeIdField(): AbstractControl {
    return this.userFormField.controls['identificationTypeId'];
  }
  get nameField(): AbstractControl {
    return this.userFormField.controls['name'];
  }
  get passwordField(): AbstractControl {
    return this.userFormField.controls['password'];
  }
  get phoneField(): AbstractControl {
    return this.userFormField.controls['phone'];
  }
  get emailField(): AbstractControl {
    return this.userFormField.controls['email'];
  }
  get usernameField(): AbstractControl {
    return this.userFormField.controls['username'];
  }
  get userFormField(): FormGroup {
    return this.form.controls['user'] as FormGroup;
  }
}

