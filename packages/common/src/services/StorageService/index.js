import ReactNativeStorageService from "./react-native";
import ReactStorageService from "./react";
import { PLATFORMS } from "../../constants/GenericConstants";

export default class StorageService {
  static instance = null;
  static platform = null;

  constructor(platform, storage) {
    this.platform = platform; 
    this.service =
      platform === PLATFORMS.WEB
        ? new ReactStorageService(storage)
        : new ReactNativeStorageService(storage);
  }

  setAccessToken(token) {
    this.service.setAccessToken(token);
  }

  getAccessToken() {
    return this.service.getAccessToken();
  }

  setRefreshToken(token) {
    this.service.setRefreshToken(token);
  }

  getRefreshToken() {
    return this.service.getRefreshToken();
  }

  setDefaultLocation(location) {
    this.service.setDefaultLocation(location);
  }

  getDefaultLocation() {
    return this.service.getDefaultLocation();
  }

  setUserInfo(info) {
    this.service.setUserInfo(info);
  }

  getUserInfo() {
    return this.service.getUserInfo();
  }

  deleteLoginData() {
    this.service.deleteLoginData();
  }
}
