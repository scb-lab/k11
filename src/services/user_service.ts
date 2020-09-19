import { Service, Inject } from "typedi";
import {
  User as userModel,
  IUserBase,
  IUser,
  IUserSearch,
} from "@entities/User";
@Service()
export class userService {
  constructor(private userModel: userModel) {}
  async createUser(user: IUserBase): Promise<IUser> {
    return await this.userModel.createUser(user);
  }
  async getUser(id: string): Promise<IUser | null> {
    try {
      return await this.userModel.getUser(id);
    } catch (error) {
      throw error;
    }
  }
  async findUser(search: IUserSearch): Promise<IUser[] | null> {
    try {
      return await this.userModel.findUser(search);
    } catch (error) {
      throw error;
    }
  }
  async updateUser(id: string, user: IUserBase): Promise<IUser | null> {
    try {
      return await this.userModel.updateUser(id, user);
    } catch (error) {
      throw error;
    }
  }
  async deleteUser(id: string): Promise<IUser | null> {
    try {
      return await this.userModel.deleteUser(id);
    } catch (error) {
      throw error;
    }
  }
}
