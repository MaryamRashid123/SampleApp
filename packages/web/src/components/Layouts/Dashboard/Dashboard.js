/*
  Application Dashboard
*/

import React from 'react';
import { Row, Col } from 'antd'

function Dashboard({ title }) {
  console.log("Dashboard Showing...");
  return (
    <div className="secondary-header">
      <Row gutter={[16, 8]} className="align-items-center">
        {/* Title */}
        <Col span="10">
          <h1>{ title }</h1>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
