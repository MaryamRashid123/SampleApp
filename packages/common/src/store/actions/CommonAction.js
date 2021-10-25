import CommonService from "../../services/api/CommonService";
import { COMMON_ACTIONS } from "../../constants/ActionConstants";
import { request, success, failure } from ".";
import { handleError } from "../../services/api/GenericResponseHandler";

// Get Calls
function getData(url, key, loadingKey, params, baseKey) {
  return async (dispatch) => {
    try {
      dispatch(request(COMMON_ACTIONS.GET_DATA_REQUEST, {key, loadingKey}));
      const response = await CommonService.getData(url, params, baseKey);

      dispatch(success(COMMON_ACTIONS.GET_DATA_SUCCESS, {key, loadingKey, response}));
      return response;
    } catch (error) {
      dispatch(failure(COMMON_ACTIONS.GET_DATA_FAILURE, { key, loadingKey, error }));
      throw handleError(error);
    }
  };
};

// Get Calls
function getDetailData(url, key, loadingKey, params, baseKey) {
  const pageNumber = params?.pageNumber || 0;
  return async (dispatch) => {
    try {
      dispatch(request(COMMON_ACTIONS.GET_DETAIL_DATA_REQUEST, {key, loadingKey, pageNumber}));
      const response = await CommonService.getData(url, params, baseKey);

      dispatch(success(COMMON_ACTIONS.GET_DETAIL_DATA_SUCCESS, {key, loadingKey, response, pageNumber}));
      return response;
    } catch (error) {
      dispatch(failure(COMMON_ACTIONS.GET_DETAIL_DATA_FAILURE, { key, loadingKey, error, pageNumber }));
      throw handleError(error);
    }
  };
};

// Update Data
function updateData(key, value) {
  return async (dispatch) => {
    dispatch(request(COMMON_ACTIONS.UPDATE_DATA_REQUEST, {key, value}));
  };
};

// Update Loader
function updateLoader(key, value) {
  return async (dispatch) => {
    dispatch(request(COMMON_ACTIONS.UPDATE_LOADER_REQUEST, {key, value}));
  };
};

export {
  getData,
  getDetailData,
  updateLoader,
  updateData
};
