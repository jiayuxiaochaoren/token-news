
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

exports.Prisma.FavoriteScalarFieldEnum = {
  id: 'id',
  favorite_address: 'favorite_address',
  state: 'state',
  privy_address: 'privy_address',
  user_did: 'user_did',
  updated_at: 'updated_at'
};

exports.Prisma.GangsScalarFieldEnum = {
  id: 'id',
  user_address: 'user_address',
  name: 'name',
  created_at: 'created_at',
  admins: 'admins',
  members: 'members',
  type: 'type',
  user_did: 'user_did',
  is_published: 'is_published',
  published_time: 'published_time',
  description: 'description',
  updated_at: 'updated_at'
};

exports.Prisma.Latest_sync_transScalarFieldEnum = {
  id: 'id',
  signature: 'signature',
  address: 'address',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.PassScalarFieldEnum = {
  id: 'id',
  username: 'username',
  password: 'password',
  updated_at: 'updated_at'
};

exports.Prisma.Privy_userScalarFieldEnum = {
  id: 'id',
  address: 'address',
  txs_switch: 'txs_switch',
  dis_switch: 'dis_switch',
  multiple_switch: 'multiple_switch',
  tts_switch: 'tts_switch',
  range_times: 'range_times',
  created_at: 'created_at',
  gangs_collect: 'gangs_collect',
  auto_buy_setting: 'auto_buy_setting',
  swap_setting: 'swap_setting',
  tg_bot: 'tg_bot',
  did: 'did',
  black_time: 'black_time',
  updated_at: 'updated_at',
  fomo_setting: 'fomo_setting'
};

exports.Prisma.Privy_users_tokensScalarFieldEnum = {
  id: 'id',
  walletAddress: 'walletAddress',
  tokenAddress: 'tokenAddress',
  balance: 'balance',
  total_amount: 'total_amount',
  token_address: 'token_address',
  wallet_address: 'wallet_address',
  updated_at: 'updated_at'
};

exports.Prisma.Problem_transScalarFieldEnum = {
  id: 'id',
  signature: 'signature',
  state: 'state',
  source: 'source',
  result: 'result',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Sol_priceScalarFieldEnum = {
  id: 'id',
  price: 'price',
  time: 'time',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Sorted_tagsScalarFieldEnum = {
  id: 'id',
  tag: 'tag',
  amount: 'amount',
  created_at: 'created_at',
  wallet: 'wallet',
  updated_at: 'updated_at'
};

exports.Prisma.SwapScalarFieldEnum = {
  id: 'id',
  wallet: 'wallet',
  token: 'token',
  actions: 'actions',
  created_at: 'created_at',
  signature: 'signature',
  sol_price: 'sol_price',
  state: 'state',
  swap_type: 'swap_type',
  slippage: 'slippage',
  fee: 'fee',
  blocktime: 'blocktime',
  from_address: 'from_address',
  network: 'network',
  swap: 'swap',
  to_address: 'to_address',
  fdv: 'fdv',
  updated_at: 'updated_at'
};

exports.Prisma.TokensScalarFieldEnum = {
  id: 'id',
  symbol: 'symbol',
  address: 'address',
  name: 'name',
  uri: 'uri',
  decimals: 'decimals',
  metadata: 'metadata',
  async: 'async',
  followers: 'followers',
  twitter_handle: 'twitter_handle',
  twitter_name: 'twitter_name',
  created_at: 'created_at',
  supply: 'supply',
  network: 'network',
  token_created_time: 'token_created_time',
  updated_at: 'updated_at'
};

exports.Prisma.TransactionsScalarFieldEnum = {
  id: 'id',
  signature: 'signature',
  address: 'address',
  blocktime: 'blocktime',
  created_at: 'created_at',
  actions: 'actions',
  block: 'block',
  sol_price: 'sol_price',
  swap_actions: 'swap_actions',
  swap_type: 'swap_type',
  token: 'token',
  from_address: 'from_address',
  network: 'network',
  state: 'state',
  swap: 'swap',
  to_address: 'to_address',
  fdv: 'fdv',
  updated_at: 'updated_at'
};

exports.Prisma.TtsScalarFieldEnum = {
  id: 'id',
  tts_address: 'tts_address',
  state: 'state',
  privy_address: 'privy_address',
  user_did: 'user_did',
  updated_at: 'updated_at'
};

exports.Prisma.User_watching_tokensScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  token_address: 'token_address',
  state: 'state',
  privy_address: 'privy_address',
  user_did: 'user_did',
  updated_at: 'updated_at'
};

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  address: 'address',
  state: 'state',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Users_tokensScalarFieldEnum = {
  id: 'id',
  walletAddress: 'walletAddress',
  tokenAddress: 'tokenAddress',
  balance: 'balance',
  total_amount: 'total_amount',
  token_address: 'token_address',
  wallet_address: 'wallet_address',
  updated_at: 'updated_at'
};

exports.Prisma.WalletsScalarFieldEnum = {
  id: 'id',
  address: 'address',
  state: 'state',
  created_at: 'created_at',
  type: 'type',
  black_time: 'black_time',
  updated_at: 'updated_at'
};

exports.Prisma.Wallets_transactionsScalarFieldEnum = {
  id: 'id',
  signature: 'signature',
  address: 'address',
  created_at: 'created_at',
  accounts: 'accounts',
  updated_at: 'updated_at'
};

exports.Prisma.Wallets_usersScalarFieldEnum = {
  id: 'id',
  wallet_address: 'wallet_address',
  user_address: 'user_address',
  created_at: 'created_at',
  name: 'name',
  tag: 'tag',
  gangs_id: 'gangs_id',
  user_did: 'user_did',
  updated_at: 'updated_at'
};

exports.Prisma.Alert_messagesScalarFieldEnum = {
  id: 'id',
  user_did: 'user_did',
  message: 'message',
  wallets: 'wallets',
  created_at: 'created_at',
  network: 'network'
};

exports.Prisma.Fomo_alertScalarFieldEnum = {
  id: 'id',
  user_did: 'user_did',
  token_address: 'token_address',
  wallets: 'wallets',
  created_at: 'created_at',
  updated_at: 'updated_at',
  network: 'network'
};

exports.Prisma.Wallet_aliasScalarFieldEnum = {
  id: 'id',
  did: 'did',
  wallet_address: 'wallet_address',
  name: 'name'
};

exports.Prisma.Cabal_tokensScalarFieldEnum = {
  id: 'id',
  did: 'did',
  symbol: 'symbol',
  name: 'name',
  url: 'url',
  decimals: 'decimals',
  network: 'network',
  token_address: 'token_address',
  created_at: 'created_at',
  updated_at: 'updated_at'
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
  favorite: 'favorite',
  gangs: 'gangs',
  latest_sync_trans: 'latest_sync_trans',
  pass: 'pass',
  privy_user: 'privy_user',
  privy_users_tokens: 'privy_users_tokens',
  problem_trans: 'problem_trans',
  sol_price: 'sol_price',
  sorted_tags: 'sorted_tags',
  swap: 'swap',
  tokens: 'tokens',
  transactions: 'transactions',
  tts: 'tts',
  user_watching_tokens: 'user_watching_tokens',
  users: 'users',
  users_tokens: 'users_tokens',
  wallets: 'wallets',
  wallets_transactions: 'wallets_transactions',
  wallets_users: 'wallets_users',
  alert_messages: 'alert_messages',
  fomo_alert: 'fomo_alert',
  wallet_alias: 'wallet_alias',
  cabal_tokens: 'cabal_tokens'
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
