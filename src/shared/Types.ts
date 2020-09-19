import { Schema } from "mongoose";
import { User, IUserBase } from "@entities/User";
import { Expertise } from "@entities/Expertise";
import { Claimant } from "@entities/Claimant";
import { Patient } from "@entities/Patient";
import * as z from "zod";

export interface IAddress {
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
}
export const addressSchema: Schema = new Schema({
  address1: String,
  address2: String,
  city: String,
  state: String,
  zipcode: String,
  country: String,
});
export type modelType = {
  userModel: User;
  expertiseModel: Expertise;
  claimantModel: Claimant;
  patientModel: Patient;
};
export interface Itag {
  id: number;
  name: string;
}
export enum ApplicantType {
  "fille",
  "fils",
  "mère",
  "père",
  "juge des tutelles",
  "procureur",
  "autre",
}
export enum Payement_condition {
  "chèque",
  "virement",
  "espèces",
  "CB",
}
export type ExpressLocalsModels = {
  userModel: User;
  expertiseModel: Expertise;
  claimantModel: Claimant;
  patientModel: Patient;
};
export type JwtPayload = {
  id: string;
  user: IUserBase;
};
