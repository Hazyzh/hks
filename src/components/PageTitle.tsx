import dayjs from 'dayjs';
import { Typography, Space } from 'antd';
import { CalendarFilled } from '@ant-design/icons';

const { Title, Text } = Typography;

export const PageTitle = () => {
  const endDay = dayjs();
  const startDay = endDay.subtract(1, 'day');
  const startString = startDay.format('MM/DD');
  const endString = endDay.format('MM/DD');
  return (
    <>
      <Title>Unread Messages Intelligent Summary</Title>
      <Space>
        <CalendarFilled />
        <Text type='secondary'>
          {startString} 10:19 PM ～ {endString} 8:36 AM
        </Text>
      </Space>
    </>
  );
};
