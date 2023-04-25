import dayjs from 'dayjs';
import { Typography, Space, Select, Divider } from 'antd';
import { CalendarFilled } from '@ant-design/icons';
import { allFilters } from '../mocks/TopicItems';
import type { SelectProps } from 'antd';
import './pageTitle.less';
import { ReactComponent as GroupIcon } from '../assets/group.svg';

const { Title, Text } = Typography;
const options: SelectProps['options'] = allFilters.map((i) => ({
  value: i,
  label: i,
}));

export const PageTitle = ({
  filtersOnchange,
}: {
  filtersOnchange: (param: string[]) => void;
}) => {
  console.log('allFilters', allFilters);
  const endDay = dayjs();
  const startDay = endDay.subtract(1, 'day');
  const startString = startDay.format('MM/DD');
  const endString = endDay.format('MM/DD');
  const handleChange = (value: string[]) => {
    filtersOnchange(value);
  };
  return (
    <div className='page-title'>
      <Space>
        <CalendarFilled />
        <Text type='secondary'>
          {startString} 10:19 PM ～ {endString} 8:36 AM
        </Text>
        <Divider type='vertical' />
        <GroupIcon className='page-item-icon-sub' />
        <Text type='secondary'>
          Group Filter
        </Text>
        <Select
          mode='tags'
          style={{ width: '300px' }}
          onChange={handleChange}
          tokenSeparators={[',']}
          options={options}
        />
      </Space>
    </div>
  );
};
