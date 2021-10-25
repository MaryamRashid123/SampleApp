/*
  Base layout for application. 
  It will call all releant layouts according to given informations/roles
*/

import React, { useEffect } from 'react';
import Loadable from "react-loadable";

// Redux
import { useSelector, useDispatch } from "react-redux";

// Antd
import { BackTop } from 'antd';

// Components
import Loading from "../Loading/Loading";
import Page500 from "../ErrorPages/Page500";

// Constants
import { REDUCER_KEYS } from "@cattleview/common/src/constants/ReducerKeyConstants";
import URLS from "@cattleview/common/src/constants/UrlConstants";
import { BASE_URL_KEY, CATTLEVIEW_APP_ID } from "@cattleview/common/src/constants/GenericConstants";

// Actions
import { getData } from "@cattleview/common/src/store/actions/CommonAction";
import { updateDefaultLocation } from "@cattleview/common/src/store/actions/UserAction";

// Helpers
import { getLoadingKey } from "@cattleview/common/src/helpers/GeneralHelper";
import { getAvailbleUserPermissions } from "@cattleview/common/src/helpers/FeedyardHelper";

// Storage Service
import StorageService from "@cattleview/common/src/services/StorageService";

// Localization
import LOCALIZATION from "@cattleview/common/src/services/LocalizationService";

const { 
  FEEDYARD_LIST, 
  SECURITY, 
  USER_PERMISSIONS, 
  ERROR 
} = REDUCER_KEYS;

// Main layout
const MainLayout = Loadable({
  loader: () => import('../MainLayout/MainLayout'),
  loading: Loading
});

function BaseLayout(props) {

  const dispatch = useDispatch();

  // Redux States
  const defaultLocation = useSelector(state => state?.feedyard?.selectedFeedyard);

  const feedyardList = useSelector(state => state?.common?.[FEEDYARD_LIST]);
  const feedyardListError = useSelector(state => state?.common?.[FEEDYARD_LIST + ERROR]);
  const feedyardListLoading = useSelector(state => state?.common?.[getLoadingKey(FEEDYARD_LIST)]);

  const permissionList = useSelector(state => state?.common?.[SECURITY]);
  const permissionListError = useSelector(state => state?.common?.[SECURITY + ERROR]);
  const permissionListLoading = useSelector(state => state?.common?.[getLoadingKey(SECURITY)]);

  const userPermissionList = useSelector(state => state?.common?.[USER_PERMISSIONS]);
  const userPermissionListError = useSelector(state => state?.common?.[USER_PERMISSIONS + ERROR]);
  const userPermissionListLoading = useSelector(state => state?.common?.[getLoadingKey(USER_PERMISSIONS)]);

  // useEffect(() => {
  //   !defaultLocation && 
  //   dispatch(
  //     updateDefaultLocation(
  //       StorageService.instance.getDefaultLocation()
  //     )
  //   )
  // }, [defaultLocation]);

  // Get Feedyard List
  const getUserLocations = () => {
    const params = {
      onlyWithRoles: true,
      appId: CATTLEVIEW_APP_ID
    };
    dispatch(
      getData(URLS.GET_USER_LOCATIONS, FEEDYARD_LIST, FEEDYARD_LIST, params, BASE_URL_KEY.USER_MANAGEMENT)
    ).then((data) => {
      // let obj = data?.result?.find(el => el.locationID+"" === defaultLocation+"");
      // if(!obj){
      //   dispatch(
      //     updateDefaultLocation(
      //       data?.result[0]?.locationID || defaultLocation
      //     )
      //   )
      // }
      !permissionList && getPermissions();
      getUserPermissions();
      
    })
  }

  // Get Permissions
  const getPermissions = () => {
    dispatch(getData(URLS.ALL_PERMISSIONS, SECURITY, SECURITY));
  }

  // Get User Permissions
  const getUserPermissions = () => {
    let params = {
      locationId: defaultLocation || StorageService.instance.getDefaultLocation()
    };
    dispatch(getData(URLS.GET_USER_PERMISSIONS, USER_PERMISSIONS, USER_PERMISSIONS, params));
  }

  // useEffect(() => {
  //   //getUserLocations();
  // }, []);


  // Conditions to render layouts
  let condition1 = !!feedyardList && !feedyardListLoading && !feedyardListError;
  let condition2 = !!permissionList && !permissionListLoading && !permissionListError;
  let condition3 = !!userPermissionList && !userPermissionListLoading && !userPermissionListError;

  return (
    <>
      { (feedyardListLoading || permissionListLoading || userPermissionListLoading) && <Loading /> }
      { 
         condition1 && condition2 && condition3 &&
          <MainLayout {...props} permissions={ getAvailbleUserPermissions(permissionList?.categories || [], userPermissionList) }/>
      }
      {
        (!!feedyardListError || !!permissionListError || !!userPermissionListError) && <Page500 />
      }

      {/* Back to Top */}
      <BackTop>
        <div className="back-to-top">
          <i className="cicon-arrow-right1"></i>
          <span>{ LOCALIZATION.TOP }</span>
        </div>
      </BackTop>
    </>
  );
}

export default BaseLayout;
