import { apiClient } from "./ApiClient";
import { handleResponse } from "./GenericResponseHandler";

const getData = async (url, params, baseKey) => {
  try {
    const response = await apiClient().get(url, {
      params
    }, baseKey);
    return handleResponse(response);
  } catch (error) {
    throw error;
  }
};

export default {
  getData
};
