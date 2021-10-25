import { apiClient } from "./ApiClient";
import URL_CONSTANTS from "../../constants/UrlConstants";
import { handleResponse, handleError } from "./GenericResponseHandler";

const getRecords = async (url, params) => {
  try {
    const response = await apiClient().get(url, {params});
    return handleResponse(response);
  } catch (error) {
    throw handleError(error);
  }
};

const getPdf = async (downloadUrl, templateId) => {
  let url = downloadUrl.replace('$TEMPLATE_ID', templateId);
  
  try {
    const response = await apiClient().get(url);
    return handleResponse(response);
  } catch (error) {
    throw handleError(error);
  }
};

const deleteRecord = async (url, id) => {
  try {
    const deleteUrl = url + `/${ id }`;
    const response = await apiClient().delete(deleteUrl);
    return handleResponse(response);
  } catch (error) {
    throw error;
  }
};

const postRecord = async (url, params, type) => {
  try {
    const response = await apiClient()[type || 'post'](url, params);
    return handleResponse(response);
  } catch (error) {
    throw error;
  }
};


export default {
  getRecords,
  deleteRecord,
  postRecord,
  getPdf
};
