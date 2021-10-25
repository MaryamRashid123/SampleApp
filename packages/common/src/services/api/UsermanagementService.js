import { apiClient } from "./ApiClient";
import URL_CONSTANTS from "../../constants/UrlConstants";
import { handleResponse, handleError } from "./GenericResponseHandler";
import { BASE_URL_KEY } from "@cattleview/common/src/constants/GenericConstants";

const getRoles = async (params) => {
  try {
    const response = await apiClient().get(URL_CONSTANTS.ROLE, {
      params
    }, BASE_URL_KEY.USER_MANAGEMENT);
    return handleResponse(response);
  } catch (error) {
    throw handleError(error);
  }
};

const updateRoleStatus = async (params) => {
  try {
    const response = await apiClient().patch(URL_CONSTANTS.ROLE, params, {}, BASE_URL_KEY.USER_MANAGEMENT);
    return handleResponse(response);
  } catch (error) {
    throw handleError(error);
  }
};

const getAllPermissions = async () => {
  try {
    const response = await apiClient().get(URL_CONSTANTS.ALL_PERMISSIONS, {
      params: {
        appId: 1
      }
    });
    return handleResponse(response);
  } catch (error) {
    throw handleError(error);
  }
};

const getLocations = async (params) => {
  try {
    const response = await apiClient().get(URL_CONSTANTS.LOCATIONS, {
      params
    });
    return handleResponse(response);
  } catch (error) {
    throw handleError(error);
  }
};

const validateLocationID = async (id) => {
  try {
    const response = await apiClient().get(URL_CONSTANTS.LOCATION_EXIST, {
      params: {
        locationId: id
      }
    });
    return handleResponse(response);
  } catch (error) {
    throw handleError(error);
  }
};

const addLocation = async (params) => {
  try {
    const response = await apiClient().post(URL_CONSTANTS.LOCATION, params);
    return handleResponse(response);
  } catch (error) {
    throw handleError(error);
  }
};

const updateLocation = async (params) => {
  try {
    const response = await apiClient().put(URL_CONSTANTS.LOCATION, params);
    return handleResponse(response);
  } catch (error) {
    throw handleError(error);
  }
};

const updateLocationStatus = async (params) => {
  try {
    const response = await apiClient().patch(URL_CONSTANTS.LOCATION, params);
    return handleResponse(response);
  } catch (error) {
    throw handleError(error);
  }
};

const getUsers = async (params) => {
  try {
    const response = await apiClient().get(URL_CONSTANTS.USER, {
      params
    }, BASE_URL_KEY.USER_MANAGEMENT);
    return handleResponse(response);
  } catch (error) {
    throw handleError(error);
  }
};

const addUpdateUser = async (params, type) => {
  try {
    const response = await apiClient()[type || 'post'](URL_CONSTANTS.USER, params, {}, BASE_URL_KEY.USER_MANAGEMENT);
    return handleResponse(response);
  } catch (error) {
    throw error;
  }
};

const addUpdateRole = async (params, type) => {
  try {
    const response = await apiClient()[type || 'post'](URL_CONSTANTS.ROLE, params, {}, BASE_URL_KEY.USER_MANAGEMENT);
    return handleResponse(response);
  } catch (error) {
    throw error;
  }
};

const getRolePermissions = async (roleid) => {
  try {
    const response = await apiClient().get(URL_CONSTANTS.ROLE + `/${ roleid }`, {}, BASE_URL_KEY.USER_MANAGEMENT);
    return handleResponse(response);
  } catch (error) {
    throw error;
  }
};

const getUserRoles = async (id) => {
  try {
    let url = URL_CONSTANTS.USER_ROLES;
    url = url.replace('$ID', id);

    const response = await apiClient().get(url, {}, BASE_URL_KEY.USER_MANAGEMENT);
    return handleResponse(response);
  } catch (error) {
    throw error;
  }
};

const updateUserStatus = async (params) => {
  try {
    const response = await apiClient().patch(URL_CONSTANTS.USER, params, {}, BASE_URL_KEY.USER_MANAGEMENT);
    return handleResponse(response);
  } catch (error) {
    throw handleError(error);
  }
};

const validateUsername = async (params) => {
  try {
    const response = await apiClient().get(URL_CONSTANTS.USERNAME_EXIST, {
      params
    }, BASE_URL_KEY.USER_MANAGEMENT);
    return handleResponse(response);
  } catch (error) {
    throw error;
  }
};

const validateUserEmail = async (params) => {
  try {
    const response = await apiClient().get(URL_CONSTANTS.USER_EMAIL_EXIST, {
      params
    }, BASE_URL_KEY.USER_MANAGEMENT);
    return handleResponse(response);
  } catch (error) {
    throw error;
  }
};

const validateRole = async (params) => {
  try {
    const response = await apiClient().get(URL_CONSTANTS.ROLE_EXIST, {
      params
    }, BASE_URL_KEY.USER_MANAGEMENT);
    return handleResponse(response);
  } catch (error) {
    throw error;
  }
};

export default {
  getRoles,
  updateRoleStatus,
  getAllPermissions,
  addUpdateRole,
  getLocations,
  validateLocationID,
  addLocation,
  updateLocation,
  getUsers,
  addUpdateUser,
  updateUserStatus,
  updateLocationStatus,
  getUserRoles,
  getRolePermissions,
  validateUsername,
  validateUserEmail,
  validateRole
};
