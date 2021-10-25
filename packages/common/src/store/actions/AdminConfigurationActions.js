import service from "../../services/api/AdminConfigService";
import { ADMIN_CONFIG } from "../../constants/ActionConstants";
import { request, success, failure } from ".";
import { handleError } from "../../services/api/GenericResponseHandler";
import { saveAs } from 'file-saver';

// Get List
function getRecords(url, params, key, isDetail) {
  const { pageNumber } = params;

  return async (dispatch) => {
    try {

      const loading = !!isDetail? 'loadingDetail': 'loading';
      dispatch(request(ADMIN_CONFIG.LIST_REQUEST, { pageNumber, key, loading } ));
      const response = await service.getRecords(url, params);

      dispatch(success(ADMIN_CONFIG.LIST_SUCCESS, { response, pageNumber, key, loading } ));
      return response;
    } catch (error) {
      const loading = !!isDetail? 'loadingDetail': 'loading';
      dispatch(failure(ADMIN_CONFIG.LIST_FAILURE, { pageNumber, key, loading }));
      throw handleError(error);
    }
  };
}

// Get pdf
function getPdf(downloadUrl, templateId, fileName) {

  return async (dispatch) => {
    try {
      dispatch(request(ADMIN_CONFIG.DOWNLOAD_PDF_REQUEST));
      const response = await service.getPdf(downloadUrl, templateId);

      const PDF_FORMATE = "data:application/pdf;base64,";
      let fileUrl= PDF_FORMATE + response;
      var blob = new Blob([fileUrl], {type: "pdf"});
      saveAs(blob, fileName);

      dispatch(success(ADMIN_CONFIG.DOWNLOAD_PDF_SUCCESS, { response } ));
      return response;
    } catch (error) {
      dispatch(failure(ADMIN_CONFIG.DOWNLOAD_PDF_FAILURE));
      throw handleError(error);
    }
  };
}

// Delete
function deleteRecord(url, recordId, key, id) {
  return async (dispatch) => {
    try {
      dispatch(request(ADMIN_CONFIG.DELETE_REQUEST, key));
      const response = await service.deleteRecord(url, recordId);

      dispatch(success(ADMIN_CONFIG.DELETE_SUCCESS, { recordId, deleteKey: key, deleteIdKey: id }));
      return response;
    } catch (error) {
      dispatch(failure(ADMIN_CONFIG.DELETE_FAILURE));
      throw error;
    }
  };
}

// Post
function postRecord(url, params, key, type) {
  return async (dispatch) => {
    try {
      dispatch(request(ADMIN_CONFIG.POST_REQUEST, key));
      const response = await service.postRecord(url, params, type);

      dispatch(success(ADMIN_CONFIG.POST_SUCCESS, response ));
      return response;
    } catch (error) {
      dispatch(failure(ADMIN_CONFIG.POST_FAILURE, key));
      throw error;
    }
  };
}

// Update
function updateRecord(url, params, key, id) {
  return async (dispatch) => {
    try {
      dispatch(request(ADMIN_CONFIG.UPDATE_REQUEST, key));
      const response = await service.postRecord(url, params, 'put');

      dispatch(success(ADMIN_CONFIG.UPDATE_SUCCESS, { response: response?.result, id, key } ));
      return response;
    } catch (error) {
      dispatch(failure(ADMIN_CONFIG.UPDATE_FAILURE, key));
      throw error;
    }
  };
}

export {
  getRecords,
  deleteRecord,
  postRecord,
  updateRecord,
  getPdf
};
