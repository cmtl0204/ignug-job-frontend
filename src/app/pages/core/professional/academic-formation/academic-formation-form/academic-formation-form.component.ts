import {Component, inject, Input, OnInit} from '@angular/core';
import {AuthHttpService, AuthService} from "@servicesApp/auth";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CataloguesHttpService} from "@servicesHttp/core";
import {CatalogueModel} from "@models/core";
import {CoreService, MessageDialogService, RoutesService} from "@servicesApp/core";
import {CatalogueTypeEnum,AcademicFormationFormEnum, RoutesEnum, SkeletonEnum} from "@shared/enums";
import {debounceTime, firstValueFrom, lastValueFrom, take} from "rxjs";
import {PrimeIcons} from "primeng/api";
import {OnExitInterface} from "@shared/interfaces";


@Component({
  selector: 'app-academic-formation-form',
  templateUrl: './academic-formation-form.component.html',
  styleUrl: './academic-formation-form.component.scss'
})
export class AcademicFormationFormComponent implements OnInit,OnExitInterface {

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
   protected careers:CatalogueModel[]=[];
   protected professionalDegrees:CatalogueModel[]=[];
   protected institutions:CatalogueModel[]=[];
   protected selectedInstitution:FormControl=new FormControl(null);

    /**Enums */
  protected readonly AcademicFormationFormEnum = AcademicFormationFormEnum;
  protected readonly SkeletonEnum = SkeletonEnum;
  protected readonly PrimeIcons = PrimeIcons;
   
  constructor() {
    //console.log('entro');
    this.buildForm();
  }
  async onExit() {
    const res = await firstValueFrom(this.messageDialogService.questionOnExit());
    console.log(res);
    return res;
    
  }
  ngOnInit(): void {
    /** Load Foreign Keys**/
    this.loadCareers();
    this.loadProfessionalDegrees();
    this.loadInstitutions();

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
  buildForm() {
    this.form = this.formBuilder.group({
      careerId: [null, [Validators.required]],
      professionalDegreeId:[null, [Validators.required]],
      certificated:[null, [Validators.required]],
      registeredAt:[null ],
      senescytCode:[null],
    });

    this.checkValueChanges();
  }
  validateForm(): boolean {
    this.formErrors = [];

    if (this.careerIdField.invalid) this.formErrors.push(AcademicFormationFormEnum.careerId);
    if (this.professionalDegreeIdField.invalid) this.formErrors.push(AcademicFormationFormEnum.professionalDegreeId);
    if (this.certificatedField.invalid) this.formErrors.push(AcademicFormationFormEnum.certificated);
    if (this.registeredAtField.invalid) this.formErrors.push(AcademicFormationFormEnum.registeredAt);
    if (this.senescytCodeField.invalid) this.formErrors.push(AcademicFormationFormEnum.senescytCode);
    if (this.selectedInstitution.invalid) this.formErrors.push(AcademicFormationFormEnum.institution);
                                                          

    return this.form.valid && this.formErrors.length === 0;
  }

  checkValueChanges(){
    this.certificatedField.valueChanges.subscribe(value=>{ 
      if(value){
        this.registeredAtField.setValidators(Validators.required);
        this.senescytCodeField.setValidators(Validators.required);
      }
      else {
        this.registeredAtField.clearValidators();
        this.senescytCodeField.clearValidators();
      }

      this.registeredAtField.updateValueAndValidity();
      this.senescytCodeField.updateValueAndValidity();
      
    });
  }

  
  /** Load Foreign Keys  **/
  loadCareers() {
    this.careers=this.cataloguesHttpService.findByType(CatalogueTypeEnum.ACADEMIC_FORMATIONS_CAREER);
  }
  loadProfessionalDegrees() {
    this.professionalDegrees=this.cataloguesHttpService.findByType(CatalogueTypeEnum.ACADEMIC_FORMATIONS_PROFESSIONAL_DEGREE);
  }
  loadInstitutions() {
    this.institutions=this.cataloguesHttpService.findByType(CatalogueTypeEnum.ACADEMIC_FORMATIONS_INSTITUTION);
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
  get careerIdField(): AbstractControl {
    return this.form.controls['careerId'];
  }

  get professionalDegreeIdField(): AbstractControl {
    return this.form.controls['professionalDegreeId'];
  }

  get certificatedField(): AbstractControl {
    return this.form.controls['certificated'];
  }
  get registeredAtField(): AbstractControl {
    return this.form.controls['registeredAt'];
  }
  get senescytCodeField(): AbstractControl {
    return this.form.controls['senescytCode'];
  }
 




}
