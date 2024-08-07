import {Component, inject, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {firstValueFrom} from "rxjs";
import {PrimeIcons} from "primeng/api";

import {OnExitInterface} from "@shared/interfaces";

import {CatalogueModel} from "@models/core";

import {AuthHttpService, AuthService} from "@servicesApp/auth";
import {CoreService, MessageDialogService, RoutesService} from "@servicesApp/core";

import {CataloguesHttpService} from "@servicesHttp/core";

import {CatalogueTypeEnum, LanguageFormEnum, RoutesEnum, SkeletonEnum} from "@shared/enums";


@Component({
  selector: 'app-language-form',
  templateUrl: './language-form.component.html',
  styleUrl: './language-form.component.scss'
})

export class LanguageFormComponent implements OnInit, OnExitInterface {
  /* Services */
  protected readonly authService = inject(AuthService);
  private readonly authHttpService = inject(AuthHttpService);
  protected readonly cataloguesHttpService = inject(CataloguesHttpService);
  protected readonly coreService = inject(CoreService);
  private readonly formBuilder = inject(FormBuilder);
  public readonly messageDialogService = inject(MessageDialogService);
  private readonly routesService = inject(RoutesService);


  /* Form */
  @Input({required: true}) id!: string;
  protected form!: FormGroup;
  private formErrors: string[] = [];
  //private onLeave: boolean = true;

  /* Foreign Keys */
  protected idioms: CatalogueModel[] = [];
  protected readLevels: CatalogueModel[] = [];
  protected spokenLevelTypes: CatalogueModel[] = [];
  protected writtenLevelTypes: CatalogueModel[] = [];

  /* Enums */
  protected readonly LanguageFormEnum = LanguageFormEnum;
  protected readonly SkeletonEnum = SkeletonEnum;
  protected readonly PrimeIcons = PrimeIcons; //pending
  offerForm: any;

  constructor() {
    this.buildForm();
  }

  async onExit() {
    const res = await firstValueFrom(this.messageDialogService.questionOnExit());
    console.log(res);
    return res;
    // return this.messageDialogService.questionOnExit()
  }

  ngOnInit(): void {
    /* Load Foreign Keys*/
    this.loadIdiomTypes();
    this.loadReadLevelTypes();
    this.loadSpokenLevelTypes();
    this.loadWrittenLevelTypes();


    //pending
    if (this.id !== RoutesEnum.NEW) {
      this.findLanguage(this.id);
    }
  }

  findLanguage(id: string) {
    /*
    TODO
    */
    this.form.patchValue({});
  }

  /* Form Builder & Validates */
  buildForm() {
    this.form = this.formBuilder.group({
      idiomId: [null, [Validators.required]],
      readLevelId: [null, [Validators.required]],
      spokenLevelId: [null, [Validators.required]],
      writtenLevelId: [null, [Validators.required]],

    });
  }

  validateForm(): boolean {
    this.formErrors = [];

    if (this.idiomIdField.invalid) this.formErrors.push(LanguageFormEnum.idiomId);
    if (this.readLevelIdField.invalid) this.formErrors.push(LanguageFormEnum.readLevelId);
    if (this.spokenLevelIdField.invalid) this.formErrors.push(LanguageFormEnum.spokenLevelId);
    if (this.writtenLevelIdField.invalid) this.formErrors.push(LanguageFormEnum.writtenLevelId);
    return this.form.valid && this.formErrors.length === 0;
  }

  /* Load Foreign Keys  */
  loadIdioms() {
    this.idioms= this.cataloguesHttpService.findByType(CatalogueTypeEnum.LANGUAGES_IDIOM);
  }

  loadReadLevelTypes() {
    this.readLevels = this.cataloguesHttpService.findByType(CatalogueTypeEnum.LANGUAGES_READ_LEVEL);
  }

  loadSpokenLevelTypes() {
    this.cataloguesHttpService.findByType(CatalogueTypeEnum.LANGUAGE_SPOKEN_LEVEL);
  }

  loadWrittenLevelTypes() {
    this.cataloguesHttpService.findByType(CatalogueTypeEnum.LANGUAGE_WRITTEN_LEVEL);
  }

  /* Form Actions */
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

  /* Redirects */
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

  /* Getters Form*/
  get idiomIdField(): AbstractControl {
    return this.form.controls['idiomId'];
  }

  get readLevelIdField(): AbstractControl {
    return this.form.controls['readLevelId'];
  }

  get spokenLevelIdField(): AbstractControl {
    return this.form.controls['spokenLevelId'];
  }

  get writtenLevelIdField(): AbstractControl {
    return this.form.controls['writtenLevelId'];
  }

}
