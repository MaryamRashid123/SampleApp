/*
  Routes for whole react application
*/

import React from 'react';
import APPLICATION_URL from './applicationUrls';
import LOCALIZATION from "@cattleview/common/src/services/LocalizationService";

// // Routes
// import CATTLE_MANAGEMENT_ROUTES from "./SectionRoutes/cattleManagementRoutes";
// import CATTLE_CHARGES_ROUTES from "./SectionRoutes/cattleChargesRoutes";
// import INVENTORY_ROUTES from "./SectionRoutes/inventoryRoutes";
// import GENERAL_ACCOUNTING from "./SectionRoutes/generalAccountingRoutes";
// import SALES from "./SectionRoutes/salesRoutes";
// import YARD_MANAGEMENT from "./SectionRoutes/yardManagementRoutes";
// import RESEARCH from "./SectionRoutes/researchRoutes";

// Left Menus
const Dashboard = React.lazy(() => import('../components/Layouts/Dashboard/Dashboard'));
// const Reports = React.lazy(() => import('../components/Layouts/Reports/Reports'));
// const Configurations = React.lazy(() => import('../components/Layouts/Configurations'));
// const UserManagement = React.lazy(() => import('../components/Layouts/UserManagement/UserManagement'));


const routes = [
  // Left menu Routes
  { path: APPLICATION_URL.DASHBOARD, exact: true, name: LOCALIZATION.DASHBOARD, component: Dashboard, noId: true },
  // { path: APPLICATION_URL.REPORTS, name: LOCALIZATION.REPORTS, component: Reports, noId: true },

  // // Configuration
  // { path: APPLICATION_URL.CONFIGURATIONS, name: LOCALIZATION.CONFIGURATIONS, component: Configurations, noId: true },
  
  // // User Management
  // { path: APPLICATION_URL.USER_MANAGEMENT, name: LOCALIZATION.USER_MANAGEMENT, component: UserManagement, noId: true },

  // ...CATTLE_MANAGEMENT_ROUTES,

  // ...CATTLE_CHARGES_ROUTES,

  // ...INVENTORY_ROUTES,

  // ...GENERAL_ACCOUNTING,

  // ...SALES,

  // ...YARD_MANAGEMENT,

  // ...RESEARCH,
];

export default routes;