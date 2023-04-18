import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(localizedFormat);

const PageInfo = () => {
  const endDay = dayjs();
  const startDay = endDay.subtract(1, 'day');
  const startString = startDay.format('MM-DD');
  const endString = endDay.format('MM-DD');
  return <div>Data from {startString} 10:19 PM  --- {endString} 08:36 AM</div>;
};

const UnreadItemList = () => {
  return <div>list items</div>;
};

export const MainPage = () => {
  return (
    <>
      <PageInfo />
      <UnreadItemList />
    </>
  );
};
