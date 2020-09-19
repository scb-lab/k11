import { IAddress, addressSchema } from "@shared/Types";
import mongoose, { Document, Schema, model } from "mongoose";
import { type } from "os";

//The User is the doctor at the same time
export interface IUserBase {
  lastname: string;
  firstname: string;
  title: string;
  establishment: string;
  service: string;
  address: IAddress;
  email: string;
  phone_home: string;
  phone_cell: string;
  iban: string;
  login: string;
  pwdHash: string;
  isAdmin: boolean;
}
export interface IUser extends Document {
  // used to get the document properties in the interface
  lastname: string;
  firstname: string;
  title: string;
  establishment: string;
  service: string;
  address: IAddress;
  email: string;
  phone_home: string;
  phone_cell: string;
  iban: string;
  login: string;
  pwdHash: string;
  isAdmin: boolean;
}
export interface IUserSearch extends Partial<IUserBase> {
  _id?: string;
}

const userSchema: Schema = new Schema({
  lastname: { type: String },
  firstname: { type: String },
  title: { type: String },
  establishment: { type: String },
  service: { type: String },
  address: addressSchema,
  email: { type: String },
  phone_home: { type: String },
  phone_cell: { type: String },
  iban: { type: String },
  login: { type: String },
  pwdHash: { type: String },
  isAdmin: { type: Boolean },
});
export class User {
  private static _user: mongoose.Model<IUser> = mongoose.model<IUser>(
    "User",
    userSchema
  );

  constructor() {}
  async createUser(user: IUserBase): Promise<IUser> {
    try {
      return await User._user.create(user);
    } catch (error) {
      throw error;
    }
  }
  async getUser(id: string): Promise<IUser | null> {
    try {
      return await User._user.findById(id);
    } catch (error) {
      throw error;
    }
  }
  async findUser(search: IUserSearch): Promise<IUser[] | null> {
    try {
      return await User._user.find(search);
    } catch (error) {
      throw error;
    }
  }
  async updateUser(id: string, user: IUserBase): Promise<IUser | null> {
    try {
      return await User._user.findByIdAndUpdate(id, user);
    } catch (error) {
      throw error;
    }
  }
  async deleteUser(id: string): Promise<IUser | null> {
    try {
      return await User._user.findByIdAndRemove(id);
    } catch (error) {
      throw error;
    }
  }
}
