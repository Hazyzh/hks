const mockItem = {
  name: "Da Kong",
  avatar: "",
  words:
    "在讨论成长这个词的定义，指出现代文化下的成长更偏向实用主义，而古代人也需要成长，只是定义不同。他还提到费孝通的理论，认为需求是社会化产物，生育也是如此。",
};

export const topicItems = [
  {
    title: "针对《终身成长》这本书读后感的讨论",
    groupName: "海盐读书俱乐部",
    conversationId: "5679988742",
    jumpToPostId: 11919491076,
    participants: [
      {
        name: "Jerry Chen",
        avatar: "",
        words: "推荐了一本书《终身成长》，讲述了成长思维的重要性。",
      },
      {
        name: "Rachel Wang",
        avatar: "",
        words:
          "成长思维是一种看待问题的方式，遇到困境时能够从中找到机会去发展。对于不想成长的人，Rachel认为他们可能是追求不同的成长方式，而非堕落。",
      },
      {
        name: "Colin Liu",
        avatar: "",
        words: "提出了一个问题，是否在某些情况下放下成长思维才是一种成长。",
      },
      {
        name: "Da Kong",
        avatar: "",
        words:
          "在讨论成长这个词的定义，指出现代文化下的成长更偏向实用主义，而古代人也需要成长，只是定义不同。他还提到费孝通的理论，认为需求是社会化产物，生育也是如此。",
      },
      ...new Array(18).fill(mockItem),
    ],
    keyWords: [
      "《终身成长》",
      "成长思维",
      "挑战",
      "机遇",
      "机会",
      "接纳",
      "智慧",
      "理论",
      "需求",
    ],
    totallyPostCount: 32,
    summary: `推荐的书是《终身成长》（Growth Mindset），该书探讨了用成长的思维去看待问题的重要性，即用积极向上、勇敢自洽的心态面对困境和负面情绪。
      该书没有讨论不想成长的情况，但是采用成长思维可以让人更好地面对生活中的各种挑战和机遇，从中发现发展的机会。有人问是否一定要用“成长”思维来应对所有事情，
      大家的看法不同，但是普遍认为只要成长思维可以支持自己的目标，那就是舒适的，如果冲突了，接纳也是一种智慧。`,
    startTime: "04/19 10:19 PM",
    endTime: "04/20 8:36 AM",
    link: "",
  },
  {
    title: "针对黑客松活动的讨论",
    groupName: "Hackathon",
    conversationId: "5679751174",
    jumpToPostId: 11924578308,
    participants: [
      {
        name: "Thea Lin",
        avatar: "",
        words: "Hackathon2023报名进行中，没有主题限制，可以是任何奇思妙想，报名截止时间为4月10日。",
      },
      {
        name: "Sophie Wu",
        avatar: "",
        words:
          "作品的程度只需要是POC级别即可符合初赛要求。",
      },
      {
        name: "Sarah Chen",
        avatar: "",
        words: "Coding Party提供餐饮和场地，并提供导师全程陪同，帮助参赛同学在决赛前更精细地完善作品。",
      },
      {
        name: "Harry Hou",
        avatar: "",
        words:
          "初赛当日为4月26日下午1点半开始，分成三个Track进行，每个Track 15组，每组展示时间10min（Demo 7min+QA 3min），每个Track的Top4进入决赛。",
      },
      ...new Array(18).fill(mockItem),
    ],
    keyWords: [
      "Hackathon",
      "黑客松",
      "Coding Party",
      "4月10日",
    ],
    totallyPostCount: 14,
    summary: `Thea Lin发布了一个黑客松比赛的通知，可以是任何主题的项目。
      参赛者需在4月10日前报名，每个队伍最多4人，且建议其中有一个非开发者。
      比赛将在4月26日开始初赛，5月6日是Coding Party，5月9日是决赛。
      作品评价将根据商业价值、创新性、用户体验、可生产性和演示来评判。
      获奖者将获得丰厚的奖励，每个参赛者都将获得一份黑客松周边礼物。
      Thea Lin也回答了其他参赛者的一些问题，例如作品的要求、Coding Party的目的和初赛的流程。`,
    startTime: "04/23 8:51 PM",
    endTime: "04/24 12:08 AM",
    link: "",
  },
];

export type ITopicItem = (typeof topicItems)[0] & { id?: string };

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
