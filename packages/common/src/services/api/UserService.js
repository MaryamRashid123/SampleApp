import { apiClient } from "./ApiClient";
import URL_CONSTANTS from "../../constants/UrlConstants";
import { handleResponse, handleError } from "./GenericResponseHandler";
import { Authenticate } from "../../models/User";
import { BASE_URL_KEY } from "@cattleview/common/src/constants/GenericConstants";

const login = async (data) => {
  try {
    const params = Authenticate(data);
    const response = await apiClient().post(URL_CONSTANTS.AUTHENTICATE, params, {} , BASE_URL_KEY.USER_MANAGEMENT);
    return handleResponse(response);
  } catch (error) {
    throw handleError(error);
  }
};

const refreshToken = async (params) => {
  try {
    const response = await apiClient().post(URL_CONSTANTS.REFRESH_TOKEN, params, {} , BASE_URL_KEY.USER_MANAGEMENT);
    return handleResponse(response);
  } catch (error) {
    throw handleError(error);
  }
};

export default {
  login,
  refreshToken
};
