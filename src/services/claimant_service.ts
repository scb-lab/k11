import { Service, Inject } from "typedi";
import {
  Claimant as claimantModel,
  IClaimantBase,
  IClaimant,
  IClaimantSearch,
} from "@entities/Claimant";
@Service()
export class claimantService {
  constructor(private claimantModel: claimantModel) {}
  async createClaimant(claimant: IClaimantBase): Promise<IClaimant> {
    return await this.claimantModel.createClaimant(claimant);
  }
  async getClaimant(id: string): Promise<IClaimant | null> {
    try {
      return await this.claimantModel.getClaimant(id);
    } catch (error) {
      throw error;
    }
  }
  async findClaimant(search: IClaimantSearch): Promise<IClaimant[] | null> {
    try {
      return await this.claimantModel.findClaimant(search);
    } catch (error) {
      throw error;
    }
  }
  async updateClaimant(
    id: string,
    claimant: IClaimantBase
  ): Promise<IClaimant | null> {
    try {
      return await this.claimantModel.updateClaimant(id, claimant);
    } catch (error) {
      throw error;
    }
  }
  async deleteClaimant(id: string): Promise<IClaimant | null> {
    try {
      return await this.claimantModel.deleteClaimant(id);
    } catch (error) {
      throw error;
    }
  }
}
