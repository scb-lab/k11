import { IAddress, addressSchema } from "@shared/Types";
import mongoose, { Document, Schema, model } from "mongoose";

export interface IPatientBase {
  firstname: string;
  lastname: string;
  date_of_birth: Date;
  place_of_birth: string;
  email: string;
  address: IAddress;
  civility: string;
  phone_home: string;
  phone_cell: string;
  doctor_id: mongoose.Types.ObjectId;
}
export interface IPatient extends Document {
  // used to get the document properties in the interface
  firstname: string;
  lastname: string;
  date_of_birth: Date;
  place_of_birth: string;
  email: string;
  address: IAddress;
  civility: string;
  phone_home: string;
  phone_cell: string;
  doctor_id: mongoose.Types.ObjectId;
}
export interface IPatientSearch extends Partial<IPatientBase> {
  //dates doesn't use gte and lte because patient birth date should be exact
  _id?: string;
}

const patientSchema: Schema = new Schema({
  lastname: { type: String },
  firstname: { type: String },
  date_of_birth: { type: Date },
  place_of_birth: { type: String },
  address: addressSchema,
  email: { type: String },
  phone_home: { type: String },
  phone_cell: { type: String },
  civility: { type: String },
  doctor_id: { type: mongoose.Types.ObjectId, ref: "User" },
});
export class Patient {
  private static _patient: mongoose.Model<IPatient> = mongoose.model<IPatient>(
    "Patient",
    patientSchema
  );

  constructor() {}
  async createPatient(patient: IPatientBase): Promise<IPatient> {
    try {
      return await Patient._patient.create(patient);
    } catch (error) {
      throw error;
    }
  }
  async getPatient(id: string): Promise<IPatient | null> {
    try {
      return await Patient._patient.findById(id).populate(["doctor_id"]);
    } catch (error) {
      throw error;
    }
  }
  async findPatient(search: IPatientSearch): Promise<IPatient[] | null> {
    try {
      return await Patient._patient.find(search).populate(["doctor_id"]);
    } catch (error) {
      throw error;
    }
  }
  async updatePatient(
    id: string,
    patient: IPatientBase
  ): Promise<IPatient | null> {
    try {
      return await Patient._patient
        .findByIdAndUpdate(id, patient)
        .populate(["doctor_id"]);
    } catch (error) {
      throw error;
    }
  }
  async deletePatient(id: string): Promise<IPatient | null> {
    try {
      return await Patient._patient.findByIdAndRemove(id);
    } catch (error) {
      throw error;
    }
  }
}
