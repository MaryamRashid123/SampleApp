import service from "../../services/api/UsermanagementService";
import { USER_MANAGEMENT_ACTIONS } from "../../constants/ActionConstants";
import { request, success, failure } from ".";
import { handleError } from "../../services/api/GenericResponseHandler";

/* Roles */

// Get Roles
function getRoles(params) {
  const { pageNumber } = params;

  return async (dispatch) => {
    try {
      dispatch(request(USER_MANAGEMENT_ACTIONS.GET_ROLES_REQUEST, pageNumber));
      const response = await service.getRoles(params);

      dispatch(success(USER_MANAGEMENT_ACTIONS.GET_ROLES_SUCCESS, { response, pageNumber } ));
      return response;
    } catch (error) {
      dispatch(failure(USER_MANAGEMENT_ACTIONS.GET_ROLES_FAILURE, pageNumber));
      throw handleError(error);
    }
  };
}

// Update Role Status
function updateRoleStatus(params, index) {
  return async (dispatch) => {
    try {
      dispatch(request(USER_MANAGEMENT_ACTIONS.UPDATE_ROLE_STATUS_REQUEST));
      const response = await service.updateRoleStatus(params);

      dispatch(success(USER_MANAGEMENT_ACTIONS.UPDATE_ROLE_STATUS_SUCCESS, { index, res: response?.result } ));
      return response;
    } catch (error) {
      dispatch(failure(USER_MANAGEMENT_ACTIONS.UPDATE_ROLE_STATUS_FAILURE));
      throw handleError(error);
    }
  };
}

// Get Role Permissions
function getAllPermissions() {
  return async (dispatch) => {
    try {
      dispatch(request(USER_MANAGEMENT_ACTIONS.GET_ALL_PERMISSIONS_REQUEST));
      const response = await service.getAllPermissions();

      dispatch(success(USER_MANAGEMENT_ACTIONS.GET_ALL_PERMISSIONS_SUCCESS, response ));
      return response;
    } catch (error) {
      dispatch(failure(USER_MANAGEMENT_ACTIONS.GET_ALL_PERMISSIONS_FAILURE, error));
      throw handleError(error);
    }
  };
}

// Add Role
function addUpdateRole(params, type) {
  return async (dispatch) => {
    try {
      dispatch(request(USER_MANAGEMENT_ACTIONS.ADD_UPDATE_ROLE_REQUEST));
      const response = await service.addUpdateRole(params, type);

      dispatch(success(USER_MANAGEMENT_ACTIONS.ADD_UPDATE_ROLE_SUCCESS, { response, isEdit: type === 'put' }));
      return response;
    } catch (error) {
      dispatch(failure(USER_MANAGEMENT_ACTIONS.ADD_UPDATE_ROLE_FAILURE));
      throw error;
    }
  };
}

function validateRole(name) {
  return async (dispatch) => {
    try {
      dispatch(request(USER_MANAGEMENT_ACTIONS.VALIDATE_USERNAME_REQUEST));
      const response = await service.validateRole({ name });
      
      dispatch(success(USER_MANAGEMENT_ACTIONS.VALIDATE_USERNAME_SUCCESS, response));
      return response;
    } catch (error) {
      dispatch(failure(USER_MANAGEMENT_ACTIONS.VALIDATE_USERNAME_FAILURE, error));
      throw error;
    }
  };
}

// Get Role Permissions
function getRolePermissions(id) {
  return async (dispatch) => {
    try {
      dispatch(request(USER_MANAGEMENT_ACTIONS.GET_ROLE_PERMISSIONS_REQUEST));
      const response = await service.getRolePermissions(id);

      dispatch(success(USER_MANAGEMENT_ACTIONS.GET_ROLE_PERMISSIONS_SUCCESS, response));
      return response;
    } catch (error) {
      dispatch(failure(USER_MANAGEMENT_ACTIONS.GET_ROLE_PERMISSIONS_FAILURE));
      throw error;
    }
  };
}

/* Locations */

// Get Locations
function getLocations(params) {
  const { pageNumber } = params;

  return async (dispatch) => {
    try {
      dispatch(request(USER_MANAGEMENT_ACTIONS.GET_LOCATIONS_REQUEST, pageNumber));
      const response = await service.getLocations(params);

      dispatch(success(USER_MANAGEMENT_ACTIONS.GET_LOCATIONS_SUCCESS, { response, pageNumber } ));
      return response;
    } catch (error) {
      dispatch(failure(USER_MANAGEMENT_ACTIONS.GET_LOCATIONS_FAILURE, pageNumber));
      throw handleError(error);
    }
  };
}

function validateLocationID(id) {
  return async (dispatch) => {
    try {
      dispatch(request(USER_MANAGEMENT_ACTIONS.VALIDATE_LOCATION_ID_REQUEST));
      const response = await service.validateLocationID(id);

      dispatch(success(USER_MANAGEMENT_ACTIONS.VALIDATE_LOCATION_ID_SUCCESS));
      return response;
    } catch (error) {
      dispatch(failure(USER_MANAGEMENT_ACTIONS.VALIDATE_LOCATION_ID_FAILURE));
      throw handleError(error);
    }
  };
}

