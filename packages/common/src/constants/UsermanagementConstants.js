// List of available actions in whole application
export const ACTIONS = {
  VIEW: 1,
  ADD: 2,
  EDIT: 3,
  DELETE: 4,
  CORRECTION: 5,
  TICKET: 7,
  REJECT: 8,
  CLONE:9,
  INGREDIENT_NEG:20,
  ADD_EDIT: 101,
  ARRIVALS:31,
  TRANSFER:32,
  ACKNOWLEDGE:33,
};

// Application menu ids
export const ENTITIES = {
  CATTLE_MANAGEMENT: {
    LOT: 5,
    ARRIVALS: 6,
    LOT_ASSIGNMENT: 7,
    LOT_BREAKEVEN: 8,
    ANIMALS: 9,
    PEN_MOVES: 10,
    DEADS: 12,
    SHIPMENTS: 13,
    TERMINAL_SORT: 14,
    HOSPITAL_BULLER: 15,
    DYNAMIC_CLOSE_OUT: 16,
    DYNAMIC_PEN_SHEET: 17,
    LOT_TRANSFER: 18,
    TRANSFER_SCHEDULE: 19,
    GROUP_PRINT: 20,
    CATCH_WEIGHT: 21
  },
  CATTLE_CHARGES: {
    FEED: 41,
    RATION_MASTER: 42,
    LOT_EXPENSES: 43,
    MICRO_INTERFACES: 44
  },
  INVENTORY: {
    MILL_OPS_DAILY: 51,
    COMMODITY_ATTRIBUTES: 52,
    RATION_DM: 53
  },
  SALES: {
    TYSON_KILL_DATA: 61,
    TYSON_LOAD_MATCHUP: 62
  },
  YARD_MANAGEMENT: {
    SHOW_LIST: 71,
    VET_FEED_DIRECTIVES: 72
  },
  RESEARCH: {
    RESEARCH_TRIALS: 81,
    DEADS_AND_REJECTS: 82
  },
  GENERAL_ACCOUNTING: {
    WORK_LOG: 91,
    LOT_TRANSFER_COSTS: 92,
    LOT_CLOSEOUTS: 93,
    SETTLEMENTS: 94,
    COMMODITY_PRICES: 95,
    CLOSEOUT_EXPORT: 96
  },
  CONFIG: {
    PEN_CONFIG: 110,
    STRATEGIES_CONFIG: 111,
    ADMIN: 132
  },
  USER_MANAGEMENT: {
    LOCATION: 210,
    USER: 300,
    ROLES: 301
  },
  REPORT: {
    REPORTS: 131
  }
};