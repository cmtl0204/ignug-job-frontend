import {Component, inject, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {firstValueFrom} from "rxjs";
import {PrimeIcons} from "primeng/api";

import {OnExitInterface} from "@shared/interfaces";

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
export class CompanyComponent implements OnInit, OnExitInterface {
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
  //private onLeave: boolean = true;

  /** Foreign Keys **/
  protected personTypes: CatalogueModel[] = [];

  /** Enums **/
  protected readonly CompanyRegistrationFormEnum = CompanyRegistrationFormEnum;
  protected readonly SkeletonEnum = SkeletonEnum;
  protected readonly PrimeIcons = PrimeIcons; //pending

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

    //pending
    if (this.id !== RoutesEnum.NEW) {
      this.findCompany(this.id);
    }
  }

  findCompany(id: string) {
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
    // this.personTypes = this.cataloguesHttpService.findByType(CatalogueTypeEnum.COMPANIES_PERSON_TYPE);
    this.personTypes = [{
      id: '123abc',
      name: 'Natural',
      type: 'Persona Natural',
      obj: {
        description: 'otro obj'
      }
    }, {
      id: '456def',
      name: 'Juridica',
      type: 'Persona Juridica',
      obj: {
        description: 'algo'
      }
    }]
  }

  /** Form Actions **/
  onSubmit(): void {
    if (this.validateForm()) {
      this.create();
      /*
     TODO
     */
    } else {
      this.form.markAllAsTouched();
      this.messageDialogService.fieldErrors(this.formErrors);
    }
  }

  create(): void {
    /*
        TODO
    */
  }

  update(): void {
    /*
        TODO
        */
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

  get tradeNameField(): AbstractControl {
    return this.form.controls['tradeName'];
  }

  get webField(): AbstractControl {
    return this.form.controls['web'];
  }
}
