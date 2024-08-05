import { UserModel } from "@models/auth";

export interface ProfessionalModel {
  id?: string;

  user?: UserModel;
  userId?: string;

  aboutMe?: string;
  catastrophicDiseased?: boolean;
  diseased?: boolean;
  familiarCatastrophicDiseased?: boolean;
  familiarDiseased?: boolean;
  identificationFamiliarDiseased?: string;
  traveled?: boolean;
}

