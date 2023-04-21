import { Typography, Space, Avatar } from 'antd';
import { CalendarFilled } from '@ant-design/icons';
import type { ITopicItem } from '../mocks/TopicItems';

const { Title, Text } = Typography;

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

export const AvatarGroup = ({
  participants,
}: {
  participants: ITopicItem['participants'];
}) => {
  return (
    <>
      <Space>
        {participants.map(() => <Avatar src={getUrl()}/>)}
      </Space>
    </>
  );
};
