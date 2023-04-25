import { useState, useCallback } from 'react';
import { ConfigProvider, Divider } from 'antd';
import { LeftSideBar, MainPage, PageTitle } from './components';

import { Col, Row } from 'antd';

const App = () => {
  const [filters, setFilters] = useState<string[]>([]);
  const setFiltersFunc = useCallback((filtersArr: string[]) => {
    setFilters(filtersArr);
  }, []);

  return (
    <ConfigProvider>
      <PageTitle filtersOnchange={setFiltersFunc} />
      <Row gutter={16} style={{ height: '100%' }}>
        <Col span={16} style={{ height: '100%' }}>
          <MainPage filters={filters} />
        </Col>
        <Col span={8}>
          <LeftSideBar />
        </Col>
      </Row>
    </ConfigProvider>
  );
};

export default App;
