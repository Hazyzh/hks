import { useState, useEffect, useRef } from 'react';
import { Avatar, List, Typography, Space, Divider, Tag } from 'antd';
import VirtualList from 'rc-virtual-list';
import { topicItems, ITopicItem } from '../mocks/TopicItems';
import './mainPage.less';
const repeat = (arr: any[], n: number): ITopicItem[] =>
  [].concat(...Array(n).fill(arr));
const data = repeat(topicItems, 5).map((item, number) => ({
  id: `${number} -- 1`,
  ...item,
}));

const avatarIndexMap = {
  female: 0,
  male: 0,
  pixel: 0,
};
let avatarIndex = 0;
const getUrl = () => {
  avatarIndex++;
  const arr: (keyof typeof avatarIndexMap)[] = ['female', 'male', 'pixel'];
  const category = arr[avatarIndex % 3];
  return `https://xsgames.co/randomusers/avatar.php?g=${category}&key=0`;
  return `https://xsgames.co/randomusers/avatar.php?g=${category}&key=${avatarIndexMap[
    category
  ]++}`;
};

const { Title, Text, Link, Paragraph } = Typography;
const UnreadItemListRender = (item: ITopicItem) => {
  const {
    id,
    title,
    groupName,
    participants,
    keyWords,
    summary,
    startTime,
    endTime,
  } = item;
  return (
    <List.Item className='topic-item' key={id}>
      <Space direction='vertical'>
        <Title level={5}>{title}</Title>
        <Link>{groupName}</Link>
        <Space size={0} split={<Divider type='vertical' />}>
          {keyWords.map((keyword, index) => (
            <Tag bordered={false} key={index}>{keyword}</Tag>
          ))}
        </Space>
        <Paragraph>{summary}</Paragraph>
        <Avatar.Group>
          {participants.map((item, index) => {
            return <Avatar src={getUrl()} />;
          })}
        </Avatar.Group>
        <Space>
          <Text>Time Period:</Text>
          <Text type='secondary'>
            {startTime} ~ {endTime}
          </Text>
        </Space>
      </Space>
    </List.Item>
  );
};

export const MainPage = () => {
  const box = useRef<HTMLDivElement>(null);
  const [high, setHigh] = useState(1000);
  useEffect(() => {
    setHigh(box.current?.offsetHeight ?? 1000)
  }, [])
  return (
    <div ref={box} style={{height: '100%'}}>
      <List>
        <VirtualList data={data} height={high} itemHeight={350} itemKey='id'>
          {(item: ITopicItem) => UnreadItemListRender(item)}
        </VirtualList>
      </List>
    </div>
  );
};
