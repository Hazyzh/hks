import { ConfigProvider } from 'antd';
import { LeftSideBar, MainPage } from './components';

import { Col, Row } from 'antd';

const App = () => {
  return (
    <ConfigProvider>
      <Row gutter={16}>
        <Col span={16}>
          <MainPage />
        </Col>
        <Col span={8}>
          <LeftSideBar />
        </Col>
      </Row>
    </ConfigProvider>
  );
};

export default App;
