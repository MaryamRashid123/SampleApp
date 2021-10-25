/*
    Component to show only private routes only
*/

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Application URL
import APP_URL from "../../common/applicationUrls";

// Service
import StorageService from "@cattleview/common/src/services/StorageService";

export const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={ props => {
                return (
                    StorageService.instance.getAccessToken()
                    ? <Component {...props} {...rest} />
                    : <Redirect to={{ pathname: APP_URL.LOGIN, state: { from: props.location } }} />
                )
            }
        } />
    )
}