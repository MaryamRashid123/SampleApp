/*
  500 Page, 
  when there is no page according to given route
*/

import React from 'react';

// Localization
import LOCALIZATION from "@cattleview/common/src/services/LocalizationService";

function Page500(props) {
  return (
    <div className="page-404">
      <div className="card-white">
        <h2>500</h2>
        <div className="content-404">
          <h4>{ LOCALIZATION.INTERNAL_SERVER_ERROR }</h4>
          <p>{ LOCALIZATION.INTERNAL_SERVER_ERROR_MESSAGE }</p>
          { 
            !!props.refresh?
            <p className="back404 refresh" onClick={ props.refresh }><i className="cicon-angle-right1"></i>{ LOCALIZATION.REFRESH }</p>:
            <p><a className="back404" href="/"><i className="cicon-angle-right1"></i>{ LOCALIZATION.GO_TO_HOME }</a></p> 
          }
        </div>
      </div>
    </div>
  );
}
export default Page500;