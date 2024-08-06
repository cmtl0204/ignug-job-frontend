import {CatalogueModel} from "@models/core";

export interface CourseModel {
  id?: string;
  createAt?: Date;
  updateAt?: Date;
  deleteAt?: Date;

  area?: CatalogueModel;
  areaId?: string;
  // professional:ProfessionalModel
  professionalId?: string;
  activities?:string;
  employer?:string;
  endedAt?:Date;
  position?:string;
  reasonLeave?:string;
  startedAt?:string;
  worked?:string;
}