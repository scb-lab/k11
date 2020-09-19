import { ApplicantType } from "@shared/Types";
import { IAddress, addressSchema } from "@shared/Types";
import mongoose, { Document, Schema, model } from "mongoose";
import * as z from "zod";

export interface IClaimantBase {
  lastname: string;
  firstname: string;
  email: string;
  address: IAddress;
  type: ApplicantType;
  civility: string;
  phone_home: string;
  phone_cell: string;
}
export interface IClaimant extends Document {
  // used to get the document properties in the interface
  lastname: string;
  firstname: string;
  email: string;
  address: IAddress;
  type: ApplicantType;
  civility: string;
  phone_home: string;
  phone_cell: string;
}
export interface IClaimantSearch extends Partial<IClaimantBase> {
  _id?: string;
}
const claimantSchema: Schema = new Schema({
  lastname: { type: String },
  firstname: { type: String },
  address: addressSchema,
  type: String,
  email: { type: String },
  phone_home: { type: String },
  phone_cell: { type: String },
  civility: { type: String },
});
export class Claimant {
  private static _claimant: mongoose.Model<IClaimant> = mongoose.model<
    IClaimant
  >("Claimant", claimantSchema);

  constructor() {}
  async createClaimant(claimant: IClaimantBase): Promise<IClaimant> {
    try {
      return await Claimant._claimant.create(claimant);
    } catch (error) {
      throw error;
    }
  }
  async getClaimant(id: string): Promise<IClaimant | null> {
    try {
      return await Claimant._claimant.findById(id);
    } catch (error) {
      throw error;
    }
  }
  async findClaimant(search: IClaimantSearch): Promise<IClaimant[] | null> {
    try {
      return await Claimant._claimant.find(search);
    } catch (error) {
      throw error;
    }
  }
  async updateClaimant(
    id: string,
    claimant: IClaimantBase
  ): Promise<IClaimant | null> {
    try {
      return await Claimant._claimant.findByIdAndUpdate(id, claimant);
    } catch (error) {
      throw error;
    }
  }
  async deleteClaimant(id: string): Promise<IClaimant | null> {
    try {
      return await Claimant._claimant.findByIdAndRemove(id);
    } catch (error) {
      throw error;
    }
  }
}
