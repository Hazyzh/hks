import { useState, useEffect, useRef } from 'react';
import { List, Typography, Space, Divider, Tag, Badge, message } from 'antd';
import VirtualList from 'rc-virtual-list';
import Icon, { CalendarFilled } from '@ant-design/icons';

import { topicItems, ITopicItem } from '../mocks/TopicItems';
import { AvatarGroup } from './AvatarGroup';
import { ReactComponent as TopicIcon } from '../assets/topic.svg';
import { ReactComponent as GroupIcon } from '../assets/group.svg';
import './mainPage.less';

const repeat = (arr: any[], n: number): ITopicItem[] =>
  [].concat(...Array(n).fill(arr));
const data = repeat(topicItems, 5).map((item, number) => ({
  id: `${number}`,
  ...item,
}));

function goToConversation({
  conversationId,
  jumpToPostId,
}: {
  conversationId: string;
  jumpToPostId: number;
}) {
  window.parent.postMessage({ conversationId, jumpToPostId }, '*');
}

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
    totallyPostCount,
    conversationId,
    jumpToPostId,
  } = item;
  return (
    <List.Item className='topic-item' key={id}>
      <Badge.Ribbon text={`${totallyPostCount} Posts, ${participants.length} Participants`} color='gray'>
        <Space direction='vertical'>
          <Space>
            <TopicIcon className='page-item-icon' />
            <Title level={5}>{title}</Title>
          </Space>
          <Space>
            <GroupIcon className='page-item-icon-sub' />
            <Link
              onClick={() => goToConversation({ conversationId, jumpToPostId })}
            >
              {groupName}
            </Link>
          </Space>

          <Space size={0} split={<Divider type='vertical' />}>
            {keyWords.map((keyword, index) => (
              <Tag bordered={false} key={index}>
                {keyword}
              </Tag>
            ))}
          </Space>
          <Paragraph style={{textIndent: '2em'}}>{summary}</Paragraph>
          <AvatarGroup participants={participants} />
          <Space>
            <CalendarFilled />
            <Text type='secondary'>
              {startTime} ~ {endTime}
            </Text>
          </Space>
        </Space>
      </Badge.Ribbon>
    </List.Item>
  );
};

export const MainPage = () => {
  const box = useRef<HTMLDivElement>(null);
  const [high, setHigh] = useState(1000);
  useEffect(() => {
    setHigh(box.current?.offsetHeight ?? 1000);
  }, []);
  return (
    <div ref={box} style={{ height: '100%' }}>
      <List>
        <VirtualList data={data} height={high} itemHeight={350} itemKey='id'>
          {(item: ITopicItem) => UnreadItemListRender(item)}
        </VirtualList>
      </List>
    </div>
  );
};
