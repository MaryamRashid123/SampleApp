import { LOCAL_STORAGE_KEYS } from "../../constants/GenericConstants";

export default class ReactNativeStorageService {
  constructor(storage) {
    this.asyncStorage = storage;
  }

  async setAccessToken(accessToken) {
    await this.asyncStorage.setItem(
      LOCAL_STORAGE_KEYS.ACCESS_TOKEN,
      accessToken || ""
    );
  }

  async getAccessToken() {
    try {
      const token = await this.asyncStorage.getItem(
        LOCAL_STORAGE_KEYS.ACCESS_TOKEN
      );

      return token;
    } catch (error) {
      return "";
    }
  }

  async deleteLoginData() {
    await this.asyncStorage.removeItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
  }
}