function addLocation(params) {
  return async (dispatch) => {
    try {
      dispatch(request(USER_MANAGEMENT_ACTIONS.ADD_LOCATION_REQUEST));
      const response = await service.addLocation(params);

      dispatch(success(USER_MANAGEMENT_ACTIONS.ADD_LOCATION_SUCCESS));
      return response;
    } catch (error) {
      dispatch(failure(USER_MANAGEMENT_ACTIONS.ADD_LOCATION_FAILURE));
      throw handleError(error);
    }
  };
}

function updateLocation(params) {
  return async (dispatch) => {
    try {
      dispatch(request(USER_MANAGEMENT_ACTIONS.UPDATE_LOCATION_REQUEST));
      const response = await service.updateLocation(params);

      dispatch(success(USER_MANAGEMENT_ACTIONS.UPDATE_LOCATION_SUCCESS, response));
      return response;
    } catch (error) {
      dispatch(failure(USER_MANAGEMENT_ACTIONS.UPDATE_LOCATION_FAILURE));
      throw handleError(error);
    }
  };
}

function updateLocationStatus(params, index) {
  return async (dispatch) => {
    try {
      dispatch(request(USER_MANAGEMENT_ACTIONS.UPDATE_LOCATION_STATUS_REQUEST));
      const response = await service.updateLocationStatus(params);

      dispatch(success(USER_MANAGEMENT_ACTIONS.UPDATE_LOCATION_STATUS_SUCCESS, { index, res: response?.result } ));
      return response;
    } catch (error) {
      dispatch(failure(USER_MANAGEMENT_ACTIONS.UPDATE_LOCATION_STATUS_FAILURE));
      throw handleError(error);
    }
  };
}

/* Users */

// Get Users
function getUsers(params) {
  const { pageNumber } = params;

  return async (dispatch) => {
    try {
      dispatch(request(USER_MANAGEMENT_ACTIONS.GET_USERS_REQUEST, pageNumber));
      const response = await service.getUsers(params);

      dispatch(success(USER_MANAGEMENT_ACTIONS.GET_USERS_SUCCESS, { response, pageNumber } ));
      return response;
    } catch (error) {
      dispatch(failure(USER_MANAGEMENT_ACTIONS.GET_USERS_FAILURE, pageNumber));
      throw handleError(error);
    }
  };
}

// Add User
function addUpdateUser(params, type) {
  return async (dispatch) => {
    try {
      dispatch(request(USER_MANAGEMENT_ACTIONS.ADD_USER_REQUEST));
      const response = await service.addUpdateUser(params, type);

      dispatch(success(USER_MANAGEMENT_ACTIONS.ADD_USER_SUCCESS, { response, isEdit: type === 'put' }));
      return response;
    } catch (error) {
      dispatch(failure(USER_MANAGEMENT_ACTIONS.ADD_USER_FAILURE));
      throw error;
    }
  };
}

function validateUsername(name) {
  return async (dispatch) => {
    try {
      dispatch(request(USER_MANAGEMENT_ACTIONS.VALIDATE_USERNAME_REQUEST));
      const response = await service.validateUsername({ name });
      
      dispatch(success(USER_MANAGEMENT_ACTIONS.VALIDATE_USERNAME_SUCCESS, response));
      return response;
    } catch (error) {
      dispatch(failure(USER_MANAGEMENT_ACTIONS.VALIDATE_USERNAME_FAILURE, error));
      throw error;
    }
  };
}

function validateUserEmail(email) {
  return async (dispatch) => {
    try {
      dispatch(request(USER_MANAGEMENT_ACTIONS.VALIDATE_USERNAME_REQUEST));
      const response = await service.validateUserEmail({ email });
      
      dispatch(success(USER_MANAGEMENT_ACTIONS.VALIDATE_USERNAME_SUCCESS, response));
      return response;
    } catch (error) {
      dispatch(failure(USER_MANAGEMENT_ACTIONS.VALIDATE_USERNAME_FAILURE, error));
      throw error;
    }
  };
}

// Get User Location/Roles
function getUserRoles(id, loading) {
  return async (dispatch) => {
    try {
      dispatch(request(USER_MANAGEMENT_ACTIONS.GET_USER_ROLES_REQUEST, loading));
      const response = await service.getUserRoles(id);

      dispatch(success(USER_MANAGEMENT_ACTIONS.GET_USER_ROLES_SUCCESS, response));
      return response;
    } catch (error) {
      dispatch(failure(USER_MANAGEMENT_ACTIONS.GET_USER_ROLES_FAILURE, error));
      throw error;
    }
  };
}

function updateUserStatus(params, index) {
  return async (dispatch) => {
    try {
      dispatch(request(USER_MANAGEMENT_ACTIONS.UPDATE_USER_STATUS_REQUEST));
      const response = await service.updateUserStatus(params);

      dispatch(success(USER_MANAGEMENT_ACTIONS.UPDATE_USER_STATUS_SUCCESS, { index, res: response?.result } ));
      return response;
    } catch (error) {
      dispatch(failure(USER_MANAGEMENT_ACTIONS.UPDATE_USER_STATUS_FAILURE));
      throw handleError(error);
    }
  };
}

export {
  getRoles,
  updateRoleStatus,
  getAllPermissions,
  addUpdateRole,
  getRolePermissions,

  getLocations,
  validateLocationID,
  addLocation,
  updateLocation,
  updateLocationStatus,

  getUsers,
  addUpdateUser,
  updateUserStatus,
  getUserRoles,

  validateUsername,
  validateUserEmail,

  validateRole
};
