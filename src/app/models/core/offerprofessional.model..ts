import { offerModel } from "./offer.model";


export interface OfferProfessionalModel {
  id?: string;
  createAt?: Date;
  updateAt?: Date;
  deleteAt?: Date;

  offer?: offerModel;
  offerId?: string;
  //professionalId?: string;
  //state:CatalogueModel;
  stateId?: string;





}
