/*
  Contain main header for porkview site
  It will be the replica of header that is available at porkview site of .net
  Contoll will comming from porkview .net site to this react app
*/

import React from 'react';

// Redux
import { useSelector, shallowEqual } from "react-redux";

// Constants
import menus from '../../general/routes/porkviewMenus';
import ASSETS from '../../general/constants/assetConstants';

function PorkviewHeader(props) {

  // Redux States
  const { loggedInUser } = useSelector(state => ({
    loggedInUser: state.user.loggedInUser,
  }), shallowEqual);

  // craete url according to main application
  const mainAppUrl = (url) => {
    if (props.location.pathname !== url) {
      return window.location.origin + url;
    }
  }
  
  return (
    <div className="porkview-header">

      {/* Logo */}
      <div className="pork-view-logo">
        <img src={ ASSETS?.APP_LOGO } />
        {
          loggedInUser && 
          <span>
            <i className="fa fa-user fa-lg"></i>
            <strong>{ loggedInUser?.UserName }</strong>
          </span>
        }
      </div>

      {/* Menus */}
      <div className="pork-view-menus">
        {
          menus && menus.map((menu, index) => {
            return (
              <a key={index} href={mainAppUrl(menu.url)} className={menu.class || ""}> {menu.name}</a>
            )
          })
        }
      </div>
    </div>
  );
}

export default PorkviewHeader;