import { Avatar, List, Typography, Space, Divider, Tag } from 'antd';
import { topicItems, ITopicItem } from '../mocks/TopicItems';

const getUrl = (index: number) => {
  const arr = ['female', 'male', 'pixel'];
  const category = arr[index % 3];
  return `https://xsgames.co/randomusers/avatar.php?g=${category}&key=${index}`;
};

const { Title, Text, Link, Paragraph } = Typography;
const UnreadItemListRender = (item: ITopicItem[0], index: number) => {
  const {
    title,
    groupName,
    participants,
    keyWords,
    summary,
    startTime,
    endTime,
  } = item;
  return (
    <List.Item style={{ border: '1px solid #eee', padding: '10px' }}>
      <Space direction='vertical'>
        <Title level={5}>{title}</Title>
        <Link>{groupName}</Link>
        <Space size={0} split={<Divider type='vertical' />}>
          {keyWords.map((keyword) => (
            <Tag bordered={false}>{keyword}</Tag>
          ))}
        </Space>
        <Paragraph>{summary}</Paragraph>
        <Avatar.Group size={'small'} maxCount={18}>
          {participants.map((item, index) => {
            return <Avatar src={getUrl(index)} />;
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
  return (
    <>
      <List
        pagination={false}
        itemLayout='horizontal'
        dataSource={[
          topicItems[0],
          topicItems[0],
          topicItems[0],
          topicItems[0],
          topicItems[0],
          topicItems[0],
        ]}
        renderItem={UnreadItemListRender}
      />
    </>
  );
};
