import { Payement_condition } from "@shared/Types";
import mongoose, { Document, Schema, model } from "mongoose";
export interface IExpertiseBase {
  date: Date;
  place: string;
  patient_id: mongoose.Types.ObjectId;
  applicant_id: String;
  Payement_condition: Payement_condition;
  billed: boolean;
  travelling_expenses: number;
  text: [string];
}
const expertiseSchema: Schema = new Schema({
  date: { type: Date },
  place: { type: String },
  Payement_condition: String,
  billed: { type: Boolean },
  patient_id: { type: mongoose.Types.ObjectId, ref: "Patient" },
  applicant_id: { type: mongoose.Types.ObjectId, ref: "Claimant" },
  travelling_expenses: { type: Number },
  text: { type: [String] },
});
export interface IExpertiseSearch {
  _id?: string;
  date?: { $gte: Date; $lte: Date };
  place?: string;
  patient_id?: mongoose.Types.ObjectId;
  applicant_id?: string;
  Payement_condition?: Payement_condition;
  billed?: boolean;
  travelling_expenses?: number;
  text?: [string];
}
export interface IExpertise extends Document {
  // used to get the document properties in the interface
  date: Date;
  place: string;
  patient_id: mongoose.Types.ObjectId;
  applicant_id: string;
  Payement_condition: Payement_condition;
  billed: boolean;
  travelling_expenses: number;
  text: [string];
}
export class Expertise {
  private static _expertise: mongoose.Model<IExpertise> = mongoose.model<
    IExpertise
  >("Expertise", expertiseSchema);

  constructor() {}
  async createExpertise(expertise: IExpertiseBase): Promise<IExpertise> {
    try {
      return await Expertise._expertise.create(expertise);
    } catch (error) {
      throw error;
    }
  }
  async getExpertise(id: string): Promise<IExpertise | null> {
    try {
      return await Expertise._expertise
        .findById(id)
        .populate(["patient_id", "claimant_id"]);
    } catch (error) {
      throw error;
    }
  }
  async findExpertise(search: IExpertiseSearch): Promise<IExpertise[] | null> {
    try {
      return await Expertise._expertise
        .find(search)
        .populate(["patient_id", "claimant_id"]);
    } catch (error) {
      throw error;
    }
  }
  async updateExpertise(
    id: string,
    expertise: IExpertiseBase
  ): Promise<IExpertise | null> {
    try {
      return await Expertise._expertise
        .findByIdAndUpdate(id, expertise)
        .populate(["patient_id", "claimant_id"]);
    } catch (error) {
      throw error;
    }
  }
  async deleteExpertise(id: string): Promise<IExpertise | null> {
    try {
      return await Expertise._expertise.findByIdAndRemove(id);
    } catch (error) {
      throw error;
    }
  }
}
