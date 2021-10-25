/*
  Actual application starts from this file
*/

import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"; //https://css-tricks.com/the-hooks-of-react-router/
import Loadable from "react-loadable";

// Antd
import { message } from 'antd';

// Redux
import { useSelector } from "react-redux";

// Application URLs
import APP_URL from "./common/applicationUrls";

// Styling
import './assets/scss/style.scss';

// Components
import { PrivateRoute } from "./components/PrivateRoute";
import Loading from "./components/Loading/Loading";
import Page404 from "./components/ErrorPages/Page404";
import Page500 from "./components/ErrorPages/Page500";
import Login from "./components/Login/Login";

// Localization
import LOCALIZATION from "@cattleview/common/src/services/LocalizationService";

message.config({
  maxCount: 1,
  duration: 3,
})

// Base Layout
const BaseLayout = Loadable({
  loader: () => import("./components/BaseLayout/BaseLayout"),
  loading: Loading,
});

function App() {

  // Redux States
  const refreshTokenLoading = useSelector(state => state?.user?.refreshTokenLoading);

  return (
    <div className="App">
      { !!refreshTokenLoading && <Loading /> }

      <BrowserRouter basename={ "" } onUpdate={() => document.getElementById('main-app').focus()}>
        <Switch>
          {/* 
            Open Routes Here 
          */}

          {/* Login */}
          <Route
            path={ APP_URL.LOGIN }
            name={ LOCALIZATION.LOGIN }
            component={ Login }
          />

          {/* Page 404 */}
          <Route
            path={ APP_URL.ERROR.PAGE404 }
            name={ LOCALIZATION.PAGE_404 }
            component={ Page404 }
          />

          {/* Page 500 */}
          <Route
            path={ APP_URL.ERROR.PAGE500 }
            name={ LOCALIZATION.PAGE_500 }
            component={ Page500 }
          />

          {/* Restricted Routes Here */}
          <PrivateRoute path="/" name={ LOCALIZATION.HOME } component={ BaseLayout } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;