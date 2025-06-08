
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model SecretSeedPhrase
 * 
 */
export type SecretSeedPhrase = $Result.DefaultSelection<Prisma.$SecretSeedPhrasePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.secretSeedPhrase`: Exposes CRUD operations for the **SecretSeedPhrase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SecretSeedPhrases
    * const secretSeedPhrases = await prisma.secretSeedPhrase.findMany()
    * ```
    */
  get secretSeedPhrase(): Prisma.SecretSeedPhraseDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.1.0
   * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    SecretSeedPhrase: 'SecretSeedPhrase'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "account" | "secretSeedPhrase"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      SecretSeedPhrase: {
        payload: Prisma.$SecretSeedPhrasePayload<ExtArgs>
        fields: Prisma.SecretSeedPhraseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SecretSeedPhraseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretSeedPhrasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SecretSeedPhraseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretSeedPhrasePayload>
          }
          findFirst: {
            args: Prisma.SecretSeedPhraseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretSeedPhrasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SecretSeedPhraseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretSeedPhrasePayload>
          }
          findMany: {
            args: Prisma.SecretSeedPhraseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretSeedPhrasePayload>[]
          }
          create: {
            args: Prisma.SecretSeedPhraseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretSeedPhrasePayload>
          }
          createMany: {
            args: Prisma.SecretSeedPhraseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SecretSeedPhraseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretSeedPhrasePayload>[]
          }
          delete: {
            args: Prisma.SecretSeedPhraseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretSeedPhrasePayload>
          }
          update: {
            args: Prisma.SecretSeedPhraseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretSeedPhrasePayload>
          }
          deleteMany: {
            args: Prisma.SecretSeedPhraseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SecretSeedPhraseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SecretSeedPhraseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretSeedPhrasePayload>
          }
          aggregate: {
            args: Prisma.SecretSeedPhraseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecretSeedPhrase>
          }
          groupBy: {
            args: Prisma.SecretSeedPhraseGroupByArgs<ExtArgs>
            result: $Utils.Optional<SecretSeedPhraseGroupByOutputType>[]
          }
          count: {
            args: Prisma.SecretSeedPhraseCountArgs<ExtArgs>
            result: $Utils.Optional<SecretSeedPhraseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SecretSeedPhraseCountOutputType
   */

  export type SecretSeedPhraseCountOutputType = {
    Accounts: number
  }

  export type SecretSeedPhraseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Accounts?: boolean | SecretSeedPhraseCountOutputTypeCountAccountsArgs
  }

  // Custom InputTypes
  /**
   * SecretSeedPhraseCountOutputType without action
   */
  export type SecretSeedPhraseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretSeedPhraseCountOutputType
     */
    select?: SecretSeedPhraseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SecretSeedPhraseCountOutputType without action
   */
  export type SecretSeedPhraseCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    account_id: string | null
    private_key: Uint8Array | null
    created_at: Date | null
    seed_id: string | null
  }

  export type AccountMaxAggregateOutputType = {
    account_id: string | null
    private_key: Uint8Array | null
    created_at: Date | null
    seed_id: string | null
  }

  export type AccountCountAggregateOutputType = {
    account_id: number
    private_key: number
    created_at: number
    seed_id: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    account_id?: true
    private_key?: true
    created_at?: true
    seed_id?: true
  }

  export type AccountMaxAggregateInputType = {
    account_id?: true
    private_key?: true
    created_at?: true
    seed_id?: true
  }

  export type AccountCountAggregateInputType = {
    account_id?: true
    private_key?: true
    created_at?: true
    seed_id?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    account_id: string
    private_key: Uint8Array
    created_at: Date
    seed_id: string | null
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    account_id?: boolean
    private_key?: boolean
    created_at?: boolean
    seed_id?: boolean
    secretSeedPhrase?: boolean | Account$secretSeedPhraseArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    account_id?: boolean
    private_key?: boolean
    created_at?: boolean
    seed_id?: boolean
    secretSeedPhrase?: boolean | Account$secretSeedPhraseArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    account_id?: boolean
    private_key?: boolean
    created_at?: boolean
    seed_id?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    secretSeedPhrase?: boolean | Account$secretSeedPhraseArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    secretSeedPhrase?: boolean | Account$secretSeedPhraseArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      secretSeedPhrase: Prisma.$SecretSeedPhrasePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      account_id: string
      private_key: Uint8Array
      created_at: Date
      seed_id: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `account_id`
     * const accountWithAccount_idOnly = await prisma.account.findMany({ select: { account_id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `account_id`
     * const accountWithAccount_idOnly = await prisma.account.createManyAndReturn({ 
     *   select: { account_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    secretSeedPhrase<T extends Account$secretSeedPhraseArgs<ExtArgs> = {}>(args?: Subset<T, Account$secretSeedPhraseArgs<ExtArgs>>): Prisma__SecretSeedPhraseClient<$Result.GetResult<Prisma.$SecretSeedPhrasePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly account_id: FieldRef<"Account", 'String'>
    readonly private_key: FieldRef<"Account", 'Bytes'>
    readonly created_at: FieldRef<"Account", 'DateTime'>
    readonly seed_id: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }

  /**
   * Account.secretSeedPhrase
   */
  export type Account$secretSeedPhraseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretSeedPhrase
     */
    select?: SecretSeedPhraseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretSeedPhraseInclude<ExtArgs> | null
    where?: SecretSeedPhraseWhereInput
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model SecretSeedPhrase
   */

  export type AggregateSecretSeedPhrase = {
    _count: SecretSeedPhraseCountAggregateOutputType | null
    _min: SecretSeedPhraseMinAggregateOutputType | null
    _max: SecretSeedPhraseMaxAggregateOutputType | null
  }

  export type SecretSeedPhraseMinAggregateOutputType = {
    seed_id: string | null
    user_id: string | null
    seed_phrase: Uint8Array | null
    is_primary: boolean | null
    created_at: Date | null
  }

  export type SecretSeedPhraseMaxAggregateOutputType = {
    seed_id: string | null
    user_id: string | null
    seed_phrase: Uint8Array | null
    is_primary: boolean | null
    created_at: Date | null
  }

  export type SecretSeedPhraseCountAggregateOutputType = {
    seed_id: number
    user_id: number
    seed_phrase: number
    is_primary: number
    created_at: number
    _all: number
  }


  export type SecretSeedPhraseMinAggregateInputType = {
    seed_id?: true
    user_id?: true
    seed_phrase?: true
    is_primary?: true
    created_at?: true
  }

  export type SecretSeedPhraseMaxAggregateInputType = {
    seed_id?: true
    user_id?: true
    seed_phrase?: true
    is_primary?: true
    created_at?: true
  }

  export type SecretSeedPhraseCountAggregateInputType = {
    seed_id?: true
    user_id?: true
    seed_phrase?: true
    is_primary?: true
    created_at?: true
    _all?: true
  }

  export type SecretSeedPhraseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecretSeedPhrase to aggregate.
     */
    where?: SecretSeedPhraseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecretSeedPhrases to fetch.
     */
    orderBy?: SecretSeedPhraseOrderByWithRelationInput | SecretSeedPhraseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SecretSeedPhraseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecretSeedPhrases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecretSeedPhrases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SecretSeedPhrases
    **/
    _count?: true | SecretSeedPhraseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecretSeedPhraseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecretSeedPhraseMaxAggregateInputType
  }

  export type GetSecretSeedPhraseAggregateType<T extends SecretSeedPhraseAggregateArgs> = {
        [P in keyof T & keyof AggregateSecretSeedPhrase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecretSeedPhrase[P]>
      : GetScalarType<T[P], AggregateSecretSeedPhrase[P]>
  }




  export type SecretSeedPhraseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecretSeedPhraseWhereInput
    orderBy?: SecretSeedPhraseOrderByWithAggregationInput | SecretSeedPhraseOrderByWithAggregationInput[]
    by: SecretSeedPhraseScalarFieldEnum[] | SecretSeedPhraseScalarFieldEnum
    having?: SecretSeedPhraseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecretSeedPhraseCountAggregateInputType | true
    _min?: SecretSeedPhraseMinAggregateInputType
    _max?: SecretSeedPhraseMaxAggregateInputType
  }

  export type SecretSeedPhraseGroupByOutputType = {
    seed_id: string
    user_id: string
    seed_phrase: Uint8Array
    is_primary: boolean
    created_at: Date
    _count: SecretSeedPhraseCountAggregateOutputType | null
    _min: SecretSeedPhraseMinAggregateOutputType | null
    _max: SecretSeedPhraseMaxAggregateOutputType | null
  }

  type GetSecretSeedPhraseGroupByPayload<T extends SecretSeedPhraseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecretSeedPhraseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecretSeedPhraseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecretSeedPhraseGroupByOutputType[P]>
            : GetScalarType<T[P], SecretSeedPhraseGroupByOutputType[P]>
        }
      >
    >


  export type SecretSeedPhraseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    seed_id?: boolean
    user_id?: boolean
    seed_phrase?: boolean
    is_primary?: boolean
    created_at?: boolean
    Accounts?: boolean | SecretSeedPhrase$AccountsArgs<ExtArgs>
    _count?: boolean | SecretSeedPhraseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["secretSeedPhrase"]>

  export type SecretSeedPhraseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    seed_id?: boolean
    user_id?: boolean
    seed_phrase?: boolean
    is_primary?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["secretSeedPhrase"]>

  export type SecretSeedPhraseSelectScalar = {
    seed_id?: boolean
    user_id?: boolean
    seed_phrase?: boolean
    is_primary?: boolean
    created_at?: boolean
  }

  export type SecretSeedPhraseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Accounts?: boolean | SecretSeedPhrase$AccountsArgs<ExtArgs>
    _count?: boolean | SecretSeedPhraseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SecretSeedPhraseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SecretSeedPhrasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SecretSeedPhrase"
    objects: {
      Accounts: Prisma.$AccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      seed_id: string
      user_id: string
      seed_phrase: Uint8Array
      is_primary: boolean
      created_at: Date
    }, ExtArgs["result"]["secretSeedPhrase"]>
    composites: {}
  }

  type SecretSeedPhraseGetPayload<S extends boolean | null | undefined | SecretSeedPhraseDefaultArgs> = $Result.GetResult<Prisma.$SecretSeedPhrasePayload, S>

  type SecretSeedPhraseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SecretSeedPhraseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SecretSeedPhraseCountAggregateInputType | true
    }

  export interface SecretSeedPhraseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SecretSeedPhrase'], meta: { name: 'SecretSeedPhrase' } }
    /**
     * Find zero or one SecretSeedPhrase that matches the filter.
     * @param {SecretSeedPhraseFindUniqueArgs} args - Arguments to find a SecretSeedPhrase
     * @example
     * // Get one SecretSeedPhrase
     * const secretSeedPhrase = await prisma.secretSeedPhrase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SecretSeedPhraseFindUniqueArgs>(args: SelectSubset<T, SecretSeedPhraseFindUniqueArgs<ExtArgs>>): Prisma__SecretSeedPhraseClient<$Result.GetResult<Prisma.$SecretSeedPhrasePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SecretSeedPhrase that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SecretSeedPhraseFindUniqueOrThrowArgs} args - Arguments to find a SecretSeedPhrase
     * @example
     * // Get one SecretSeedPhrase
     * const secretSeedPhrase = await prisma.secretSeedPhrase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SecretSeedPhraseFindUniqueOrThrowArgs>(args: SelectSubset<T, SecretSeedPhraseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SecretSeedPhraseClient<$Result.GetResult<Prisma.$SecretSeedPhrasePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SecretSeedPhrase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretSeedPhraseFindFirstArgs} args - Arguments to find a SecretSeedPhrase
     * @example
     * // Get one SecretSeedPhrase
     * const secretSeedPhrase = await prisma.secretSeedPhrase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SecretSeedPhraseFindFirstArgs>(args?: SelectSubset<T, SecretSeedPhraseFindFirstArgs<ExtArgs>>): Prisma__SecretSeedPhraseClient<$Result.GetResult<Prisma.$SecretSeedPhrasePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SecretSeedPhrase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretSeedPhraseFindFirstOrThrowArgs} args - Arguments to find a SecretSeedPhrase
     * @example
     * // Get one SecretSeedPhrase
     * const secretSeedPhrase = await prisma.secretSeedPhrase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SecretSeedPhraseFindFirstOrThrowArgs>(args?: SelectSubset<T, SecretSeedPhraseFindFirstOrThrowArgs<ExtArgs>>): Prisma__SecretSeedPhraseClient<$Result.GetResult<Prisma.$SecretSeedPhrasePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SecretSeedPhrases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretSeedPhraseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SecretSeedPhrases
     * const secretSeedPhrases = await prisma.secretSeedPhrase.findMany()
     * 
     * // Get first 10 SecretSeedPhrases
     * const secretSeedPhrases = await prisma.secretSeedPhrase.findMany({ take: 10 })
     * 
     * // Only select the `seed_id`
     * const secretSeedPhraseWithSeed_idOnly = await prisma.secretSeedPhrase.findMany({ select: { seed_id: true } })
     * 
     */
    findMany<T extends SecretSeedPhraseFindManyArgs>(args?: SelectSubset<T, SecretSeedPhraseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecretSeedPhrasePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SecretSeedPhrase.
     * @param {SecretSeedPhraseCreateArgs} args - Arguments to create a SecretSeedPhrase.
     * @example
     * // Create one SecretSeedPhrase
     * const SecretSeedPhrase = await prisma.secretSeedPhrase.create({
     *   data: {
     *     // ... data to create a SecretSeedPhrase
     *   }
     * })
     * 
     */
    create<T extends SecretSeedPhraseCreateArgs>(args: SelectSubset<T, SecretSeedPhraseCreateArgs<ExtArgs>>): Prisma__SecretSeedPhraseClient<$Result.GetResult<Prisma.$SecretSeedPhrasePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SecretSeedPhrases.
     * @param {SecretSeedPhraseCreateManyArgs} args - Arguments to create many SecretSeedPhrases.
     * @example
     * // Create many SecretSeedPhrases
     * const secretSeedPhrase = await prisma.secretSeedPhrase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SecretSeedPhraseCreateManyArgs>(args?: SelectSubset<T, SecretSeedPhraseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SecretSeedPhrases and returns the data saved in the database.
     * @param {SecretSeedPhraseCreateManyAndReturnArgs} args - Arguments to create many SecretSeedPhrases.
     * @example
     * // Create many SecretSeedPhrases
     * const secretSeedPhrase = await prisma.secretSeedPhrase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SecretSeedPhrases and only return the `seed_id`
     * const secretSeedPhraseWithSeed_idOnly = await prisma.secretSeedPhrase.createManyAndReturn({ 
     *   select: { seed_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SecretSeedPhraseCreateManyAndReturnArgs>(args?: SelectSubset<T, SecretSeedPhraseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecretSeedPhrasePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SecretSeedPhrase.
     * @param {SecretSeedPhraseDeleteArgs} args - Arguments to delete one SecretSeedPhrase.
     * @example
     * // Delete one SecretSeedPhrase
     * const SecretSeedPhrase = await prisma.secretSeedPhrase.delete({
     *   where: {
     *     // ... filter to delete one SecretSeedPhrase
     *   }
     * })
     * 
     */
    delete<T extends SecretSeedPhraseDeleteArgs>(args: SelectSubset<T, SecretSeedPhraseDeleteArgs<ExtArgs>>): Prisma__SecretSeedPhraseClient<$Result.GetResult<Prisma.$SecretSeedPhrasePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SecretSeedPhrase.
     * @param {SecretSeedPhraseUpdateArgs} args - Arguments to update one SecretSeedPhrase.
     * @example
     * // Update one SecretSeedPhrase
     * const secretSeedPhrase = await prisma.secretSeedPhrase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SecretSeedPhraseUpdateArgs>(args: SelectSubset<T, SecretSeedPhraseUpdateArgs<ExtArgs>>): Prisma__SecretSeedPhraseClient<$Result.GetResult<Prisma.$SecretSeedPhrasePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SecretSeedPhrases.
     * @param {SecretSeedPhraseDeleteManyArgs} args - Arguments to filter SecretSeedPhrases to delete.
     * @example
     * // Delete a few SecretSeedPhrases
     * const { count } = await prisma.secretSeedPhrase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SecretSeedPhraseDeleteManyArgs>(args?: SelectSubset<T, SecretSeedPhraseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecretSeedPhrases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretSeedPhraseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SecretSeedPhrases
     * const secretSeedPhrase = await prisma.secretSeedPhrase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SecretSeedPhraseUpdateManyArgs>(args: SelectSubset<T, SecretSeedPhraseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SecretSeedPhrase.
     * @param {SecretSeedPhraseUpsertArgs} args - Arguments to update or create a SecretSeedPhrase.
     * @example
     * // Update or create a SecretSeedPhrase
     * const secretSeedPhrase = await prisma.secretSeedPhrase.upsert({
     *   create: {
     *     // ... data to create a SecretSeedPhrase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SecretSeedPhrase we want to update
     *   }
     * })
     */
    upsert<T extends SecretSeedPhraseUpsertArgs>(args: SelectSubset<T, SecretSeedPhraseUpsertArgs<ExtArgs>>): Prisma__SecretSeedPhraseClient<$Result.GetResult<Prisma.$SecretSeedPhrasePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SecretSeedPhrases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretSeedPhraseCountArgs} args - Arguments to filter SecretSeedPhrases to count.
     * @example
     * // Count the number of SecretSeedPhrases
     * const count = await prisma.secretSeedPhrase.count({
     *   where: {
     *     // ... the filter for the SecretSeedPhrases we want to count
     *   }
     * })
    **/
    count<T extends SecretSeedPhraseCountArgs>(
      args?: Subset<T, SecretSeedPhraseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecretSeedPhraseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SecretSeedPhrase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretSeedPhraseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SecretSeedPhraseAggregateArgs>(args: Subset<T, SecretSeedPhraseAggregateArgs>): Prisma.PrismaPromise<GetSecretSeedPhraseAggregateType<T>>

    /**
     * Group by SecretSeedPhrase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretSeedPhraseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SecretSeedPhraseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SecretSeedPhraseGroupByArgs['orderBy'] }
        : { orderBy?: SecretSeedPhraseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SecretSeedPhraseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecretSeedPhraseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SecretSeedPhrase model
   */
  readonly fields: SecretSeedPhraseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SecretSeedPhrase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SecretSeedPhraseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Accounts<T extends SecretSeedPhrase$AccountsArgs<ExtArgs> = {}>(args?: Subset<T, SecretSeedPhrase$AccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SecretSeedPhrase model
   */ 
  interface SecretSeedPhraseFieldRefs {
    readonly seed_id: FieldRef<"SecretSeedPhrase", 'String'>
    readonly user_id: FieldRef<"SecretSeedPhrase", 'String'>
    readonly seed_phrase: FieldRef<"SecretSeedPhrase", 'Bytes'>
    readonly is_primary: FieldRef<"SecretSeedPhrase", 'Boolean'>
    readonly created_at: FieldRef<"SecretSeedPhrase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SecretSeedPhrase findUnique
   */
  export type SecretSeedPhraseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretSeedPhrase
     */
    select?: SecretSeedPhraseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretSeedPhraseInclude<ExtArgs> | null
    /**
     * Filter, which SecretSeedPhrase to fetch.
     */
    where: SecretSeedPhraseWhereUniqueInput
  }

  /**
   * SecretSeedPhrase findUniqueOrThrow
   */
  export type SecretSeedPhraseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretSeedPhrase
     */
    select?: SecretSeedPhraseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretSeedPhraseInclude<ExtArgs> | null
    /**
     * Filter, which SecretSeedPhrase to fetch.
     */
    where: SecretSeedPhraseWhereUniqueInput
  }

  /**
   * SecretSeedPhrase findFirst
   */
  export type SecretSeedPhraseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretSeedPhrase
     */
    select?: SecretSeedPhraseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretSeedPhraseInclude<ExtArgs> | null
    /**
     * Filter, which SecretSeedPhrase to fetch.
     */
    where?: SecretSeedPhraseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecretSeedPhrases to fetch.
     */
    orderBy?: SecretSeedPhraseOrderByWithRelationInput | SecretSeedPhraseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecretSeedPhrases.
     */
    cursor?: SecretSeedPhraseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecretSeedPhrases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecretSeedPhrases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecretSeedPhrases.
     */
    distinct?: SecretSeedPhraseScalarFieldEnum | SecretSeedPhraseScalarFieldEnum[]
  }

  /**
   * SecretSeedPhrase findFirstOrThrow
   */
  export type SecretSeedPhraseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretSeedPhrase
     */
    select?: SecretSeedPhraseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretSeedPhraseInclude<ExtArgs> | null
    /**
     * Filter, which SecretSeedPhrase to fetch.
     */
    where?: SecretSeedPhraseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecretSeedPhrases to fetch.
     */
    orderBy?: SecretSeedPhraseOrderByWithRelationInput | SecretSeedPhraseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecretSeedPhrases.
     */
    cursor?: SecretSeedPhraseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecretSeedPhrases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecretSeedPhrases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecretSeedPhrases.
     */
    distinct?: SecretSeedPhraseScalarFieldEnum | SecretSeedPhraseScalarFieldEnum[]
  }

  /**
   * SecretSeedPhrase findMany
   */
  export type SecretSeedPhraseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretSeedPhrase
     */
    select?: SecretSeedPhraseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretSeedPhraseInclude<ExtArgs> | null
    /**
     * Filter, which SecretSeedPhrases to fetch.
     */
    where?: SecretSeedPhraseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecretSeedPhrases to fetch.
     */
    orderBy?: SecretSeedPhraseOrderByWithRelationInput | SecretSeedPhraseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SecretSeedPhrases.
     */
    cursor?: SecretSeedPhraseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecretSeedPhrases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecretSeedPhrases.
     */
    skip?: number
    distinct?: SecretSeedPhraseScalarFieldEnum | SecretSeedPhraseScalarFieldEnum[]
  }

  /**
   * SecretSeedPhrase create
   */
  export type SecretSeedPhraseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretSeedPhrase
     */
    select?: SecretSeedPhraseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretSeedPhraseInclude<ExtArgs> | null
    /**
     * The data needed to create a SecretSeedPhrase.
     */
    data: XOR<SecretSeedPhraseCreateInput, SecretSeedPhraseUncheckedCreateInput>
  }

  /**
   * SecretSeedPhrase createMany
   */
  export type SecretSeedPhraseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SecretSeedPhrases.
     */
    data: SecretSeedPhraseCreateManyInput | SecretSeedPhraseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SecretSeedPhrase createManyAndReturn
   */
  export type SecretSeedPhraseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretSeedPhrase
     */
    select?: SecretSeedPhraseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SecretSeedPhrases.
     */
    data: SecretSeedPhraseCreateManyInput | SecretSeedPhraseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SecretSeedPhrase update
   */
  export type SecretSeedPhraseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretSeedPhrase
     */
    select?: SecretSeedPhraseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretSeedPhraseInclude<ExtArgs> | null
    /**
     * The data needed to update a SecretSeedPhrase.
     */
    data: XOR<SecretSeedPhraseUpdateInput, SecretSeedPhraseUncheckedUpdateInput>
    /**
     * Choose, which SecretSeedPhrase to update.
     */
    where: SecretSeedPhraseWhereUniqueInput
  }

  /**
   * SecretSeedPhrase updateMany
   */
  export type SecretSeedPhraseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SecretSeedPhrases.
     */
    data: XOR<SecretSeedPhraseUpdateManyMutationInput, SecretSeedPhraseUncheckedUpdateManyInput>
    /**
     * Filter which SecretSeedPhrases to update
     */
    where?: SecretSeedPhraseWhereInput
  }

  /**
   * SecretSeedPhrase upsert
   */
  export type SecretSeedPhraseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretSeedPhrase
     */
    select?: SecretSeedPhraseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretSeedPhraseInclude<ExtArgs> | null
    /**
     * The filter to search for the SecretSeedPhrase to update in case it exists.
     */
    where: SecretSeedPhraseWhereUniqueInput
    /**
     * In case the SecretSeedPhrase found by the `where` argument doesn't exist, create a new SecretSeedPhrase with this data.
     */
    create: XOR<SecretSeedPhraseCreateInput, SecretSeedPhraseUncheckedCreateInput>
    /**
     * In case the SecretSeedPhrase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SecretSeedPhraseUpdateInput, SecretSeedPhraseUncheckedUpdateInput>
  }

  /**
   * SecretSeedPhrase delete
   */
  export type SecretSeedPhraseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretSeedPhrase
     */
    select?: SecretSeedPhraseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretSeedPhraseInclude<ExtArgs> | null
    /**
     * Filter which SecretSeedPhrase to delete.
     */
    where: SecretSeedPhraseWhereUniqueInput
  }

  /**
   * SecretSeedPhrase deleteMany
   */
  export type SecretSeedPhraseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecretSeedPhrases to delete
     */
    where?: SecretSeedPhraseWhereInput
  }

  /**
   * SecretSeedPhrase.Accounts
   */
  export type SecretSeedPhrase$AccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * SecretSeedPhrase without action
   */
  export type SecretSeedPhraseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretSeedPhrase
     */
    select?: SecretSeedPhraseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretSeedPhraseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    account_id: 'account_id',
    private_key: 'private_key',
    created_at: 'created_at',
    seed_id: 'seed_id'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SecretSeedPhraseScalarFieldEnum: {
    seed_id: 'seed_id',
    user_id: 'user_id',
    seed_phrase: 'seed_phrase',
    is_primary: 'is_primary',
    created_at: 'created_at'
  };

  export type SecretSeedPhraseScalarFieldEnum = (typeof SecretSeedPhraseScalarFieldEnum)[keyof typeof SecretSeedPhraseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    account_id?: StringFilter<"Account"> | string
    private_key?: BytesFilter<"Account"> | Uint8Array
    created_at?: DateTimeFilter<"Account"> | Date | string
    seed_id?: StringNullableFilter<"Account"> | string | null
    secretSeedPhrase?: XOR<SecretSeedPhraseNullableScalarRelationFilter, SecretSeedPhraseWhereInput> | null
  }

  export type AccountOrderByWithRelationInput = {
    account_id?: SortOrder
    private_key?: SortOrder
    created_at?: SortOrder
    seed_id?: SortOrderInput | SortOrder
    secretSeedPhrase?: SecretSeedPhraseOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    account_id?: string
    private_key?: Uint8Array
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    created_at?: DateTimeFilter<"Account"> | Date | string
    seed_id?: StringNullableFilter<"Account"> | string | null
    secretSeedPhrase?: XOR<SecretSeedPhraseNullableScalarRelationFilter, SecretSeedPhraseWhereInput> | null
  }, "account_id" | "account_id" | "private_key">

  export type AccountOrderByWithAggregationInput = {
    account_id?: SortOrder
    private_key?: SortOrder
    created_at?: SortOrder
    seed_id?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    account_id?: StringWithAggregatesFilter<"Account"> | string
    private_key?: BytesWithAggregatesFilter<"Account"> | Uint8Array
    created_at?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    seed_id?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SecretSeedPhraseWhereInput = {
    AND?: SecretSeedPhraseWhereInput | SecretSeedPhraseWhereInput[]
    OR?: SecretSeedPhraseWhereInput[]
    NOT?: SecretSeedPhraseWhereInput | SecretSeedPhraseWhereInput[]
    seed_id?: StringFilter<"SecretSeedPhrase"> | string
    user_id?: StringFilter<"SecretSeedPhrase"> | string
    seed_phrase?: BytesFilter<"SecretSeedPhrase"> | Uint8Array
    is_primary?: BoolFilter<"SecretSeedPhrase"> | boolean
    created_at?: DateTimeFilter<"SecretSeedPhrase"> | Date | string
    Accounts?: AccountListRelationFilter
  }

  export type SecretSeedPhraseOrderByWithRelationInput = {
    seed_id?: SortOrder
    user_id?: SortOrder
    seed_phrase?: SortOrder
    is_primary?: SortOrder
    created_at?: SortOrder
    Accounts?: AccountOrderByRelationAggregateInput
  }

  export type SecretSeedPhraseWhereUniqueInput = Prisma.AtLeast<{
    seed_id?: string
    AND?: SecretSeedPhraseWhereInput | SecretSeedPhraseWhereInput[]
    OR?: SecretSeedPhraseWhereInput[]
    NOT?: SecretSeedPhraseWhereInput | SecretSeedPhraseWhereInput[]
    user_id?: StringFilter<"SecretSeedPhrase"> | string
    seed_phrase?: BytesFilter<"SecretSeedPhrase"> | Uint8Array
    is_primary?: BoolFilter<"SecretSeedPhrase"> | boolean
    created_at?: DateTimeFilter<"SecretSeedPhrase"> | Date | string
    Accounts?: AccountListRelationFilter
  }, "seed_id">

  export type SecretSeedPhraseOrderByWithAggregationInput = {
    seed_id?: SortOrder
    user_id?: SortOrder
    seed_phrase?: SortOrder
    is_primary?: SortOrder
    created_at?: SortOrder
    _count?: SecretSeedPhraseCountOrderByAggregateInput
    _max?: SecretSeedPhraseMaxOrderByAggregateInput
    _min?: SecretSeedPhraseMinOrderByAggregateInput
  }

  export type SecretSeedPhraseScalarWhereWithAggregatesInput = {
    AND?: SecretSeedPhraseScalarWhereWithAggregatesInput | SecretSeedPhraseScalarWhereWithAggregatesInput[]
    OR?: SecretSeedPhraseScalarWhereWithAggregatesInput[]
    NOT?: SecretSeedPhraseScalarWhereWithAggregatesInput | SecretSeedPhraseScalarWhereWithAggregatesInput[]
    seed_id?: StringWithAggregatesFilter<"SecretSeedPhrase"> | string
    user_id?: StringWithAggregatesFilter<"SecretSeedPhrase"> | string
    seed_phrase?: BytesWithAggregatesFilter<"SecretSeedPhrase"> | Uint8Array
    is_primary?: BoolWithAggregatesFilter<"SecretSeedPhrase"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"SecretSeedPhrase"> | Date | string
  }

  export type AccountCreateInput = {
    account_id: string
    private_key: Uint8Array
    created_at?: Date | string
    secretSeedPhrase?: SecretSeedPhraseCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    account_id: string
    private_key: Uint8Array
    created_at?: Date | string
    seed_id?: string | null
  }

  export type AccountUpdateInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    private_key?: BytesFieldUpdateOperationsInput | Uint8Array
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    secretSeedPhrase?: SecretSeedPhraseUpdateOneWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    private_key?: BytesFieldUpdateOperationsInput | Uint8Array
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    seed_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    account_id: string
    private_key: Uint8Array
    created_at?: Date | string
    seed_id?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    private_key?: BytesFieldUpdateOperationsInput | Uint8Array
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    private_key?: BytesFieldUpdateOperationsInput | Uint8Array
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    seed_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SecretSeedPhraseCreateInput = {
    seed_id?: string
    user_id: string
    seed_phrase: Uint8Array
    is_primary?: boolean
    created_at?: Date | string
    Accounts?: AccountCreateNestedManyWithoutSecretSeedPhraseInput
  }

  export type SecretSeedPhraseUncheckedCreateInput = {
    seed_id?: string
    user_id: string
    seed_phrase: Uint8Array
    is_primary?: boolean
    created_at?: Date | string
    Accounts?: AccountUncheckedCreateNestedManyWithoutSecretSeedPhraseInput
  }

  export type SecretSeedPhraseUpdateInput = {
    seed_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    seed_phrase?: BytesFieldUpdateOperationsInput | Uint8Array
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Accounts?: AccountUpdateManyWithoutSecretSeedPhraseNestedInput
  }

  export type SecretSeedPhraseUncheckedUpdateInput = {
    seed_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    seed_phrase?: BytesFieldUpdateOperationsInput | Uint8Array
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Accounts?: AccountUncheckedUpdateManyWithoutSecretSeedPhraseNestedInput
  }

  export type SecretSeedPhraseCreateManyInput = {
    seed_id?: string
    user_id: string
    seed_phrase: Uint8Array
    is_primary?: boolean
    created_at?: Date | string
  }

  export type SecretSeedPhraseUpdateManyMutationInput = {
    seed_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    seed_phrase?: BytesFieldUpdateOperationsInput | Uint8Array
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecretSeedPhraseUncheckedUpdateManyInput = {
    seed_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    seed_phrase?: BytesFieldUpdateOperationsInput | Uint8Array
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SecretSeedPhraseNullableScalarRelationFilter = {
    is?: SecretSeedPhraseWhereInput | null
    isNot?: SecretSeedPhraseWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountCountOrderByAggregateInput = {
    account_id?: SortOrder
    private_key?: SortOrder
    created_at?: SortOrder
    seed_id?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    account_id?: SortOrder
    private_key?: SortOrder
    created_at?: SortOrder
    seed_id?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    account_id?: SortOrder
    private_key?: SortOrder
    created_at?: SortOrder
    seed_id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SecretSeedPhraseCountOrderByAggregateInput = {
    seed_id?: SortOrder
    user_id?: SortOrder
    seed_phrase?: SortOrder
    is_primary?: SortOrder
    created_at?: SortOrder
  }

  export type SecretSeedPhraseMaxOrderByAggregateInput = {
    seed_id?: SortOrder
    user_id?: SortOrder
    seed_phrase?: SortOrder
    is_primary?: SortOrder
    created_at?: SortOrder
  }

  export type SecretSeedPhraseMinOrderByAggregateInput = {
    seed_id?: SortOrder
    user_id?: SortOrder
    seed_phrase?: SortOrder
    is_primary?: SortOrder
    created_at?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SecretSeedPhraseCreateNestedOneWithoutAccountsInput = {
    create?: XOR<SecretSeedPhraseCreateWithoutAccountsInput, SecretSeedPhraseUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: SecretSeedPhraseCreateOrConnectWithoutAccountsInput
    connect?: SecretSeedPhraseWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Uint8Array
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SecretSeedPhraseUpdateOneWithoutAccountsNestedInput = {
    create?: XOR<SecretSeedPhraseCreateWithoutAccountsInput, SecretSeedPhraseUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: SecretSeedPhraseCreateOrConnectWithoutAccountsInput
    upsert?: SecretSeedPhraseUpsertWithoutAccountsInput
    disconnect?: SecretSeedPhraseWhereInput | boolean
    delete?: SecretSeedPhraseWhereInput | boolean
    connect?: SecretSeedPhraseWhereUniqueInput
    update?: XOR<XOR<SecretSeedPhraseUpdateToOneWithWhereWithoutAccountsInput, SecretSeedPhraseUpdateWithoutAccountsInput>, SecretSeedPhraseUncheckedUpdateWithoutAccountsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AccountCreateNestedManyWithoutSecretSeedPhraseInput = {
    create?: XOR<AccountCreateWithoutSecretSeedPhraseInput, AccountUncheckedCreateWithoutSecretSeedPhraseInput> | AccountCreateWithoutSecretSeedPhraseInput[] | AccountUncheckedCreateWithoutSecretSeedPhraseInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutSecretSeedPhraseInput | AccountCreateOrConnectWithoutSecretSeedPhraseInput[]
    createMany?: AccountCreateManySecretSeedPhraseInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutSecretSeedPhraseInput = {
    create?: XOR<AccountCreateWithoutSecretSeedPhraseInput, AccountUncheckedCreateWithoutSecretSeedPhraseInput> | AccountCreateWithoutSecretSeedPhraseInput[] | AccountUncheckedCreateWithoutSecretSeedPhraseInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutSecretSeedPhraseInput | AccountCreateOrConnectWithoutSecretSeedPhraseInput[]
    createMany?: AccountCreateManySecretSeedPhraseInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AccountUpdateManyWithoutSecretSeedPhraseNestedInput = {
    create?: XOR<AccountCreateWithoutSecretSeedPhraseInput, AccountUncheckedCreateWithoutSecretSeedPhraseInput> | AccountCreateWithoutSecretSeedPhraseInput[] | AccountUncheckedCreateWithoutSecretSeedPhraseInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutSecretSeedPhraseInput | AccountCreateOrConnectWithoutSecretSeedPhraseInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutSecretSeedPhraseInput | AccountUpsertWithWhereUniqueWithoutSecretSeedPhraseInput[]
    createMany?: AccountCreateManySecretSeedPhraseInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutSecretSeedPhraseInput | AccountUpdateWithWhereUniqueWithoutSecretSeedPhraseInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutSecretSeedPhraseInput | AccountUpdateManyWithWhereWithoutSecretSeedPhraseInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutSecretSeedPhraseNestedInput = {
    create?: XOR<AccountCreateWithoutSecretSeedPhraseInput, AccountUncheckedCreateWithoutSecretSeedPhraseInput> | AccountCreateWithoutSecretSeedPhraseInput[] | AccountUncheckedCreateWithoutSecretSeedPhraseInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutSecretSeedPhraseInput | AccountCreateOrConnectWithoutSecretSeedPhraseInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutSecretSeedPhraseInput | AccountUpsertWithWhereUniqueWithoutSecretSeedPhraseInput[]
    createMany?: AccountCreateManySecretSeedPhraseInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutSecretSeedPhraseInput | AccountUpdateWithWhereUniqueWithoutSecretSeedPhraseInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutSecretSeedPhraseInput | AccountUpdateManyWithWhereWithoutSecretSeedPhraseInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SecretSeedPhraseCreateWithoutAccountsInput = {
    seed_id?: string
    user_id: string
    seed_phrase: Uint8Array
    is_primary?: boolean
    created_at?: Date | string
  }

  export type SecretSeedPhraseUncheckedCreateWithoutAccountsInput = {
    seed_id?: string
    user_id: string
    seed_phrase: Uint8Array
    is_primary?: boolean
    created_at?: Date | string
  }

  export type SecretSeedPhraseCreateOrConnectWithoutAccountsInput = {
    where: SecretSeedPhraseWhereUniqueInput
    create: XOR<SecretSeedPhraseCreateWithoutAccountsInput, SecretSeedPhraseUncheckedCreateWithoutAccountsInput>
  }

  export type SecretSeedPhraseUpsertWithoutAccountsInput = {
    update: XOR<SecretSeedPhraseUpdateWithoutAccountsInput, SecretSeedPhraseUncheckedUpdateWithoutAccountsInput>
    create: XOR<SecretSeedPhraseCreateWithoutAccountsInput, SecretSeedPhraseUncheckedCreateWithoutAccountsInput>
    where?: SecretSeedPhraseWhereInput
  }

  export type SecretSeedPhraseUpdateToOneWithWhereWithoutAccountsInput = {
    where?: SecretSeedPhraseWhereInput
    data: XOR<SecretSeedPhraseUpdateWithoutAccountsInput, SecretSeedPhraseUncheckedUpdateWithoutAccountsInput>
  }

  export type SecretSeedPhraseUpdateWithoutAccountsInput = {
    seed_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    seed_phrase?: BytesFieldUpdateOperationsInput | Uint8Array
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecretSeedPhraseUncheckedUpdateWithoutAccountsInput = {
    seed_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    seed_phrase?: BytesFieldUpdateOperationsInput | Uint8Array
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateWithoutSecretSeedPhraseInput = {
    account_id: string
    private_key: Uint8Array
    created_at?: Date | string
  }

  export type AccountUncheckedCreateWithoutSecretSeedPhraseInput = {
    account_id: string
    private_key: Uint8Array
    created_at?: Date | string
  }

  export type AccountCreateOrConnectWithoutSecretSeedPhraseInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutSecretSeedPhraseInput, AccountUncheckedCreateWithoutSecretSeedPhraseInput>
  }

  export type AccountCreateManySecretSeedPhraseInputEnvelope = {
    data: AccountCreateManySecretSeedPhraseInput | AccountCreateManySecretSeedPhraseInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutSecretSeedPhraseInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutSecretSeedPhraseInput, AccountUncheckedUpdateWithoutSecretSeedPhraseInput>
    create: XOR<AccountCreateWithoutSecretSeedPhraseInput, AccountUncheckedCreateWithoutSecretSeedPhraseInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutSecretSeedPhraseInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutSecretSeedPhraseInput, AccountUncheckedUpdateWithoutSecretSeedPhraseInput>
  }

  export type AccountUpdateManyWithWhereWithoutSecretSeedPhraseInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutSecretSeedPhraseInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    account_id?: StringFilter<"Account"> | string
    private_key?: BytesFilter<"Account"> | Uint8Array
    created_at?: DateTimeFilter<"Account"> | Date | string
    seed_id?: StringNullableFilter<"Account"> | string | null
  }

  export type AccountCreateManySecretSeedPhraseInput = {
    account_id: string
    private_key: Uint8Array
    created_at?: Date | string
  }

  export type AccountUpdateWithoutSecretSeedPhraseInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    private_key?: BytesFieldUpdateOperationsInput | Uint8Array
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutSecretSeedPhraseInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    private_key?: BytesFieldUpdateOperationsInput | Uint8Array
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutSecretSeedPhraseInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    private_key?: BytesFieldUpdateOperationsInput | Uint8Array
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}