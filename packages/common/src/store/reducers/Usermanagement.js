import { USER_MANAGEMENT_ACTIONS } from "../../constants/ActionConstants";
import { updateRecord } from "../../helpers/UsermanagementHelper";

let initialState = {
  loading: false,

  roles: null,
  rolesError: null,

  locations: null,
  locationsError: null,
};

const usermanagement = (state = initialState, action) => {
  switch (action.type) {
    // Get Roles
    case USER_MANAGEMENT_ACTIONS.GET_ROLES_REQUEST:
      let rolePageNoR = action.payload;

      return { 
        ...state, 
        loading: true,
        roles: !!rolePageNoR? state.roles: null,
        rolesError: null
      };

    case USER_MANAGEMENT_ACTIONS.GET_ROLES_SUCCESS:
      let rolePageNoS = action?.payload?.pageNumber;
      let newRoles = JSON.parse(JSON.stringify(state.roles));

      if(!!rolePageNoS){
        newRoles.result = [...newRoles.result, ...(action?.payload?.response?.result || [])];
      }else{
        newRoles = action?.payload?.response;
      }

      return { 
        ...state, 
        loading: false,
        roles: newRoles,
        rolesError: null
      };

    case USER_MANAGEMENT_ACTIONS.GET_ROLES_FAILURE:
      let rolePageNoE = action.payload;

      return { 
        ...state, 
        loading: false,
        rolesError: !!rolePageNoE? null: true
      };

    // Update Role Status
    case USER_MANAGEMENT_ACTIONS.UPDATE_ROLE_STATUS_REQUEST:
      return { 
        ...state, 
        loading: true,
      };

    case USER_MANAGEMENT_ACTIONS.UPDATE_ROLE_STATUS_SUCCESS:
      let index = action?.payload?.index;
      let updatedRole = action?.payload?.res || null;

      let rolesStatus = JSON.parse(JSON.stringify(state.roles));
      if(!!updatedRole){
        rolesStatus.result = [...rolesStatus.result.slice(0, index), updatedRole, ...rolesStatus.result.slice(index+1)]
      }

      return { 
        ...state, 
        loading: false,
        roles: rolesStatus
      };

    case USER_MANAGEMENT_ACTIONS.UPDATE_ROLE_STATUS_FAILURE:
      return { 
        ...state, 
        loading: false
      };

    // All Permissions
    case USER_MANAGEMENT_ACTIONS.GET_ALL_PERMISSIONS_REQUEST:
      return { 
        ...state, 
        allPermissionLoading: true,
        allPermissions: []
      };

    case USER_MANAGEMENT_ACTIONS.GET_ALL_PERMISSIONS_SUCCESS:
      return { 
        ...state, 
        allPermissionLoading: false,
        allPermissions: action?.payload?.result?.categories || []
      };

    case USER_MANAGEMENT_ACTIONS.GET_ALL_PERMISSIONS_FAILURE:
      return { 
        ...state, 
        allPermissionLoading: false
      };

    // Get Locations
    case USER_MANAGEMENT_ACTIONS.GET_LOCATIONS_REQUEST:
      let locationPageNoR = action.payload;

      return { 
        ...state, 
        loading: true,
        locations: !!locationPageNoR? state.locations: null,
        locationsError: null
      };

    case USER_MANAGEMENT_ACTIONS.GET_LOCATIONS_SUCCESS:
      let locationPageNoS = action?.payload?.pageNumber;
      let newLocations = JSON.parse(JSON.stringify(state.locations));

      if(!!locationPageNoS){
        newLocations.result = [...newLocations.result, ...(action?.payload?.response?.result || [])];
      }else{
        newLocations = action?.payload?.response;
      }

      return { 
        ...state, 
        loading: false,
        locations: newLocations,
        locationsError: null
      };

    case USER_MANAGEMENT_ACTIONS.GET_LOCATIONS_FAILURE:
      let locationPageNoE = action.payload;

      return { 
        ...state, 
        loading: false,
        locationsError: !!locationPageNoE? null: true
      };

    // Location Id Exist?
    case USER_MANAGEMENT_ACTIONS.VALIDATE_LOCATION_ID_REQUEST:
      return { 
        ...state, 
        validateLocationIdLoading: true
      };

    case USER_MANAGEMENT_ACTIONS.VALIDATE_LOCATION_ID_SUCCESS:

      return { 
        ...state, 
        validateLocationIdLoading: false
      };

    case USER_MANAGEMENT_ACTIONS.VALIDATE_LOCATION_ID_FAILURE:
      return { 
        ...state, 
        validateLocationIdLoading: false
      };

    // Update Location
    case USER_MANAGEMENT_ACTIONS.UPDATE_LOCATION_SUCCESS:

      let locationObj = action?.payload?.result;
      let locationsUpdated = JSON.parse(JSON.stringify(state.locations));
      let idx = locationsUpdated?.result.findIndex(el => el.locationID === locationObj?.locationID);

      if(idx !== -1){
        locationsUpdated.result = [...locationsUpdated.result.slice(0, idx), locationObj, ...locationsUpdated.result.slice(idx+1)];
      }

      return { 
        ...state, 
        locations: locationsUpdated
      };

    // Update Location Status
    case USER_MANAGEMENT_ACTIONS.UPDATE_LOCATION_STATUS_REQUEST:
      return { 
        ...state, 
        loading: true
      };

    case USER_MANAGEMENT_ACTIONS.UPDATE_LOCATION_STATUS_SUCCESS:
      let indx = action?.payload?.index;
      let updatedLocation = action?.payload?.res || null;

      let locationsStatus = JSON.parse(JSON.stringify(state.locations));
      if(!!updatedLocation){
        locationsStatus.result = [...locationsStatus.result.slice(0, indx), updatedLocation, ...locationsStatus.result.slice(indx+1)]
      }

      return { 
        ...state, 
        loading: false,
        locations: locationsStatus
      };

    case USER_MANAGEMENT_ACTIONS.UPDATE_LOCATION_STATUS_FAILURE:
      return { 
        ...state, 
        loading: false
      };


    // Get Users
    case USER_MANAGEMENT_ACTIONS.GET_USERS_REQUEST:
      let userPageNoR = action.payload;

      return { 
        ...state, 
        loading: true,
        users: !!userPageNoR? state.users: null,
        usersError: null
      };

    case USER_MANAGEMENT_ACTIONS.GET_USERS_SUCCESS:
      let userPageNoS = action?.payload?.pageNumber;
      let newUsers = JSON.parse(JSON.stringify(state.users));

      if(!!userPageNoS){
        newUsers.result = [...newUsers.result, ...(action?.payload?.response?.result || [])];
      }else{
        newUsers = action?.payload?.response;
      }

      return { 
        ...state, 
        loading: false,
        users: newUsers,
        usersError: null
      };

    case USER_MANAGEMENT_ACTIONS.GET_USERS_FAILURE:
      let userPageNoE = action.payload;

      return { 
        ...state, 
        loading: false,
        usersError: !!userPageNoE? null: true
      };

    // Add User
    case USER_MANAGEMENT_ACTIONS.ADD_USER_REQUEST:
      return { 
        ...state, 
        loading: true
      };

    case USER_MANAGEMENT_ACTIONS.ADD_USER_SUCCESS:

      const isEdit = !!action?.payload?.isEdit;
      const res = action?.payload?.response?.result;

      let list = {...state.users};
      if(isEdit){
        list = updateRecord(list, res);
      }

      return { 
        ...state, 
        loading: false,
        users: list
      };

    case USER_MANAGEMENT_ACTIONS.ADD_USER_FAILURE:
      return { 
        ...state, 
        loading: false
      };

    // Add Role
    case USER_MANAGEMENT_ACTIONS.ADD_UPDATE_ROLE_REQUEST:
      return { 
        ...state, 
        loading: true
      };

    case USER_MANAGEMENT_ACTIONS.ADD_UPDATE_ROLE_SUCCESS:

      return { 
        ...state, 
        loading: false
      };

    case USER_MANAGEMENT_ACTIONS.ADD_UPDATE_ROLE_FAILURE:
      return { 
        ...state, 
        loading: false
      };

   // Get Role Permissions
   case USER_MANAGEMENT_ACTIONS.GET_ROLE_PERMISSIONS_REQUEST:
    return { 
      ...state, 
      allRolePermissions: null,
      allPermissionLoading: true,
    };

  case USER_MANAGEMENT_ACTIONS.GET_ROLE_PERMISSIONS_SUCCESS:
    return { 
      ...state, 
      allRolePermissions: action?.payload?.result?.permissions || [],
      allPermissionLoading: false
    };

  case USER_MANAGEMENT_ACTIONS.GET_ROLE_PERMISSIONS_FAILURE:
    return { 
      ...state, 
      allRolePermissions: null,
      allPermissionLoading: false
    };

   // Update User Status
   case USER_MANAGEMENT_ACTIONS.UPDATE_USER_STATUS_REQUEST:
    return { 
      ...state, 
      loading: true,
    };

  case USER_MANAGEMENT_ACTIONS.UPDATE_USER_STATUS_SUCCESS:
    let userIndex = action?.payload?.index;
    let updatedUser = action?.payload?.res || null;

    let usersStatus = JSON.parse(JSON.stringify(state.users));
    if(!!updatedUser){
      usersStatus.result = [...usersStatus.result.slice(0, userIndex), updatedUser, ...usersStatus.result.slice(userIndex+1)]
    }

    return { 
      ...state, 
      loading: false,
      users: usersStatus
    };

  case USER_MANAGEMENT_ACTIONS.UPDATE_USER_STATUS_FAILURE:
    return { 
      ...state, 
      loading: false
    };

   // Get user roles
   case USER_MANAGEMENT_ACTIONS.GET_USER_ROLES_REQUEST:
    return { 
      ...state, 
      loading: !!action?.payload,
      userRoles: null
    };

  case USER_MANAGEMENT_ACTIONS.GET_USER_ROLES_SUCCESS:
    return { 
      ...state, 
      loading: false,
      userRoles: action?.payload?.result || []
    };

  case USER_MANAGEMENT_ACTIONS.GET_USER_ROLES_FAILURE:
    return { 
      ...state, 
      loading: false,
      userRoles: null
    };

    default:
      return state;
  }
};

export default usermanagement;
