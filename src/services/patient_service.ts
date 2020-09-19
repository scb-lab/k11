import { Service, Inject } from "typedi";
import {
  Patient as patientModel,
  IPatientBase,
  IPatient,
  IPatientSearch,
} from "@entities/Patient";
@Service()
export class patientService {
  constructor(private patientModel: patientModel) {}
  async createPatient(patient: IPatientBase): Promise<IPatient> {
    return await this.patientModel.createPatient(patient);
  }
  async getPatient(id: string): Promise<IPatient | null> {
    try {
      return await this.patientModel.getPatient(id);
    } catch (error) {
      throw error;
    }
  }
  async findPatient(search: IPatientSearch): Promise<IPatient[] | null> {
    try {
      return await this.patientModel.findPatient(search);
    } catch (error) {
      throw error;
    }
  }
  async updatePatient(
    id: string,
    patient: IPatientBase
  ): Promise<IPatient | null> {
    try {
      return await this.patientModel.updatePatient(id, patient);
    } catch (error) {
      throw error;
    }
  }
  async deletePatient(id: string): Promise<IPatient | null> {
    try {
      return await this.patientModel.deletePatient(id);
    } catch (error) {
      throw error;
    }
  }
}
