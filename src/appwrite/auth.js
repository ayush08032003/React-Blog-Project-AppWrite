// start with appwrite auth services
import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        console.log("AN ERROR HAS OCCURED..! THE USER IS NOT CREATED");
      }
    } catch (error) {
      console.log("Appwrite AuthService :: createAccount() :: " + error);
    }
  }

  async login({ email, password }) {
    try {
      const userAccount = await this.account.createEmailPasswordSession(
        email,
        password
      );
      if (userAccount) {
        return userAccount;
      } else {
        console.log("AN ERROR HAS OCCURED..! THE USER IS NOT LOGGED IN");
      }
    } catch (error) {
      console.log("Appwrite AuthService :: login() :: " + error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite AuthService :: getCurrentUser() :: " + error);
    }

    return null;
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite AuthService :: logout() :: " + error);
    }
  }
}

const authService = new AuthService();
export default authService;
