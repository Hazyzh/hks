import { Typography, Divider, Image } from 'antd';
import PopularImg from '../assets/popular.png';
import HotWordsImg from '../assets/hotWords.svg';


const { Title, Text } = Typography;

const MostPopular = () => {
  return (
    <>
      <Title level={4} type='secondary'>
        Most Popular Message
      </Title>
      <Image preview={false} width={400} height={200} src={PopularImg} />
    </>
  );
};

const UnreadHotWords = () => {
  return (
    <>
      <Title level={4} type='secondary'>
        Hot Words Recap
      </Title>
      <Image width={400} height={200} src={HotWordsImg} />
    </>
  );
};

export const LeftSideBar = () => {
  return (
    <>
      <UnreadHotWords />
      <Divider />
      <MostPopular />
      <Divider />
    </>
  );
};
