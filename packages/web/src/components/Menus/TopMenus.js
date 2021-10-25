/*
  Application Top Menus
*/

import React, { useState } from 'react';
import { Link, useHistory /*, useLocation*/ } from "react-router-dom";

// Redux
import { useSelector, useDispatch } from "react-redux";

// Antd
import { Row, Col, Select } from 'antd'

// Components
//import Sections from "./TopMenuSections";

// Constants
import { REDUCER_KEYS } from "@cattleview/common/src/constants/ReducerKeyConstants";
import URLS from "@cattleview/common/src/constants/UrlConstants";
import { CATTLEVIEW_APP_ID } from "@cattleview/common/src/constants/GenericConstants";
import APP_URL from "@cattleview/web/src/common/applicationUrls";

// Actions
import { getData } from '@cattleview/common/src/store/actions/CommonAction';
import { refreshToken, updateDefaultLocation } from "@cattleview/common/src/store/actions/UserAction";

// Storage Service
import StorageService from "@cattleview/common/src/services/StorageService";

// Logo
import APP_ICON from "../../assets/img/cactus-icon.png";

const { Option } = Select;
const { FEEDYARD_LIST, LOTS, LOT_PENS, USER_PERMISSIONS } = REDUCER_KEYS;

function TopMenus({
  permissions
}) {
  // let timer = null;
  const dispatch = useDispatch();

  // Local States
  const [showMenus, setShowMenus] = useState(false);

  // Redux States
  const feedyardList = useSelector(state => state?.common?.[FEEDYARD_LIST]);
  const selectedFeedyard = useSelector(state => state?.feedyard?.selectedFeedyard);

  const history = useHistory();
  // const location = useLocation();
  // const path = location?.pathname;

  const onFeedyardChange = (id) => {

    const token = StorageService.instance.getRefreshToken();

    if(!!token){
      dispatch(
        refreshToken({
          refreshToken: token,
          appId: CATTLEVIEW_APP_ID,
          locationId: id
        })
      ).then(() => {
        dispatch(updateDefaultLocation(id))
  
        // Update lot & pen dropdown data
        updateLotList(id);
        updatePenList(id);
  
        getUserPermissions(id);
      });
    }else{
      StorageService.instance.deleteLoginData();
      history.replace(APP_URL.LOGIN);
    }

    // clearTimeout(timer);
    // const current = path;
    // history.replace("/reload");
    // timer = setTimeout(() => {
    //   history.replace(current);
    // }, 200);

  }

  // Get User Permissions for selected location
  const getUserPermissions = (id) => {
    let params = {
      locationId: id
    };

    dispatch(
      getData(URLS.GET_USER_PERMISSIONS, USER_PERMISSIONS, USER_PERMISSIONS, params)
    );
  }

  // On Destory
  // useEffect(() => {
  //   return () => clearTimeout(timer);
  // }, [timer]);

  const handleSmallMenus = (value) => {
    setShowMenus(value);
  }

  const updatePenList = (locationid) => {
    const params = {
      search: "",
      locationid
    };
    dispatch(
      getData(URLS.GET_PENS, LOT_PENS, LOT_PENS, params)
    )

  }

  const updateLotList = (locationid) => {
    const params = {
      locationid,
      search: ""
    };
    dispatch(
      getData(URLS.SEARCH_LOT_SUGGESTIONS, LOTS, LOTS, params)
    )
  }

  return (
    <div className="header-components">
      <figure>
        <Link to="/"><img src={APP_ICON} alt="logo" /></Link>
      </figure>
      <Row gutter={[16, 0]} className="header-actions">
        <Col md={18} className="top-nav">
          <div className="menu-sm">
            <input 
              type="checkbox" 
              checked={ showMenus } 
              id="menusm" 
              onChange={ (e) => handleSmallMenus(!!e.target?.checked) }
            />
            <label htmlFor="menusm">
              <em></em>
              <em></em>
              <em></em>
            </label>
            {/* <Sections 
              onOutSideClick={ handleSmallMenus }
              permissions={ permissions }
            /> */}
          </div>
        </Col>
        <Col md={6} className="notification-area d-flex justify-content-end">
          <i className="cicon-bell"><em></em></i>
          {
            !!selectedFeedyard &&
              <Select
                defaultValue={ parseInt(selectedFeedyard) }
                onChange={onFeedyardChange}
                optionFilterProp="title"
              >
                {
                  feedyardList && feedyardList.map((feedyard, index) => {
                    const name = feedyard?.location?.locationName;
                    if(!!name){
                      return (
                        <Option
                          key={index}
                          value={ feedyard.locationID }
                          title={ name }
                        >
                          { name }
                        </Option>
                      )
                    }
                  })
                }
              </Select>
          }
        </Col>
      </Row>
    </div>
  );
}

export default TopMenus;