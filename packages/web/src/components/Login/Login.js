/*
  Application Login
*/

import React, { useState, /*useEffect*/ } from 'react';
import { useHistory } from "react-router-dom";

// Redux
import { useSelector, useDispatch } from "react-redux";

// Components
import Loading from "../Loading/Loading";

// Antd
import {
  Row, Col, Form, Input,
  Button, Checkbox, /*Select*/
} from 'antd';

// Images
import APP_LOGO from "../../assets/img/cactus-logo.png";
import LOGIN_CATTLE_IMG from "../../assets/img/cow-image.jpg";

// Actions
import { loginUser } from '@cattleview/common/src/store/actions/UserAction';
//import { getData } from '@cattleview/common/src/store/actions/CommonAction';

// Constants
import { REDUCER_KEYS } from "@cattleview/common/src/constants/ReducerKeyConstants";
//import URLS from "@cattleview/common/src/constants/UrlConstants";
import APP_URL from "../../common/applicationUrls";

// Localization
import LOCALIZATION from "@cattleview/common/src/services/LocalizationService";

//const { Option } = Select;

const { FEEDYARD_LIST } = REDUCER_KEYS;

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();

  const uloading = useSelector(state => state?.user?.loading);
  const cLoading = useSelector(state => state?.common?.loading);
  const loading = uloading || cLoading;

  //const feedyardList = useSelector(state => state?.common?.[FEEDYARD_LIST]);

  // Local state
  const [apiError, setApiError] = useState(false);

  // useEffect(() => {
  //   !feedyardList && getFeedyard();
  // }, []);

  // on Submit button
  const onSubmit = (data) => {

    setApiError(false);
    dispatch({
      type: "LOGIN_REQUEST",
      payload:data
    })
    .then(() => {
        history.push(APP_URL.DASHBOARD);
      }, () => {
        setApiError(true);
      });


    // dispatch(
    //   loginUser(data)
    // ).then(() => {
    //   history.push(APP_URL.DASHBOARD);
    // }, () => {
    //   setApiError(true);
    // });
  }

  // Get Feedyard List
  // const getFeedyard = () => {
  //   dispatch(getData(URLS.GET_FEEDYARD, FEEDYARD_LIST));
  // }

  return (
    <Row gutter={[0]}>
      {loading && <Loading />}
      <Col md={7} sm={9} xs={24} className="abstract-bg">
        <div className="login-form-wrapper d-flex flex-column">
          <div className="login-form-container">
            <div className="login-form">
              <figure>
                <img src={APP_LOGO} alt="Logo" />
              </figure>
              <Form onFinish={onSubmit}>
                <h3>{LOCALIZATION.LOGIN}</h3>
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: LOCALIZATION.REQUIRED }]}
                >
                  <Input placeholder={LOCALIZATION.USERNAME} />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[{ required: true, message: LOCALIZATION.REQUIRED }]}
                >
                  <Input.Password placeholder={LOCALIZATION.PASSWORD} />
                </Form.Item>

                {/* <Form.Item
                  name="location"
                  rules={[{ required: true, message: LOCALIZATION.REQUIRED }]}
                >
                  <Select 
                    showSearch 
                    placeholder={LOCALIZATION.SELECT_FEEDYARD} 
                    optionFilterProp="title"
                  >
                    {
                      feedyardList && feedyardList.map((feedyard, index) => {
                        return (
                          <Option 
                            key={index} 
                            value={feedyard.locationID} 
                            title={feedyard.descr}>
                              {feedyard.descr}
                          </Option>
                        )
                      })
                    }
                  </Select>
                </Form.Item> */}

                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>
                    {LOCALIZATION.KEEP_SIGNED_IN}
                  </Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    {LOCALIZATION.LOGIN}
                  </Button>
                </Form.Item>

                {apiError && <div className="invalid-credentials msg-error">{LOCALIZATION.INVALID_CREDENTIALS}</div>}

              </Form>
            </div>
          </div>
          <div className="login-footer">
            <span>&copy; {new Date().getFullYear()} {LOCALIZATION.CACTUS_FEEDERS}</span>
          </div>
        </div>
      </Col>
      <Col md={17} sm={15} xs={24}>
        <figure className="login-cattle">
          <img src={LOGIN_CATTLE_IMG} alt="Main Pic" />
        </figure>
      </Col>
    </Row>
  );
}

export default Login;