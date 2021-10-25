/*
  Boot component for application.
  Initial reducer and keel whole applicaton within reducer
*/

import React from "react";

// Redux
import { Provider } from "react-redux";
import createHistory from "history/createBrowserHistory";

// Configuration
import configureStore from "@cattleview/common/src/store/configureStore";

// constants
import { PLATFORMS } from '@cattleview/common/src/constants/GenericConstants';

// Components
import App from "./App";

import StorageService from '@cattleview/common/src/services/StorageService';

// Save Platform Web
StorageService.instance = new StorageService(PLATFORMS.WEB, localStorage);

// Stores & History
const store = configureStore();
const history = createHistory();

function BootSetup (props) {

  return (
    <>
      <Provider store={store} history={history}>
        <App />
      </Provider>
    </>
  );

}

export default BootSetup;