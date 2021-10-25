/*
  Conatain header and its menus for logistics screen
*/

import React from 'react';
import { Link } from "react-router-dom";

// Constants
import menus from '../../general/routes/logisticsMenus';

// React AntDesing
import { Row, Col, } from 'antd';

// Routes
import routes from '../../general/routes/routes';

// Localization
import LOCALIZATION from "@cattleview/common/src/services/LocalizationService";

function MainHeader(props) {

  // get selected class for selected route
  const getSelectedClass = (url) => {
    return url === props.location.pathname ? 'selected' : '';
  }

  // get page for selected route
  const getPageName = () => {
    let pathname = props.location.pathname || "";
    let selectedRoute = routes.find(route => route.path === pathname)
    return !!selectedRoute && !!selectedRoute.name && selectedRoute.name !== LOCALIZATION.FORECAST ? selectedRoute.name : "";
  }

  return (
    <Row className="main-header" gutter={16}>
      {/* In this we will show header of selected page
      In 1st screen which is forecast, we have not page title, but in other pages
      market utility we have page title, so this will show page title in that case */}
      <Col span={6} className="gutter-row">
        <h1>{getPageName()}</h1>
      </Col>

      <Col span={12} className="main-header-menus gutter-row">
        <ul>
          {
            menus && menus.map((menu, index) => {
              return (
                <li key={index} className={getSelectedClass(menu.url)}>
                  <Link to={menu.url}>{menu.name}</Link>
                </li>
              )
            })
          }
        </ul>
      </Col >
      <Col span={6} className="gutter-row">
        {/* Action Icon / User Profile */}
      </Col>
    </Row>
  );
}

export default MainHeader;