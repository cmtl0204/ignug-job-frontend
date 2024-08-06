import {CatalogueModel} from "@models/core";


export interface ExperienceModel {
    id?: string;
    createAt?: Date;
    updateAt?: Date;
    deleteAt?: Date;
  
    area?: CatalogueModel;
    areaId?: string;
    certificationType?:CatalogueModel;
    certificationTypeId?:string;
    type?:CatalogueModel;
    typeId?:string;
    // professional:ProfessionalModel
    professionalId?: string;
    description?: string;
    hours?:string;
    endedAt?:Date;
    institutions?:string;
    name?: string;
    startedAt?:string;
  }
  