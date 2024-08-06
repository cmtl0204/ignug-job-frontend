import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthHttpService, AuthService} from "@servicesApp/auth";
import {Component, inject, Input, OnInit} from '@angular/core';
import {CataloguesHttpService} from "@servicesHttp/core";
import {CatalogueModel} from "@models/core";
import {CoreService, MessageDialogService, RoutesService} from "@servicesApp/core";
import {CatalogueTypeEnum, CourseFormEnum, RoutesEnum, SkeletonEnum} from "@shared/enums";
import {debounceTime, firstValueFrom, lastValueFrom, take} from "rxjs";
import {PrimeIcons} from "primeng/api";
import {OnExitInterface} from "@shared/interfaces";



@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss'
})
export class CourseFormComponent implements OnInit,OnExitInterface{

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
  protected certificationTypes:CatalogueModel[]=[];
  protected types:CatalogueModel[]=[];

  /**Enums */
  protected readonly CourseFormEnum = CourseFormEnum;
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
    this.loadCertificationTypes();
    this.loadTypes();

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
      certificationTypeId: [null, [Validators.required]],
      typeId: [null, [Validators.required]],
      description:[null, [Validators.required]],
      hour:[null, [Validators.required]],
      endedAt:[null, [Validators.required]],
      institution:[null, [Validators.required]],
      name:[null, [Validators.required]],
      startedAt:[null, [Validators.required]],

    });
  }

  validateForm(): boolean {
    this.formErrors = [];

    if (this.areaIdField.invalid) this.formErrors.push(CourseFormEnum.areaId);
    if (this.certificationTypeIdField.invalid) this.formErrors.push(CourseFormEnum.certificationTypeId);
    if (this.typeIdField.invalid) this.formErrors.push(CourseFormEnum.typeId);
    if (this.descriptionField.invalid) this.formErrors.push(CourseFormEnum.description);
    if (this.hourField.invalid) this.formErrors.push(CourseFormEnum.hour);
    if (this.endedAtField.invalid) this.formErrors.push(CourseFormEnum.endedAt);
    if (this.institutionField.invalid) this.formErrors.push(CourseFormEnum.institution);
    if (this.nameField.invalid) this.formErrors.push(CourseFormEnum.name);
    if (this.startedAtField.invalid) this.formErrors.push(CourseFormEnum.startedAt);

    return this.form.valid && this.formErrors.length === 0;
  }

  /** Load Foreign Keys  **/
  loadAreas() {
    this.areas=this.cataloguesHttpService.findByType(CatalogueTypeEnum.COURSES_AREA);
  }
  loadCertificationTypes() {
    this.certificationTypes=this.cataloguesHttpService.findByType(CatalogueTypeEnum.COURSES_CERTIFICATION_TYPE);
  }
  loadTypes() {
    this.types=this.cataloguesHttpService.findByType(CatalogueTypeEnum.COURSES_TYPE);
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

  get certificationTypeIdField(): AbstractControl {
    return this.form.controls['certificationTypeId'];
  }

  get typeIdField(): AbstractControl {
    return this.form.controls['typeId'];
  }
  get descriptionField(): AbstractControl {
    return this.form.controls['description'];
  }
  get hourField(): AbstractControl {
    return this.form.controls['hour'];
  }
  get endedAtField(): AbstractControl {
    return this.form.controls['endedAt'];
  }
  get institutionField(): AbstractControl {
    return this.form.controls['institution'];
  }
  
  get nameField (): AbstractControl {
    return this.form.controls['name'];
  }
  get startedAtField(): AbstractControl {
    return this.form.controls['startedAt'];
  }

}
