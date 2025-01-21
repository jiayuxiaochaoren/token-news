
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.2.1
 * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
 */
Prisma.prismaVersion = {
  client: "6.2.1",
  engine: "4123509d24aa4dede1e864b46351bf2790323b69"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.TokensScalarFieldEnum = {
  id: 'id',
  address: 'address',
  symbol: 'symbol',
  name: 'name',
  decimals: 'decimals',
  metadata: 'metadata',
  network: 'network',
  token_created_at: 'token_created_at',
  created_at: 'created_at',
  updated_at: 'updated_at',
  social_links: 'social_links',
  tweet_analyze: 'tweet_analyze',
  pumpfun: 'pumpfun',
  profile: 'profile',
  headline: 'headline',
  officials: 'officials',
  from_pumpfun_listening: 'from_pumpfun_listening',
  completed_time: 'completed_time',
  analysis: 'analysis',
  related_accounts: 'related_accounts'
};

exports.Prisma.Privy_userScalarFieldEnum = {
  id: 'id',
  did: 'did',
  created_at: 'created_at',
  updated_at: 'updated_at',
  email: 'email',
  pro: 'pro',
  exp: 'exp',
  invite_code: 'invite_code',
  invite_code_bind_at: 'invite_code_bind_at',
  referral: 'referral'
};

exports.Prisma.Ai_analyzeScalarFieldEnum = {
  id: 'id',
  token_address: 'token_address',
  analyze_en: 'analyze_en',
  analyze_zh: 'analyze_zh',
  tweets: 'tweets',
  network: 'network',
  created_at: 'created_at',
  updated_at: 'updated_at',
  symbol: 'symbol',
  search_tweets: 'search_tweets',
  ai_resp: 'ai_resp',
  template: 'template',
  type: 'type',
  version: 'version'
};

exports.Prisma.Ruler_tweetsScalarFieldEnum = {
  id: 'id',
  token_address: 'token_address',
  symbol: 'symbol',
  network: 'network',
  tweet_id: 'tweet_id',
  tweet_time: 'tweet_time',
  author: 'author',
  content: 'content',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Token_interactScalarFieldEnum = {
  id: 'id',
  token_address: 'token_address',
  network: 'network',
  liker: 'liker',
  disliker: 'disliker',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Pro_logsScalarFieldEnum = {
  id: 'id',
  did: 'did',
  signature: 'signature',
  level: 'level',
  renewal: 'renewal',
  created_at: 'created_at',
  updated_at: 'updated_at',
  email: 'email'
};

exports.Prisma.TweetsScalarFieldEnum = {
  id: 'id',
  token_address: 'token_address',
  symbol: 'symbol',
  network: 'network',
  tweet_id: 'tweet_id',
  user_id: 'user_id',
  text: 'text',
  medias: 'medias',
  is_self_send: 'is_self_send',
  is_retweet: 'is_retweet',
  is_quote: 'is_quote',
  is_reply: 'is_reply',
  is_like: 'is_like',
  related_tweet_id: 'related_tweet_id',
  related_user_id: 'related_user_id',
  favorite_count: 'favorite_count',
  quote_count: 'quote_count',
  reply_count: 'reply_count',
  retweet_count: 'retweet_count',
  author: 'author',
  user: 'user',
  created_at: 'created_at',
  updated_at: 'updated_at',
  created_time: 'created_time',
  link: 'link',
  media_type: 'media_type',
  token_image: 'token_image',
  related_tweets: 'related_tweets',
  views: 'views',
  is_official: 'is_official',
  text_zh: 'text_zh'
};

exports.Prisma.Filter_rulersScalarFieldEnum = {
  id: 'id',
  type: 'type',
  list: 'list',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Tweet_latest_idScalarFieldEnum = {
  id: 'id',
  tweet_id: 'tweet_id',
  created_time: 'created_time',
  token_address: 'token_address',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Reference_tokensScalarFieldEnum = {
  id: 'id',
  address: 'address',
  symbol: 'symbol',
  name: 'name',
  decimals: 'decimals',
  metadata: 'metadata',
  network: 'network',
  token_created_at: 'token_created_at',
  social_links: 'social_links',
  tweet_analyze: 'tweet_analyze',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Invite_codeScalarFieldEnum = {
  id: 'id',
  code: 'code',
  user_did: 'user_did',
  created_at: 'created_at',
  updated_at: 'updated_at',
  user_email: 'user_email',
  pending: 'pending'
};

exports.Prisma.Pro_configScalarFieldEnum = {
  id: 'id',
  config: 'config',
  created_at: 'created_at'
};

exports.Prisma.User_service_call_logsScalarFieldEnum = {
  id: 'id',
  did: 'did',
  call_date: 'call_date',
  call_count: 'call_count',
  service: 'service',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Invite_code_bind_logsScalarFieldEnum = {
  id: 'id',
  code: 'code',
  email: 'email',
  signature: 'signature',
  did: 'did',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.WatchlistScalarFieldEnum = {
  id: 'id',
  did: 'did',
  token_address: 'token_address',
  token_symbol: 'token_symbol',
  url: 'url',
  network: 'network',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Click_logsScalarFieldEnum = {
  id: 'id',
  did: 'did',
  type: 'type',
  content: 'content',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Smart_walletsScalarFieldEnum = {
  id: 'id',
  address: 'address',
  twitter_handle: 'twitter_handle',
  account_info: 'account_info',
  network: 'network',
  created_at: 'created_at',
  updated_at: 'updated_at',
  alias: 'alias'
};

exports.Prisma.CommunityScalarFieldEnum = {
  id: 'id',
  name: 'name',
  contact: 'contact',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Community_referralScalarFieldEnum = {
  id: 'id',
  expiration_date: 'expiration_date',
  state: 'state',
  code: 'code',
  community_id: 'community_id',
  proportion: 'proportion',
  sol_address: 'sol_address',
  eth_address: 'eth_address',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Community_referral_payed_logsScalarFieldEnum = {
  id: 'id',
  ref_revenue: 'ref_revenue',
  token: 'token',
  type: 'type',
  amount: 'amount',
  signature: 'signature',
  network: 'network',
  payee_address: 'payee_address',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Community_referral_revenue_logsScalarFieldEnum = {
  id: 'id',
  user: 'user',
  amount: 'amount',
  token: 'token',
  type: 'type',
  ref_code: 'ref_code',
  proportion: 'proportion',
  signature: 'signature',
  network: 'network',
  ref_revenue: 'ref_revenue',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Community_revenueScalarFieldEnum = {
  id: 'id',
  community_id: 'community_id',
  token: 'token',
  total: 'total',
  proportion: 'proportion',
  payed: 'payed',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Rag_tokensScalarFieldEnum = {
  id: 'id',
  token_address: 'token_address',
  token_symbol: 'token_symbol',
  created_at: 'created_at',
  updated_at: 'updated_at',
  network: 'network'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  tokens: 'tokens',
  privy_user: 'privy_user',
  ai_analyze: 'ai_analyze',
  ruler_tweets: 'ruler_tweets',
  token_interact: 'token_interact',
  pro_logs: 'pro_logs',
  tweets: 'tweets',
  filter_rulers: 'filter_rulers',
  tweet_latest_id: 'tweet_latest_id',
  reference_tokens: 'reference_tokens',
  invite_code: 'invite_code',
  pro_config: 'pro_config',
  user_service_call_logs: 'user_service_call_logs',
  invite_code_bind_logs: 'invite_code_bind_logs',
  watchlist: 'watchlist',
  click_logs: 'click_logs',
  smart_wallets: 'smart_wallets',
  community: 'community',
  community_referral: 'community_referral',
  community_referral_payed_logs: 'community_referral_payed_logs',
  community_referral_revenue_logs: 'community_referral_revenue_logs',
  community_revenue: 'community_revenue',
  rag_tokens: 'rag_tokens'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
