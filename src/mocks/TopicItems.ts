const mockItem = {
  name: 'Da Kong',
  avatar: '',
  words:
    '在讨论成长这个词的定义，指出现代文化下的成长更偏向实用主义，而古代人也需要成长，只是定义不同。他还提到费孝通的理论，认为需求是社会化产物，生育也是如此。',
};

export const topicItems = [
  {
    title: '针对《终身成长》这本书读后感的讨论',
    groupName: '海盐读书俱乐部',
    conversationId: '5679988742',
    jumpToPostId: 11919491076,
    participants: [
      {
        name: 'Jerry Chen',
        avatar: '',
        words: '推荐了一本书《终身成长》，讲述了成长思维的重要性。',
      },
      {
        name: 'Rachel Wang',
        avatar: '',
        words:
          '成长思维是一种看待问题的方式，遇到困境时能够从中找到机会去发展。对于不想成长的人，Rachel认为他们可能是追求不同的成长方式，而非堕落。',
      },
      {
        name: 'Colin Liu',
        avatar: '',
        words: '提出了一个问题，是否在某些情况下放下成长思维才是一种成长。',
      },
      {
        name: 'Da Kong',
        avatar: '',
        words:
          '在讨论成长这个词的定义，指出现代文化下的成长更偏向实用主义，而古代人也需要成长，只是定义不同。他还提到费孝通的理论，认为需求是社会化产物，生育也是如此。',
      },
      ...new Array(18).fill(mockItem),
    ],
    keyWords: [
      '《终身成长》',
      '成长思维',
      '挑战',
      '机遇',
      '机会',
      '接纳',
      '智慧',
      '理论',
      '需求',
    ],
    totallyPostCount: 32,
    summary: `推荐的书是《终身成长》（Growth Mindset），该书探讨了用成长的思维去看待问题的重要性，即用积极向上、勇敢自洽的心态面对困境和负面情绪。
      该书没有讨论不想成长的情况，但是采用成长思维可以让人更好地面对生活中的各种挑战和机遇，从中发现发展的机会。有人问是否一定要用“成长”思维来应对所有事情，
      大家的看法不同，但是普遍认为只要成长思维可以支持自己的目标，那就是舒适的，如果冲突了，接纳也是一种智慧。`,
    startTime: '04/19 10:19 PM',
    endTime: '04/20 8:36 AM',
    link: '',
  },
];

export type ITopicItem = typeof topicItems[0] & { id?: string };

/**
 * 
 * 
Item:
- Topic 标题
- 群聊名称
- 参与人员名称和头像
- 聊天中输出观点的关键字
- 这段对话整体的总结信息
- 对话开始和结束时间
 */
