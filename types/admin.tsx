// src/types/admin.ts

export type AdminRole = 'admin' | 'super-admin';

export interface AdminJWTPayload {
  userId: string;
  role: AdminRole;
  email: string;
  name: string;
}

export interface IAdmin {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: AdminRole;
  createdAt?: Date;
  updatedAt?: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}