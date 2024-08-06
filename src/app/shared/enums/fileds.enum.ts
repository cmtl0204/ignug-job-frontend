export enum LoginFormEnum {
  username = 'Usuario',
  password = 'Contraseña',
  passwordNew = 'Nueva contraseña',
  passwordConfirmation = 'Repita la contraseña',
  roleSelect = 'Seleccione un rol',
}

export enum CompanyRegistrationFormEnum {
  email = 'Correo electrónico',
  identification = 'Número de documento',
  identificationType = 'Tipo de documento',
  lastname = 'Apellidos',
  //cambio de contenido en tradeName
  tradeName = 'Nombre de la empresa',
  password = 'Contraseña',
  web = 'Página web',
  personType = 'Tipo de personería jurídica',
  unitManagers = 'Unidades ejecutoras',
  bloodType = 'Tipo de sangre',
  ethnicOrigin = 'Etnia',
  //datos nuevos
  activityType = 'Tipo de Actividad',
  type = 'Tipo de empresa',
  comercialActivities = 'Actividades Comerciales',
}

export enum UsersFormEnum {
  email = 'Correo electrónico',
  identification = 'Número de documento',
  identificationType = 'Tipo de documento',
  lastname = 'Apellidos',
  name = 'Nombres',
  password = 'Contraseña',
  passwordChanged = 'Confirmar contraseña',
  roles = 'Roles',
  unitManagers = 'Unidades ejecutoras',
  bloodType = 'Tipo de sangre',
  ethnicOrigin = 'Etnia',
  //datos nuevos
  phone = 'Teléfono',
  username = 'Numero de Documento',
}

//nuevo enum professional
export enum ProfessionalsFormEnum {
  aboutMe = 'Presentación personal',
  catastrophicDiseased = 'Cuenta con alguna condición de enfermedad catastrófica',
  disabled = 'Cuenta con alguna condición de discapacidad',
  familiarCatastrophicDiseased = 'Cuenta con algun familiar con condición de enfermedad catastrófica',
  familiarDisabled = 'Cuenta con algun familiar con condición de discapacidad',
  identificationFamiliarDisabled = 'Documento de identidad de familiar con discapacidad',
  traveled = 'Puede viajar',
}

export enum OffersFormEnum{
  contractTypeId = 'Tipo Contrato',
  companyId = 'Compania',
  experienceTimeId = 'Tiempo de Experiencia',
  locationId = 'Ubicación',
  sectorId = 'Sector',
  stateId = 'Estado',
  trainingHoursId = 'Horas de Entrenamiento',
  workingDayId = 'Día de Trabajo',
  activities = 'Actividades',
  additionalInformation = 'Información Adicional',
  code = 'Código',
  contactCellphone = 'Contacto del Celular',
  contactEmail = 'Contacto del Email',
  contactName = 'Nombre de Contacto',
  contactPhone = 'Teléfono de Contacto',
  endedAt = 'Termino en',
  position = 'Posición',
  remuneration = 'Remuneración',
  startedAt = 'Empezo a las',
  requirements = 'Requisitos',
  vacancies = 'Vacantes'
}

export enum CategoryFormEnum{

code = 'Codigo',
icon ='Icono',
name ='Nombre Categoria',

}

export const CompanyRegistrationFormEnum2 = [{
  tradeName: 'Correo electrónico',
  personTypeId: 'Número de documento',
}];

export enum CourseFormEnum {
  AREA = 'Área',
}
