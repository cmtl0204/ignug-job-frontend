import {PermissionModel, RoleModel,UserModel} from '@models/auth';

export interface LoginResponse {
  data: Data;
  message: string;
  title: string;
}

interface Data {
  user: UserModel;
  token: string;
}
