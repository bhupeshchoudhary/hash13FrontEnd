// // src/types/mongoose.d.ts
// import { Document, Model } from 'mongoose';

// declare module 'mongoose' {
//   interface IAdmin {
//     email: string;
//     password: string;
//     name: string;
//     role: 'admin' | 'super-admin';
//     createdAt?: Date;
//     updatedAt?: Date;
//   }

//   interface IAdminMethods {
//     comparePassword(candidatePassword: string): Promise<boolean>;
//   }

//   type AdminModel = Model<IAdmin, {}, IAdminMethods>;
// }




import { Document, Model } from 'mongoose';

declare module 'mongoose' {
  interface IAdmin {
    email: string;
    password: string;
    name: string;
    role: 'admin' | 'super-admin';
    createdAt?: Date;
    updatedAt?: Date;
  }

  interface IAdminMethods {
    comparePassword(candidatePassword: string): Promise<boolean>;
  }

  type AdminModel = Model<IAdmin, {}, IAdminMethods>;
}