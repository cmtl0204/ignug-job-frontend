import {OfferModel} from "@models/core";


export interface OfferProfessionalModel {
  id?: string;
  createAt?: Date;
  updateAt?: Date;
  deleteAt?: Date;

  offer?: OfferModel;
  offerId?: string;
  //professionalId?: string;
  //state:CatalogueModel;
  stateId?: string;


}
