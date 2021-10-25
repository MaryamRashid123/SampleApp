import axios from "axios";
import StorageService from "../StorageService";
import { BASE_URL_KEY } from "../../constants/GenericConstants";

export default class AccessToken {
  static token;
  // static source = source;
}

export const apiClient = () => {
  const defaultBaseUrl = AppEnvironment.config().baseURL;
  const token = AccessToken.token || StorageService.instance.getAccessToken();
  const defaultOptions = {
    // cancelToken: AccessToken.source.token,
    headers: {
      Authorization: token ? `Bearer ${token || null}` : "",
      "Content-Type": "application/json",
    },
  };

  return {
    get: (url, options = {}, baseKey) =>
      axios.get(getUrl(defaultBaseUrl, url, baseKey), { ...defaultOptions, ...options }),
    post: (url, data, options = {}, baseKey) =>
      axios.post(getUrl(defaultBaseUrl, url, baseKey), data, { ...defaultOptions, ...options }),
    put: (url, data, options = {}, baseKey) =>
      axios.put(getUrl(defaultBaseUrl, url, baseKey), data, { ...defaultOptions, ...options }),
    patch: (url, data, options = {}, baseKey) =>
      axios.patch(getUrl(defaultBaseUrl, url, baseKey), data, { ...defaultOptions, ...options }),
    delete: (url, options = {}, baseKey, data) =>
      axios.delete(getUrl(defaultBaseUrl, url, baseKey), { ...defaultOptions, ...options, data }),
  };
};

const getUrl = (defaultBaseUrl, url, baseKey) => {
  let baseUrl = defaultBaseUrl;
  if(!!baseKey){
    baseUrl = AppEnvironment.config(baseKey).baseURL || defaultBaseUrl;
  }
  console.log(`${baseUrl}${url}`)
  return `${baseUrl}${url}`;
}

export const AppEnvironment = {
  // comment out one from following buildMode which used as default
  buildMode: BASE_URL_KEY.GENERAL,
  // buildMode: BASE_URL_KEY.USER_MANAGEMENT,

  // Note: Enable respective servers before creating build
  allConfigurations: {
    [BASE_URL_KEY.GENERAL]: {
      baseURL:"http://demo1.folio3.com:8983/CattleViewAPI/api/v1",
      // baseURL: "http://10.164.1.242:8986/server/api/v1",  // Folio 3 server
      // baseURL: "http://apps.cactusfeeders.com/CvApiUat/api/v1"  // Cactus UAT Server
    },
    [BASE_URL_KEY.USER_MANAGEMENT]: {
        baseURL: "http://demo1.folio3.com:8983/UserManagementAPI/api/v1", // Folio3 Server
      // baseURL: "http://10.164.1.242:8985/api/v1", // Folio3 Server
      // baseURL: "http://apps.cactusfeeders.com/UserMgmtTestAPI/api/v1",  // Cactus Server
    }
  },

  config(buildMode) {
    const mode = buildMode || this.buildMode;
    return this.allConfigurations[mode];
  },
};
