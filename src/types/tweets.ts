export type TwitterStruct = {
  token_address: string;
  token_image: string;
  symbol: string;
  network: string;
  tweet_id: string;
  user_id: string;
  author: string;
  media_type: string;
  text: string;
  text_zh: string;
  medias: TwitterMedia[];
  is_self_send: boolean;
  is_retweet: boolean;
  is_quote: boolean;
  is_reply: boolean;
  is_like: boolean;
  related_tweet_id: string;
  related_user_id: string;
  favorite_count: number;
  quote_count: number;
  reply_count: number;
  retweet_count: number;
  created_time: number;
  user: UserInfo;
  link: string;
  related_tweets: TwitterStruct[];
  views: number;
  is_official: boolean;
};

export type UserInfo = {
  id_str: string;
  name: string;
  screen_name: string;
  location: string;
  description: string;
  followers_count: number;
  friends_count: number;
  created_at: string;
  favourites_count: number;
  verified: boolean;
  statuses_count: number;
  media_count: number;
  icon: string;
};

export type TwitterMedia = {
  image_url: string;
  type: string;
  video_url?: string;
  height?: number;
  width?: number;
};

export type IncrementTweetsStats = {
  m5: number;
  h1: number;
  h6: number;
  h24: number;
};

export type TweetsStatsCount = {
  views: number;
  likes: number;
  tweets: number;
  filter_tweets: number;
  official_tweets: number;
  followers: number;
  last_update: string;
};

export type TopTwitterAccount = {
  id_str: string;
  screen_name: string;
  name: string;
  description: string;
  icon: string;
  number: number;
  followers_count: number;
};
