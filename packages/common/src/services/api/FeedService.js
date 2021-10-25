import { apiClient } from "./ApiClient";
import URL_CONSTANTS from "../../constants/UrlConstants";
import { handleResponse, handleError } from "./GenericResponseHandler";

const getFeed = async (params) => {
  try {
    const response = await apiClient().get(URL_CONSTANTS.FEED, {params});
    return handleResponse(response);
  } catch (error) {
    throw handleError(error);
  }
};

const getFeedCount = async (params) => {
  try {
    const response = await apiClient().get(URL_CONSTANTS.GET_PEN_MOVES_COUNT, {
      params
    });
    return handleResponse(response);
  } catch (error) {
    throw handleError(error);
  }
};

const deleteFeed = async (params) => {
  try {
    let url = URL_CONSTANTS.DELETE_FEED.replace('$penFeedingId', params?.penFeedingId);
    const response = await apiClient().delete(url);
    return handleResponse(response);
  } catch (error) {
    throw error;
  }
};

const addFeed = async (params) => {
  try {
    const response = await apiClient().post(URL_CONSTANTS.FEED, params);
    return handleResponse(response);
  } catch (error) {
    throw error;
  }
};

const updateFeed = async (params) => {
  try {
    const response = await apiClient().put(URL_CONSTANTS.FEED, params);
    return handleResponse(response);
  } catch (error) {
    throw error;
  }
};



export default {
  getFeed,
  getFeedCount,
  deleteFeed,
  addFeed,
  updateFeed,

};
