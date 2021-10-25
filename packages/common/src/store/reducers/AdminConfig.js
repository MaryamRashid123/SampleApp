import { ADMIN_CONFIG } from "../../constants/ActionConstants";
import {
  deleteListingRecord,
  updateListingRecord,
} from "../../helpers/GeneralHelper";

let initialState = {
  loading: false,
  error: null,
};

const adminConfig = (state = initialState, action) => {
  switch (action.type) {
    // Get
    case ADMIN_CONFIG.LIST_REQUEST:
      let listPageNoR = action?.payload?.pageNumber;
      let listKeyR = action?.payload?.key;
      let loadingR = action?.payload?.loading;

      return { 
        ...state, 
        [loadingR]: true,
        [listKeyR]: !!listPageNoR? state?.[listKeyR] || null: null,
        error: null
      };

    case ADMIN_CONFIG.LIST_SUCCESS:
      let listPageNoS = action?.payload?.pageNumber;
      let listKeyS = action?.payload?.key;
      let loadingS = action?.payload?.loading;

      let newList = JSON.parse(JSON.stringify(state?.[listKeyS] || {}));

      if(!!listPageNoS){
        newList.result = [...newList.result, ...(action?.payload?.response?.result || [])];
      }else{
        newList = action?.payload?.response;
      }

      return { 
        ...state, 
        [loadingS]: false,
        [listKeyS]: newList,
        feedListError: null
      };

    case ADMIN_CONFIG.LIST_FAILURE:
      let listPageNoE = action?.payload?.pageNumber;
      let listKeyE = action?.payload?.key;
      let loadingE = action?.payload?.loading;

      return { 
        ...state, 
        [loadingE]: false,
        [listKeyE]: !listPageNoE
      };

    // Delete
    case ADMIN_CONFIG.DELETE_REQUEST:
      return { 
        ...state, 
        loading: true,
      };

    case ADMIN_CONFIG.DELETE_SUCCESS:
      const { recordId, deleteKey, deleteIdKey } = action?.payload || {}

      return { 
        ...state, 
        loading: false,
        [deleteKey]: deleteListingRecord(state?.[deleteKey], recordId, deleteIdKey)
      };

    case ADMIN_CONFIG.DELETE_FAILURE:
      return { 
        ...state, 
        loading: false,
      };

    // Post or Update
    case ADMIN_CONFIG.POST_REQUEST:
      return { 
        ...state, 
        loading: true,
      };

    case ADMIN_CONFIG.POST_SUCCESS:
      return { 
        ...state, 
        loading: false,
      };

    case ADMIN_CONFIG.POST_FAILURE:
      return { 
        ...state, 
        loading: false
      };

    // Update
    case ADMIN_CONFIG.UPDATE_REQUEST:
      return { 
        ...state, 
        loading: true,
      };

    case ADMIN_CONFIG.UPDATE_SUCCESS:

      const { response, id, key } = action?.payload || {}

      return { 
        ...state, 
        loading: false,
        [key]: updateListingRecord(state?.[key], response, id)
      };

    case ADMIN_CONFIG.UPDATE_FAILURE:
      return { 
        ...state, 
        loading: false
      };

    // Get PDF
    case ADMIN_CONFIG.DOWNLOAD_PDF_REQUEST:
      return { 
        ...state, 
        loading: true,  
      };

    case ADMIN_CONFIG.DOWNLOAD_PDF_SUCCESS:
      return { 
        ...state, 
        loading: false, 
      };
    
    case ADMIN_CONFIG.DOWNLOAD_PDF_FAILURE:
      let dataE = action.payload;
      return { 
        ...state, 
        error: !dataE,
        loading: false, 
      };

    default:
      return state;
  }
};

export default adminConfig;