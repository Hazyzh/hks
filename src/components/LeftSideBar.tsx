import { Typography, Divider, Image, Space, Card } from 'antd';
import { SoundOutlined, AimOutlined } from '@ant-design/icons';
import PopularImg from '../assets/popular.png';
import HotWordsImg from '../assets/hotWords.svg?url';
import './sidebar.css';

const { Title, Text } = Typography;

const MostPopular = () => {
  return (
    <Card
      bordered={false}
      title={
        <Title level={4} type='secondary'>
          <Space>
            <SoundOutlined />
            Most Popular Message
          </Space>
        </Title>
      }
    >
      <Image height={240} src={PopularImg} />
    </Card>
  );
};

const UnreadHotWords = () => {
  return (
    <Card
      bordered={false}
      title={
        <Title level={4} type='secondary'>
          <Space>
            <AimOutlined />
            Hot Words Recap
          </Space>
        </Title>
      }
    >
      <Image preview={false} height={240} src={HotWordsImg} />
    </Card>
  );
};

export const LeftSideBar = () => {
  return (
    <div className='side-bar'>
      <UnreadHotWords />
      <Divider />
      <MostPopular />
    </div>
  );
};
