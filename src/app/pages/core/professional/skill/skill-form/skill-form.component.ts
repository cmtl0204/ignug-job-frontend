import { Component, inject, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { firstValueFrom } from "rxjs";
import { PrimeIcons } from "primeng/api";

import { OnExitInterface } from "@shared/interfaces";
import { CatalogueModel } from "@models/core";

import { AuthHttpService, AuthService } from "@servicesApp/auth";
import { CoreService, MessageDialogService, RoutesService } from "@servicesApp/core";
import { CataloguesHttpService } from "@servicesHttp/core";
import { CatalogueTypeEnum, skillFormEnum, RoutesEnum, SkeletonEnum } from "@shared/enums";

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.scss']  // Corregido el nombre de la propiedad 'styleUrl' a 'styleUrls'
})
export class SkillFormComponent implements OnInit, OnExitInterface {

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
  protected typeIdTypes: CatalogueModel[] = [];
  protected descriptionTypes: CatalogueModel[] = [];

  /* Enums */
  protected readonly skillFormEnum = skillFormEnum;
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
    /* Load Foreign Keys */
    this.loadTypeIdTypes();
    this.loadDescriptionTypes();

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
      typeId: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
  }

  validateForm(): boolean {
    this.formErrors = [];

    if (this.typeIdField.invalid) this.formErrors.push(skillFormEnum.typeId);
    if (this.descriptionField.invalid) this.formErrors.push(skillFormEnum.description);
    return this.form.valid && this.formErrors.length === 0;
  }

  /* Load Foreign Keys */
  loadTypeIdTypes() {
    this.cataloguesHttpService.findByType(CatalogueTypeEnum.SKILLS_TYPE);
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
  }

  update(): void {

  }

  /* Redirects */
  redirectRegistration() {
    this.routesService.registration();
  }

  /* Getters Form */
  get typeIdField(): AbstractControl {
    return this.form.controls['typeId'];
  }

  get descriptionField(): AbstractControl {
    return this.form.controls['description'];
  }
}
