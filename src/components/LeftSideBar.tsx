import { Typography, Divider, Image, Space } from 'antd';
import { SoundOutlined, AimOutlined } from '@ant-design/icons';
import PopularImg from '../assets/popular.png';
import HotWordsImg from '../assets/hotWords.svg';
import './sidebar.css';

const { Title, Text } = Typography;

const MostPopular = () => {
  return (
    <>
      <Title level={4} type='secondary'>
        <Space>
          <SoundOutlined />
          Most Popular Message
        </Space>
      </Title>
      <Image preview={false} width={'100%'} height={240} src={PopularImg} />
    </>
  );
};

const UnreadHotWords = () => {
  return (
    <>
      <Title level={4} type='secondary'>
        <Space>
          <AimOutlined />
          Hot Words Recap
        </Space>
      </Title>
      <Image width={'100%'} height={240} src={HotWordsImg} />
    </>
  );
};

export const LeftSideBar = () => {
  return (
    <div className='side-bar'>
      <UnreadHotWords />
      <Divider />
      <MostPopular />
      <Divider />
    </div>
  );
};
