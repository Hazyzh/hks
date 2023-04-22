import { ConfigProvider, Divider } from 'antd';
import { LeftSideBar, MainPage, PageTitle } from './components';

import { Col, Row } from 'antd';

const App = () => {
  return (
    <ConfigProvider>
      <PageTitle />
      <Row gutter={16}  style={{height: '100%'}}>
        <Col span={16} style={{height: '100%'}}>
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
