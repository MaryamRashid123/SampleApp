import { COMMON_ACTIONS } from "../../constants/ActionConstants";
import { REDUCER_KEYS } from "../../constants/ReducerKeyConstants";

// Helpers
import { getLoadingKey } from "../../helpers/GeneralHelper";

const { ERROR } = REDUCER_KEYS;

let initialState = {
  loading: false,
  error: null
};

const common = (state = initialState, action) => {
  switch (action.type) {
    // Common - Get Data
    case COMMON_ACTIONS.GET_DATA_REQUEST:
      const rKey = action.payload.key;
      const rloadingKey = getLoadingKey(action.payload.loadingKey);

      return { 
        ...state, 
        [rloadingKey]: true, 
        [rKey]: null,
        [rKey + ERROR]: null 
      };

    case COMMON_ACTIONS.GET_DATA_SUCCESS:
      const sKey = action.payload.key;
      const response = action.payload.response || null;
      const sloadingKey = getLoadingKey(action.payload.loadingKey);
      
      return {
        ...state,
        [sloadingKey]: false,
        [sKey]: response.result || null,
      };

    case COMMON_ACTIONS.GET_DATA_FAILURE:
      const eKey = action.payload.key;
      const error = action.payload.error || null;
      const eloadingKey = getLoadingKey(action.payload.loadingKey);

      return { 
        ...state, 
        [eloadingKey]: false, 
        [eKey]: null, 
        [eKey + ERROR]: error 
      };

    // Common - Get Detail Data
    case COMMON_ACTIONS.GET_DETAIL_DATA_REQUEST:
      const rrPageNumber = action.payload.pageNumber;
      const rrKey = action.payload.key;
      const rrloadingKey = getLoadingKey(action.payload.loadingKey);

      return { 
        ...state, 
        [rrloadingKey]: true, 
        [rrKey]: !rrPageNumber? null: state[rrKey],
        [rrKey + ERROR]: null 
      };

    case COMMON_ACTIONS.GET_DETAIL_DATA_SUCCESS:
      const ssPageNumber = action.payload.pageNumber;
      const ssKey = action.payload.key;
      const sresponse = action.payload.response || null;
      const ssloadingKey = getLoadingKey(action.payload.loadingKey);

      const finalResult = !!ssPageNumber? [...state[ssKey].result, ...sresponse.result]: [...sresponse.result];
      let finalResponse = JSON.parse(JSON.stringify(sresponse));
      finalResponse.result = finalResult;
      
      return {
        ...state,
        [ssloadingKey]: false,
        [ssKey]: finalResponse || null,
      };

    case COMMON_ACTIONS.GET_DETAIL_DATA_FAILURE:
      const eePageNumber = action.payload.pageNumber;
      const eeKey = action.payload.key;
      const eerror = action.payload.error || null;
      const eeloadingKey = getLoadingKey(action.payload.loadingKey);

      return { 
        ...state, 
        [eeloadingKey]: false, 
        [eeKey]: !!eePageNumber? state[eeKey]: null,
        [eeKey + ERROR]: eerror 
      };

    // Common - Update Data
    case COMMON_ACTIONS.UPDATE_DATA_REQUEST:
      const uValue = action.payload.value;
      const uKey = action.payload.key;

      return { 
        ...state, 
        [uKey]: uValue,
      };

    // Common - Update Loader
    case COMMON_ACTIONS.UPDATE_LOADER_REQUEST:
      const lValue = action.payload.value;
      const lKey = getLoadingKey(action.payload.key);

      return { 
        ...state, 
        [lKey]: lValue,
      };

    default:
      return state;
  }
};

export default common;