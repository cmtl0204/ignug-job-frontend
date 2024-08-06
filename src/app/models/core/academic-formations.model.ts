import {CatalogueModel} from "@models/core";


export interface AcademicFormationsModel {
    id?: string;
    createAt?: Date;
    updateAt?: Date;
    deleteAt?: Date;

    career?:string
    careerId?:CatalogueModel;
    // professional:ProfessionalModel
    professionalId?: string;
    professionalDegree?:CatalogueModel;
    professionalDegreeId?:string;
    description?: string;
    certificate?:string;
    registeredAt?:Date;
    senescytCode?:string;

  }
  