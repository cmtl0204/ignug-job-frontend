import {UserModel} from "@models/auth";
import {CatalogueModel} from "@models/core";


export interface CompanyModel {
  id?: string;
  createAt?: Date;
  updateAt?: Date;
  deleteAt?: Date;

  commercialActivities?: string;
  tradeName?: string;
  web?: string;

  activityType?: CatalogueModel;
  activityTypeId?: string;

  personType?: CatalogueModel;
  personTypeId?: string;

  type?: CatalogueModel;
  typeId?: string;

  user?: UserModel;
  userId?: string;

}


