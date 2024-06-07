import {Component, inject} from '@angular/core';
import {AuthHttpService, AuthService} from "@servicesApp/auth";
import {CoreService, MessageDialogService, MessageService, RoutesService} from "@servicesApp/core";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PrimeIcons} from "primeng/api";
import {
  ClassButtonActionEnum, CompanyRegistrationFormEnum,
  IconButtonActionEnum,
  LabelButtonActionEnum,
  SkeletonEnum
} from "@shared/enums";
import {
  MessageConfirmDialogComponent
} from "@shared/components/message-confirm-dialog/message-confirm-dialog.component";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent {
//Services
  protected readonly authService = inject(AuthService);
  private readonly authHttpService = inject(AuthHttpService);
  protected readonly coreService = inject(CoreService);
  private readonly formBuilder = inject(FormBuilder);
  public readonly messageService = inject(MessageService);
  public readonly messageDialogService = inject(MessageDialogService);
  private readonly routesService = inject(RoutesService);
  private modalResult$ = this.messageDialogService.modalResult$;
  //Form
  protected form!: FormGroup;
  private formErrors: string[] = [];

  //Enums
  protected readonly PrimeIcons = PrimeIcons;
  protected readonly SkeletonEnum = SkeletonEnum;
  protected readonly IconButtonActionEnum = IconButtonActionEnum;
  protected readonly LabelButtonActionEnum = LabelButtonActionEnum;
  protected readonly ClassButtonActionEnum = ClassButtonActionEnum;
  protected readonly CompanyRegistrationFormEnum = CompanyRegistrationFormEnum;

  //Flags
  protected isModalVisible: boolean = false;
  protected modalTitle: string = '';
  protected modalMessage: string = '';

  constructor() {
    this.buildForm();
  }

  ngOnInit(): void {
  }

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

  onSubmit(): void {
    if (this.validateForm()) {
      this.register();
    } else {
      this.form.markAllAsTouched();
      this.messageDialogService.fieldErrors(this.formErrors);
      // this.messageDialogService.errorCustom('Verifique los datos','Revise los campos');
    }
  }

  register(): void {
    this.authHttpService.login(this.form.value)
      .subscribe(
        response => {
          if (this.authService.roles.length === 0) {
            this.messageService.errorCustom('Sin Rol', 'No cuenta con un rol asignado');
            this.authService.removeLogin();
            return;
          }

          this.routesService.roleSelect();
        });
  }

  /** Redirects **/
  redirectRegistration() {
    this.messageDialogService.questionDelete().subscribe(result => {
      if (result) {
        this.routesService.registration();
      }
    });
    // this.routesService.registration();
  }

  /** Getters **/
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
