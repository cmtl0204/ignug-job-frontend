import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthHttpService, AuthService} from "@servicesApp/auth";
import {Component, inject, Input, OnInit} from '@angular/core';
import {CataloguesHttpService} from "@servicesHttp/core";
import {CatalogueModel} from "@models/core";
import {CoreService, MessageDialogService, RoutesService} from "@servicesApp/core";
import {CatalogueTypeEnum,ExperienceFormEnum, RoutesEnum, SkeletonEnum} from "@shared/enums";
import {debounceTime, firstValueFrom, lastValueFrom, take} from "rxjs";
import {PrimeIcons} from "primeng/api";
import {OnExitInterface} from "@shared/interfaces";

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrl: './experience-form.component.scss'
})
export class ExperienceFormComponent implements OnInit,OnExitInterface{
  protected readonly authService = inject(AuthService);
  private readonly authHttpService = inject(AuthHttpService);
  protected readonly cataloguesHttpService = inject(CataloguesHttpService);
  protected readonly coreService = inject(CoreService);
  private readonly formBuilder = inject(FormBuilder);
  public readonly messageDialogService = inject(MessageDialogService);
  private readonly routesService = inject(RoutesService);

  /**Form */
  @Input({required:true}) id!:string;
  protected form!: FormGroup;
  private formErrors: string[] = [];
  private onLeave: boolean = true;

  /** Foregn keys*/ 
  protected areas:CatalogueModel[]=[];

   /**Enums */
   protected readonly ExperienceFormEnum = ExperienceFormEnum;
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
    this.loadAreas();

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
      areaId: [null, [Validators.required]],
      activities: [null, [Validators.required]],
      employer: [null, [Validators.required]],
      endedAt:[null],
      position:[null, [Validators.required]],
      reasonLeave:[null],
      worked:[null,[Validators.required]],
      startedAt:[null, [Validators.required]],

    });
    this.checkValueChanges();
  }

  validateForm(): boolean {
    this.formErrors = [];

    if (this.areaIdField.invalid) this.formErrors.push(ExperienceFormEnum.areaId);
    if (this.activitiesField.invalid) this.formErrors.push(ExperienceFormEnum.activities);
    if (this.employerField.invalid) this.formErrors.push(ExperienceFormEnum.employer);
    if (this.endedAtField.invalid) this.formErrors.push(ExperienceFormEnum.endedAt);
    if (this.positionField.invalid) this.formErrors.push(ExperienceFormEnum.position);
    if (this.reasonLeaveField.invalid) this.formErrors.push(ExperienceFormEnum.reasonLeave);
    if (this.workedField.invalid) this.formErrors.push(ExperienceFormEnum.worked);
    if (this.startedAtField.invalid) this.formErrors.push(ExperienceFormEnum.startedAt);

    return this.form.valid && this.formErrors.length === 0;
  }
  checkValueChanges(){
    this.workedField.valueChanges.subscribe(value=>{ 
      if(value){
        this.endedAtField.setValidators(Validators.required);
        this.reasonLeaveField.setValidators(Validators.required);
      }
      else {
        this.endedAtField.clearValidators();
        this.reasonLeaveField.clearValidators();
      }

      this.endedAtField.updateValueAndValidity();
      this.reasonLeaveField.updateValueAndValidity();
      
    });
  }
  /** Load Foreign Keys  **/
  loadAreas() {
    this.areas=this.cataloguesHttpService.findByType(CatalogueTypeEnum.EXPERIENCES_AREA);
  }
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
    this.routesService.registration();
  }

   /** Getters Form**/
   get areaIdField(): AbstractControl {
    return this.form.controls['areaId'];
  }
  get activitiesField(): AbstractControl {
    return this.form.controls['activities'];
  }
  get employerField(): AbstractControl {
    return this.form.controls['employer'];
  }
  get positionField(): AbstractControl {
    return this.form.controls['position'];
  }
  get reasonLeaveField(): AbstractControl {
    return this.form.controls['reasonLeave'];
  }
  get workedField(): AbstractControl {
    return this.form.controls['worked'];
    
  }
  get endedAtField(): AbstractControl {
    return this.form.controls['endedAt'];
  }
  get startedAtField(): AbstractControl {
    return this.form.controls['startedAt'];
  }






}
