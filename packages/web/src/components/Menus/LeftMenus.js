/*
  Application Left Menus
*/

import React from 'react';
import { NavLink, useHistory, useLocation  } from "react-router-dom";

// Antd
import { Modal } from 'antd';

// Left Menus
import MENUS from "../../common/applicationLeftMenus";

// Applicaton Urls
import URL from "../../common/applicationUrls";

// Services
import StorageSerivce from "@cattleview/common/src/services/StorageService";

// Localization
import LOCALIZATION from "@cattleview/common/src/services/LocalizationService";

function LeftMenus() {
  const history = useHistory();
  const location = useLocation();

  const path = location?.pathname;

  // On Logout
  const onLogout = (e) => {
    e.preventDefault();

    Modal.confirm({
      title: LOCALIZATION.LOGOUT,
      content: (
        <div>
          <p>{ LOCALIZATION.LOGOUT_MESSAGE }</p>
        </div>
      ),
      okText: LOCALIZATION.LOGOUT,
      cancelText: LOCALIZATION.BACK,
      onOk() {
        // Logout api call & remove session data and redirect to login page
        StorageSerivce.instance.deleteLoginData();
        history.push(URL.LOGIN);
      },
    });
  }

  return (
    <ul>
      {
        MENUS && MENUS.map((data, index) => {
          const { name, icon, url, isLogout } = data;
          return(
            !!isLogout? 
            <li key={ index } onClick={ onLogout } title={ name }>
              <i className={ icon }></i>
            </li>:            
            <li key={ index } className={ !!url && path.includes(url)? 'selected': '' } title={ name }>
              <NavLink to={ url || "" }>
                <i className={ icon }></i>
              </NavLink>
            </li>
          )
        })
      }
    </ul>
  );
}

export default LeftMenus;