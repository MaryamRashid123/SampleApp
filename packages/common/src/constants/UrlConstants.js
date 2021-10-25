export default {
  // Login
  AUTHENTICATE: "/account/authenticate",
  REFRESH_TOKEN: "/account/refresh-token",

  // Lot 
  GET_FEEDYARD: "/Location/getlocation",
  GET_SUB_LOCATIONS: "/Location/SubLocations",
  GET_USER_LOCATIONS: "/userapplocation",
  GET_USER_PERMISSIONS: "/Security/GetUserPrivileges",
  GET_SEX_TYPES: "/SexType/getsextype",
  GET_LOT_TYPES: "/LotType/getlottype",
  GET_CUSTOMER_TYPE: "/CustomerType/getcustomertype",
  GET_LOT_STATUS: "/LotStatus/getLotStatus",
  GET_BREED: "/Breed/getbreed",
  GET_GAIN_METHOD: "/GainMethod/getgainmethod",
  GET_OPERATING_MARGIN: "/OperatingMarginType/getOperatingMarginType",
  GET_CONDITION_SCORE: "/ConditionScore/getConditionScore",
  GET_BREED_GROUP_CODE: "/BreedGroupCodeType/getBreedGroupCodeType",
  GET_RISK_TYPE: "/RiskType/getRiskType",
  GET_LOT_LIST: "/Lot/getLot",
  SEARCH_LOT_SUGGESTIONS: "/Lot/getLotNumberByLocationId",
  UPDATE_LOT: "/Lot/update",
  GET_LOT_DETAIL: "/Lot/GetLotByLotNumber",
  GET_ARRIVALS: "/Lot/GetLotArrival",
  GET_OWNERSHIPS: "/LotOwnership/GetOwnershipPct",
  GET_CURRENT_ESTIMATED_WEIGHT: "/Lot/GetLotWeights",
  GET_SHIPMENTS: "/Lot/GetLotShipments",
  GET_EXPENSES: "/Lot/GetLotExpenses",
  GET_DEATHS: "/Lot/GetLotDead",
  GET_STRATEGIES: "/Lot/GetLotStrategy",
  GET_STRATEGY_TEMPLATES: "/Lot/GetLotStrategyTemplate",
  CONTACTS: "/Contact",
  DELETE_STRATEGY: "/LotStrategy/DeleteLotStrategy",
  ADD_STRATEGY: "/LotStrategy/AddLotStrategy",
  GENERATE_STRATEGY: "/LotStrategy/GenerateStrategies",
  UPDATE_STRATEGY: "/LotStrategy/UpdateLotStrategy",
  GET_STRATEGY_ACTION_TYPES: "/LotStrategy/GetLotStrategyActionTypes",
  UPDATE_OWNERSHIP: "/LotOwnership/update",
  VALIDATE_LOT_NUMBER: "/Lot/isLotNumberAvailable",
  ADD_LOT: "/Lot/create",
  ASSIGNMENT_CORRECTION: "/Lot/PrepAssignmentCorrection",
  GET_LOT_BY_LOT_ID: "/Lot/GetLotByLotId",

  

  // // Roles
  ROLE: "/role",
  ALL_PERMISSIONS: "/security",
  ROLE_EXIST: "/role/IsExists",

  
};
