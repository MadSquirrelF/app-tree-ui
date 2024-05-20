export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

export interface User {
  _id: string;
  email: string;
  username: string;
  roles: UserRole[];
}

export interface UserSchema {
  authData?: User;
  isLoading?: false;
  error?: string;
  _inited: boolean;
}
