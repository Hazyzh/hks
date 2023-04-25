import { Space, Avatar, Popover } from 'antd';
import type { ITopicItem } from '../mocks/TopicItems';

const avatarIndexMap = {
  female: 0,
  male: 0,
  pixel: 0,
};
const getUrl = (index: number, mapIndex: number) => {
  const arr: (keyof typeof avatarIndexMap)[] = ['female', 'male', 'pixel'];
  const category = arr[index % 3];
  return `https://xsgames.co/randomusers/avatar.php?g=${category}&key=${index + mapIndex}`;
};

export const AvatarGroup = ({
  participants,
  index: mapIndex,
}: {
  participants: ITopicItem['participants'];
  index?: string;
}) => {
  return (
    <div className='avatar-group'>
      {participants.map(({name, words}, index) => (
        <Popover content={words} title={name} key={index} className="avatar-item">
          <Avatar src={getUrl(index, Number(mapIndex))} />
        </Popover>
      ))}
    </div>
  );
};
