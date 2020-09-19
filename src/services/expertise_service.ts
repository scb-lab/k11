import { Service, Inject } from "typedi";
import {
  Expertise as expertiseModel,
  IExpertiseBase,
  IExpertise,
  IExpertiseSearch,
} from "@entities/Expertise";
@Service()
export class expertiseService {
  constructor(private expertiseModel: expertiseModel) {}
  async createExpertise(expertise: IExpertiseBase): Promise<IExpertise> {
    return await this.expertiseModel.createExpertise(expertise);
  }
  async getExpertise(id: string): Promise<IExpertise | null> {
    try {
      return await this.expertiseModel.getExpertise(id);
    } catch (error) {
      throw error;
    }
  }
  async findExpertise(search: IExpertiseSearch): Promise<IExpertise[] | null> {
    try {
      return await this.expertiseModel.findExpertise(search);
    } catch (error) {
      throw error;
    }
  }
  async updateExpertise(
    id: string,
    expertise: IExpertiseBase
  ): Promise<IExpertise | null> {
    try {
      return await this.expertiseModel.updateExpertise(id, expertise);
    } catch (error) {
      throw error;
    }
  }
  async deleteExpertise(id: string): Promise<IExpertise | null> {
    try {
      return await this.expertiseModel.deleteExpertise(id);
    } catch (error) {
      throw error;
    }
  }
}
