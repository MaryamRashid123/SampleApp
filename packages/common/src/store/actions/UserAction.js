import UserService from "../../services/api/UserService";
import { USER_ACTIONS, FEEDYARD_ACTIONS } from "../../constants/ActionConstants";
import { request, success, failure } from ".";
import { handleError } from "../../services/api/GenericResponseHandler";
//import rootSaga from './sagas';
import { put, takeEvery, all } from 'redux-saga/effects';

// Storage Service
import StorageService from "../../services/StorageService";

// Access Token
import AccessToken from "../../services/api/ApiClient";

// Login User
function* loginUserWorker(actions) {
  // return async (dispatch) => {
  //   try {
  //     dispatch(request(USER_ACTIONS.LOGIN_REQUEST));
  //     const response = await UserService.login(params);
      
  //     dispatch(success(USER_ACTIONS.LOGIN_SUCCESS, response));

  //     // Save Access Token
  //     const token = response?.result?.jwtToken || null;
  //     StorageService.instance.setAccessToken(token);
  //     AccessToken.token = token;

  //     // Save Refresh Token
  //     const rtoken = response?.result?.refreshToken || null;
  //     StorageService.instance.setRefreshToken(rtoken);

  //     // Save Default Location
  //     const location = response?.result?.defaultLocationId || 1;
  //     StorageService.instance.setDefaultLocation(location);

  //     // Save User Info
  //     StorageService.instance.setUserInfo({
  //       id: response?.result?.id,
  //       username: response?.result?.username,
  //       email: response?.result?.email
  //     });

  //     dispatch(success(FEEDYARD_ACTIONS.SELECTED_FEEDYAR_REQUEST, location));
      
  //     return response;
  //   } catch (error) {
  //     dispatch(failure(USER_ACTIONS.LOGIN_FAILURE, error));
  //     throw handleError(error);
  //   }
  // };


  const response = yield UserService.login(actions.payload);
 
  yield put({ type: USER_ACTIONS.LOGIN_SUCCESS, response });
      
      //dispatch(success(USER_ACTIONS.LOGIN_SUCCESS, response));

      // Save Access Token
      const token = response?.result?.jwtToken || null;
      StorageService.instance.setAccessToken(token);
      AccessToken.token = token;

      // Save Refresh Token
      const rtoken = response?.result?.refreshToken || null;
      StorageService.instance.setRefreshToken(rtoken);

      // Save Default Location
      const location = response?.result?.defaultLocationId || 1;
      StorageService.instance.setDefaultLocation(location);

      // Save User Info
      StorageService.instance.setUserInfo({
        id: response?.result?.id,
        username: response?.result?.username,
        email: response?.result?.email
      });

      
      yield put({ type: FEEDYARD_ACTIONS.SELECTED_FEEDYAR_REQUEST, location });
      //dispatch(success(FEEDYARD_ACTIONS.SELECTED_FEEDYAR_REQUEST, location));
      
      return response;
  

}

function* loginUser() {
  yield takeEvery('LOGIN_REQUEST', loginUserWorker)
}

// Refresh Token
function refreshToken(params) {
  return async (dispatch) => {
    try {
      dispatch(request(USER_ACTIONS.REFRESH_TOKEN_REQUEST));
      const response = await UserService.refreshToken(params);
      
      dispatch(success(USER_ACTIONS.REFRESH_TOKEN_SUCCESS, response));

      // Save Access Token
      const token = response?.result?.jwtToken || null;
      StorageService.instance.setAccessToken(token);
      AccessToken.token = token;

      // Save Refresh Token
      const rtoken = response?.result?.refreshToken || null;
      StorageService.instance.setRefreshToken(rtoken);
      
      return response;
    } catch (error) {
      dispatch(failure(USER_ACTIONS.REFRESH_TOKEN_FAILURE, error));
      throw handleError(error);
    }
  };
}

// Update Default Location
function updateDefaultLocation(location) {
  return async (dispatch) => {
    StorageService.instance.setDefaultLocation(location);
    dispatch(success(FEEDYARD_ACTIONS.SELECTED_FEEDYAR_REQUEST, location));
  };
}


export {
  loginUser,
  refreshToken,
  updateDefaultLocation
};
