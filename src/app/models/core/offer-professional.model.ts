import {OfferModel, ProfessionalModel} from "@models/core";


export interface OfferProfessionalModel {
  id?: string;
  createAt?: Date;
  updateAt?: Date;
  deleteAt?: Date;

  offer?: OfferModel;
  offerId?: string;
  professional?: ProfessionalModel;
  professionalId?: string;
  //state:CatalogueModel;
  stateId?: string;


}
