import {Component, inject, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule} from "@angular/forms";
import {firstValueFrom} from "rxjs";
import {PrimeIcons} from "primeng/api";
import {CoreService, MessageDialogService, RoutesService} from "@servicesApp/core";

import {CategoryFormEnum,RoutesEnum, SkeletonEnum} from "@shared/enums";
import {OnExitInterface} from "@shared/interfaces";


@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.scss'
})

export class CategoryFormComponent implements OnInit, OnExitInterface {
  /* Services */

  protected readonly coreService = inject(CoreService);
  private readonly formBuilder = inject(FormBuilder);
  public readonly messageDialogService = inject(MessageDialogService);
  private readonly routesService = inject(RoutesService);

  /* Form */
  @Input({required: true}) id!: string;
  protected form!: FormGroup;
  private formErrors: string[] = [];
  private onLeave: boolean = true;


  /* Enums */
  protected readonly CategoryFormEnum = CategoryFormEnum;
  protected readonly SkeletonEnum = SkeletonEnum;
  protected readonly PrimeIcons = PrimeIcons; //pending

  constructor() {
    this.buildForm();
  }

  ngOnInit(): void {
  } 

  async onExit() {
    const res = await firstValueFrom(this.messageDialogService.questionOnExit());
    console.log(res);
    return res;

  }


  /* Form Builder & Validates */
  buildForm() {
    this.form = this.formBuilder.group({
      code: [null, [Validators.required]],
      icon: [null],
      name: [null, [Validators.required]],
    });
  }

  validateForm(): boolean {
    this.formErrors = [];

    if (this.codeField.invalid) this.formErrors.push(CategoryFormEnum.code);
    if (this.iconField.invalid) this.formErrors.push(CategoryFormEnum.icon);
    if (this.nameField.invalid) this.formErrors.push(CategoryFormEnum.name);

    return this.form.valid && this.formErrors.length === 0;
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

  /* Getters Form*/
  get codeField(): AbstractControl {
    return this.form.controls['code'];
  }

  get iconField(): AbstractControl {
    return this.form.controls['icon'];
  }

  get nameField(): AbstractControl {
    return this.form.controls['name'];
  }
}