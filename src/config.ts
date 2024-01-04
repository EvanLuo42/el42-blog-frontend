export enum SocialPlatforms {
  Mastodon
}

type Social = {
  platform: SocialPlatforms,
  url: string
}

type HomeInfo = {
  name: string,
  content: string,
  socials: [Social]
}

export const homeInfo: HomeInfo = {
  name: 'EvanLuo42',
  content: '一名 IBDP M25 学生。不定期发布生活感想（<del>牢骚</del>）、音乐推荐和技术文章。',
  socials: [
    {
      platform: SocialPlatforms.Mastodon,
      url: 'https://m.cmx.im/@carbon_2s2_2p2'
    }
  ]
}