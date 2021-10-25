import { LOCAL_STORAGE_KEYS } from "../../constants/GenericConstants";

export default class ReactStorageService {
  constructor(storage) {
    this.localStorage = storage;
  }

  setAccessToken(accessToken) {
    this.localStorage.setItem(
      LOCAL_STORAGE_KEYS.ACCESS_TOKEN,
      accessToken || null
    );
  }

  getAccessToken() {
    try {
      const token = this.localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
      return token;
    } catch (error) {
      return "";
    }
  }

  setRefreshToken(token) {
    this.localStorage.setItem(
      LOCAL_STORAGE_KEYS.REFRESH_TOKEN,
      token || null
    );
  }

  getRefreshToken() {
    try {
      const token = this.localStorage.getItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN);
      return token;
    } catch (error) {
      return "";
    }
  }

  setDefaultLocation(location) {
    this.localStorage.setItem(
      LOCAL_STORAGE_KEYS.DEFAULT_LOCATION,
      location || null
    );
  }

  getDefaultLocation() {
    try {
      const location = this.localStorage.getItem(LOCAL_STORAGE_KEYS.DEFAULT_LOCATION);
      return location;
    } catch (error) {
      return "";
    }
  }

  setUserInfo(info) {
    this.localStorage.setItem(
      LOCAL_STORAGE_KEYS.USER_INFO,
      JSON.stringify(info || {})
    );
  }

  getUserInfo() {
    try {
      const info = this.localStorage.getItem(LOCAL_STORAGE_KEYS.USER_INFO);
      return JSON.parse(info);
    } catch (error) {
      return "";
    }
  }

  deleteLoginData() {
    this.localStorage.removeItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
    this.localStorage.removeItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN);
    this.localStorage.removeItem(LOCAL_STORAGE_KEYS.DEFAULT_LOCATION);
    this.localStorage.removeItem(LOCAL_STORAGE_KEYS.USER_INFO);
  }
}
