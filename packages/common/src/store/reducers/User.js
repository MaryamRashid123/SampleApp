import { USER_ACTIONS } from "../../constants/ActionConstants";

let initialState = {
  loading: false,
  loggedInUser: null,
  token: null,
  permissions: null
};

const user = (state = initialState, action) => {
 
  switch (action.type) {
    // Logged in user
    case USER_ACTIONS.LOGIN_REQUEST:
     
      return { ...state, 
        loading: true, 
        loggedInUser: null, token: null };

    case USER_ACTIONS.LOGIN_SUCCESS:
  
      return {
        ...state,
        loading: false,
        loggedInUser: action.payload ? action.payload : null,
      };

    case USER_ACTIONS.LOGIN_FAILURE:
      return { ...state, loading: false, loggedInUser: null, token: null };

    // Refresh Token
    case USER_ACTIONS.REFRESH_TOKEN_REQUEST:
      return { 
        ...state, 
        refreshTokenLoading: true
      };

    case USER_ACTIONS.REFRESH_TOKEN_SUCCESS:
      return { 
        ...state, 
        refreshTokenLoading: false
      };

    case USER_ACTIONS.REFRESH_TOKEN_FAILURE:
      return { 
        ...state, 
        refreshTokenLoading: false
      };

    default:
      return state;
  }
};

export default user;
