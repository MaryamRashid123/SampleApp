// Localization
import LOCALIZATION from "@cattleview/common/src/services/LocalizationService";

export const CATTLEVIEW_APP_ID = 1;

export const PLATFORMS = {
  WEB: "WEB",
  MOBILE: "MOBILE",
};

export const LOCAL_STORAGE_KEYS = {
  ACCESS_TOKEN: "CATTLE_VIEW_ACCESS_TOKEN",
  REFRESH_TOKEN: "CATTLE_VIEW_REFRESH_TOKEN",
  DEFAULT_LOCATION: "CATTLE_VIEW_DEFAULT_LOCATION",
  USER_INFO: "CATTLE_VIEW_USER_INFO",
};

export const BASE_URL_KEY = {
  GENERAL: "general",
  USER_MANAGEMENT: "userManagement",
};

export const WEB_FEEDYARD_PARAM = 'feedyardId';

export const FILE_UPLOAD_SIZE = 10;

export const LISTING_DATA = {
  FIRST_PAGE: 0,
  PAGE_SIZE: 40,
  PAGE_SIZE_INFO_BLOCK: 100,
  PAGE_SIZE_MAX_SIZE: 9999
};

export const LISTING_MODE = {
  LIST: { LABEL: LOCALIZATION.LIST, VALUE: '1', ICON: "cicon-list" },
  GRID: { LABEL: LOCALIZATION.GRID, VALUE: '2', ICON: "cicon-grid" },
};

export const LOT_STATUS = {
  OPEN: { LABEL: LOCALIZATION.OPEN, VALUE: '2' },
  CLOSE: { LABEL: LOCALIZATION.CLOSE, VALUE: '1' },
};

export const CONFIGURATION_SECTIONS = {
  PEN: 1,
  STRATEGY: 2,
  ADMIN: 3
};

export const USER_MANAGEMENT_SECTIONS = {
  LOCATION: 1,
  ROLE: 2,
  USER: 3
};

export const MICRO_INTERFACES_SECTIONS = {
  EOD_PROCESSING: 1,
  VET_INTERFACE: 2,
  FEED_INTERFACE: 3,
  KEYWORDS: {
    EOD_PROCESSING: 'eod-processing',
    VET_INTERFACE: 'vet-interface',
    FEED_INTERFACE: 'feed-interface',
  }
};

export const VET_INTERFACE_SECTIONS = {
  CHARGES: 1,
  DEADS: 2,
  MOVES: 3
};

export const EOD_PROCESS = {
  SEND_VET_LOTS_TRANSFERS: 1,
  RETRIEVE_VET_CHARGES: 2,
  RETRIEVE_VET_DEADS: 3,
  RETRIEVE_VET_MOVES: 4,
  RETRIEVE_FEED_DATA: 5
};

export const DYNAMIC_PENSHEET_MODE = {
  TABLE: { LABEL: LOCALIZATION.TABLE, VALUE: 1, ICON: "cicon-table-grid" },
  CARD: { LABEL: LOCALIZATION.CARD, VALUE: 2, ICON: "cicon-cards" },
};

export const SCREEN_NAMES = {
  PEN_SHEET: 'pensheet'
};

export const DATA_TYPES = {
  DATE: 1,
  NUMBER: 2,
  CHECK_BOX: 3,
  DROPDOWN:4,
  UPLOADS:5,
};

export const WORKLOG_SECTIONS = {
  RECEIPTS: 1,
  REJECTS: 2,
  TRANSFERS: 3
};

export const TYSON_KILL_DATA_RECORD_SECTIONS = {
  MAIN: 1,
  DETAIL: 2,
  CONDEMN: 3,
  SETTLEMENT:4
};
