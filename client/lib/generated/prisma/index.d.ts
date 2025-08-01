
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model Jwks
 * 
 */
export type Jwks = $Result.DefaultSelection<Prisma.$JwksPayload>
/**
 * Model TripPlanStatus
 * 
 */
export type TripPlanStatus = $Result.DefaultSelection<Prisma.$TripPlanStatusPayload>
/**
 * Model TripPlanOutput
 * 
 */
export type TripPlanOutput = $Result.DefaultSelection<Prisma.$TripPlanOutputPayload>
/**
 * Model TripPlan
 * 
 */
export type TripPlan = $Result.DefaultSelection<Prisma.$TripPlanPayload>
/**
 * Model plan_tasks
 * 
 */
export type plan_tasks = $Result.DefaultSelection<Prisma.$plan_tasksPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const plan_task_status: {
  queued: 'queued',
  in_progress: 'in_progress',
  success: 'success',
  error: 'error'
};

export type plan_task_status = (typeof plan_task_status)[keyof typeof plan_task_status]

}

export type plan_task_status = $Enums.plan_task_status

export const plan_task_status: typeof $Enums.plan_task_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jwks`: Exposes CRUD operations for the **Jwks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jwks
    * const jwks = await prisma.jwks.findMany()
    * ```
    */
  get jwks(): Prisma.JwksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tripPlanStatus`: Exposes CRUD operations for the **TripPlanStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TripPlanStatuses
    * const tripPlanStatuses = await prisma.tripPlanStatus.findMany()
    * ```
    */
  get tripPlanStatus(): Prisma.TripPlanStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tripPlanOutput`: Exposes CRUD operations for the **TripPlanOutput** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TripPlanOutputs
    * const tripPlanOutputs = await prisma.tripPlanOutput.findMany()
    * ```
    */
  get tripPlanOutput(): Prisma.TripPlanOutputDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tripPlan`: Exposes CRUD operations for the **TripPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TripPlans
    * const tripPlans = await prisma.tripPlan.findMany()
    * ```
    */
  get tripPlan(): Prisma.TripPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plan_tasks`: Exposes CRUD operations for the **plan_tasks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plan_tasks
    * const plan_tasks = await prisma.plan_tasks.findMany()
    * ```
    */
  get plan_tasks(): Prisma.plan_tasksDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification',
    Jwks: 'Jwks',
    TripPlanStatus: 'TripPlanStatus',
    TripPlanOutput: 'TripPlanOutput',
    TripPlan: 'TripPlan',
    plan_tasks: 'plan_tasks'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "account" | "verification" | "jwks" | "tripPlanStatus" | "tripPlanOutput" | "tripPlan" | "plan_tasks"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
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
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
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
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      Jwks: {
        payload: Prisma.$JwksPayload<ExtArgs>
        fields: Prisma.JwksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JwksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JwksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwksPayload>
          }
          findFirst: {
            args: Prisma.JwksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JwksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwksPayload>
          }
          findMany: {
            args: Prisma.JwksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwksPayload>[]
          }
          create: {
            args: Prisma.JwksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwksPayload>
          }
          createMany: {
            args: Prisma.JwksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JwksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwksPayload>[]
          }
          delete: {
            args: Prisma.JwksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwksPayload>
          }
          update: {
            args: Prisma.JwksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwksPayload>
          }
          deleteMany: {
            args: Prisma.JwksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JwksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JwksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwksPayload>[]
          }
          upsert: {
            args: Prisma.JwksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwksPayload>
          }
          aggregate: {
            args: Prisma.JwksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJwks>
          }
          groupBy: {
            args: Prisma.JwksGroupByArgs<ExtArgs>
            result: $Utils.Optional<JwksGroupByOutputType>[]
          }
          count: {
            args: Prisma.JwksCountArgs<ExtArgs>
            result: $Utils.Optional<JwksCountAggregateOutputType> | number
          }
        }
      }
      TripPlanStatus: {
        payload: Prisma.$TripPlanStatusPayload<ExtArgs>
        fields: Prisma.TripPlanStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripPlanStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripPlanStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanStatusPayload>
          }
          findFirst: {
            args: Prisma.TripPlanStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripPlanStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanStatusPayload>
          }
          findMany: {
            args: Prisma.TripPlanStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanStatusPayload>[]
          }
          create: {
            args: Prisma.TripPlanStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanStatusPayload>
          }
          createMany: {
            args: Prisma.TripPlanStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripPlanStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanStatusPayload>[]
          }
          delete: {
            args: Prisma.TripPlanStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanStatusPayload>
          }
          update: {
            args: Prisma.TripPlanStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanStatusPayload>
          }
          deleteMany: {
            args: Prisma.TripPlanStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripPlanStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripPlanStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanStatusPayload>[]
          }
          upsert: {
            args: Prisma.TripPlanStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanStatusPayload>
          }
          aggregate: {
            args: Prisma.TripPlanStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTripPlanStatus>
          }
          groupBy: {
            args: Prisma.TripPlanStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripPlanStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripPlanStatusCountArgs<ExtArgs>
            result: $Utils.Optional<TripPlanStatusCountAggregateOutputType> | number
          }
        }
      }
      TripPlanOutput: {
        payload: Prisma.$TripPlanOutputPayload<ExtArgs>
        fields: Prisma.TripPlanOutputFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripPlanOutputFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanOutputPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripPlanOutputFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanOutputPayload>
          }
          findFirst: {
            args: Prisma.TripPlanOutputFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanOutputPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripPlanOutputFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanOutputPayload>
          }
          findMany: {
            args: Prisma.TripPlanOutputFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanOutputPayload>[]
          }
          create: {
            args: Prisma.TripPlanOutputCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanOutputPayload>
          }
          createMany: {
            args: Prisma.TripPlanOutputCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripPlanOutputCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanOutputPayload>[]
          }
          delete: {
            args: Prisma.TripPlanOutputDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanOutputPayload>
          }
          update: {
            args: Prisma.TripPlanOutputUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanOutputPayload>
          }
          deleteMany: {
            args: Prisma.TripPlanOutputDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripPlanOutputUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripPlanOutputUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanOutputPayload>[]
          }
          upsert: {
            args: Prisma.TripPlanOutputUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanOutputPayload>
          }
          aggregate: {
            args: Prisma.TripPlanOutputAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTripPlanOutput>
          }
          groupBy: {
            args: Prisma.TripPlanOutputGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripPlanOutputGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripPlanOutputCountArgs<ExtArgs>
            result: $Utils.Optional<TripPlanOutputCountAggregateOutputType> | number
          }
        }
      }
      TripPlan: {
        payload: Prisma.$TripPlanPayload<ExtArgs>
        fields: Prisma.TripPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>
          }
          findFirst: {
            args: Prisma.TripPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>
          }
          findMany: {
            args: Prisma.TripPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>[]
          }
          create: {
            args: Prisma.TripPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>
          }
          createMany: {
            args: Prisma.TripPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>[]
          }
          delete: {
            args: Prisma.TripPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>
          }
          update: {
            args: Prisma.TripPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>
          }
          deleteMany: {
            args: Prisma.TripPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>[]
          }
          upsert: {
            args: Prisma.TripPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>
          }
          aggregate: {
            args: Prisma.TripPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTripPlan>
          }
          groupBy: {
            args: Prisma.TripPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripPlanCountArgs<ExtArgs>
            result: $Utils.Optional<TripPlanCountAggregateOutputType> | number
          }
        }
      }
      plan_tasks: {
        payload: Prisma.$plan_tasksPayload<ExtArgs>
        fields: Prisma.plan_tasksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.plan_tasksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_tasksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.plan_tasksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_tasksPayload>
          }
          findFirst: {
            args: Prisma.plan_tasksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_tasksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.plan_tasksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_tasksPayload>
          }
          findMany: {
            args: Prisma.plan_tasksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_tasksPayload>[]
          }
          create: {
            args: Prisma.plan_tasksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_tasksPayload>
          }
          createMany: {
            args: Prisma.plan_tasksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.plan_tasksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_tasksPayload>[]
          }
          delete: {
            args: Prisma.plan_tasksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_tasksPayload>
          }
          update: {
            args: Prisma.plan_tasksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_tasksPayload>
          }
          deleteMany: {
            args: Prisma.plan_tasksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.plan_tasksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.plan_tasksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_tasksPayload>[]
          }
          upsert: {
            args: Prisma.plan_tasksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_tasksPayload>
          }
          aggregate: {
            args: Prisma.Plan_tasksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlan_tasks>
          }
          groupBy: {
            args: Prisma.plan_tasksGroupByArgs<ExtArgs>
            result: $Utils.Optional<Plan_tasksGroupByOutputType>[]
          }
          count: {
            args: Prisma.plan_tasksCountArgs<ExtArgs>
            result: $Utils.Optional<Plan_tasksCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
    jwks?: JwksOmit
    tripPlanStatus?: TripPlanStatusOmit
    tripPlanOutput?: TripPlanOutputOmit
    tripPlan?: TripPlanOmit
    plan_tasks?: plan_tasksOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    tripPlans: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    tripPlans?: boolean | UserCountOutputTypeCountTripPlansArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTripPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripPlanWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    tripPlans?: boolean | User$tripPlansArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    tripPlans?: boolean | User$tripPlansArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      tripPlans: Prisma.$TripPlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tripPlans<T extends User$tripPlansArgs<ExtArgs> = {}>(args?: Subset<T, User$tripPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
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
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.tripPlans
   */
  export type User$tripPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    where?: TripPlanWhereInput
    orderBy?: TripPlanOrderByWithRelationInput | TripPlanOrderByWithRelationInput[]
    cursor?: TripPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripPlanScalarFieldEnum | TripPlanScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
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
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
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
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
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
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
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
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
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
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
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
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
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
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
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
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
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
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
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
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
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
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
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
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
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
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
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
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date | null
    updatedAt: Date | null
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
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
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Model Jwks
   */

  export type AggregateJwks = {
    _count: JwksCountAggregateOutputType | null
    _min: JwksMinAggregateOutputType | null
    _max: JwksMaxAggregateOutputType | null
  }

  export type JwksMinAggregateOutputType = {
    id: string | null
    publicKey: string | null
    privateKey: string | null
    createdAt: Date | null
  }

  export type JwksMaxAggregateOutputType = {
    id: string | null
    publicKey: string | null
    privateKey: string | null
    createdAt: Date | null
  }

  export type JwksCountAggregateOutputType = {
    id: number
    publicKey: number
    privateKey: number
    createdAt: number
    _all: number
  }


  export type JwksMinAggregateInputType = {
    id?: true
    publicKey?: true
    privateKey?: true
    createdAt?: true
  }

  export type JwksMaxAggregateInputType = {
    id?: true
    publicKey?: true
    privateKey?: true
    createdAt?: true
  }

  export type JwksCountAggregateInputType = {
    id?: true
    publicKey?: true
    privateKey?: true
    createdAt?: true
    _all?: true
  }

  export type JwksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jwks to aggregate.
     */
    where?: JwksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jwks to fetch.
     */
    orderBy?: JwksOrderByWithRelationInput | JwksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JwksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jwks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jwks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jwks
    **/
    _count?: true | JwksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JwksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JwksMaxAggregateInputType
  }

  export type GetJwksAggregateType<T extends JwksAggregateArgs> = {
        [P in keyof T & keyof AggregateJwks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJwks[P]>
      : GetScalarType<T[P], AggregateJwks[P]>
  }




  export type JwksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JwksWhereInput
    orderBy?: JwksOrderByWithAggregationInput | JwksOrderByWithAggregationInput[]
    by: JwksScalarFieldEnum[] | JwksScalarFieldEnum
    having?: JwksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JwksCountAggregateInputType | true
    _min?: JwksMinAggregateInputType
    _max?: JwksMaxAggregateInputType
  }

  export type JwksGroupByOutputType = {
    id: string
    publicKey: string
    privateKey: string
    createdAt: Date
    _count: JwksCountAggregateOutputType | null
    _min: JwksMinAggregateOutputType | null
    _max: JwksMaxAggregateOutputType | null
  }

  type GetJwksGroupByPayload<T extends JwksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JwksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JwksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JwksGroupByOutputType[P]>
            : GetScalarType<T[P], JwksGroupByOutputType[P]>
        }
      >
    >


  export type JwksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKey?: boolean
    privateKey?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["jwks"]>

  export type JwksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKey?: boolean
    privateKey?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["jwks"]>

  export type JwksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKey?: boolean
    privateKey?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["jwks"]>

  export type JwksSelectScalar = {
    id?: boolean
    publicKey?: boolean
    privateKey?: boolean
    createdAt?: boolean
  }

  export type JwksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "publicKey" | "privateKey" | "createdAt", ExtArgs["result"]["jwks"]>

  export type $JwksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jwks"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      publicKey: string
      privateKey: string
      createdAt: Date
    }, ExtArgs["result"]["jwks"]>
    composites: {}
  }

  type JwksGetPayload<S extends boolean | null | undefined | JwksDefaultArgs> = $Result.GetResult<Prisma.$JwksPayload, S>

  type JwksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JwksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JwksCountAggregateInputType | true
    }

  export interface JwksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jwks'], meta: { name: 'Jwks' } }
    /**
     * Find zero or one Jwks that matches the filter.
     * @param {JwksFindUniqueArgs} args - Arguments to find a Jwks
     * @example
     * // Get one Jwks
     * const jwks = await prisma.jwks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JwksFindUniqueArgs>(args: SelectSubset<T, JwksFindUniqueArgs<ExtArgs>>): Prisma__JwksClient<$Result.GetResult<Prisma.$JwksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jwks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JwksFindUniqueOrThrowArgs} args - Arguments to find a Jwks
     * @example
     * // Get one Jwks
     * const jwks = await prisma.jwks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JwksFindUniqueOrThrowArgs>(args: SelectSubset<T, JwksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JwksClient<$Result.GetResult<Prisma.$JwksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jwks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwksFindFirstArgs} args - Arguments to find a Jwks
     * @example
     * // Get one Jwks
     * const jwks = await prisma.jwks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JwksFindFirstArgs>(args?: SelectSubset<T, JwksFindFirstArgs<ExtArgs>>): Prisma__JwksClient<$Result.GetResult<Prisma.$JwksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jwks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwksFindFirstOrThrowArgs} args - Arguments to find a Jwks
     * @example
     * // Get one Jwks
     * const jwks = await prisma.jwks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JwksFindFirstOrThrowArgs>(args?: SelectSubset<T, JwksFindFirstOrThrowArgs<ExtArgs>>): Prisma__JwksClient<$Result.GetResult<Prisma.$JwksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jwks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jwks
     * const jwks = await prisma.jwks.findMany()
     * 
     * // Get first 10 Jwks
     * const jwks = await prisma.jwks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jwksWithIdOnly = await prisma.jwks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JwksFindManyArgs>(args?: SelectSubset<T, JwksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JwksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jwks.
     * @param {JwksCreateArgs} args - Arguments to create a Jwks.
     * @example
     * // Create one Jwks
     * const Jwks = await prisma.jwks.create({
     *   data: {
     *     // ... data to create a Jwks
     *   }
     * })
     * 
     */
    create<T extends JwksCreateArgs>(args: SelectSubset<T, JwksCreateArgs<ExtArgs>>): Prisma__JwksClient<$Result.GetResult<Prisma.$JwksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jwks.
     * @param {JwksCreateManyArgs} args - Arguments to create many Jwks.
     * @example
     * // Create many Jwks
     * const jwks = await prisma.jwks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JwksCreateManyArgs>(args?: SelectSubset<T, JwksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jwks and returns the data saved in the database.
     * @param {JwksCreateManyAndReturnArgs} args - Arguments to create many Jwks.
     * @example
     * // Create many Jwks
     * const jwks = await prisma.jwks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jwks and only return the `id`
     * const jwksWithIdOnly = await prisma.jwks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JwksCreateManyAndReturnArgs>(args?: SelectSubset<T, JwksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JwksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Jwks.
     * @param {JwksDeleteArgs} args - Arguments to delete one Jwks.
     * @example
     * // Delete one Jwks
     * const Jwks = await prisma.jwks.delete({
     *   where: {
     *     // ... filter to delete one Jwks
     *   }
     * })
     * 
     */
    delete<T extends JwksDeleteArgs>(args: SelectSubset<T, JwksDeleteArgs<ExtArgs>>): Prisma__JwksClient<$Result.GetResult<Prisma.$JwksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jwks.
     * @param {JwksUpdateArgs} args - Arguments to update one Jwks.
     * @example
     * // Update one Jwks
     * const jwks = await prisma.jwks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JwksUpdateArgs>(args: SelectSubset<T, JwksUpdateArgs<ExtArgs>>): Prisma__JwksClient<$Result.GetResult<Prisma.$JwksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jwks.
     * @param {JwksDeleteManyArgs} args - Arguments to filter Jwks to delete.
     * @example
     * // Delete a few Jwks
     * const { count } = await prisma.jwks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JwksDeleteManyArgs>(args?: SelectSubset<T, JwksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jwks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jwks
     * const jwks = await prisma.jwks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JwksUpdateManyArgs>(args: SelectSubset<T, JwksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jwks and returns the data updated in the database.
     * @param {JwksUpdateManyAndReturnArgs} args - Arguments to update many Jwks.
     * @example
     * // Update many Jwks
     * const jwks = await prisma.jwks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jwks and only return the `id`
     * const jwksWithIdOnly = await prisma.jwks.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JwksUpdateManyAndReturnArgs>(args: SelectSubset<T, JwksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JwksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Jwks.
     * @param {JwksUpsertArgs} args - Arguments to update or create a Jwks.
     * @example
     * // Update or create a Jwks
     * const jwks = await prisma.jwks.upsert({
     *   create: {
     *     // ... data to create a Jwks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jwks we want to update
     *   }
     * })
     */
    upsert<T extends JwksUpsertArgs>(args: SelectSubset<T, JwksUpsertArgs<ExtArgs>>): Prisma__JwksClient<$Result.GetResult<Prisma.$JwksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jwks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwksCountArgs} args - Arguments to filter Jwks to count.
     * @example
     * // Count the number of Jwks
     * const count = await prisma.jwks.count({
     *   where: {
     *     // ... the filter for the Jwks we want to count
     *   }
     * })
    **/
    count<T extends JwksCountArgs>(
      args?: Subset<T, JwksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JwksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jwks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JwksAggregateArgs>(args: Subset<T, JwksAggregateArgs>): Prisma.PrismaPromise<GetJwksAggregateType<T>>

    /**
     * Group by Jwks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwksGroupByArgs} args - Group by arguments.
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
      T extends JwksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JwksGroupByArgs['orderBy'] }
        : { orderBy?: JwksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JwksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJwksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jwks model
   */
  readonly fields: JwksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jwks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JwksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Jwks model
   */
  interface JwksFieldRefs {
    readonly id: FieldRef<"Jwks", 'String'>
    readonly publicKey: FieldRef<"Jwks", 'String'>
    readonly privateKey: FieldRef<"Jwks", 'String'>
    readonly createdAt: FieldRef<"Jwks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Jwks findUnique
   */
  export type JwksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwks
     */
    select?: JwksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jwks
     */
    omit?: JwksOmit<ExtArgs> | null
    /**
     * Filter, which Jwks to fetch.
     */
    where: JwksWhereUniqueInput
  }

  /**
   * Jwks findUniqueOrThrow
   */
  export type JwksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwks
     */
    select?: JwksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jwks
     */
    omit?: JwksOmit<ExtArgs> | null
    /**
     * Filter, which Jwks to fetch.
     */
    where: JwksWhereUniqueInput
  }

  /**
   * Jwks findFirst
   */
  export type JwksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwks
     */
    select?: JwksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jwks
     */
    omit?: JwksOmit<ExtArgs> | null
    /**
     * Filter, which Jwks to fetch.
     */
    where?: JwksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jwks to fetch.
     */
    orderBy?: JwksOrderByWithRelationInput | JwksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jwks.
     */
    cursor?: JwksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jwks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jwks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jwks.
     */
    distinct?: JwksScalarFieldEnum | JwksScalarFieldEnum[]
  }

  /**
   * Jwks findFirstOrThrow
   */
  export type JwksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwks
     */
    select?: JwksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jwks
     */
    omit?: JwksOmit<ExtArgs> | null
    /**
     * Filter, which Jwks to fetch.
     */
    where?: JwksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jwks to fetch.
     */
    orderBy?: JwksOrderByWithRelationInput | JwksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jwks.
     */
    cursor?: JwksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jwks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jwks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jwks.
     */
    distinct?: JwksScalarFieldEnum | JwksScalarFieldEnum[]
  }

  /**
   * Jwks findMany
   */
  export type JwksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwks
     */
    select?: JwksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jwks
     */
    omit?: JwksOmit<ExtArgs> | null
    /**
     * Filter, which Jwks to fetch.
     */
    where?: JwksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jwks to fetch.
     */
    orderBy?: JwksOrderByWithRelationInput | JwksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jwks.
     */
    cursor?: JwksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jwks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jwks.
     */
    skip?: number
    distinct?: JwksScalarFieldEnum | JwksScalarFieldEnum[]
  }

  /**
   * Jwks create
   */
  export type JwksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwks
     */
    select?: JwksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jwks
     */
    omit?: JwksOmit<ExtArgs> | null
    /**
     * The data needed to create a Jwks.
     */
    data: XOR<JwksCreateInput, JwksUncheckedCreateInput>
  }

  /**
   * Jwks createMany
   */
  export type JwksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jwks.
     */
    data: JwksCreateManyInput | JwksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jwks createManyAndReturn
   */
  export type JwksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwks
     */
    select?: JwksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Jwks
     */
    omit?: JwksOmit<ExtArgs> | null
    /**
     * The data used to create many Jwks.
     */
    data: JwksCreateManyInput | JwksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jwks update
   */
  export type JwksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwks
     */
    select?: JwksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jwks
     */
    omit?: JwksOmit<ExtArgs> | null
    /**
     * The data needed to update a Jwks.
     */
    data: XOR<JwksUpdateInput, JwksUncheckedUpdateInput>
    /**
     * Choose, which Jwks to update.
     */
    where: JwksWhereUniqueInput
  }

  /**
   * Jwks updateMany
   */
  export type JwksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jwks.
     */
    data: XOR<JwksUpdateManyMutationInput, JwksUncheckedUpdateManyInput>
    /**
     * Filter which Jwks to update
     */
    where?: JwksWhereInput
    /**
     * Limit how many Jwks to update.
     */
    limit?: number
  }

  /**
   * Jwks updateManyAndReturn
   */
  export type JwksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwks
     */
    select?: JwksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Jwks
     */
    omit?: JwksOmit<ExtArgs> | null
    /**
     * The data used to update Jwks.
     */
    data: XOR<JwksUpdateManyMutationInput, JwksUncheckedUpdateManyInput>
    /**
     * Filter which Jwks to update
     */
    where?: JwksWhereInput
    /**
     * Limit how many Jwks to update.
     */
    limit?: number
  }

  /**
   * Jwks upsert
   */
  export type JwksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwks
     */
    select?: JwksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jwks
     */
    omit?: JwksOmit<ExtArgs> | null
    /**
     * The filter to search for the Jwks to update in case it exists.
     */
    where: JwksWhereUniqueInput
    /**
     * In case the Jwks found by the `where` argument doesn't exist, create a new Jwks with this data.
     */
    create: XOR<JwksCreateInput, JwksUncheckedCreateInput>
    /**
     * In case the Jwks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JwksUpdateInput, JwksUncheckedUpdateInput>
  }

  /**
   * Jwks delete
   */
  export type JwksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwks
     */
    select?: JwksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jwks
     */
    omit?: JwksOmit<ExtArgs> | null
    /**
     * Filter which Jwks to delete.
     */
    where: JwksWhereUniqueInput
  }

  /**
   * Jwks deleteMany
   */
  export type JwksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jwks to delete
     */
    where?: JwksWhereInput
    /**
     * Limit how many Jwks to delete.
     */
    limit?: number
  }

  /**
   * Jwks without action
   */
  export type JwksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwks
     */
    select?: JwksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jwks
     */
    omit?: JwksOmit<ExtArgs> | null
  }


  /**
   * Model TripPlanStatus
   */

  export type AggregateTripPlanStatus = {
    _count: TripPlanStatusCountAggregateOutputType | null
    _min: TripPlanStatusMinAggregateOutputType | null
    _max: TripPlanStatusMaxAggregateOutputType | null
  }

  export type TripPlanStatusMinAggregateOutputType = {
    id: string | null
    tripPlanId: string | null
    status: string | null
    currentStep: string | null
    error: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripPlanStatusMaxAggregateOutputType = {
    id: string | null
    tripPlanId: string | null
    status: string | null
    currentStep: string | null
    error: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripPlanStatusCountAggregateOutputType = {
    id: number
    tripPlanId: number
    status: number
    currentStep: number
    error: number
    startedAt: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TripPlanStatusMinAggregateInputType = {
    id?: true
    tripPlanId?: true
    status?: true
    currentStep?: true
    error?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripPlanStatusMaxAggregateInputType = {
    id?: true
    tripPlanId?: true
    status?: true
    currentStep?: true
    error?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripPlanStatusCountAggregateInputType = {
    id?: true
    tripPlanId?: true
    status?: true
    currentStep?: true
    error?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TripPlanStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripPlanStatus to aggregate.
     */
    where?: TripPlanStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPlanStatuses to fetch.
     */
    orderBy?: TripPlanStatusOrderByWithRelationInput | TripPlanStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripPlanStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPlanStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPlanStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TripPlanStatuses
    **/
    _count?: true | TripPlanStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripPlanStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripPlanStatusMaxAggregateInputType
  }

  export type GetTripPlanStatusAggregateType<T extends TripPlanStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateTripPlanStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTripPlanStatus[P]>
      : GetScalarType<T[P], AggregateTripPlanStatus[P]>
  }




  export type TripPlanStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripPlanStatusWhereInput
    orderBy?: TripPlanStatusOrderByWithAggregationInput | TripPlanStatusOrderByWithAggregationInput[]
    by: TripPlanStatusScalarFieldEnum[] | TripPlanStatusScalarFieldEnum
    having?: TripPlanStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripPlanStatusCountAggregateInputType | true
    _min?: TripPlanStatusMinAggregateInputType
    _max?: TripPlanStatusMaxAggregateInputType
  }

  export type TripPlanStatusGroupByOutputType = {
    id: string
    tripPlanId: string
    status: string
    currentStep: string | null
    error: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: TripPlanStatusCountAggregateOutputType | null
    _min: TripPlanStatusMinAggregateOutputType | null
    _max: TripPlanStatusMaxAggregateOutputType | null
  }

  type GetTripPlanStatusGroupByPayload<T extends TripPlanStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripPlanStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripPlanStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripPlanStatusGroupByOutputType[P]>
            : GetScalarType<T[P], TripPlanStatusGroupByOutputType[P]>
        }
      >
    >


  export type TripPlanStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripPlanId?: boolean
    status?: boolean
    currentStep?: boolean
    error?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tripPlan?: boolean | TripPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripPlanStatus"]>

  export type TripPlanStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripPlanId?: boolean
    status?: boolean
    currentStep?: boolean
    error?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tripPlan?: boolean | TripPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripPlanStatus"]>

  export type TripPlanStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripPlanId?: boolean
    status?: boolean
    currentStep?: boolean
    error?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tripPlan?: boolean | TripPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripPlanStatus"]>

  export type TripPlanStatusSelectScalar = {
    id?: boolean
    tripPlanId?: boolean
    status?: boolean
    currentStep?: boolean
    error?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TripPlanStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripPlanId" | "status" | "currentStep" | "error" | "startedAt" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["tripPlanStatus"]>
  export type TripPlanStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tripPlan?: boolean | TripPlanDefaultArgs<ExtArgs>
  }
  export type TripPlanStatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tripPlan?: boolean | TripPlanDefaultArgs<ExtArgs>
  }
  export type TripPlanStatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tripPlan?: boolean | TripPlanDefaultArgs<ExtArgs>
  }

  export type $TripPlanStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TripPlanStatus"
    objects: {
      tripPlan: Prisma.$TripPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tripPlanId: string
      status: string
      currentStep: string | null
      error: string | null
      startedAt: Date | null
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tripPlanStatus"]>
    composites: {}
  }

  type TripPlanStatusGetPayload<S extends boolean | null | undefined | TripPlanStatusDefaultArgs> = $Result.GetResult<Prisma.$TripPlanStatusPayload, S>

  type TripPlanStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripPlanStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripPlanStatusCountAggregateInputType | true
    }

  export interface TripPlanStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TripPlanStatus'], meta: { name: 'TripPlanStatus' } }
    /**
     * Find zero or one TripPlanStatus that matches the filter.
     * @param {TripPlanStatusFindUniqueArgs} args - Arguments to find a TripPlanStatus
     * @example
     * // Get one TripPlanStatus
     * const tripPlanStatus = await prisma.tripPlanStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripPlanStatusFindUniqueArgs>(args: SelectSubset<T, TripPlanStatusFindUniqueArgs<ExtArgs>>): Prisma__TripPlanStatusClient<$Result.GetResult<Prisma.$TripPlanStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TripPlanStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripPlanStatusFindUniqueOrThrowArgs} args - Arguments to find a TripPlanStatus
     * @example
     * // Get one TripPlanStatus
     * const tripPlanStatus = await prisma.tripPlanStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripPlanStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, TripPlanStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripPlanStatusClient<$Result.GetResult<Prisma.$TripPlanStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripPlanStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanStatusFindFirstArgs} args - Arguments to find a TripPlanStatus
     * @example
     * // Get one TripPlanStatus
     * const tripPlanStatus = await prisma.tripPlanStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripPlanStatusFindFirstArgs>(args?: SelectSubset<T, TripPlanStatusFindFirstArgs<ExtArgs>>): Prisma__TripPlanStatusClient<$Result.GetResult<Prisma.$TripPlanStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripPlanStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanStatusFindFirstOrThrowArgs} args - Arguments to find a TripPlanStatus
     * @example
     * // Get one TripPlanStatus
     * const tripPlanStatus = await prisma.tripPlanStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripPlanStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, TripPlanStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripPlanStatusClient<$Result.GetResult<Prisma.$TripPlanStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TripPlanStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TripPlanStatuses
     * const tripPlanStatuses = await prisma.tripPlanStatus.findMany()
     * 
     * // Get first 10 TripPlanStatuses
     * const tripPlanStatuses = await prisma.tripPlanStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripPlanStatusWithIdOnly = await prisma.tripPlanStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripPlanStatusFindManyArgs>(args?: SelectSubset<T, TripPlanStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPlanStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TripPlanStatus.
     * @param {TripPlanStatusCreateArgs} args - Arguments to create a TripPlanStatus.
     * @example
     * // Create one TripPlanStatus
     * const TripPlanStatus = await prisma.tripPlanStatus.create({
     *   data: {
     *     // ... data to create a TripPlanStatus
     *   }
     * })
     * 
     */
    create<T extends TripPlanStatusCreateArgs>(args: SelectSubset<T, TripPlanStatusCreateArgs<ExtArgs>>): Prisma__TripPlanStatusClient<$Result.GetResult<Prisma.$TripPlanStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TripPlanStatuses.
     * @param {TripPlanStatusCreateManyArgs} args - Arguments to create many TripPlanStatuses.
     * @example
     * // Create many TripPlanStatuses
     * const tripPlanStatus = await prisma.tripPlanStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripPlanStatusCreateManyArgs>(args?: SelectSubset<T, TripPlanStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TripPlanStatuses and returns the data saved in the database.
     * @param {TripPlanStatusCreateManyAndReturnArgs} args - Arguments to create many TripPlanStatuses.
     * @example
     * // Create many TripPlanStatuses
     * const tripPlanStatus = await prisma.tripPlanStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TripPlanStatuses and only return the `id`
     * const tripPlanStatusWithIdOnly = await prisma.tripPlanStatus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripPlanStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, TripPlanStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPlanStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TripPlanStatus.
     * @param {TripPlanStatusDeleteArgs} args - Arguments to delete one TripPlanStatus.
     * @example
     * // Delete one TripPlanStatus
     * const TripPlanStatus = await prisma.tripPlanStatus.delete({
     *   where: {
     *     // ... filter to delete one TripPlanStatus
     *   }
     * })
     * 
     */
    delete<T extends TripPlanStatusDeleteArgs>(args: SelectSubset<T, TripPlanStatusDeleteArgs<ExtArgs>>): Prisma__TripPlanStatusClient<$Result.GetResult<Prisma.$TripPlanStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TripPlanStatus.
     * @param {TripPlanStatusUpdateArgs} args - Arguments to update one TripPlanStatus.
     * @example
     * // Update one TripPlanStatus
     * const tripPlanStatus = await prisma.tripPlanStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripPlanStatusUpdateArgs>(args: SelectSubset<T, TripPlanStatusUpdateArgs<ExtArgs>>): Prisma__TripPlanStatusClient<$Result.GetResult<Prisma.$TripPlanStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TripPlanStatuses.
     * @param {TripPlanStatusDeleteManyArgs} args - Arguments to filter TripPlanStatuses to delete.
     * @example
     * // Delete a few TripPlanStatuses
     * const { count } = await prisma.tripPlanStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripPlanStatusDeleteManyArgs>(args?: SelectSubset<T, TripPlanStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripPlanStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TripPlanStatuses
     * const tripPlanStatus = await prisma.tripPlanStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripPlanStatusUpdateManyArgs>(args: SelectSubset<T, TripPlanStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripPlanStatuses and returns the data updated in the database.
     * @param {TripPlanStatusUpdateManyAndReturnArgs} args - Arguments to update many TripPlanStatuses.
     * @example
     * // Update many TripPlanStatuses
     * const tripPlanStatus = await prisma.tripPlanStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TripPlanStatuses and only return the `id`
     * const tripPlanStatusWithIdOnly = await prisma.tripPlanStatus.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TripPlanStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, TripPlanStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPlanStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TripPlanStatus.
     * @param {TripPlanStatusUpsertArgs} args - Arguments to update or create a TripPlanStatus.
     * @example
     * // Update or create a TripPlanStatus
     * const tripPlanStatus = await prisma.tripPlanStatus.upsert({
     *   create: {
     *     // ... data to create a TripPlanStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TripPlanStatus we want to update
     *   }
     * })
     */
    upsert<T extends TripPlanStatusUpsertArgs>(args: SelectSubset<T, TripPlanStatusUpsertArgs<ExtArgs>>): Prisma__TripPlanStatusClient<$Result.GetResult<Prisma.$TripPlanStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TripPlanStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanStatusCountArgs} args - Arguments to filter TripPlanStatuses to count.
     * @example
     * // Count the number of TripPlanStatuses
     * const count = await prisma.tripPlanStatus.count({
     *   where: {
     *     // ... the filter for the TripPlanStatuses we want to count
     *   }
     * })
    **/
    count<T extends TripPlanStatusCountArgs>(
      args?: Subset<T, TripPlanStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripPlanStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TripPlanStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TripPlanStatusAggregateArgs>(args: Subset<T, TripPlanStatusAggregateArgs>): Prisma.PrismaPromise<GetTripPlanStatusAggregateType<T>>

    /**
     * Group by TripPlanStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanStatusGroupByArgs} args - Group by arguments.
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
      T extends TripPlanStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripPlanStatusGroupByArgs['orderBy'] }
        : { orderBy?: TripPlanStatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TripPlanStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripPlanStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TripPlanStatus model
   */
  readonly fields: TripPlanStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TripPlanStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripPlanStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tripPlan<T extends TripPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripPlanDefaultArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TripPlanStatus model
   */
  interface TripPlanStatusFieldRefs {
    readonly id: FieldRef<"TripPlanStatus", 'String'>
    readonly tripPlanId: FieldRef<"TripPlanStatus", 'String'>
    readonly status: FieldRef<"TripPlanStatus", 'String'>
    readonly currentStep: FieldRef<"TripPlanStatus", 'String'>
    readonly error: FieldRef<"TripPlanStatus", 'String'>
    readonly startedAt: FieldRef<"TripPlanStatus", 'DateTime'>
    readonly completedAt: FieldRef<"TripPlanStatus", 'DateTime'>
    readonly createdAt: FieldRef<"TripPlanStatus", 'DateTime'>
    readonly updatedAt: FieldRef<"TripPlanStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TripPlanStatus findUnique
   */
  export type TripPlanStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanStatus
     */
    select?: TripPlanStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanStatus
     */
    omit?: TripPlanStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanStatusInclude<ExtArgs> | null
    /**
     * Filter, which TripPlanStatus to fetch.
     */
    where: TripPlanStatusWhereUniqueInput
  }

  /**
   * TripPlanStatus findUniqueOrThrow
   */
  export type TripPlanStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanStatus
     */
    select?: TripPlanStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanStatus
     */
    omit?: TripPlanStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanStatusInclude<ExtArgs> | null
    /**
     * Filter, which TripPlanStatus to fetch.
     */
    where: TripPlanStatusWhereUniqueInput
  }

  /**
   * TripPlanStatus findFirst
   */
  export type TripPlanStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanStatus
     */
    select?: TripPlanStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanStatus
     */
    omit?: TripPlanStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanStatusInclude<ExtArgs> | null
    /**
     * Filter, which TripPlanStatus to fetch.
     */
    where?: TripPlanStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPlanStatuses to fetch.
     */
    orderBy?: TripPlanStatusOrderByWithRelationInput | TripPlanStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripPlanStatuses.
     */
    cursor?: TripPlanStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPlanStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPlanStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripPlanStatuses.
     */
    distinct?: TripPlanStatusScalarFieldEnum | TripPlanStatusScalarFieldEnum[]
  }

  /**
   * TripPlanStatus findFirstOrThrow
   */
  export type TripPlanStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanStatus
     */
    select?: TripPlanStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanStatus
     */
    omit?: TripPlanStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanStatusInclude<ExtArgs> | null
    /**
     * Filter, which TripPlanStatus to fetch.
     */
    where?: TripPlanStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPlanStatuses to fetch.
     */
    orderBy?: TripPlanStatusOrderByWithRelationInput | TripPlanStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripPlanStatuses.
     */
    cursor?: TripPlanStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPlanStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPlanStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripPlanStatuses.
     */
    distinct?: TripPlanStatusScalarFieldEnum | TripPlanStatusScalarFieldEnum[]
  }

  /**
   * TripPlanStatus findMany
   */
  export type TripPlanStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanStatus
     */
    select?: TripPlanStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanStatus
     */
    omit?: TripPlanStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanStatusInclude<ExtArgs> | null
    /**
     * Filter, which TripPlanStatuses to fetch.
     */
    where?: TripPlanStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPlanStatuses to fetch.
     */
    orderBy?: TripPlanStatusOrderByWithRelationInput | TripPlanStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TripPlanStatuses.
     */
    cursor?: TripPlanStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPlanStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPlanStatuses.
     */
    skip?: number
    distinct?: TripPlanStatusScalarFieldEnum | TripPlanStatusScalarFieldEnum[]
  }

  /**
   * TripPlanStatus create
   */
  export type TripPlanStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanStatus
     */
    select?: TripPlanStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanStatus
     */
    omit?: TripPlanStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a TripPlanStatus.
     */
    data: XOR<TripPlanStatusCreateInput, TripPlanStatusUncheckedCreateInput>
  }

  /**
   * TripPlanStatus createMany
   */
  export type TripPlanStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TripPlanStatuses.
     */
    data: TripPlanStatusCreateManyInput | TripPlanStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TripPlanStatus createManyAndReturn
   */
  export type TripPlanStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanStatus
     */
    select?: TripPlanStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanStatus
     */
    omit?: TripPlanStatusOmit<ExtArgs> | null
    /**
     * The data used to create many TripPlanStatuses.
     */
    data: TripPlanStatusCreateManyInput | TripPlanStatusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanStatusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripPlanStatus update
   */
  export type TripPlanStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanStatus
     */
    select?: TripPlanStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanStatus
     */
    omit?: TripPlanStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a TripPlanStatus.
     */
    data: XOR<TripPlanStatusUpdateInput, TripPlanStatusUncheckedUpdateInput>
    /**
     * Choose, which TripPlanStatus to update.
     */
    where: TripPlanStatusWhereUniqueInput
  }

  /**
   * TripPlanStatus updateMany
   */
  export type TripPlanStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TripPlanStatuses.
     */
    data: XOR<TripPlanStatusUpdateManyMutationInput, TripPlanStatusUncheckedUpdateManyInput>
    /**
     * Filter which TripPlanStatuses to update
     */
    where?: TripPlanStatusWhereInput
    /**
     * Limit how many TripPlanStatuses to update.
     */
    limit?: number
  }

  /**
   * TripPlanStatus updateManyAndReturn
   */
  export type TripPlanStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanStatus
     */
    select?: TripPlanStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanStatus
     */
    omit?: TripPlanStatusOmit<ExtArgs> | null
    /**
     * The data used to update TripPlanStatuses.
     */
    data: XOR<TripPlanStatusUpdateManyMutationInput, TripPlanStatusUncheckedUpdateManyInput>
    /**
     * Filter which TripPlanStatuses to update
     */
    where?: TripPlanStatusWhereInput
    /**
     * Limit how many TripPlanStatuses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanStatusIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripPlanStatus upsert
   */
  export type TripPlanStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanStatus
     */
    select?: TripPlanStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanStatus
     */
    omit?: TripPlanStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the TripPlanStatus to update in case it exists.
     */
    where: TripPlanStatusWhereUniqueInput
    /**
     * In case the TripPlanStatus found by the `where` argument doesn't exist, create a new TripPlanStatus with this data.
     */
    create: XOR<TripPlanStatusCreateInput, TripPlanStatusUncheckedCreateInput>
    /**
     * In case the TripPlanStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripPlanStatusUpdateInput, TripPlanStatusUncheckedUpdateInput>
  }

  /**
   * TripPlanStatus delete
   */
  export type TripPlanStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanStatus
     */
    select?: TripPlanStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanStatus
     */
    omit?: TripPlanStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanStatusInclude<ExtArgs> | null
    /**
     * Filter which TripPlanStatus to delete.
     */
    where: TripPlanStatusWhereUniqueInput
  }

  /**
   * TripPlanStatus deleteMany
   */
  export type TripPlanStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripPlanStatuses to delete
     */
    where?: TripPlanStatusWhereInput
    /**
     * Limit how many TripPlanStatuses to delete.
     */
    limit?: number
  }

  /**
   * TripPlanStatus without action
   */
  export type TripPlanStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanStatus
     */
    select?: TripPlanStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanStatus
     */
    omit?: TripPlanStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanStatusInclude<ExtArgs> | null
  }


  /**
   * Model TripPlanOutput
   */

  export type AggregateTripPlanOutput = {
    _count: TripPlanOutputCountAggregateOutputType | null
    _min: TripPlanOutputMinAggregateOutputType | null
    _max: TripPlanOutputMaxAggregateOutputType | null
  }

  export type TripPlanOutputMinAggregateOutputType = {
    id: string | null
    tripPlanId: string | null
    itinerary: string | null
    summary: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripPlanOutputMaxAggregateOutputType = {
    id: string | null
    tripPlanId: string | null
    itinerary: string | null
    summary: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripPlanOutputCountAggregateOutputType = {
    id: number
    tripPlanId: number
    itinerary: number
    summary: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TripPlanOutputMinAggregateInputType = {
    id?: true
    tripPlanId?: true
    itinerary?: true
    summary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripPlanOutputMaxAggregateInputType = {
    id?: true
    tripPlanId?: true
    itinerary?: true
    summary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripPlanOutputCountAggregateInputType = {
    id?: true
    tripPlanId?: true
    itinerary?: true
    summary?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TripPlanOutputAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripPlanOutput to aggregate.
     */
    where?: TripPlanOutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPlanOutputs to fetch.
     */
    orderBy?: TripPlanOutputOrderByWithRelationInput | TripPlanOutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripPlanOutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPlanOutputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPlanOutputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TripPlanOutputs
    **/
    _count?: true | TripPlanOutputCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripPlanOutputMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripPlanOutputMaxAggregateInputType
  }

  export type GetTripPlanOutputAggregateType<T extends TripPlanOutputAggregateArgs> = {
        [P in keyof T & keyof AggregateTripPlanOutput]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTripPlanOutput[P]>
      : GetScalarType<T[P], AggregateTripPlanOutput[P]>
  }




  export type TripPlanOutputGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripPlanOutputWhereInput
    orderBy?: TripPlanOutputOrderByWithAggregationInput | TripPlanOutputOrderByWithAggregationInput[]
    by: TripPlanOutputScalarFieldEnum[] | TripPlanOutputScalarFieldEnum
    having?: TripPlanOutputScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripPlanOutputCountAggregateInputType | true
    _min?: TripPlanOutputMinAggregateInputType
    _max?: TripPlanOutputMaxAggregateInputType
  }

  export type TripPlanOutputGroupByOutputType = {
    id: string
    tripPlanId: string
    itinerary: string
    summary: string | null
    createdAt: Date
    updatedAt: Date
    _count: TripPlanOutputCountAggregateOutputType | null
    _min: TripPlanOutputMinAggregateOutputType | null
    _max: TripPlanOutputMaxAggregateOutputType | null
  }

  type GetTripPlanOutputGroupByPayload<T extends TripPlanOutputGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripPlanOutputGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripPlanOutputGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripPlanOutputGroupByOutputType[P]>
            : GetScalarType<T[P], TripPlanOutputGroupByOutputType[P]>
        }
      >
    >


  export type TripPlanOutputSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripPlanId?: boolean
    itinerary?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tripPlan?: boolean | TripPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripPlanOutput"]>

  export type TripPlanOutputSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripPlanId?: boolean
    itinerary?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tripPlan?: boolean | TripPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripPlanOutput"]>

  export type TripPlanOutputSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripPlanId?: boolean
    itinerary?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tripPlan?: boolean | TripPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripPlanOutput"]>

  export type TripPlanOutputSelectScalar = {
    id?: boolean
    tripPlanId?: boolean
    itinerary?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TripPlanOutputOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripPlanId" | "itinerary" | "summary" | "createdAt" | "updatedAt", ExtArgs["result"]["tripPlanOutput"]>
  export type TripPlanOutputInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tripPlan?: boolean | TripPlanDefaultArgs<ExtArgs>
  }
  export type TripPlanOutputIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tripPlan?: boolean | TripPlanDefaultArgs<ExtArgs>
  }
  export type TripPlanOutputIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tripPlan?: boolean | TripPlanDefaultArgs<ExtArgs>
  }

  export type $TripPlanOutputPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TripPlanOutput"
    objects: {
      tripPlan: Prisma.$TripPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tripPlanId: string
      itinerary: string
      summary: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tripPlanOutput"]>
    composites: {}
  }

  type TripPlanOutputGetPayload<S extends boolean | null | undefined | TripPlanOutputDefaultArgs> = $Result.GetResult<Prisma.$TripPlanOutputPayload, S>

  type TripPlanOutputCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripPlanOutputFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripPlanOutputCountAggregateInputType | true
    }

  export interface TripPlanOutputDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TripPlanOutput'], meta: { name: 'TripPlanOutput' } }
    /**
     * Find zero or one TripPlanOutput that matches the filter.
     * @param {TripPlanOutputFindUniqueArgs} args - Arguments to find a TripPlanOutput
     * @example
     * // Get one TripPlanOutput
     * const tripPlanOutput = await prisma.tripPlanOutput.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripPlanOutputFindUniqueArgs>(args: SelectSubset<T, TripPlanOutputFindUniqueArgs<ExtArgs>>): Prisma__TripPlanOutputClient<$Result.GetResult<Prisma.$TripPlanOutputPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TripPlanOutput that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripPlanOutputFindUniqueOrThrowArgs} args - Arguments to find a TripPlanOutput
     * @example
     * // Get one TripPlanOutput
     * const tripPlanOutput = await prisma.tripPlanOutput.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripPlanOutputFindUniqueOrThrowArgs>(args: SelectSubset<T, TripPlanOutputFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripPlanOutputClient<$Result.GetResult<Prisma.$TripPlanOutputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripPlanOutput that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanOutputFindFirstArgs} args - Arguments to find a TripPlanOutput
     * @example
     * // Get one TripPlanOutput
     * const tripPlanOutput = await prisma.tripPlanOutput.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripPlanOutputFindFirstArgs>(args?: SelectSubset<T, TripPlanOutputFindFirstArgs<ExtArgs>>): Prisma__TripPlanOutputClient<$Result.GetResult<Prisma.$TripPlanOutputPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripPlanOutput that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanOutputFindFirstOrThrowArgs} args - Arguments to find a TripPlanOutput
     * @example
     * // Get one TripPlanOutput
     * const tripPlanOutput = await prisma.tripPlanOutput.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripPlanOutputFindFirstOrThrowArgs>(args?: SelectSubset<T, TripPlanOutputFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripPlanOutputClient<$Result.GetResult<Prisma.$TripPlanOutputPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TripPlanOutputs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanOutputFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TripPlanOutputs
     * const tripPlanOutputs = await prisma.tripPlanOutput.findMany()
     * 
     * // Get first 10 TripPlanOutputs
     * const tripPlanOutputs = await prisma.tripPlanOutput.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripPlanOutputWithIdOnly = await prisma.tripPlanOutput.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripPlanOutputFindManyArgs>(args?: SelectSubset<T, TripPlanOutputFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPlanOutputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TripPlanOutput.
     * @param {TripPlanOutputCreateArgs} args - Arguments to create a TripPlanOutput.
     * @example
     * // Create one TripPlanOutput
     * const TripPlanOutput = await prisma.tripPlanOutput.create({
     *   data: {
     *     // ... data to create a TripPlanOutput
     *   }
     * })
     * 
     */
    create<T extends TripPlanOutputCreateArgs>(args: SelectSubset<T, TripPlanOutputCreateArgs<ExtArgs>>): Prisma__TripPlanOutputClient<$Result.GetResult<Prisma.$TripPlanOutputPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TripPlanOutputs.
     * @param {TripPlanOutputCreateManyArgs} args - Arguments to create many TripPlanOutputs.
     * @example
     * // Create many TripPlanOutputs
     * const tripPlanOutput = await prisma.tripPlanOutput.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripPlanOutputCreateManyArgs>(args?: SelectSubset<T, TripPlanOutputCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TripPlanOutputs and returns the data saved in the database.
     * @param {TripPlanOutputCreateManyAndReturnArgs} args - Arguments to create many TripPlanOutputs.
     * @example
     * // Create many TripPlanOutputs
     * const tripPlanOutput = await prisma.tripPlanOutput.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TripPlanOutputs and only return the `id`
     * const tripPlanOutputWithIdOnly = await prisma.tripPlanOutput.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripPlanOutputCreateManyAndReturnArgs>(args?: SelectSubset<T, TripPlanOutputCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPlanOutputPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TripPlanOutput.
     * @param {TripPlanOutputDeleteArgs} args - Arguments to delete one TripPlanOutput.
     * @example
     * // Delete one TripPlanOutput
     * const TripPlanOutput = await prisma.tripPlanOutput.delete({
     *   where: {
     *     // ... filter to delete one TripPlanOutput
     *   }
     * })
     * 
     */
    delete<T extends TripPlanOutputDeleteArgs>(args: SelectSubset<T, TripPlanOutputDeleteArgs<ExtArgs>>): Prisma__TripPlanOutputClient<$Result.GetResult<Prisma.$TripPlanOutputPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TripPlanOutput.
     * @param {TripPlanOutputUpdateArgs} args - Arguments to update one TripPlanOutput.
     * @example
     * // Update one TripPlanOutput
     * const tripPlanOutput = await prisma.tripPlanOutput.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripPlanOutputUpdateArgs>(args: SelectSubset<T, TripPlanOutputUpdateArgs<ExtArgs>>): Prisma__TripPlanOutputClient<$Result.GetResult<Prisma.$TripPlanOutputPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TripPlanOutputs.
     * @param {TripPlanOutputDeleteManyArgs} args - Arguments to filter TripPlanOutputs to delete.
     * @example
     * // Delete a few TripPlanOutputs
     * const { count } = await prisma.tripPlanOutput.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripPlanOutputDeleteManyArgs>(args?: SelectSubset<T, TripPlanOutputDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripPlanOutputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanOutputUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TripPlanOutputs
     * const tripPlanOutput = await prisma.tripPlanOutput.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripPlanOutputUpdateManyArgs>(args: SelectSubset<T, TripPlanOutputUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripPlanOutputs and returns the data updated in the database.
     * @param {TripPlanOutputUpdateManyAndReturnArgs} args - Arguments to update many TripPlanOutputs.
     * @example
     * // Update many TripPlanOutputs
     * const tripPlanOutput = await prisma.tripPlanOutput.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TripPlanOutputs and only return the `id`
     * const tripPlanOutputWithIdOnly = await prisma.tripPlanOutput.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TripPlanOutputUpdateManyAndReturnArgs>(args: SelectSubset<T, TripPlanOutputUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPlanOutputPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TripPlanOutput.
     * @param {TripPlanOutputUpsertArgs} args - Arguments to update or create a TripPlanOutput.
     * @example
     * // Update or create a TripPlanOutput
     * const tripPlanOutput = await prisma.tripPlanOutput.upsert({
     *   create: {
     *     // ... data to create a TripPlanOutput
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TripPlanOutput we want to update
     *   }
     * })
     */
    upsert<T extends TripPlanOutputUpsertArgs>(args: SelectSubset<T, TripPlanOutputUpsertArgs<ExtArgs>>): Prisma__TripPlanOutputClient<$Result.GetResult<Prisma.$TripPlanOutputPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TripPlanOutputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanOutputCountArgs} args - Arguments to filter TripPlanOutputs to count.
     * @example
     * // Count the number of TripPlanOutputs
     * const count = await prisma.tripPlanOutput.count({
     *   where: {
     *     // ... the filter for the TripPlanOutputs we want to count
     *   }
     * })
    **/
    count<T extends TripPlanOutputCountArgs>(
      args?: Subset<T, TripPlanOutputCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripPlanOutputCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TripPlanOutput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanOutputAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TripPlanOutputAggregateArgs>(args: Subset<T, TripPlanOutputAggregateArgs>): Prisma.PrismaPromise<GetTripPlanOutputAggregateType<T>>

    /**
     * Group by TripPlanOutput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanOutputGroupByArgs} args - Group by arguments.
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
      T extends TripPlanOutputGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripPlanOutputGroupByArgs['orderBy'] }
        : { orderBy?: TripPlanOutputGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TripPlanOutputGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripPlanOutputGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TripPlanOutput model
   */
  readonly fields: TripPlanOutputFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TripPlanOutput.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripPlanOutputClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tripPlan<T extends TripPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripPlanDefaultArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TripPlanOutput model
   */
  interface TripPlanOutputFieldRefs {
    readonly id: FieldRef<"TripPlanOutput", 'String'>
    readonly tripPlanId: FieldRef<"TripPlanOutput", 'String'>
    readonly itinerary: FieldRef<"TripPlanOutput", 'String'>
    readonly summary: FieldRef<"TripPlanOutput", 'String'>
    readonly createdAt: FieldRef<"TripPlanOutput", 'DateTime'>
    readonly updatedAt: FieldRef<"TripPlanOutput", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TripPlanOutput findUnique
   */
  export type TripPlanOutputFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanOutput
     */
    select?: TripPlanOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanOutput
     */
    omit?: TripPlanOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanOutputInclude<ExtArgs> | null
    /**
     * Filter, which TripPlanOutput to fetch.
     */
    where: TripPlanOutputWhereUniqueInput
  }

  /**
   * TripPlanOutput findUniqueOrThrow
   */
  export type TripPlanOutputFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanOutput
     */
    select?: TripPlanOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanOutput
     */
    omit?: TripPlanOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanOutputInclude<ExtArgs> | null
    /**
     * Filter, which TripPlanOutput to fetch.
     */
    where: TripPlanOutputWhereUniqueInput
  }

  /**
   * TripPlanOutput findFirst
   */
  export type TripPlanOutputFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanOutput
     */
    select?: TripPlanOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanOutput
     */
    omit?: TripPlanOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanOutputInclude<ExtArgs> | null
    /**
     * Filter, which TripPlanOutput to fetch.
     */
    where?: TripPlanOutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPlanOutputs to fetch.
     */
    orderBy?: TripPlanOutputOrderByWithRelationInput | TripPlanOutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripPlanOutputs.
     */
    cursor?: TripPlanOutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPlanOutputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPlanOutputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripPlanOutputs.
     */
    distinct?: TripPlanOutputScalarFieldEnum | TripPlanOutputScalarFieldEnum[]
  }

  /**
   * TripPlanOutput findFirstOrThrow
   */
  export type TripPlanOutputFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanOutput
     */
    select?: TripPlanOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanOutput
     */
    omit?: TripPlanOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanOutputInclude<ExtArgs> | null
    /**
     * Filter, which TripPlanOutput to fetch.
     */
    where?: TripPlanOutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPlanOutputs to fetch.
     */
    orderBy?: TripPlanOutputOrderByWithRelationInput | TripPlanOutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripPlanOutputs.
     */
    cursor?: TripPlanOutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPlanOutputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPlanOutputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripPlanOutputs.
     */
    distinct?: TripPlanOutputScalarFieldEnum | TripPlanOutputScalarFieldEnum[]
  }

  /**
   * TripPlanOutput findMany
   */
  export type TripPlanOutputFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanOutput
     */
    select?: TripPlanOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanOutput
     */
    omit?: TripPlanOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanOutputInclude<ExtArgs> | null
    /**
     * Filter, which TripPlanOutputs to fetch.
     */
    where?: TripPlanOutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPlanOutputs to fetch.
     */
    orderBy?: TripPlanOutputOrderByWithRelationInput | TripPlanOutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TripPlanOutputs.
     */
    cursor?: TripPlanOutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPlanOutputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPlanOutputs.
     */
    skip?: number
    distinct?: TripPlanOutputScalarFieldEnum | TripPlanOutputScalarFieldEnum[]
  }

  /**
   * TripPlanOutput create
   */
  export type TripPlanOutputCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanOutput
     */
    select?: TripPlanOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanOutput
     */
    omit?: TripPlanOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanOutputInclude<ExtArgs> | null
    /**
     * The data needed to create a TripPlanOutput.
     */
    data: XOR<TripPlanOutputCreateInput, TripPlanOutputUncheckedCreateInput>
  }

  /**
   * TripPlanOutput createMany
   */
  export type TripPlanOutputCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TripPlanOutputs.
     */
    data: TripPlanOutputCreateManyInput | TripPlanOutputCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TripPlanOutput createManyAndReturn
   */
  export type TripPlanOutputCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanOutput
     */
    select?: TripPlanOutputSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanOutput
     */
    omit?: TripPlanOutputOmit<ExtArgs> | null
    /**
     * The data used to create many TripPlanOutputs.
     */
    data: TripPlanOutputCreateManyInput | TripPlanOutputCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanOutputIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripPlanOutput update
   */
  export type TripPlanOutputUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanOutput
     */
    select?: TripPlanOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanOutput
     */
    omit?: TripPlanOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanOutputInclude<ExtArgs> | null
    /**
     * The data needed to update a TripPlanOutput.
     */
    data: XOR<TripPlanOutputUpdateInput, TripPlanOutputUncheckedUpdateInput>
    /**
     * Choose, which TripPlanOutput to update.
     */
    where: TripPlanOutputWhereUniqueInput
  }

  /**
   * TripPlanOutput updateMany
   */
  export type TripPlanOutputUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TripPlanOutputs.
     */
    data: XOR<TripPlanOutputUpdateManyMutationInput, TripPlanOutputUncheckedUpdateManyInput>
    /**
     * Filter which TripPlanOutputs to update
     */
    where?: TripPlanOutputWhereInput
    /**
     * Limit how many TripPlanOutputs to update.
     */
    limit?: number
  }

  /**
   * TripPlanOutput updateManyAndReturn
   */
  export type TripPlanOutputUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanOutput
     */
    select?: TripPlanOutputSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanOutput
     */
    omit?: TripPlanOutputOmit<ExtArgs> | null
    /**
     * The data used to update TripPlanOutputs.
     */
    data: XOR<TripPlanOutputUpdateManyMutationInput, TripPlanOutputUncheckedUpdateManyInput>
    /**
     * Filter which TripPlanOutputs to update
     */
    where?: TripPlanOutputWhereInput
    /**
     * Limit how many TripPlanOutputs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanOutputIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripPlanOutput upsert
   */
  export type TripPlanOutputUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanOutput
     */
    select?: TripPlanOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanOutput
     */
    omit?: TripPlanOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanOutputInclude<ExtArgs> | null
    /**
     * The filter to search for the TripPlanOutput to update in case it exists.
     */
    where: TripPlanOutputWhereUniqueInput
    /**
     * In case the TripPlanOutput found by the `where` argument doesn't exist, create a new TripPlanOutput with this data.
     */
    create: XOR<TripPlanOutputCreateInput, TripPlanOutputUncheckedCreateInput>
    /**
     * In case the TripPlanOutput was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripPlanOutputUpdateInput, TripPlanOutputUncheckedUpdateInput>
  }

  /**
   * TripPlanOutput delete
   */
  export type TripPlanOutputDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanOutput
     */
    select?: TripPlanOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanOutput
     */
    omit?: TripPlanOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanOutputInclude<ExtArgs> | null
    /**
     * Filter which TripPlanOutput to delete.
     */
    where: TripPlanOutputWhereUniqueInput
  }

  /**
   * TripPlanOutput deleteMany
   */
  export type TripPlanOutputDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripPlanOutputs to delete
     */
    where?: TripPlanOutputWhereInput
    /**
     * Limit how many TripPlanOutputs to delete.
     */
    limit?: number
  }

  /**
   * TripPlanOutput without action
   */
  export type TripPlanOutputDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanOutput
     */
    select?: TripPlanOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanOutput
     */
    omit?: TripPlanOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanOutputInclude<ExtArgs> | null
  }


  /**
   * Model TripPlan
   */

  export type AggregateTripPlan = {
    _count: TripPlanCountAggregateOutputType | null
    _avg: TripPlanAvgAggregateOutputType | null
    _sum: TripPlanSumAggregateOutputType | null
    _min: TripPlanMinAggregateOutputType | null
    _max: TripPlanMaxAggregateOutputType | null
  }

  export type TripPlanAvgAggregateOutputType = {
    duration: number | null
    adults: number | null
    children: number | null
    budget: number | null
    rooms: number | null
    pace: number | null
  }

  export type TripPlanSumAggregateOutputType = {
    duration: number | null
    adults: number | null
    children: number | null
    budget: number | null
    rooms: number | null
    pace: number[]
  }

  export type TripPlanMinAggregateOutputType = {
    id: string | null
    name: string | null
    destination: string | null
    startingLocation: string | null
    travelDatesStart: string | null
    travelDatesEnd: string | null
    dateInputType: string | null
    duration: number | null
    travelingWith: string | null
    adults: number | null
    children: number | null
    budget: number | null
    budgetCurrency: string | null
    travelStyle: string | null
    budgetFlexible: boolean | null
    interests: string | null
    rooms: number | null
    beenThereBefore: string | null
    lovedPlaces: string | null
    additionalInfo: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type TripPlanMaxAggregateOutputType = {
    id: string | null
    name: string | null
    destination: string | null
    startingLocation: string | null
    travelDatesStart: string | null
    travelDatesEnd: string | null
    dateInputType: string | null
    duration: number | null
    travelingWith: string | null
    adults: number | null
    children: number | null
    budget: number | null
    budgetCurrency: string | null
    travelStyle: string | null
    budgetFlexible: boolean | null
    interests: string | null
    rooms: number | null
    beenThereBefore: string | null
    lovedPlaces: string | null
    additionalInfo: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type TripPlanCountAggregateOutputType = {
    id: number
    name: number
    destination: number
    startingLocation: number
    travelDatesStart: number
    travelDatesEnd: number
    dateInputType: number
    duration: number
    travelingWith: number
    adults: number
    children: number
    ageGroups: number
    budget: number
    budgetCurrency: number
    travelStyle: number
    budgetFlexible: number
    vibes: number
    priorities: number
    interests: number
    rooms: number
    pace: number
    beenThereBefore: number
    lovedPlaces: number
    additionalInfo: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type TripPlanAvgAggregateInputType = {
    duration?: true
    adults?: true
    children?: true
    budget?: true
    rooms?: true
    pace?: true
  }

  export type TripPlanSumAggregateInputType = {
    duration?: true
    adults?: true
    children?: true
    budget?: true
    rooms?: true
    pace?: true
  }

  export type TripPlanMinAggregateInputType = {
    id?: true
    name?: true
    destination?: true
    startingLocation?: true
    travelDatesStart?: true
    travelDatesEnd?: true
    dateInputType?: true
    duration?: true
    travelingWith?: true
    adults?: true
    children?: true
    budget?: true
    budgetCurrency?: true
    travelStyle?: true
    budgetFlexible?: true
    interests?: true
    rooms?: true
    beenThereBefore?: true
    lovedPlaces?: true
    additionalInfo?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type TripPlanMaxAggregateInputType = {
    id?: true
    name?: true
    destination?: true
    startingLocation?: true
    travelDatesStart?: true
    travelDatesEnd?: true
    dateInputType?: true
    duration?: true
    travelingWith?: true
    adults?: true
    children?: true
    budget?: true
    budgetCurrency?: true
    travelStyle?: true
    budgetFlexible?: true
    interests?: true
    rooms?: true
    beenThereBefore?: true
    lovedPlaces?: true
    additionalInfo?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type TripPlanCountAggregateInputType = {
    id?: true
    name?: true
    destination?: true
    startingLocation?: true
    travelDatesStart?: true
    travelDatesEnd?: true
    dateInputType?: true
    duration?: true
    travelingWith?: true
    adults?: true
    children?: true
    ageGroups?: true
    budget?: true
    budgetCurrency?: true
    travelStyle?: true
    budgetFlexible?: true
    vibes?: true
    priorities?: true
    interests?: true
    rooms?: true
    pace?: true
    beenThereBefore?: true
    lovedPlaces?: true
    additionalInfo?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type TripPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripPlan to aggregate.
     */
    where?: TripPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPlans to fetch.
     */
    orderBy?: TripPlanOrderByWithRelationInput | TripPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TripPlans
    **/
    _count?: true | TripPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripPlanMaxAggregateInputType
  }

  export type GetTripPlanAggregateType<T extends TripPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateTripPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTripPlan[P]>
      : GetScalarType<T[P], AggregateTripPlan[P]>
  }




  export type TripPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripPlanWhereInput
    orderBy?: TripPlanOrderByWithAggregationInput | TripPlanOrderByWithAggregationInput[]
    by: TripPlanScalarFieldEnum[] | TripPlanScalarFieldEnum
    having?: TripPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripPlanCountAggregateInputType | true
    _avg?: TripPlanAvgAggregateInputType
    _sum?: TripPlanSumAggregateInputType
    _min?: TripPlanMinAggregateInputType
    _max?: TripPlanMaxAggregateInputType
  }

  export type TripPlanGroupByOutputType = {
    id: string
    name: string
    destination: string
    startingLocation: string
    travelDatesStart: string
    travelDatesEnd: string | null
    dateInputType: string
    duration: number | null
    travelingWith: string
    adults: number
    children: number
    ageGroups: string[]
    budget: number
    budgetCurrency: string
    travelStyle: string
    budgetFlexible: boolean
    vibes: string[]
    priorities: string[]
    interests: string | null
    rooms: number
    pace: number[]
    beenThereBefore: string | null
    lovedPlaces: string | null
    additionalInfo: string | null
    createdAt: Date
    updatedAt: Date
    userId: string | null
    _count: TripPlanCountAggregateOutputType | null
    _avg: TripPlanAvgAggregateOutputType | null
    _sum: TripPlanSumAggregateOutputType | null
    _min: TripPlanMinAggregateOutputType | null
    _max: TripPlanMaxAggregateOutputType | null
  }

  type GetTripPlanGroupByPayload<T extends TripPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripPlanGroupByOutputType[P]>
            : GetScalarType<T[P], TripPlanGroupByOutputType[P]>
        }
      >
    >


  export type TripPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    destination?: boolean
    startingLocation?: boolean
    travelDatesStart?: boolean
    travelDatesEnd?: boolean
    dateInputType?: boolean
    duration?: boolean
    travelingWith?: boolean
    adults?: boolean
    children?: boolean
    ageGroups?: boolean
    budget?: boolean
    budgetCurrency?: boolean
    travelStyle?: boolean
    budgetFlexible?: boolean
    vibes?: boolean
    priorities?: boolean
    interests?: boolean
    rooms?: boolean
    pace?: boolean
    beenThereBefore?: boolean
    lovedPlaces?: boolean
    additionalInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | TripPlan$userArgs<ExtArgs>
    status?: boolean | TripPlan$statusArgs<ExtArgs>
    output?: boolean | TripPlan$outputArgs<ExtArgs>
  }, ExtArgs["result"]["tripPlan"]>

  export type TripPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    destination?: boolean
    startingLocation?: boolean
    travelDatesStart?: boolean
    travelDatesEnd?: boolean
    dateInputType?: boolean
    duration?: boolean
    travelingWith?: boolean
    adults?: boolean
    children?: boolean
    ageGroups?: boolean
    budget?: boolean
    budgetCurrency?: boolean
    travelStyle?: boolean
    budgetFlexible?: boolean
    vibes?: boolean
    priorities?: boolean
    interests?: boolean
    rooms?: boolean
    pace?: boolean
    beenThereBefore?: boolean
    lovedPlaces?: boolean
    additionalInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | TripPlan$userArgs<ExtArgs>
  }, ExtArgs["result"]["tripPlan"]>

  export type TripPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    destination?: boolean
    startingLocation?: boolean
    travelDatesStart?: boolean
    travelDatesEnd?: boolean
    dateInputType?: boolean
    duration?: boolean
    travelingWith?: boolean
    adults?: boolean
    children?: boolean
    ageGroups?: boolean
    budget?: boolean
    budgetCurrency?: boolean
    travelStyle?: boolean
    budgetFlexible?: boolean
    vibes?: boolean
    priorities?: boolean
    interests?: boolean
    rooms?: boolean
    pace?: boolean
    beenThereBefore?: boolean
    lovedPlaces?: boolean
    additionalInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | TripPlan$userArgs<ExtArgs>
  }, ExtArgs["result"]["tripPlan"]>

  export type TripPlanSelectScalar = {
    id?: boolean
    name?: boolean
    destination?: boolean
    startingLocation?: boolean
    travelDatesStart?: boolean
    travelDatesEnd?: boolean
    dateInputType?: boolean
    duration?: boolean
    travelingWith?: boolean
    adults?: boolean
    children?: boolean
    ageGroups?: boolean
    budget?: boolean
    budgetCurrency?: boolean
    travelStyle?: boolean
    budgetFlexible?: boolean
    vibes?: boolean
    priorities?: boolean
    interests?: boolean
    rooms?: boolean
    pace?: boolean
    beenThereBefore?: boolean
    lovedPlaces?: boolean
    additionalInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type TripPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "destination" | "startingLocation" | "travelDatesStart" | "travelDatesEnd" | "dateInputType" | "duration" | "travelingWith" | "adults" | "children" | "ageGroups" | "budget" | "budgetCurrency" | "travelStyle" | "budgetFlexible" | "vibes" | "priorities" | "interests" | "rooms" | "pace" | "beenThereBefore" | "lovedPlaces" | "additionalInfo" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["tripPlan"]>
  export type TripPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | TripPlan$userArgs<ExtArgs>
    status?: boolean | TripPlan$statusArgs<ExtArgs>
    output?: boolean | TripPlan$outputArgs<ExtArgs>
  }
  export type TripPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | TripPlan$userArgs<ExtArgs>
  }
  export type TripPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | TripPlan$userArgs<ExtArgs>
  }

  export type $TripPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TripPlan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      status: Prisma.$TripPlanStatusPayload<ExtArgs> | null
      output: Prisma.$TripPlanOutputPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      destination: string
      startingLocation: string
      travelDatesStart: string
      travelDatesEnd: string | null
      dateInputType: string
      duration: number | null
      travelingWith: string
      adults: number
      children: number
      ageGroups: string[]
      budget: number
      budgetCurrency: string
      travelStyle: string
      budgetFlexible: boolean
      vibes: string[]
      priorities: string[]
      interests: string | null
      rooms: number
      pace: number[]
      beenThereBefore: string | null
      lovedPlaces: string | null
      additionalInfo: string | null
      createdAt: Date
      updatedAt: Date
      userId: string | null
    }, ExtArgs["result"]["tripPlan"]>
    composites: {}
  }

  type TripPlanGetPayload<S extends boolean | null | undefined | TripPlanDefaultArgs> = $Result.GetResult<Prisma.$TripPlanPayload, S>

  type TripPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripPlanCountAggregateInputType | true
    }

  export interface TripPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TripPlan'], meta: { name: 'TripPlan' } }
    /**
     * Find zero or one TripPlan that matches the filter.
     * @param {TripPlanFindUniqueArgs} args - Arguments to find a TripPlan
     * @example
     * // Get one TripPlan
     * const tripPlan = await prisma.tripPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripPlanFindUniqueArgs>(args: SelectSubset<T, TripPlanFindUniqueArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TripPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripPlanFindUniqueOrThrowArgs} args - Arguments to find a TripPlan
     * @example
     * // Get one TripPlan
     * const tripPlan = await prisma.tripPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, TripPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanFindFirstArgs} args - Arguments to find a TripPlan
     * @example
     * // Get one TripPlan
     * const tripPlan = await prisma.tripPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripPlanFindFirstArgs>(args?: SelectSubset<T, TripPlanFindFirstArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanFindFirstOrThrowArgs} args - Arguments to find a TripPlan
     * @example
     * // Get one TripPlan
     * const tripPlan = await prisma.tripPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, TripPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TripPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TripPlans
     * const tripPlans = await prisma.tripPlan.findMany()
     * 
     * // Get first 10 TripPlans
     * const tripPlans = await prisma.tripPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripPlanWithIdOnly = await prisma.tripPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripPlanFindManyArgs>(args?: SelectSubset<T, TripPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TripPlan.
     * @param {TripPlanCreateArgs} args - Arguments to create a TripPlan.
     * @example
     * // Create one TripPlan
     * const TripPlan = await prisma.tripPlan.create({
     *   data: {
     *     // ... data to create a TripPlan
     *   }
     * })
     * 
     */
    create<T extends TripPlanCreateArgs>(args: SelectSubset<T, TripPlanCreateArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TripPlans.
     * @param {TripPlanCreateManyArgs} args - Arguments to create many TripPlans.
     * @example
     * // Create many TripPlans
     * const tripPlan = await prisma.tripPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripPlanCreateManyArgs>(args?: SelectSubset<T, TripPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TripPlans and returns the data saved in the database.
     * @param {TripPlanCreateManyAndReturnArgs} args - Arguments to create many TripPlans.
     * @example
     * // Create many TripPlans
     * const tripPlan = await prisma.tripPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TripPlans and only return the `id`
     * const tripPlanWithIdOnly = await prisma.tripPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, TripPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TripPlan.
     * @param {TripPlanDeleteArgs} args - Arguments to delete one TripPlan.
     * @example
     * // Delete one TripPlan
     * const TripPlan = await prisma.tripPlan.delete({
     *   where: {
     *     // ... filter to delete one TripPlan
     *   }
     * })
     * 
     */
    delete<T extends TripPlanDeleteArgs>(args: SelectSubset<T, TripPlanDeleteArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TripPlan.
     * @param {TripPlanUpdateArgs} args - Arguments to update one TripPlan.
     * @example
     * // Update one TripPlan
     * const tripPlan = await prisma.tripPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripPlanUpdateArgs>(args: SelectSubset<T, TripPlanUpdateArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TripPlans.
     * @param {TripPlanDeleteManyArgs} args - Arguments to filter TripPlans to delete.
     * @example
     * // Delete a few TripPlans
     * const { count } = await prisma.tripPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripPlanDeleteManyArgs>(args?: SelectSubset<T, TripPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TripPlans
     * const tripPlan = await prisma.tripPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripPlanUpdateManyArgs>(args: SelectSubset<T, TripPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripPlans and returns the data updated in the database.
     * @param {TripPlanUpdateManyAndReturnArgs} args - Arguments to update many TripPlans.
     * @example
     * // Update many TripPlans
     * const tripPlan = await prisma.tripPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TripPlans and only return the `id`
     * const tripPlanWithIdOnly = await prisma.tripPlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TripPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, TripPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TripPlan.
     * @param {TripPlanUpsertArgs} args - Arguments to update or create a TripPlan.
     * @example
     * // Update or create a TripPlan
     * const tripPlan = await prisma.tripPlan.upsert({
     *   create: {
     *     // ... data to create a TripPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TripPlan we want to update
     *   }
     * })
     */
    upsert<T extends TripPlanUpsertArgs>(args: SelectSubset<T, TripPlanUpsertArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TripPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanCountArgs} args - Arguments to filter TripPlans to count.
     * @example
     * // Count the number of TripPlans
     * const count = await prisma.tripPlan.count({
     *   where: {
     *     // ... the filter for the TripPlans we want to count
     *   }
     * })
    **/
    count<T extends TripPlanCountArgs>(
      args?: Subset<T, TripPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TripPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TripPlanAggregateArgs>(args: Subset<T, TripPlanAggregateArgs>): Prisma.PrismaPromise<GetTripPlanAggregateType<T>>

    /**
     * Group by TripPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanGroupByArgs} args - Group by arguments.
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
      T extends TripPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripPlanGroupByArgs['orderBy'] }
        : { orderBy?: TripPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TripPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TripPlan model
   */
  readonly fields: TripPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TripPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends TripPlan$userArgs<ExtArgs> = {}>(args?: Subset<T, TripPlan$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    status<T extends TripPlan$statusArgs<ExtArgs> = {}>(args?: Subset<T, TripPlan$statusArgs<ExtArgs>>): Prisma__TripPlanStatusClient<$Result.GetResult<Prisma.$TripPlanStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    output<T extends TripPlan$outputArgs<ExtArgs> = {}>(args?: Subset<T, TripPlan$outputArgs<ExtArgs>>): Prisma__TripPlanOutputClient<$Result.GetResult<Prisma.$TripPlanOutputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TripPlan model
   */
  interface TripPlanFieldRefs {
    readonly id: FieldRef<"TripPlan", 'String'>
    readonly name: FieldRef<"TripPlan", 'String'>
    readonly destination: FieldRef<"TripPlan", 'String'>
    readonly startingLocation: FieldRef<"TripPlan", 'String'>
    readonly travelDatesStart: FieldRef<"TripPlan", 'String'>
    readonly travelDatesEnd: FieldRef<"TripPlan", 'String'>
    readonly dateInputType: FieldRef<"TripPlan", 'String'>
    readonly duration: FieldRef<"TripPlan", 'Int'>
    readonly travelingWith: FieldRef<"TripPlan", 'String'>
    readonly adults: FieldRef<"TripPlan", 'Int'>
    readonly children: FieldRef<"TripPlan", 'Int'>
    readonly ageGroups: FieldRef<"TripPlan", 'String[]'>
    readonly budget: FieldRef<"TripPlan", 'Float'>
    readonly budgetCurrency: FieldRef<"TripPlan", 'String'>
    readonly travelStyle: FieldRef<"TripPlan", 'String'>
    readonly budgetFlexible: FieldRef<"TripPlan", 'Boolean'>
    readonly vibes: FieldRef<"TripPlan", 'String[]'>
    readonly priorities: FieldRef<"TripPlan", 'String[]'>
    readonly interests: FieldRef<"TripPlan", 'String'>
    readonly rooms: FieldRef<"TripPlan", 'Int'>
    readonly pace: FieldRef<"TripPlan", 'Int[]'>
    readonly beenThereBefore: FieldRef<"TripPlan", 'String'>
    readonly lovedPlaces: FieldRef<"TripPlan", 'String'>
    readonly additionalInfo: FieldRef<"TripPlan", 'String'>
    readonly createdAt: FieldRef<"TripPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"TripPlan", 'DateTime'>
    readonly userId: FieldRef<"TripPlan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TripPlan findUnique
   */
  export type TripPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * Filter, which TripPlan to fetch.
     */
    where: TripPlanWhereUniqueInput
  }

  /**
   * TripPlan findUniqueOrThrow
   */
  export type TripPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * Filter, which TripPlan to fetch.
     */
    where: TripPlanWhereUniqueInput
  }

  /**
   * TripPlan findFirst
   */
  export type TripPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * Filter, which TripPlan to fetch.
     */
    where?: TripPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPlans to fetch.
     */
    orderBy?: TripPlanOrderByWithRelationInput | TripPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripPlans.
     */
    cursor?: TripPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripPlans.
     */
    distinct?: TripPlanScalarFieldEnum | TripPlanScalarFieldEnum[]
  }

  /**
   * TripPlan findFirstOrThrow
   */
  export type TripPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * Filter, which TripPlan to fetch.
     */
    where?: TripPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPlans to fetch.
     */
    orderBy?: TripPlanOrderByWithRelationInput | TripPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripPlans.
     */
    cursor?: TripPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripPlans.
     */
    distinct?: TripPlanScalarFieldEnum | TripPlanScalarFieldEnum[]
  }

  /**
   * TripPlan findMany
   */
  export type TripPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * Filter, which TripPlans to fetch.
     */
    where?: TripPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPlans to fetch.
     */
    orderBy?: TripPlanOrderByWithRelationInput | TripPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TripPlans.
     */
    cursor?: TripPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPlans.
     */
    skip?: number
    distinct?: TripPlanScalarFieldEnum | TripPlanScalarFieldEnum[]
  }

  /**
   * TripPlan create
   */
  export type TripPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a TripPlan.
     */
    data: XOR<TripPlanCreateInput, TripPlanUncheckedCreateInput>
  }

  /**
   * TripPlan createMany
   */
  export type TripPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TripPlans.
     */
    data: TripPlanCreateManyInput | TripPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TripPlan createManyAndReturn
   */
  export type TripPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * The data used to create many TripPlans.
     */
    data: TripPlanCreateManyInput | TripPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripPlan update
   */
  export type TripPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a TripPlan.
     */
    data: XOR<TripPlanUpdateInput, TripPlanUncheckedUpdateInput>
    /**
     * Choose, which TripPlan to update.
     */
    where: TripPlanWhereUniqueInput
  }

  /**
   * TripPlan updateMany
   */
  export type TripPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TripPlans.
     */
    data: XOR<TripPlanUpdateManyMutationInput, TripPlanUncheckedUpdateManyInput>
    /**
     * Filter which TripPlans to update
     */
    where?: TripPlanWhereInput
    /**
     * Limit how many TripPlans to update.
     */
    limit?: number
  }

  /**
   * TripPlan updateManyAndReturn
   */
  export type TripPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * The data used to update TripPlans.
     */
    data: XOR<TripPlanUpdateManyMutationInput, TripPlanUncheckedUpdateManyInput>
    /**
     * Filter which TripPlans to update
     */
    where?: TripPlanWhereInput
    /**
     * Limit how many TripPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripPlan upsert
   */
  export type TripPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the TripPlan to update in case it exists.
     */
    where: TripPlanWhereUniqueInput
    /**
     * In case the TripPlan found by the `where` argument doesn't exist, create a new TripPlan with this data.
     */
    create: XOR<TripPlanCreateInput, TripPlanUncheckedCreateInput>
    /**
     * In case the TripPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripPlanUpdateInput, TripPlanUncheckedUpdateInput>
  }

  /**
   * TripPlan delete
   */
  export type TripPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * Filter which TripPlan to delete.
     */
    where: TripPlanWhereUniqueInput
  }

  /**
   * TripPlan deleteMany
   */
  export type TripPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripPlans to delete
     */
    where?: TripPlanWhereInput
    /**
     * Limit how many TripPlans to delete.
     */
    limit?: number
  }

  /**
   * TripPlan.user
   */
  export type TripPlan$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * TripPlan.status
   */
  export type TripPlan$statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanStatus
     */
    select?: TripPlanStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanStatus
     */
    omit?: TripPlanStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanStatusInclude<ExtArgs> | null
    where?: TripPlanStatusWhereInput
  }

  /**
   * TripPlan.output
   */
  export type TripPlan$outputArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanOutput
     */
    select?: TripPlanOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanOutput
     */
    omit?: TripPlanOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanOutputInclude<ExtArgs> | null
    where?: TripPlanOutputWhereInput
  }

  /**
   * TripPlan without action
   */
  export type TripPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
  }


  /**
   * Model plan_tasks
   */

  export type AggregatePlan_tasks = {
    _count: Plan_tasksCountAggregateOutputType | null
    _avg: Plan_tasksAvgAggregateOutputType | null
    _sum: Plan_tasksSumAggregateOutputType | null
    _min: Plan_tasksMinAggregateOutputType | null
    _max: Plan_tasksMaxAggregateOutputType | null
  }

  export type Plan_tasksAvgAggregateOutputType = {
    id: number | null
  }

  export type Plan_tasksSumAggregateOutputType = {
    id: number | null
  }

  export type Plan_tasksMinAggregateOutputType = {
    id: number | null
    trip_plan_id: string | null
    task_type: string | null
    status: $Enums.plan_task_status | null
    error_message: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Plan_tasksMaxAggregateOutputType = {
    id: number | null
    trip_plan_id: string | null
    task_type: string | null
    status: $Enums.plan_task_status | null
    error_message: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Plan_tasksCountAggregateOutputType = {
    id: number
    trip_plan_id: number
    task_type: number
    status: number
    input_data: number
    output_data: number
    error_message: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Plan_tasksAvgAggregateInputType = {
    id?: true
  }

  export type Plan_tasksSumAggregateInputType = {
    id?: true
  }

  export type Plan_tasksMinAggregateInputType = {
    id?: true
    trip_plan_id?: true
    task_type?: true
    status?: true
    error_message?: true
    created_at?: true
    updated_at?: true
  }

  export type Plan_tasksMaxAggregateInputType = {
    id?: true
    trip_plan_id?: true
    task_type?: true
    status?: true
    error_message?: true
    created_at?: true
    updated_at?: true
  }

  export type Plan_tasksCountAggregateInputType = {
    id?: true
    trip_plan_id?: true
    task_type?: true
    status?: true
    input_data?: true
    output_data?: true
    error_message?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Plan_tasksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which plan_tasks to aggregate.
     */
    where?: plan_tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plan_tasks to fetch.
     */
    orderBy?: plan_tasksOrderByWithRelationInput | plan_tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: plan_tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plan_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plan_tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned plan_tasks
    **/
    _count?: true | Plan_tasksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Plan_tasksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Plan_tasksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Plan_tasksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Plan_tasksMaxAggregateInputType
  }

  export type GetPlan_tasksAggregateType<T extends Plan_tasksAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan_tasks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan_tasks[P]>
      : GetScalarType<T[P], AggregatePlan_tasks[P]>
  }




  export type plan_tasksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: plan_tasksWhereInput
    orderBy?: plan_tasksOrderByWithAggregationInput | plan_tasksOrderByWithAggregationInput[]
    by: Plan_tasksScalarFieldEnum[] | Plan_tasksScalarFieldEnum
    having?: plan_tasksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Plan_tasksCountAggregateInputType | true
    _avg?: Plan_tasksAvgAggregateInputType
    _sum?: Plan_tasksSumAggregateInputType
    _min?: Plan_tasksMinAggregateInputType
    _max?: Plan_tasksMaxAggregateInputType
  }

  export type Plan_tasksGroupByOutputType = {
    id: number
    trip_plan_id: string
    task_type: string
    status: $Enums.plan_task_status
    input_data: JsonValue
    output_data: JsonValue | null
    error_message: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: Plan_tasksCountAggregateOutputType | null
    _avg: Plan_tasksAvgAggregateOutputType | null
    _sum: Plan_tasksSumAggregateOutputType | null
    _min: Plan_tasksMinAggregateOutputType | null
    _max: Plan_tasksMaxAggregateOutputType | null
  }

  type GetPlan_tasksGroupByPayload<T extends plan_tasksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Plan_tasksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Plan_tasksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Plan_tasksGroupByOutputType[P]>
            : GetScalarType<T[P], Plan_tasksGroupByOutputType[P]>
        }
      >
    >


  export type plan_tasksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trip_plan_id?: boolean
    task_type?: boolean
    status?: boolean
    input_data?: boolean
    output_data?: boolean
    error_message?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["plan_tasks"]>

  export type plan_tasksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trip_plan_id?: boolean
    task_type?: boolean
    status?: boolean
    input_data?: boolean
    output_data?: boolean
    error_message?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["plan_tasks"]>

  export type plan_tasksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trip_plan_id?: boolean
    task_type?: boolean
    status?: boolean
    input_data?: boolean
    output_data?: boolean
    error_message?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["plan_tasks"]>

  export type plan_tasksSelectScalar = {
    id?: boolean
    trip_plan_id?: boolean
    task_type?: boolean
    status?: boolean
    input_data?: boolean
    output_data?: boolean
    error_message?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type plan_tasksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "trip_plan_id" | "task_type" | "status" | "input_data" | "output_data" | "error_message" | "created_at" | "updated_at", ExtArgs["result"]["plan_tasks"]>

  export type $plan_tasksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "plan_tasks"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      trip_plan_id: string
      task_type: string
      status: $Enums.plan_task_status
      input_data: Prisma.JsonValue
      output_data: Prisma.JsonValue | null
      error_message: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["plan_tasks"]>
    composites: {}
  }

  type plan_tasksGetPayload<S extends boolean | null | undefined | plan_tasksDefaultArgs> = $Result.GetResult<Prisma.$plan_tasksPayload, S>

  type plan_tasksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<plan_tasksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Plan_tasksCountAggregateInputType | true
    }

  export interface plan_tasksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['plan_tasks'], meta: { name: 'plan_tasks' } }
    /**
     * Find zero or one Plan_tasks that matches the filter.
     * @param {plan_tasksFindUniqueArgs} args - Arguments to find a Plan_tasks
     * @example
     * // Get one Plan_tasks
     * const plan_tasks = await prisma.plan_tasks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends plan_tasksFindUniqueArgs>(args: SelectSubset<T, plan_tasksFindUniqueArgs<ExtArgs>>): Prisma__plan_tasksClient<$Result.GetResult<Prisma.$plan_tasksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plan_tasks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {plan_tasksFindUniqueOrThrowArgs} args - Arguments to find a Plan_tasks
     * @example
     * // Get one Plan_tasks
     * const plan_tasks = await prisma.plan_tasks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends plan_tasksFindUniqueOrThrowArgs>(args: SelectSubset<T, plan_tasksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__plan_tasksClient<$Result.GetResult<Prisma.$plan_tasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan_tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plan_tasksFindFirstArgs} args - Arguments to find a Plan_tasks
     * @example
     * // Get one Plan_tasks
     * const plan_tasks = await prisma.plan_tasks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends plan_tasksFindFirstArgs>(args?: SelectSubset<T, plan_tasksFindFirstArgs<ExtArgs>>): Prisma__plan_tasksClient<$Result.GetResult<Prisma.$plan_tasksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan_tasks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plan_tasksFindFirstOrThrowArgs} args - Arguments to find a Plan_tasks
     * @example
     * // Get one Plan_tasks
     * const plan_tasks = await prisma.plan_tasks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends plan_tasksFindFirstOrThrowArgs>(args?: SelectSubset<T, plan_tasksFindFirstOrThrowArgs<ExtArgs>>): Prisma__plan_tasksClient<$Result.GetResult<Prisma.$plan_tasksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plan_tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plan_tasksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plan_tasks
     * const plan_tasks = await prisma.plan_tasks.findMany()
     * 
     * // Get first 10 Plan_tasks
     * const plan_tasks = await prisma.plan_tasks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plan_tasksWithIdOnly = await prisma.plan_tasks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends plan_tasksFindManyArgs>(args?: SelectSubset<T, plan_tasksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$plan_tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plan_tasks.
     * @param {plan_tasksCreateArgs} args - Arguments to create a Plan_tasks.
     * @example
     * // Create one Plan_tasks
     * const Plan_tasks = await prisma.plan_tasks.create({
     *   data: {
     *     // ... data to create a Plan_tasks
     *   }
     * })
     * 
     */
    create<T extends plan_tasksCreateArgs>(args: SelectSubset<T, plan_tasksCreateArgs<ExtArgs>>): Prisma__plan_tasksClient<$Result.GetResult<Prisma.$plan_tasksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plan_tasks.
     * @param {plan_tasksCreateManyArgs} args - Arguments to create many Plan_tasks.
     * @example
     * // Create many Plan_tasks
     * const plan_tasks = await prisma.plan_tasks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends plan_tasksCreateManyArgs>(args?: SelectSubset<T, plan_tasksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plan_tasks and returns the data saved in the database.
     * @param {plan_tasksCreateManyAndReturnArgs} args - Arguments to create many Plan_tasks.
     * @example
     * // Create many Plan_tasks
     * const plan_tasks = await prisma.plan_tasks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plan_tasks and only return the `id`
     * const plan_tasksWithIdOnly = await prisma.plan_tasks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends plan_tasksCreateManyAndReturnArgs>(args?: SelectSubset<T, plan_tasksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$plan_tasksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plan_tasks.
     * @param {plan_tasksDeleteArgs} args - Arguments to delete one Plan_tasks.
     * @example
     * // Delete one Plan_tasks
     * const Plan_tasks = await prisma.plan_tasks.delete({
     *   where: {
     *     // ... filter to delete one Plan_tasks
     *   }
     * })
     * 
     */
    delete<T extends plan_tasksDeleteArgs>(args: SelectSubset<T, plan_tasksDeleteArgs<ExtArgs>>): Prisma__plan_tasksClient<$Result.GetResult<Prisma.$plan_tasksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plan_tasks.
     * @param {plan_tasksUpdateArgs} args - Arguments to update one Plan_tasks.
     * @example
     * // Update one Plan_tasks
     * const plan_tasks = await prisma.plan_tasks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends plan_tasksUpdateArgs>(args: SelectSubset<T, plan_tasksUpdateArgs<ExtArgs>>): Prisma__plan_tasksClient<$Result.GetResult<Prisma.$plan_tasksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plan_tasks.
     * @param {plan_tasksDeleteManyArgs} args - Arguments to filter Plan_tasks to delete.
     * @example
     * // Delete a few Plan_tasks
     * const { count } = await prisma.plan_tasks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends plan_tasksDeleteManyArgs>(args?: SelectSubset<T, plan_tasksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plan_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plan_tasksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plan_tasks
     * const plan_tasks = await prisma.plan_tasks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends plan_tasksUpdateManyArgs>(args: SelectSubset<T, plan_tasksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plan_tasks and returns the data updated in the database.
     * @param {plan_tasksUpdateManyAndReturnArgs} args - Arguments to update many Plan_tasks.
     * @example
     * // Update many Plan_tasks
     * const plan_tasks = await prisma.plan_tasks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plan_tasks and only return the `id`
     * const plan_tasksWithIdOnly = await prisma.plan_tasks.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends plan_tasksUpdateManyAndReturnArgs>(args: SelectSubset<T, plan_tasksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$plan_tasksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plan_tasks.
     * @param {plan_tasksUpsertArgs} args - Arguments to update or create a Plan_tasks.
     * @example
     * // Update or create a Plan_tasks
     * const plan_tasks = await prisma.plan_tasks.upsert({
     *   create: {
     *     // ... data to create a Plan_tasks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan_tasks we want to update
     *   }
     * })
     */
    upsert<T extends plan_tasksUpsertArgs>(args: SelectSubset<T, plan_tasksUpsertArgs<ExtArgs>>): Prisma__plan_tasksClient<$Result.GetResult<Prisma.$plan_tasksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plan_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plan_tasksCountArgs} args - Arguments to filter Plan_tasks to count.
     * @example
     * // Count the number of Plan_tasks
     * const count = await prisma.plan_tasks.count({
     *   where: {
     *     // ... the filter for the Plan_tasks we want to count
     *   }
     * })
    **/
    count<T extends plan_tasksCountArgs>(
      args?: Subset<T, plan_tasksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Plan_tasksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Plan_tasksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Plan_tasksAggregateArgs>(args: Subset<T, Plan_tasksAggregateArgs>): Prisma.PrismaPromise<GetPlan_tasksAggregateType<T>>

    /**
     * Group by Plan_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plan_tasksGroupByArgs} args - Group by arguments.
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
      T extends plan_tasksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: plan_tasksGroupByArgs['orderBy'] }
        : { orderBy?: plan_tasksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, plan_tasksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlan_tasksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the plan_tasks model
   */
  readonly fields: plan_tasksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for plan_tasks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__plan_tasksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the plan_tasks model
   */
  interface plan_tasksFieldRefs {
    readonly id: FieldRef<"plan_tasks", 'Int'>
    readonly trip_plan_id: FieldRef<"plan_tasks", 'String'>
    readonly task_type: FieldRef<"plan_tasks", 'String'>
    readonly status: FieldRef<"plan_tasks", 'plan_task_status'>
    readonly input_data: FieldRef<"plan_tasks", 'Json'>
    readonly output_data: FieldRef<"plan_tasks", 'Json'>
    readonly error_message: FieldRef<"plan_tasks", 'String'>
    readonly created_at: FieldRef<"plan_tasks", 'DateTime'>
    readonly updated_at: FieldRef<"plan_tasks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * plan_tasks findUnique
   */
  export type plan_tasksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_tasks
     */
    select?: plan_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_tasks
     */
    omit?: plan_tasksOmit<ExtArgs> | null
    /**
     * Filter, which plan_tasks to fetch.
     */
    where: plan_tasksWhereUniqueInput
  }

  /**
   * plan_tasks findUniqueOrThrow
   */
  export type plan_tasksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_tasks
     */
    select?: plan_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_tasks
     */
    omit?: plan_tasksOmit<ExtArgs> | null
    /**
     * Filter, which plan_tasks to fetch.
     */
    where: plan_tasksWhereUniqueInput
  }

  /**
   * plan_tasks findFirst
   */
  export type plan_tasksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_tasks
     */
    select?: plan_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_tasks
     */
    omit?: plan_tasksOmit<ExtArgs> | null
    /**
     * Filter, which plan_tasks to fetch.
     */
    where?: plan_tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plan_tasks to fetch.
     */
    orderBy?: plan_tasksOrderByWithRelationInput | plan_tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for plan_tasks.
     */
    cursor?: plan_tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plan_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plan_tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of plan_tasks.
     */
    distinct?: Plan_tasksScalarFieldEnum | Plan_tasksScalarFieldEnum[]
  }

  /**
   * plan_tasks findFirstOrThrow
   */
  export type plan_tasksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_tasks
     */
    select?: plan_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_tasks
     */
    omit?: plan_tasksOmit<ExtArgs> | null
    /**
     * Filter, which plan_tasks to fetch.
     */
    where?: plan_tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plan_tasks to fetch.
     */
    orderBy?: plan_tasksOrderByWithRelationInput | plan_tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for plan_tasks.
     */
    cursor?: plan_tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plan_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plan_tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of plan_tasks.
     */
    distinct?: Plan_tasksScalarFieldEnum | Plan_tasksScalarFieldEnum[]
  }

  /**
   * plan_tasks findMany
   */
  export type plan_tasksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_tasks
     */
    select?: plan_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_tasks
     */
    omit?: plan_tasksOmit<ExtArgs> | null
    /**
     * Filter, which plan_tasks to fetch.
     */
    where?: plan_tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plan_tasks to fetch.
     */
    orderBy?: plan_tasksOrderByWithRelationInput | plan_tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing plan_tasks.
     */
    cursor?: plan_tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plan_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plan_tasks.
     */
    skip?: number
    distinct?: Plan_tasksScalarFieldEnum | Plan_tasksScalarFieldEnum[]
  }

  /**
   * plan_tasks create
   */
  export type plan_tasksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_tasks
     */
    select?: plan_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_tasks
     */
    omit?: plan_tasksOmit<ExtArgs> | null
    /**
     * The data needed to create a plan_tasks.
     */
    data: XOR<plan_tasksCreateInput, plan_tasksUncheckedCreateInput>
  }

  /**
   * plan_tasks createMany
   */
  export type plan_tasksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many plan_tasks.
     */
    data: plan_tasksCreateManyInput | plan_tasksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * plan_tasks createManyAndReturn
   */
  export type plan_tasksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_tasks
     */
    select?: plan_tasksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the plan_tasks
     */
    omit?: plan_tasksOmit<ExtArgs> | null
    /**
     * The data used to create many plan_tasks.
     */
    data: plan_tasksCreateManyInput | plan_tasksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * plan_tasks update
   */
  export type plan_tasksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_tasks
     */
    select?: plan_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_tasks
     */
    omit?: plan_tasksOmit<ExtArgs> | null
    /**
     * The data needed to update a plan_tasks.
     */
    data: XOR<plan_tasksUpdateInput, plan_tasksUncheckedUpdateInput>
    /**
     * Choose, which plan_tasks to update.
     */
    where: plan_tasksWhereUniqueInput
  }

  /**
   * plan_tasks updateMany
   */
  export type plan_tasksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update plan_tasks.
     */
    data: XOR<plan_tasksUpdateManyMutationInput, plan_tasksUncheckedUpdateManyInput>
    /**
     * Filter which plan_tasks to update
     */
    where?: plan_tasksWhereInput
    /**
     * Limit how many plan_tasks to update.
     */
    limit?: number
  }

  /**
   * plan_tasks updateManyAndReturn
   */
  export type plan_tasksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_tasks
     */
    select?: plan_tasksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the plan_tasks
     */
    omit?: plan_tasksOmit<ExtArgs> | null
    /**
     * The data used to update plan_tasks.
     */
    data: XOR<plan_tasksUpdateManyMutationInput, plan_tasksUncheckedUpdateManyInput>
    /**
     * Filter which plan_tasks to update
     */
    where?: plan_tasksWhereInput
    /**
     * Limit how many plan_tasks to update.
     */
    limit?: number
  }

  /**
   * plan_tasks upsert
   */
  export type plan_tasksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_tasks
     */
    select?: plan_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_tasks
     */
    omit?: plan_tasksOmit<ExtArgs> | null
    /**
     * The filter to search for the plan_tasks to update in case it exists.
     */
    where: plan_tasksWhereUniqueInput
    /**
     * In case the plan_tasks found by the `where` argument doesn't exist, create a new plan_tasks with this data.
     */
    create: XOR<plan_tasksCreateInput, plan_tasksUncheckedCreateInput>
    /**
     * In case the plan_tasks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<plan_tasksUpdateInput, plan_tasksUncheckedUpdateInput>
  }

  /**
   * plan_tasks delete
   */
  export type plan_tasksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_tasks
     */
    select?: plan_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_tasks
     */
    omit?: plan_tasksOmit<ExtArgs> | null
    /**
     * Filter which plan_tasks to delete.
     */
    where: plan_tasksWhereUniqueInput
  }

  /**
   * plan_tasks deleteMany
   */
  export type plan_tasksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which plan_tasks to delete
     */
    where?: plan_tasksWhereInput
    /**
     * Limit how many plan_tasks to delete.
     */
    limit?: number
  }

  /**
   * plan_tasks without action
   */
  export type plan_tasksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_tasks
     */
    select?: plan_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_tasks
     */
    omit?: plan_tasksOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const JwksScalarFieldEnum: {
    id: 'id',
    publicKey: 'publicKey',
    privateKey: 'privateKey',
    createdAt: 'createdAt'
  };

  export type JwksScalarFieldEnum = (typeof JwksScalarFieldEnum)[keyof typeof JwksScalarFieldEnum]


  export const TripPlanStatusScalarFieldEnum: {
    id: 'id',
    tripPlanId: 'tripPlanId',
    status: 'status',
    currentStep: 'currentStep',
    error: 'error',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TripPlanStatusScalarFieldEnum = (typeof TripPlanStatusScalarFieldEnum)[keyof typeof TripPlanStatusScalarFieldEnum]


  export const TripPlanOutputScalarFieldEnum: {
    id: 'id',
    tripPlanId: 'tripPlanId',
    itinerary: 'itinerary',
    summary: 'summary',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TripPlanOutputScalarFieldEnum = (typeof TripPlanOutputScalarFieldEnum)[keyof typeof TripPlanOutputScalarFieldEnum]


  export const TripPlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    destination: 'destination',
    startingLocation: 'startingLocation',
    travelDatesStart: 'travelDatesStart',
    travelDatesEnd: 'travelDatesEnd',
    dateInputType: 'dateInputType',
    duration: 'duration',
    travelingWith: 'travelingWith',
    adults: 'adults',
    children: 'children',
    ageGroups: 'ageGroups',
    budget: 'budget',
    budgetCurrency: 'budgetCurrency',
    travelStyle: 'travelStyle',
    budgetFlexible: 'budgetFlexible',
    vibes: 'vibes',
    priorities: 'priorities',
    interests: 'interests',
    rooms: 'rooms',
    pace: 'pace',
    beenThereBefore: 'beenThereBefore',
    lovedPlaces: 'lovedPlaces',
    additionalInfo: 'additionalInfo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type TripPlanScalarFieldEnum = (typeof TripPlanScalarFieldEnum)[keyof typeof TripPlanScalarFieldEnum]


  export const Plan_tasksScalarFieldEnum: {
    id: 'id',
    trip_plan_id: 'trip_plan_id',
    task_type: 'task_type',
    status: 'status',
    input_data: 'input_data',
    output_data: 'output_data',
    error_message: 'error_message',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Plan_tasksScalarFieldEnum = (typeof Plan_tasksScalarFieldEnum)[keyof typeof Plan_tasksScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'plan_task_status'
   */
  export type Enumplan_task_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'plan_task_status'>
    


  /**
   * Reference to a field of type 'plan_task_status[]'
   */
  export type ListEnumplan_task_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'plan_task_status[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    tripPlans?: TripPlanListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    tripPlans?: TripPlanOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    tripPlans?: TripPlanListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
  }

  export type JwksWhereInput = {
    AND?: JwksWhereInput | JwksWhereInput[]
    OR?: JwksWhereInput[]
    NOT?: JwksWhereInput | JwksWhereInput[]
    id?: StringFilter<"Jwks"> | string
    publicKey?: StringFilter<"Jwks"> | string
    privateKey?: StringFilter<"Jwks"> | string
    createdAt?: DateTimeFilter<"Jwks"> | Date | string
  }

  export type JwksOrderByWithRelationInput = {
    id?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
    createdAt?: SortOrder
  }

  export type JwksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JwksWhereInput | JwksWhereInput[]
    OR?: JwksWhereInput[]
    NOT?: JwksWhereInput | JwksWhereInput[]
    publicKey?: StringFilter<"Jwks"> | string
    privateKey?: StringFilter<"Jwks"> | string
    createdAt?: DateTimeFilter<"Jwks"> | Date | string
  }, "id">

  export type JwksOrderByWithAggregationInput = {
    id?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
    createdAt?: SortOrder
    _count?: JwksCountOrderByAggregateInput
    _max?: JwksMaxOrderByAggregateInput
    _min?: JwksMinOrderByAggregateInput
  }

  export type JwksScalarWhereWithAggregatesInput = {
    AND?: JwksScalarWhereWithAggregatesInput | JwksScalarWhereWithAggregatesInput[]
    OR?: JwksScalarWhereWithAggregatesInput[]
    NOT?: JwksScalarWhereWithAggregatesInput | JwksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Jwks"> | string
    publicKey?: StringWithAggregatesFilter<"Jwks"> | string
    privateKey?: StringWithAggregatesFilter<"Jwks"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Jwks"> | Date | string
  }

  export type TripPlanStatusWhereInput = {
    AND?: TripPlanStatusWhereInput | TripPlanStatusWhereInput[]
    OR?: TripPlanStatusWhereInput[]
    NOT?: TripPlanStatusWhereInput | TripPlanStatusWhereInput[]
    id?: StringFilter<"TripPlanStatus"> | string
    tripPlanId?: StringFilter<"TripPlanStatus"> | string
    status?: StringFilter<"TripPlanStatus"> | string
    currentStep?: StringNullableFilter<"TripPlanStatus"> | string | null
    error?: StringNullableFilter<"TripPlanStatus"> | string | null
    startedAt?: DateTimeNullableFilter<"TripPlanStatus"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"TripPlanStatus"> | Date | string | null
    createdAt?: DateTimeFilter<"TripPlanStatus"> | Date | string
    updatedAt?: DateTimeFilter<"TripPlanStatus"> | Date | string
    tripPlan?: XOR<TripPlanScalarRelationFilter, TripPlanWhereInput>
  }

  export type TripPlanStatusOrderByWithRelationInput = {
    id?: SortOrder
    tripPlanId?: SortOrder
    status?: SortOrder
    currentStep?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tripPlan?: TripPlanOrderByWithRelationInput
  }

  export type TripPlanStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tripPlanId?: string
    AND?: TripPlanStatusWhereInput | TripPlanStatusWhereInput[]
    OR?: TripPlanStatusWhereInput[]
    NOT?: TripPlanStatusWhereInput | TripPlanStatusWhereInput[]
    status?: StringFilter<"TripPlanStatus"> | string
    currentStep?: StringNullableFilter<"TripPlanStatus"> | string | null
    error?: StringNullableFilter<"TripPlanStatus"> | string | null
    startedAt?: DateTimeNullableFilter<"TripPlanStatus"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"TripPlanStatus"> | Date | string | null
    createdAt?: DateTimeFilter<"TripPlanStatus"> | Date | string
    updatedAt?: DateTimeFilter<"TripPlanStatus"> | Date | string
    tripPlan?: XOR<TripPlanScalarRelationFilter, TripPlanWhereInput>
  }, "id" | "tripPlanId">

  export type TripPlanStatusOrderByWithAggregationInput = {
    id?: SortOrder
    tripPlanId?: SortOrder
    status?: SortOrder
    currentStep?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TripPlanStatusCountOrderByAggregateInput
    _max?: TripPlanStatusMaxOrderByAggregateInput
    _min?: TripPlanStatusMinOrderByAggregateInput
  }

  export type TripPlanStatusScalarWhereWithAggregatesInput = {
    AND?: TripPlanStatusScalarWhereWithAggregatesInput | TripPlanStatusScalarWhereWithAggregatesInput[]
    OR?: TripPlanStatusScalarWhereWithAggregatesInput[]
    NOT?: TripPlanStatusScalarWhereWithAggregatesInput | TripPlanStatusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TripPlanStatus"> | string
    tripPlanId?: StringWithAggregatesFilter<"TripPlanStatus"> | string
    status?: StringWithAggregatesFilter<"TripPlanStatus"> | string
    currentStep?: StringNullableWithAggregatesFilter<"TripPlanStatus"> | string | null
    error?: StringNullableWithAggregatesFilter<"TripPlanStatus"> | string | null
    startedAt?: DateTimeNullableWithAggregatesFilter<"TripPlanStatus"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"TripPlanStatus"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TripPlanStatus"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TripPlanStatus"> | Date | string
  }

  export type TripPlanOutputWhereInput = {
    AND?: TripPlanOutputWhereInput | TripPlanOutputWhereInput[]
    OR?: TripPlanOutputWhereInput[]
    NOT?: TripPlanOutputWhereInput | TripPlanOutputWhereInput[]
    id?: StringFilter<"TripPlanOutput"> | string
    tripPlanId?: StringFilter<"TripPlanOutput"> | string
    itinerary?: StringFilter<"TripPlanOutput"> | string
    summary?: StringNullableFilter<"TripPlanOutput"> | string | null
    createdAt?: DateTimeFilter<"TripPlanOutput"> | Date | string
    updatedAt?: DateTimeFilter<"TripPlanOutput"> | Date | string
    tripPlan?: XOR<TripPlanScalarRelationFilter, TripPlanWhereInput>
  }

  export type TripPlanOutputOrderByWithRelationInput = {
    id?: SortOrder
    tripPlanId?: SortOrder
    itinerary?: SortOrder
    summary?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tripPlan?: TripPlanOrderByWithRelationInput
  }

  export type TripPlanOutputWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tripPlanId?: string
    AND?: TripPlanOutputWhereInput | TripPlanOutputWhereInput[]
    OR?: TripPlanOutputWhereInput[]
    NOT?: TripPlanOutputWhereInput | TripPlanOutputWhereInput[]
    itinerary?: StringFilter<"TripPlanOutput"> | string
    summary?: StringNullableFilter<"TripPlanOutput"> | string | null
    createdAt?: DateTimeFilter<"TripPlanOutput"> | Date | string
    updatedAt?: DateTimeFilter<"TripPlanOutput"> | Date | string
    tripPlan?: XOR<TripPlanScalarRelationFilter, TripPlanWhereInput>
  }, "id" | "tripPlanId">

  export type TripPlanOutputOrderByWithAggregationInput = {
    id?: SortOrder
    tripPlanId?: SortOrder
    itinerary?: SortOrder
    summary?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TripPlanOutputCountOrderByAggregateInput
    _max?: TripPlanOutputMaxOrderByAggregateInput
    _min?: TripPlanOutputMinOrderByAggregateInput
  }

  export type TripPlanOutputScalarWhereWithAggregatesInput = {
    AND?: TripPlanOutputScalarWhereWithAggregatesInput | TripPlanOutputScalarWhereWithAggregatesInput[]
    OR?: TripPlanOutputScalarWhereWithAggregatesInput[]
    NOT?: TripPlanOutputScalarWhereWithAggregatesInput | TripPlanOutputScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TripPlanOutput"> | string
    tripPlanId?: StringWithAggregatesFilter<"TripPlanOutput"> | string
    itinerary?: StringWithAggregatesFilter<"TripPlanOutput"> | string
    summary?: StringNullableWithAggregatesFilter<"TripPlanOutput"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TripPlanOutput"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TripPlanOutput"> | Date | string
  }

  export type TripPlanWhereInput = {
    AND?: TripPlanWhereInput | TripPlanWhereInput[]
    OR?: TripPlanWhereInput[]
    NOT?: TripPlanWhereInput | TripPlanWhereInput[]
    id?: StringFilter<"TripPlan"> | string
    name?: StringFilter<"TripPlan"> | string
    destination?: StringFilter<"TripPlan"> | string
    startingLocation?: StringFilter<"TripPlan"> | string
    travelDatesStart?: StringFilter<"TripPlan"> | string
    travelDatesEnd?: StringNullableFilter<"TripPlan"> | string | null
    dateInputType?: StringFilter<"TripPlan"> | string
    duration?: IntNullableFilter<"TripPlan"> | number | null
    travelingWith?: StringFilter<"TripPlan"> | string
    adults?: IntFilter<"TripPlan"> | number
    children?: IntFilter<"TripPlan"> | number
    ageGroups?: StringNullableListFilter<"TripPlan">
    budget?: FloatFilter<"TripPlan"> | number
    budgetCurrency?: StringFilter<"TripPlan"> | string
    travelStyle?: StringFilter<"TripPlan"> | string
    budgetFlexible?: BoolFilter<"TripPlan"> | boolean
    vibes?: StringNullableListFilter<"TripPlan">
    priorities?: StringNullableListFilter<"TripPlan">
    interests?: StringNullableFilter<"TripPlan"> | string | null
    rooms?: IntFilter<"TripPlan"> | number
    pace?: IntNullableListFilter<"TripPlan">
    beenThereBefore?: StringNullableFilter<"TripPlan"> | string | null
    lovedPlaces?: StringNullableFilter<"TripPlan"> | string | null
    additionalInfo?: StringNullableFilter<"TripPlan"> | string | null
    createdAt?: DateTimeFilter<"TripPlan"> | Date | string
    updatedAt?: DateTimeFilter<"TripPlan"> | Date | string
    userId?: StringNullableFilter<"TripPlan"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    status?: XOR<TripPlanStatusNullableScalarRelationFilter, TripPlanStatusWhereInput> | null
    output?: XOR<TripPlanOutputNullableScalarRelationFilter, TripPlanOutputWhereInput> | null
  }

  export type TripPlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    destination?: SortOrder
    startingLocation?: SortOrder
    travelDatesStart?: SortOrder
    travelDatesEnd?: SortOrderInput | SortOrder
    dateInputType?: SortOrder
    duration?: SortOrderInput | SortOrder
    travelingWith?: SortOrder
    adults?: SortOrder
    children?: SortOrder
    ageGroups?: SortOrder
    budget?: SortOrder
    budgetCurrency?: SortOrder
    travelStyle?: SortOrder
    budgetFlexible?: SortOrder
    vibes?: SortOrder
    priorities?: SortOrder
    interests?: SortOrderInput | SortOrder
    rooms?: SortOrder
    pace?: SortOrder
    beenThereBefore?: SortOrderInput | SortOrder
    lovedPlaces?: SortOrderInput | SortOrder
    additionalInfo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    status?: TripPlanStatusOrderByWithRelationInput
    output?: TripPlanOutputOrderByWithRelationInput
  }

  export type TripPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TripPlanWhereInput | TripPlanWhereInput[]
    OR?: TripPlanWhereInput[]
    NOT?: TripPlanWhereInput | TripPlanWhereInput[]
    name?: StringFilter<"TripPlan"> | string
    destination?: StringFilter<"TripPlan"> | string
    startingLocation?: StringFilter<"TripPlan"> | string
    travelDatesStart?: StringFilter<"TripPlan"> | string
    travelDatesEnd?: StringNullableFilter<"TripPlan"> | string | null
    dateInputType?: StringFilter<"TripPlan"> | string
    duration?: IntNullableFilter<"TripPlan"> | number | null
    travelingWith?: StringFilter<"TripPlan"> | string
    adults?: IntFilter<"TripPlan"> | number
    children?: IntFilter<"TripPlan"> | number
    ageGroups?: StringNullableListFilter<"TripPlan">
    budget?: FloatFilter<"TripPlan"> | number
    budgetCurrency?: StringFilter<"TripPlan"> | string
    travelStyle?: StringFilter<"TripPlan"> | string
    budgetFlexible?: BoolFilter<"TripPlan"> | boolean
    vibes?: StringNullableListFilter<"TripPlan">
    priorities?: StringNullableListFilter<"TripPlan">
    interests?: StringNullableFilter<"TripPlan"> | string | null
    rooms?: IntFilter<"TripPlan"> | number
    pace?: IntNullableListFilter<"TripPlan">
    beenThereBefore?: StringNullableFilter<"TripPlan"> | string | null
    lovedPlaces?: StringNullableFilter<"TripPlan"> | string | null
    additionalInfo?: StringNullableFilter<"TripPlan"> | string | null
    createdAt?: DateTimeFilter<"TripPlan"> | Date | string
    updatedAt?: DateTimeFilter<"TripPlan"> | Date | string
    userId?: StringNullableFilter<"TripPlan"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    status?: XOR<TripPlanStatusNullableScalarRelationFilter, TripPlanStatusWhereInput> | null
    output?: XOR<TripPlanOutputNullableScalarRelationFilter, TripPlanOutputWhereInput> | null
  }, "id">

  export type TripPlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    destination?: SortOrder
    startingLocation?: SortOrder
    travelDatesStart?: SortOrder
    travelDatesEnd?: SortOrderInput | SortOrder
    dateInputType?: SortOrder
    duration?: SortOrderInput | SortOrder
    travelingWith?: SortOrder
    adults?: SortOrder
    children?: SortOrder
    ageGroups?: SortOrder
    budget?: SortOrder
    budgetCurrency?: SortOrder
    travelStyle?: SortOrder
    budgetFlexible?: SortOrder
    vibes?: SortOrder
    priorities?: SortOrder
    interests?: SortOrderInput | SortOrder
    rooms?: SortOrder
    pace?: SortOrder
    beenThereBefore?: SortOrderInput | SortOrder
    lovedPlaces?: SortOrderInput | SortOrder
    additionalInfo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: TripPlanCountOrderByAggregateInput
    _avg?: TripPlanAvgOrderByAggregateInput
    _max?: TripPlanMaxOrderByAggregateInput
    _min?: TripPlanMinOrderByAggregateInput
    _sum?: TripPlanSumOrderByAggregateInput
  }

  export type TripPlanScalarWhereWithAggregatesInput = {
    AND?: TripPlanScalarWhereWithAggregatesInput | TripPlanScalarWhereWithAggregatesInput[]
    OR?: TripPlanScalarWhereWithAggregatesInput[]
    NOT?: TripPlanScalarWhereWithAggregatesInput | TripPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TripPlan"> | string
    name?: StringWithAggregatesFilter<"TripPlan"> | string
    destination?: StringWithAggregatesFilter<"TripPlan"> | string
    startingLocation?: StringWithAggregatesFilter<"TripPlan"> | string
    travelDatesStart?: StringWithAggregatesFilter<"TripPlan"> | string
    travelDatesEnd?: StringNullableWithAggregatesFilter<"TripPlan"> | string | null
    dateInputType?: StringWithAggregatesFilter<"TripPlan"> | string
    duration?: IntNullableWithAggregatesFilter<"TripPlan"> | number | null
    travelingWith?: StringWithAggregatesFilter<"TripPlan"> | string
    adults?: IntWithAggregatesFilter<"TripPlan"> | number
    children?: IntWithAggregatesFilter<"TripPlan"> | number
    ageGroups?: StringNullableListFilter<"TripPlan">
    budget?: FloatWithAggregatesFilter<"TripPlan"> | number
    budgetCurrency?: StringWithAggregatesFilter<"TripPlan"> | string
    travelStyle?: StringWithAggregatesFilter<"TripPlan"> | string
    budgetFlexible?: BoolWithAggregatesFilter<"TripPlan"> | boolean
    vibes?: StringNullableListFilter<"TripPlan">
    priorities?: StringNullableListFilter<"TripPlan">
    interests?: StringNullableWithAggregatesFilter<"TripPlan"> | string | null
    rooms?: IntWithAggregatesFilter<"TripPlan"> | number
    pace?: IntNullableListFilter<"TripPlan">
    beenThereBefore?: StringNullableWithAggregatesFilter<"TripPlan"> | string | null
    lovedPlaces?: StringNullableWithAggregatesFilter<"TripPlan"> | string | null
    additionalInfo?: StringNullableWithAggregatesFilter<"TripPlan"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TripPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TripPlan"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"TripPlan"> | string | null
  }

  export type plan_tasksWhereInput = {
    AND?: plan_tasksWhereInput | plan_tasksWhereInput[]
    OR?: plan_tasksWhereInput[]
    NOT?: plan_tasksWhereInput | plan_tasksWhereInput[]
    id?: IntFilter<"plan_tasks"> | number
    trip_plan_id?: StringFilter<"plan_tasks"> | string
    task_type?: StringFilter<"plan_tasks"> | string
    status?: Enumplan_task_statusFilter<"plan_tasks"> | $Enums.plan_task_status
    input_data?: JsonFilter<"plan_tasks">
    output_data?: JsonNullableFilter<"plan_tasks">
    error_message?: StringNullableFilter<"plan_tasks"> | string | null
    created_at?: DateTimeNullableFilter<"plan_tasks"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"plan_tasks"> | Date | string | null
  }

  export type plan_tasksOrderByWithRelationInput = {
    id?: SortOrder
    trip_plan_id?: SortOrder
    task_type?: SortOrder
    status?: SortOrder
    input_data?: SortOrder
    output_data?: SortOrderInput | SortOrder
    error_message?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type plan_tasksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: plan_tasksWhereInput | plan_tasksWhereInput[]
    OR?: plan_tasksWhereInput[]
    NOT?: plan_tasksWhereInput | plan_tasksWhereInput[]
    trip_plan_id?: StringFilter<"plan_tasks"> | string
    task_type?: StringFilter<"plan_tasks"> | string
    status?: Enumplan_task_statusFilter<"plan_tasks"> | $Enums.plan_task_status
    input_data?: JsonFilter<"plan_tasks">
    output_data?: JsonNullableFilter<"plan_tasks">
    error_message?: StringNullableFilter<"plan_tasks"> | string | null
    created_at?: DateTimeNullableFilter<"plan_tasks"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"plan_tasks"> | Date | string | null
  }, "id">

  export type plan_tasksOrderByWithAggregationInput = {
    id?: SortOrder
    trip_plan_id?: SortOrder
    task_type?: SortOrder
    status?: SortOrder
    input_data?: SortOrder
    output_data?: SortOrderInput | SortOrder
    error_message?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: plan_tasksCountOrderByAggregateInput
    _avg?: plan_tasksAvgOrderByAggregateInput
    _max?: plan_tasksMaxOrderByAggregateInput
    _min?: plan_tasksMinOrderByAggregateInput
    _sum?: plan_tasksSumOrderByAggregateInput
  }

  export type plan_tasksScalarWhereWithAggregatesInput = {
    AND?: plan_tasksScalarWhereWithAggregatesInput | plan_tasksScalarWhereWithAggregatesInput[]
    OR?: plan_tasksScalarWhereWithAggregatesInput[]
    NOT?: plan_tasksScalarWhereWithAggregatesInput | plan_tasksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"plan_tasks"> | number
    trip_plan_id?: StringWithAggregatesFilter<"plan_tasks"> | string
    task_type?: StringWithAggregatesFilter<"plan_tasks"> | string
    status?: Enumplan_task_statusWithAggregatesFilter<"plan_tasks"> | $Enums.plan_task_status
    input_data?: JsonWithAggregatesFilter<"plan_tasks">
    output_data?: JsonNullableWithAggregatesFilter<"plan_tasks">
    error_message?: StringNullableWithAggregatesFilter<"plan_tasks"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"plan_tasks"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"plan_tasks"> | Date | string | null
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    tripPlans?: TripPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    tripPlans?: TripPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    tripPlans?: TripPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    tripPlans?: TripPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JwksCreateInput = {
    id: string
    publicKey: string
    privateKey: string
    createdAt: Date | string
  }

  export type JwksUncheckedCreateInput = {
    id: string
    publicKey: string
    privateKey: string
    createdAt: Date | string
  }

  export type JwksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JwksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JwksCreateManyInput = {
    id: string
    publicKey: string
    privateKey: string
    createdAt: Date | string
  }

  export type JwksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JwksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanStatusCreateInput = {
    id?: string
    status?: string
    currentStep?: string | null
    error?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tripPlan: TripPlanCreateNestedOneWithoutStatusInput
  }

  export type TripPlanStatusUncheckedCreateInput = {
    id?: string
    tripPlanId: string
    status?: string
    currentStep?: string | null
    error?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripPlanStatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentStep?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripPlan?: TripPlanUpdateOneRequiredWithoutStatusNestedInput
  }

  export type TripPlanStatusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripPlanId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentStep?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanStatusCreateManyInput = {
    id?: string
    tripPlanId: string
    status?: string
    currentStep?: string | null
    error?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripPlanStatusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentStep?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanStatusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripPlanId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentStep?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanOutputCreateInput = {
    id?: string
    itinerary: string
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tripPlan: TripPlanCreateNestedOneWithoutOutputInput
  }

  export type TripPlanOutputUncheckedCreateInput = {
    id?: string
    tripPlanId: string
    itinerary: string
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripPlanOutputUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itinerary?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripPlan?: TripPlanUpdateOneRequiredWithoutOutputNestedInput
  }

  export type TripPlanOutputUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripPlanId?: StringFieldUpdateOperationsInput | string
    itinerary?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanOutputCreateManyInput = {
    id?: string
    tripPlanId: string
    itinerary: string
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripPlanOutputUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    itinerary?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanOutputUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripPlanId?: StringFieldUpdateOperationsInput | string
    itinerary?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanCreateInput = {
    id?: string
    name: string
    destination: string
    startingLocation: string
    travelDatesStart: string
    travelDatesEnd?: string | null
    dateInputType?: string
    duration?: number | null
    travelingWith: string
    adults?: number
    children?: number
    ageGroups?: TripPlanCreateageGroupsInput | string[]
    budget: number
    budgetCurrency?: string
    travelStyle: string
    budgetFlexible?: boolean
    vibes?: TripPlanCreatevibesInput | string[]
    priorities?: TripPlanCreateprioritiesInput | string[]
    interests?: string | null
    rooms?: number
    pace?: TripPlanCreatepaceInput | number[]
    beenThereBefore?: string | null
    lovedPlaces?: string | null
    additionalInfo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutTripPlansInput
    status?: TripPlanStatusCreateNestedOneWithoutTripPlanInput
    output?: TripPlanOutputCreateNestedOneWithoutTripPlanInput
  }

  export type TripPlanUncheckedCreateInput = {
    id?: string
    name: string
    destination: string
    startingLocation: string
    travelDatesStart: string
    travelDatesEnd?: string | null
    dateInputType?: string
    duration?: number | null
    travelingWith: string
    adults?: number
    children?: number
    ageGroups?: TripPlanCreateageGroupsInput | string[]
    budget: number
    budgetCurrency?: string
    travelStyle: string
    budgetFlexible?: boolean
    vibes?: TripPlanCreatevibesInput | string[]
    priorities?: TripPlanCreateprioritiesInput | string[]
    interests?: string | null
    rooms?: number
    pace?: TripPlanCreatepaceInput | number[]
    beenThereBefore?: string | null
    lovedPlaces?: string | null
    additionalInfo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    status?: TripPlanStatusUncheckedCreateNestedOneWithoutTripPlanInput
    output?: TripPlanOutputUncheckedCreateNestedOneWithoutTripPlanInput
  }

  export type TripPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    startingLocation?: StringFieldUpdateOperationsInput | string
    travelDatesStart?: StringFieldUpdateOperationsInput | string
    travelDatesEnd?: NullableStringFieldUpdateOperationsInput | string | null
    dateInputType?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    travelingWith?: StringFieldUpdateOperationsInput | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    ageGroups?: TripPlanUpdateageGroupsInput | string[]
    budget?: FloatFieldUpdateOperationsInput | number
    budgetCurrency?: StringFieldUpdateOperationsInput | string
    travelStyle?: StringFieldUpdateOperationsInput | string
    budgetFlexible?: BoolFieldUpdateOperationsInput | boolean
    vibes?: TripPlanUpdatevibesInput | string[]
    priorities?: TripPlanUpdateprioritiesInput | string[]
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: IntFieldUpdateOperationsInput | number
    pace?: TripPlanUpdatepaceInput | number[]
    beenThereBefore?: NullableStringFieldUpdateOperationsInput | string | null
    lovedPlaces?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutTripPlansNestedInput
    status?: TripPlanStatusUpdateOneWithoutTripPlanNestedInput
    output?: TripPlanOutputUpdateOneWithoutTripPlanNestedInput
  }

  export type TripPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    startingLocation?: StringFieldUpdateOperationsInput | string
    travelDatesStart?: StringFieldUpdateOperationsInput | string
    travelDatesEnd?: NullableStringFieldUpdateOperationsInput | string | null
    dateInputType?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    travelingWith?: StringFieldUpdateOperationsInput | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    ageGroups?: TripPlanUpdateageGroupsInput | string[]
    budget?: FloatFieldUpdateOperationsInput | number
    budgetCurrency?: StringFieldUpdateOperationsInput | string
    travelStyle?: StringFieldUpdateOperationsInput | string
    budgetFlexible?: BoolFieldUpdateOperationsInput | boolean
    vibes?: TripPlanUpdatevibesInput | string[]
    priorities?: TripPlanUpdateprioritiesInput | string[]
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: IntFieldUpdateOperationsInput | number
    pace?: TripPlanUpdatepaceInput | number[]
    beenThereBefore?: NullableStringFieldUpdateOperationsInput | string | null
    lovedPlaces?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: TripPlanStatusUncheckedUpdateOneWithoutTripPlanNestedInput
    output?: TripPlanOutputUncheckedUpdateOneWithoutTripPlanNestedInput
  }

  export type TripPlanCreateManyInput = {
    id?: string
    name: string
    destination: string
    startingLocation: string
    travelDatesStart: string
    travelDatesEnd?: string | null
    dateInputType?: string
    duration?: number | null
    travelingWith: string
    adults?: number
    children?: number
    ageGroups?: TripPlanCreateageGroupsInput | string[]
    budget: number
    budgetCurrency?: string
    travelStyle: string
    budgetFlexible?: boolean
    vibes?: TripPlanCreatevibesInput | string[]
    priorities?: TripPlanCreateprioritiesInput | string[]
    interests?: string | null
    rooms?: number
    pace?: TripPlanCreatepaceInput | number[]
    beenThereBefore?: string | null
    lovedPlaces?: string | null
    additionalInfo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type TripPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    startingLocation?: StringFieldUpdateOperationsInput | string
    travelDatesStart?: StringFieldUpdateOperationsInput | string
    travelDatesEnd?: NullableStringFieldUpdateOperationsInput | string | null
    dateInputType?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    travelingWith?: StringFieldUpdateOperationsInput | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    ageGroups?: TripPlanUpdateageGroupsInput | string[]
    budget?: FloatFieldUpdateOperationsInput | number
    budgetCurrency?: StringFieldUpdateOperationsInput | string
    travelStyle?: StringFieldUpdateOperationsInput | string
    budgetFlexible?: BoolFieldUpdateOperationsInput | boolean
    vibes?: TripPlanUpdatevibesInput | string[]
    priorities?: TripPlanUpdateprioritiesInput | string[]
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: IntFieldUpdateOperationsInput | number
    pace?: TripPlanUpdatepaceInput | number[]
    beenThereBefore?: NullableStringFieldUpdateOperationsInput | string | null
    lovedPlaces?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    startingLocation?: StringFieldUpdateOperationsInput | string
    travelDatesStart?: StringFieldUpdateOperationsInput | string
    travelDatesEnd?: NullableStringFieldUpdateOperationsInput | string | null
    dateInputType?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    travelingWith?: StringFieldUpdateOperationsInput | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    ageGroups?: TripPlanUpdateageGroupsInput | string[]
    budget?: FloatFieldUpdateOperationsInput | number
    budgetCurrency?: StringFieldUpdateOperationsInput | string
    travelStyle?: StringFieldUpdateOperationsInput | string
    budgetFlexible?: BoolFieldUpdateOperationsInput | boolean
    vibes?: TripPlanUpdatevibesInput | string[]
    priorities?: TripPlanUpdateprioritiesInput | string[]
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: IntFieldUpdateOperationsInput | number
    pace?: TripPlanUpdatepaceInput | number[]
    beenThereBefore?: NullableStringFieldUpdateOperationsInput | string | null
    lovedPlaces?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type plan_tasksCreateInput = {
    trip_plan_id: string
    task_type: string
    status: $Enums.plan_task_status
    input_data: JsonNullValueInput | InputJsonValue
    output_data?: NullableJsonNullValueInput | InputJsonValue
    error_message?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type plan_tasksUncheckedCreateInput = {
    id?: number
    trip_plan_id: string
    task_type: string
    status: $Enums.plan_task_status
    input_data: JsonNullValueInput | InputJsonValue
    output_data?: NullableJsonNullValueInput | InputJsonValue
    error_message?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type plan_tasksUpdateInput = {
    trip_plan_id?: StringFieldUpdateOperationsInput | string
    task_type?: StringFieldUpdateOperationsInput | string
    status?: Enumplan_task_statusFieldUpdateOperationsInput | $Enums.plan_task_status
    input_data?: JsonNullValueInput | InputJsonValue
    output_data?: NullableJsonNullValueInput | InputJsonValue
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type plan_tasksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    trip_plan_id?: StringFieldUpdateOperationsInput | string
    task_type?: StringFieldUpdateOperationsInput | string
    status?: Enumplan_task_statusFieldUpdateOperationsInput | $Enums.plan_task_status
    input_data?: JsonNullValueInput | InputJsonValue
    output_data?: NullableJsonNullValueInput | InputJsonValue
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type plan_tasksCreateManyInput = {
    id?: number
    trip_plan_id: string
    task_type: string
    status: $Enums.plan_task_status
    input_data: JsonNullValueInput | InputJsonValue
    output_data?: NullableJsonNullValueInput | InputJsonValue
    error_message?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type plan_tasksUpdateManyMutationInput = {
    trip_plan_id?: StringFieldUpdateOperationsInput | string
    task_type?: StringFieldUpdateOperationsInput | string
    status?: Enumplan_task_statusFieldUpdateOperationsInput | $Enums.plan_task_status
    input_data?: JsonNullValueInput | InputJsonValue
    output_data?: NullableJsonNullValueInput | InputJsonValue
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type plan_tasksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    trip_plan_id?: StringFieldUpdateOperationsInput | string
    task_type?: StringFieldUpdateOperationsInput | string
    status?: Enumplan_task_statusFieldUpdateOperationsInput | $Enums.plan_task_status
    input_data?: JsonNullValueInput | InputJsonValue
    output_data?: NullableJsonNullValueInput | InputJsonValue
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type TripPlanListRelationFilter = {
    every?: TripPlanWhereInput
    some?: TripPlanWhereInput
    none?: TripPlanWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JwksCountOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
    createdAt?: SortOrder
  }

  export type JwksMaxOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
    createdAt?: SortOrder
  }

  export type JwksMinOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
    createdAt?: SortOrder
  }

  export type TripPlanScalarRelationFilter = {
    is?: TripPlanWhereInput
    isNot?: TripPlanWhereInput
  }

  export type TripPlanStatusCountOrderByAggregateInput = {
    id?: SortOrder
    tripPlanId?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    error?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripPlanStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    tripPlanId?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    error?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripPlanStatusMinOrderByAggregateInput = {
    id?: SortOrder
    tripPlanId?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    error?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripPlanOutputCountOrderByAggregateInput = {
    id?: SortOrder
    tripPlanId?: SortOrder
    itinerary?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripPlanOutputMaxOrderByAggregateInput = {
    id?: SortOrder
    tripPlanId?: SortOrder
    itinerary?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripPlanOutputMinOrderByAggregateInput = {
    id?: SortOrder
    tripPlanId?: SortOrder
    itinerary?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TripPlanStatusNullableScalarRelationFilter = {
    is?: TripPlanStatusWhereInput | null
    isNot?: TripPlanStatusWhereInput | null
  }

  export type TripPlanOutputNullableScalarRelationFilter = {
    is?: TripPlanOutputWhereInput | null
    isNot?: TripPlanOutputWhereInput | null
  }

  export type TripPlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    destination?: SortOrder
    startingLocation?: SortOrder
    travelDatesStart?: SortOrder
    travelDatesEnd?: SortOrder
    dateInputType?: SortOrder
    duration?: SortOrder
    travelingWith?: SortOrder
    adults?: SortOrder
    children?: SortOrder
    ageGroups?: SortOrder
    budget?: SortOrder
    budgetCurrency?: SortOrder
    travelStyle?: SortOrder
    budgetFlexible?: SortOrder
    vibes?: SortOrder
    priorities?: SortOrder
    interests?: SortOrder
    rooms?: SortOrder
    pace?: SortOrder
    beenThereBefore?: SortOrder
    lovedPlaces?: SortOrder
    additionalInfo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type TripPlanAvgOrderByAggregateInput = {
    duration?: SortOrder
    adults?: SortOrder
    children?: SortOrder
    budget?: SortOrder
    rooms?: SortOrder
    pace?: SortOrder
  }

  export type TripPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    destination?: SortOrder
    startingLocation?: SortOrder
    travelDatesStart?: SortOrder
    travelDatesEnd?: SortOrder
    dateInputType?: SortOrder
    duration?: SortOrder
    travelingWith?: SortOrder
    adults?: SortOrder
    children?: SortOrder
    budget?: SortOrder
    budgetCurrency?: SortOrder
    travelStyle?: SortOrder
    budgetFlexible?: SortOrder
    interests?: SortOrder
    rooms?: SortOrder
    beenThereBefore?: SortOrder
    lovedPlaces?: SortOrder
    additionalInfo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type TripPlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    destination?: SortOrder
    startingLocation?: SortOrder
    travelDatesStart?: SortOrder
    travelDatesEnd?: SortOrder
    dateInputType?: SortOrder
    duration?: SortOrder
    travelingWith?: SortOrder
    adults?: SortOrder
    children?: SortOrder
    budget?: SortOrder
    budgetCurrency?: SortOrder
    travelStyle?: SortOrder
    budgetFlexible?: SortOrder
    interests?: SortOrder
    rooms?: SortOrder
    beenThereBefore?: SortOrder
    lovedPlaces?: SortOrder
    additionalInfo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type TripPlanSumOrderByAggregateInput = {
    duration?: SortOrder
    adults?: SortOrder
    children?: SortOrder
    budget?: SortOrder
    rooms?: SortOrder
    pace?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type Enumplan_task_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.plan_task_status | Enumplan_task_statusFieldRefInput<$PrismaModel>
    in?: $Enums.plan_task_status[] | ListEnumplan_task_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.plan_task_status[] | ListEnumplan_task_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumplan_task_statusFilter<$PrismaModel> | $Enums.plan_task_status
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type plan_tasksCountOrderByAggregateInput = {
    id?: SortOrder
    trip_plan_id?: SortOrder
    task_type?: SortOrder
    status?: SortOrder
    input_data?: SortOrder
    output_data?: SortOrder
    error_message?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type plan_tasksAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type plan_tasksMaxOrderByAggregateInput = {
    id?: SortOrder
    trip_plan_id?: SortOrder
    task_type?: SortOrder
    status?: SortOrder
    error_message?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type plan_tasksMinOrderByAggregateInput = {
    id?: SortOrder
    trip_plan_id?: SortOrder
    task_type?: SortOrder
    status?: SortOrder
    error_message?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type plan_tasksSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumplan_task_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.plan_task_status | Enumplan_task_statusFieldRefInput<$PrismaModel>
    in?: $Enums.plan_task_status[] | ListEnumplan_task_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.plan_task_status[] | ListEnumplan_task_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumplan_task_statusWithAggregatesFilter<$PrismaModel> | $Enums.plan_task_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumplan_task_statusFilter<$PrismaModel>
    _max?: NestedEnumplan_task_statusFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type TripPlanCreateNestedManyWithoutUserInput = {
    create?: XOR<TripPlanCreateWithoutUserInput, TripPlanUncheckedCreateWithoutUserInput> | TripPlanCreateWithoutUserInput[] | TripPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripPlanCreateOrConnectWithoutUserInput | TripPlanCreateOrConnectWithoutUserInput[]
    createMany?: TripPlanCreateManyUserInputEnvelope
    connect?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type TripPlanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TripPlanCreateWithoutUserInput, TripPlanUncheckedCreateWithoutUserInput> | TripPlanCreateWithoutUserInput[] | TripPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripPlanCreateOrConnectWithoutUserInput | TripPlanCreateOrConnectWithoutUserInput[]
    createMany?: TripPlanCreateManyUserInputEnvelope
    connect?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type TripPlanUpdateManyWithoutUserNestedInput = {
    create?: XOR<TripPlanCreateWithoutUserInput, TripPlanUncheckedCreateWithoutUserInput> | TripPlanCreateWithoutUserInput[] | TripPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripPlanCreateOrConnectWithoutUserInput | TripPlanCreateOrConnectWithoutUserInput[]
    upsert?: TripPlanUpsertWithWhereUniqueWithoutUserInput | TripPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TripPlanCreateManyUserInputEnvelope
    set?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
    disconnect?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
    delete?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
    connect?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
    update?: TripPlanUpdateWithWhereUniqueWithoutUserInput | TripPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TripPlanUpdateManyWithWhereWithoutUserInput | TripPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TripPlanScalarWhereInput | TripPlanScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type TripPlanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TripPlanCreateWithoutUserInput, TripPlanUncheckedCreateWithoutUserInput> | TripPlanCreateWithoutUserInput[] | TripPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripPlanCreateOrConnectWithoutUserInput | TripPlanCreateOrConnectWithoutUserInput[]
    upsert?: TripPlanUpsertWithWhereUniqueWithoutUserInput | TripPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TripPlanCreateManyUserInputEnvelope
    set?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
    disconnect?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
    delete?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
    connect?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
    update?: TripPlanUpdateWithWhereUniqueWithoutUserInput | TripPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TripPlanUpdateManyWithWhereWithoutUserInput | TripPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TripPlanScalarWhereInput | TripPlanScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type TripPlanCreateNestedOneWithoutStatusInput = {
    create?: XOR<TripPlanCreateWithoutStatusInput, TripPlanUncheckedCreateWithoutStatusInput>
    connectOrCreate?: TripPlanCreateOrConnectWithoutStatusInput
    connect?: TripPlanWhereUniqueInput
  }

  export type TripPlanUpdateOneRequiredWithoutStatusNestedInput = {
    create?: XOR<TripPlanCreateWithoutStatusInput, TripPlanUncheckedCreateWithoutStatusInput>
    connectOrCreate?: TripPlanCreateOrConnectWithoutStatusInput
    upsert?: TripPlanUpsertWithoutStatusInput
    connect?: TripPlanWhereUniqueInput
    update?: XOR<XOR<TripPlanUpdateToOneWithWhereWithoutStatusInput, TripPlanUpdateWithoutStatusInput>, TripPlanUncheckedUpdateWithoutStatusInput>
  }

  export type TripPlanCreateNestedOneWithoutOutputInput = {
    create?: XOR<TripPlanCreateWithoutOutputInput, TripPlanUncheckedCreateWithoutOutputInput>
    connectOrCreate?: TripPlanCreateOrConnectWithoutOutputInput
    connect?: TripPlanWhereUniqueInput
  }

  export type TripPlanUpdateOneRequiredWithoutOutputNestedInput = {
    create?: XOR<TripPlanCreateWithoutOutputInput, TripPlanUncheckedCreateWithoutOutputInput>
    connectOrCreate?: TripPlanCreateOrConnectWithoutOutputInput
    upsert?: TripPlanUpsertWithoutOutputInput
    connect?: TripPlanWhereUniqueInput
    update?: XOR<XOR<TripPlanUpdateToOneWithWhereWithoutOutputInput, TripPlanUpdateWithoutOutputInput>, TripPlanUncheckedUpdateWithoutOutputInput>
  }

  export type TripPlanCreateageGroupsInput = {
    set: string[]
  }

  export type TripPlanCreatevibesInput = {
    set: string[]
  }

  export type TripPlanCreateprioritiesInput = {
    set: string[]
  }

  export type TripPlanCreatepaceInput = {
    set: number[]
  }

  export type UserCreateNestedOneWithoutTripPlansInput = {
    create?: XOR<UserCreateWithoutTripPlansInput, UserUncheckedCreateWithoutTripPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripPlansInput
    connect?: UserWhereUniqueInput
  }

  export type TripPlanStatusCreateNestedOneWithoutTripPlanInput = {
    create?: XOR<TripPlanStatusCreateWithoutTripPlanInput, TripPlanStatusUncheckedCreateWithoutTripPlanInput>
    connectOrCreate?: TripPlanStatusCreateOrConnectWithoutTripPlanInput
    connect?: TripPlanStatusWhereUniqueInput
  }

  export type TripPlanOutputCreateNestedOneWithoutTripPlanInput = {
    create?: XOR<TripPlanOutputCreateWithoutTripPlanInput, TripPlanOutputUncheckedCreateWithoutTripPlanInput>
    connectOrCreate?: TripPlanOutputCreateOrConnectWithoutTripPlanInput
    connect?: TripPlanOutputWhereUniqueInput
  }

  export type TripPlanStatusUncheckedCreateNestedOneWithoutTripPlanInput = {
    create?: XOR<TripPlanStatusCreateWithoutTripPlanInput, TripPlanStatusUncheckedCreateWithoutTripPlanInput>
    connectOrCreate?: TripPlanStatusCreateOrConnectWithoutTripPlanInput
    connect?: TripPlanStatusWhereUniqueInput
  }

  export type TripPlanOutputUncheckedCreateNestedOneWithoutTripPlanInput = {
    create?: XOR<TripPlanOutputCreateWithoutTripPlanInput, TripPlanOutputUncheckedCreateWithoutTripPlanInput>
    connectOrCreate?: TripPlanOutputCreateOrConnectWithoutTripPlanInput
    connect?: TripPlanOutputWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TripPlanUpdateageGroupsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TripPlanUpdatevibesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TripPlanUpdateprioritiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TripPlanUpdatepaceInput = {
    set?: number[]
    push?: number | number[]
  }

  export type UserUpdateOneWithoutTripPlansNestedInput = {
    create?: XOR<UserCreateWithoutTripPlansInput, UserUncheckedCreateWithoutTripPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripPlansInput
    upsert?: UserUpsertWithoutTripPlansInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTripPlansInput, UserUpdateWithoutTripPlansInput>, UserUncheckedUpdateWithoutTripPlansInput>
  }

  export type TripPlanStatusUpdateOneWithoutTripPlanNestedInput = {
    create?: XOR<TripPlanStatusCreateWithoutTripPlanInput, TripPlanStatusUncheckedCreateWithoutTripPlanInput>
    connectOrCreate?: TripPlanStatusCreateOrConnectWithoutTripPlanInput
    upsert?: TripPlanStatusUpsertWithoutTripPlanInput
    disconnect?: TripPlanStatusWhereInput | boolean
    delete?: TripPlanStatusWhereInput | boolean
    connect?: TripPlanStatusWhereUniqueInput
    update?: XOR<XOR<TripPlanStatusUpdateToOneWithWhereWithoutTripPlanInput, TripPlanStatusUpdateWithoutTripPlanInput>, TripPlanStatusUncheckedUpdateWithoutTripPlanInput>
  }

  export type TripPlanOutputUpdateOneWithoutTripPlanNestedInput = {
    create?: XOR<TripPlanOutputCreateWithoutTripPlanInput, TripPlanOutputUncheckedCreateWithoutTripPlanInput>
    connectOrCreate?: TripPlanOutputCreateOrConnectWithoutTripPlanInput
    upsert?: TripPlanOutputUpsertWithoutTripPlanInput
    disconnect?: TripPlanOutputWhereInput | boolean
    delete?: TripPlanOutputWhereInput | boolean
    connect?: TripPlanOutputWhereUniqueInput
    update?: XOR<XOR<TripPlanOutputUpdateToOneWithWhereWithoutTripPlanInput, TripPlanOutputUpdateWithoutTripPlanInput>, TripPlanOutputUncheckedUpdateWithoutTripPlanInput>
  }

  export type TripPlanStatusUncheckedUpdateOneWithoutTripPlanNestedInput = {
    create?: XOR<TripPlanStatusCreateWithoutTripPlanInput, TripPlanStatusUncheckedCreateWithoutTripPlanInput>
    connectOrCreate?: TripPlanStatusCreateOrConnectWithoutTripPlanInput
    upsert?: TripPlanStatusUpsertWithoutTripPlanInput
    disconnect?: TripPlanStatusWhereInput | boolean
    delete?: TripPlanStatusWhereInput | boolean
    connect?: TripPlanStatusWhereUniqueInput
    update?: XOR<XOR<TripPlanStatusUpdateToOneWithWhereWithoutTripPlanInput, TripPlanStatusUpdateWithoutTripPlanInput>, TripPlanStatusUncheckedUpdateWithoutTripPlanInput>
  }

  export type TripPlanOutputUncheckedUpdateOneWithoutTripPlanNestedInput = {
    create?: XOR<TripPlanOutputCreateWithoutTripPlanInput, TripPlanOutputUncheckedCreateWithoutTripPlanInput>
    connectOrCreate?: TripPlanOutputCreateOrConnectWithoutTripPlanInput
    upsert?: TripPlanOutputUpsertWithoutTripPlanInput
    disconnect?: TripPlanOutputWhereInput | boolean
    delete?: TripPlanOutputWhereInput | boolean
    connect?: TripPlanOutputWhereUniqueInput
    update?: XOR<XOR<TripPlanOutputUpdateToOneWithWhereWithoutTripPlanInput, TripPlanOutputUpdateWithoutTripPlanInput>, TripPlanOutputUncheckedUpdateWithoutTripPlanInput>
  }

  export type Enumplan_task_statusFieldUpdateOperationsInput = {
    set?: $Enums.plan_task_status
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumplan_task_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.plan_task_status | Enumplan_task_statusFieldRefInput<$PrismaModel>
    in?: $Enums.plan_task_status[] | ListEnumplan_task_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.plan_task_status[] | ListEnumplan_task_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumplan_task_statusFilter<$PrismaModel> | $Enums.plan_task_status
  }

  export type NestedEnumplan_task_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.plan_task_status | Enumplan_task_statusFieldRefInput<$PrismaModel>
    in?: $Enums.plan_task_status[] | ListEnumplan_task_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.plan_task_status[] | ListEnumplan_task_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumplan_task_statusWithAggregatesFilter<$PrismaModel> | $Enums.plan_task_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumplan_task_statusFilter<$PrismaModel>
    _max?: NestedEnumplan_task_statusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TripPlanCreateWithoutUserInput = {
    id?: string
    name: string
    destination: string
    startingLocation: string
    travelDatesStart: string
    travelDatesEnd?: string | null
    dateInputType?: string
    duration?: number | null
    travelingWith: string
    adults?: number
    children?: number
    ageGroups?: TripPlanCreateageGroupsInput | string[]
    budget: number
    budgetCurrency?: string
    travelStyle: string
    budgetFlexible?: boolean
    vibes?: TripPlanCreatevibesInput | string[]
    priorities?: TripPlanCreateprioritiesInput | string[]
    interests?: string | null
    rooms?: number
    pace?: TripPlanCreatepaceInput | number[]
    beenThereBefore?: string | null
    lovedPlaces?: string | null
    additionalInfo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: TripPlanStatusCreateNestedOneWithoutTripPlanInput
    output?: TripPlanOutputCreateNestedOneWithoutTripPlanInput
  }

  export type TripPlanUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    destination: string
    startingLocation: string
    travelDatesStart: string
    travelDatesEnd?: string | null
    dateInputType?: string
    duration?: number | null
    travelingWith: string
    adults?: number
    children?: number
    ageGroups?: TripPlanCreateageGroupsInput | string[]
    budget: number
    budgetCurrency?: string
    travelStyle: string
    budgetFlexible?: boolean
    vibes?: TripPlanCreatevibesInput | string[]
    priorities?: TripPlanCreateprioritiesInput | string[]
    interests?: string | null
    rooms?: number
    pace?: TripPlanCreatepaceInput | number[]
    beenThereBefore?: string | null
    lovedPlaces?: string | null
    additionalInfo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: TripPlanStatusUncheckedCreateNestedOneWithoutTripPlanInput
    output?: TripPlanOutputUncheckedCreateNestedOneWithoutTripPlanInput
  }

  export type TripPlanCreateOrConnectWithoutUserInput = {
    where: TripPlanWhereUniqueInput
    create: XOR<TripPlanCreateWithoutUserInput, TripPlanUncheckedCreateWithoutUserInput>
  }

  export type TripPlanCreateManyUserInputEnvelope = {
    data: TripPlanCreateManyUserInput | TripPlanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type TripPlanUpsertWithWhereUniqueWithoutUserInput = {
    where: TripPlanWhereUniqueInput
    update: XOR<TripPlanUpdateWithoutUserInput, TripPlanUncheckedUpdateWithoutUserInput>
    create: XOR<TripPlanCreateWithoutUserInput, TripPlanUncheckedCreateWithoutUserInput>
  }

  export type TripPlanUpdateWithWhereUniqueWithoutUserInput = {
    where: TripPlanWhereUniqueInput
    data: XOR<TripPlanUpdateWithoutUserInput, TripPlanUncheckedUpdateWithoutUserInput>
  }

  export type TripPlanUpdateManyWithWhereWithoutUserInput = {
    where: TripPlanScalarWhereInput
    data: XOR<TripPlanUpdateManyMutationInput, TripPlanUncheckedUpdateManyWithoutUserInput>
  }

  export type TripPlanScalarWhereInput = {
    AND?: TripPlanScalarWhereInput | TripPlanScalarWhereInput[]
    OR?: TripPlanScalarWhereInput[]
    NOT?: TripPlanScalarWhereInput | TripPlanScalarWhereInput[]
    id?: StringFilter<"TripPlan"> | string
    name?: StringFilter<"TripPlan"> | string
    destination?: StringFilter<"TripPlan"> | string
    startingLocation?: StringFilter<"TripPlan"> | string
    travelDatesStart?: StringFilter<"TripPlan"> | string
    travelDatesEnd?: StringNullableFilter<"TripPlan"> | string | null
    dateInputType?: StringFilter<"TripPlan"> | string
    duration?: IntNullableFilter<"TripPlan"> | number | null
    travelingWith?: StringFilter<"TripPlan"> | string
    adults?: IntFilter<"TripPlan"> | number
    children?: IntFilter<"TripPlan"> | number
    ageGroups?: StringNullableListFilter<"TripPlan">
    budget?: FloatFilter<"TripPlan"> | number
    budgetCurrency?: StringFilter<"TripPlan"> | string
    travelStyle?: StringFilter<"TripPlan"> | string
    budgetFlexible?: BoolFilter<"TripPlan"> | boolean
    vibes?: StringNullableListFilter<"TripPlan">
    priorities?: StringNullableListFilter<"TripPlan">
    interests?: StringNullableFilter<"TripPlan"> | string | null
    rooms?: IntFilter<"TripPlan"> | number
    pace?: IntNullableListFilter<"TripPlan">
    beenThereBefore?: StringNullableFilter<"TripPlan"> | string | null
    lovedPlaces?: StringNullableFilter<"TripPlan"> | string | null
    additionalInfo?: StringNullableFilter<"TripPlan"> | string | null
    createdAt?: DateTimeFilter<"TripPlan"> | Date | string
    updatedAt?: DateTimeFilter<"TripPlan"> | Date | string
    userId?: StringNullableFilter<"TripPlan"> | string | null
  }

  export type UserCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    tripPlans?: TripPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    tripPlans?: TripPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    tripPlans?: TripPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    tripPlans?: TripPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    tripPlans?: TripPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    tripPlans?: TripPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    tripPlans?: TripPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    tripPlans?: TripPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TripPlanCreateWithoutStatusInput = {
    id?: string
    name: string
    destination: string
    startingLocation: string
    travelDatesStart: string
    travelDatesEnd?: string | null
    dateInputType?: string
    duration?: number | null
    travelingWith: string
    adults?: number
    children?: number
    ageGroups?: TripPlanCreateageGroupsInput | string[]
    budget: number
    budgetCurrency?: string
    travelStyle: string
    budgetFlexible?: boolean
    vibes?: TripPlanCreatevibesInput | string[]
    priorities?: TripPlanCreateprioritiesInput | string[]
    interests?: string | null
    rooms?: number
    pace?: TripPlanCreatepaceInput | number[]
    beenThereBefore?: string | null
    lovedPlaces?: string | null
    additionalInfo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutTripPlansInput
    output?: TripPlanOutputCreateNestedOneWithoutTripPlanInput
  }

  export type TripPlanUncheckedCreateWithoutStatusInput = {
    id?: string
    name: string
    destination: string
    startingLocation: string
    travelDatesStart: string
    travelDatesEnd?: string | null
    dateInputType?: string
    duration?: number | null
    travelingWith: string
    adults?: number
    children?: number
    ageGroups?: TripPlanCreateageGroupsInput | string[]
    budget: number
    budgetCurrency?: string
    travelStyle: string
    budgetFlexible?: boolean
    vibes?: TripPlanCreatevibesInput | string[]
    priorities?: TripPlanCreateprioritiesInput | string[]
    interests?: string | null
    rooms?: number
    pace?: TripPlanCreatepaceInput | number[]
    beenThereBefore?: string | null
    lovedPlaces?: string | null
    additionalInfo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    output?: TripPlanOutputUncheckedCreateNestedOneWithoutTripPlanInput
  }

  export type TripPlanCreateOrConnectWithoutStatusInput = {
    where: TripPlanWhereUniqueInput
    create: XOR<TripPlanCreateWithoutStatusInput, TripPlanUncheckedCreateWithoutStatusInput>
  }

  export type TripPlanUpsertWithoutStatusInput = {
    update: XOR<TripPlanUpdateWithoutStatusInput, TripPlanUncheckedUpdateWithoutStatusInput>
    create: XOR<TripPlanCreateWithoutStatusInput, TripPlanUncheckedCreateWithoutStatusInput>
    where?: TripPlanWhereInput
  }

  export type TripPlanUpdateToOneWithWhereWithoutStatusInput = {
    where?: TripPlanWhereInput
    data: XOR<TripPlanUpdateWithoutStatusInput, TripPlanUncheckedUpdateWithoutStatusInput>
  }

  export type TripPlanUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    startingLocation?: StringFieldUpdateOperationsInput | string
    travelDatesStart?: StringFieldUpdateOperationsInput | string
    travelDatesEnd?: NullableStringFieldUpdateOperationsInput | string | null
    dateInputType?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    travelingWith?: StringFieldUpdateOperationsInput | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    ageGroups?: TripPlanUpdateageGroupsInput | string[]
    budget?: FloatFieldUpdateOperationsInput | number
    budgetCurrency?: StringFieldUpdateOperationsInput | string
    travelStyle?: StringFieldUpdateOperationsInput | string
    budgetFlexible?: BoolFieldUpdateOperationsInput | boolean
    vibes?: TripPlanUpdatevibesInput | string[]
    priorities?: TripPlanUpdateprioritiesInput | string[]
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: IntFieldUpdateOperationsInput | number
    pace?: TripPlanUpdatepaceInput | number[]
    beenThereBefore?: NullableStringFieldUpdateOperationsInput | string | null
    lovedPlaces?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutTripPlansNestedInput
    output?: TripPlanOutputUpdateOneWithoutTripPlanNestedInput
  }

  export type TripPlanUncheckedUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    startingLocation?: StringFieldUpdateOperationsInput | string
    travelDatesStart?: StringFieldUpdateOperationsInput | string
    travelDatesEnd?: NullableStringFieldUpdateOperationsInput | string | null
    dateInputType?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    travelingWith?: StringFieldUpdateOperationsInput | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    ageGroups?: TripPlanUpdateageGroupsInput | string[]
    budget?: FloatFieldUpdateOperationsInput | number
    budgetCurrency?: StringFieldUpdateOperationsInput | string
    travelStyle?: StringFieldUpdateOperationsInput | string
    budgetFlexible?: BoolFieldUpdateOperationsInput | boolean
    vibes?: TripPlanUpdatevibesInput | string[]
    priorities?: TripPlanUpdateprioritiesInput | string[]
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: IntFieldUpdateOperationsInput | number
    pace?: TripPlanUpdatepaceInput | number[]
    beenThereBefore?: NullableStringFieldUpdateOperationsInput | string | null
    lovedPlaces?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    output?: TripPlanOutputUncheckedUpdateOneWithoutTripPlanNestedInput
  }

  export type TripPlanCreateWithoutOutputInput = {
    id?: string
    name: string
    destination: string
    startingLocation: string
    travelDatesStart: string
    travelDatesEnd?: string | null
    dateInputType?: string
    duration?: number | null
    travelingWith: string
    adults?: number
    children?: number
    ageGroups?: TripPlanCreateageGroupsInput | string[]
    budget: number
    budgetCurrency?: string
    travelStyle: string
    budgetFlexible?: boolean
    vibes?: TripPlanCreatevibesInput | string[]
    priorities?: TripPlanCreateprioritiesInput | string[]
    interests?: string | null
    rooms?: number
    pace?: TripPlanCreatepaceInput | number[]
    beenThereBefore?: string | null
    lovedPlaces?: string | null
    additionalInfo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutTripPlansInput
    status?: TripPlanStatusCreateNestedOneWithoutTripPlanInput
  }

  export type TripPlanUncheckedCreateWithoutOutputInput = {
    id?: string
    name: string
    destination: string
    startingLocation: string
    travelDatesStart: string
    travelDatesEnd?: string | null
    dateInputType?: string
    duration?: number | null
    travelingWith: string
    adults?: number
    children?: number
    ageGroups?: TripPlanCreateageGroupsInput | string[]
    budget: number
    budgetCurrency?: string
    travelStyle: string
    budgetFlexible?: boolean
    vibes?: TripPlanCreatevibesInput | string[]
    priorities?: TripPlanCreateprioritiesInput | string[]
    interests?: string | null
    rooms?: number
    pace?: TripPlanCreatepaceInput | number[]
    beenThereBefore?: string | null
    lovedPlaces?: string | null
    additionalInfo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    status?: TripPlanStatusUncheckedCreateNestedOneWithoutTripPlanInput
  }

  export type TripPlanCreateOrConnectWithoutOutputInput = {
    where: TripPlanWhereUniqueInput
    create: XOR<TripPlanCreateWithoutOutputInput, TripPlanUncheckedCreateWithoutOutputInput>
  }

  export type TripPlanUpsertWithoutOutputInput = {
    update: XOR<TripPlanUpdateWithoutOutputInput, TripPlanUncheckedUpdateWithoutOutputInput>
    create: XOR<TripPlanCreateWithoutOutputInput, TripPlanUncheckedCreateWithoutOutputInput>
    where?: TripPlanWhereInput
  }

  export type TripPlanUpdateToOneWithWhereWithoutOutputInput = {
    where?: TripPlanWhereInput
    data: XOR<TripPlanUpdateWithoutOutputInput, TripPlanUncheckedUpdateWithoutOutputInput>
  }

  export type TripPlanUpdateWithoutOutputInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    startingLocation?: StringFieldUpdateOperationsInput | string
    travelDatesStart?: StringFieldUpdateOperationsInput | string
    travelDatesEnd?: NullableStringFieldUpdateOperationsInput | string | null
    dateInputType?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    travelingWith?: StringFieldUpdateOperationsInput | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    ageGroups?: TripPlanUpdateageGroupsInput | string[]
    budget?: FloatFieldUpdateOperationsInput | number
    budgetCurrency?: StringFieldUpdateOperationsInput | string
    travelStyle?: StringFieldUpdateOperationsInput | string
    budgetFlexible?: BoolFieldUpdateOperationsInput | boolean
    vibes?: TripPlanUpdatevibesInput | string[]
    priorities?: TripPlanUpdateprioritiesInput | string[]
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: IntFieldUpdateOperationsInput | number
    pace?: TripPlanUpdatepaceInput | number[]
    beenThereBefore?: NullableStringFieldUpdateOperationsInput | string | null
    lovedPlaces?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutTripPlansNestedInput
    status?: TripPlanStatusUpdateOneWithoutTripPlanNestedInput
  }

  export type TripPlanUncheckedUpdateWithoutOutputInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    startingLocation?: StringFieldUpdateOperationsInput | string
    travelDatesStart?: StringFieldUpdateOperationsInput | string
    travelDatesEnd?: NullableStringFieldUpdateOperationsInput | string | null
    dateInputType?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    travelingWith?: StringFieldUpdateOperationsInput | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    ageGroups?: TripPlanUpdateageGroupsInput | string[]
    budget?: FloatFieldUpdateOperationsInput | number
    budgetCurrency?: StringFieldUpdateOperationsInput | string
    travelStyle?: StringFieldUpdateOperationsInput | string
    budgetFlexible?: BoolFieldUpdateOperationsInput | boolean
    vibes?: TripPlanUpdatevibesInput | string[]
    priorities?: TripPlanUpdateprioritiesInput | string[]
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: IntFieldUpdateOperationsInput | number
    pace?: TripPlanUpdatepaceInput | number[]
    beenThereBefore?: NullableStringFieldUpdateOperationsInput | string | null
    lovedPlaces?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: TripPlanStatusUncheckedUpdateOneWithoutTripPlanNestedInput
  }

  export type UserCreateWithoutTripPlansInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTripPlansInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTripPlansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTripPlansInput, UserUncheckedCreateWithoutTripPlansInput>
  }

  export type TripPlanStatusCreateWithoutTripPlanInput = {
    id?: string
    status?: string
    currentStep?: string | null
    error?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripPlanStatusUncheckedCreateWithoutTripPlanInput = {
    id?: string
    status?: string
    currentStep?: string | null
    error?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripPlanStatusCreateOrConnectWithoutTripPlanInput = {
    where: TripPlanStatusWhereUniqueInput
    create: XOR<TripPlanStatusCreateWithoutTripPlanInput, TripPlanStatusUncheckedCreateWithoutTripPlanInput>
  }

  export type TripPlanOutputCreateWithoutTripPlanInput = {
    id?: string
    itinerary: string
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripPlanOutputUncheckedCreateWithoutTripPlanInput = {
    id?: string
    itinerary: string
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripPlanOutputCreateOrConnectWithoutTripPlanInput = {
    where: TripPlanOutputWhereUniqueInput
    create: XOR<TripPlanOutputCreateWithoutTripPlanInput, TripPlanOutputUncheckedCreateWithoutTripPlanInput>
  }

  export type UserUpsertWithoutTripPlansInput = {
    update: XOR<UserUpdateWithoutTripPlansInput, UserUncheckedUpdateWithoutTripPlansInput>
    create: XOR<UserCreateWithoutTripPlansInput, UserUncheckedCreateWithoutTripPlansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTripPlansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTripPlansInput, UserUncheckedUpdateWithoutTripPlansInput>
  }

  export type UserUpdateWithoutTripPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTripPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TripPlanStatusUpsertWithoutTripPlanInput = {
    update: XOR<TripPlanStatusUpdateWithoutTripPlanInput, TripPlanStatusUncheckedUpdateWithoutTripPlanInput>
    create: XOR<TripPlanStatusCreateWithoutTripPlanInput, TripPlanStatusUncheckedCreateWithoutTripPlanInput>
    where?: TripPlanStatusWhereInput
  }

  export type TripPlanStatusUpdateToOneWithWhereWithoutTripPlanInput = {
    where?: TripPlanStatusWhereInput
    data: XOR<TripPlanStatusUpdateWithoutTripPlanInput, TripPlanStatusUncheckedUpdateWithoutTripPlanInput>
  }

  export type TripPlanStatusUpdateWithoutTripPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentStep?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanStatusUncheckedUpdateWithoutTripPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentStep?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanOutputUpsertWithoutTripPlanInput = {
    update: XOR<TripPlanOutputUpdateWithoutTripPlanInput, TripPlanOutputUncheckedUpdateWithoutTripPlanInput>
    create: XOR<TripPlanOutputCreateWithoutTripPlanInput, TripPlanOutputUncheckedCreateWithoutTripPlanInput>
    where?: TripPlanOutputWhereInput
  }

  export type TripPlanOutputUpdateToOneWithWhereWithoutTripPlanInput = {
    where?: TripPlanOutputWhereInput
    data: XOR<TripPlanOutputUpdateWithoutTripPlanInput, TripPlanOutputUncheckedUpdateWithoutTripPlanInput>
  }

  export type TripPlanOutputUpdateWithoutTripPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    itinerary?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanOutputUncheckedUpdateWithoutTripPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    itinerary?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type TripPlanCreateManyUserInput = {
    id?: string
    name: string
    destination: string
    startingLocation: string
    travelDatesStart: string
    travelDatesEnd?: string | null
    dateInputType?: string
    duration?: number | null
    travelingWith: string
    adults?: number
    children?: number
    ageGroups?: TripPlanCreateageGroupsInput | string[]
    budget: number
    budgetCurrency?: string
    travelStyle: string
    budgetFlexible?: boolean
    vibes?: TripPlanCreatevibesInput | string[]
    priorities?: TripPlanCreateprioritiesInput | string[]
    interests?: string | null
    rooms?: number
    pace?: TripPlanCreatepaceInput | number[]
    beenThereBefore?: string | null
    lovedPlaces?: string | null
    additionalInfo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TripPlanUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    startingLocation?: StringFieldUpdateOperationsInput | string
    travelDatesStart?: StringFieldUpdateOperationsInput | string
    travelDatesEnd?: NullableStringFieldUpdateOperationsInput | string | null
    dateInputType?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    travelingWith?: StringFieldUpdateOperationsInput | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    ageGroups?: TripPlanUpdateageGroupsInput | string[]
    budget?: FloatFieldUpdateOperationsInput | number
    budgetCurrency?: StringFieldUpdateOperationsInput | string
    travelStyle?: StringFieldUpdateOperationsInput | string
    budgetFlexible?: BoolFieldUpdateOperationsInput | boolean
    vibes?: TripPlanUpdatevibesInput | string[]
    priorities?: TripPlanUpdateprioritiesInput | string[]
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: IntFieldUpdateOperationsInput | number
    pace?: TripPlanUpdatepaceInput | number[]
    beenThereBefore?: NullableStringFieldUpdateOperationsInput | string | null
    lovedPlaces?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: TripPlanStatusUpdateOneWithoutTripPlanNestedInput
    output?: TripPlanOutputUpdateOneWithoutTripPlanNestedInput
  }

  export type TripPlanUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    startingLocation?: StringFieldUpdateOperationsInput | string
    travelDatesStart?: StringFieldUpdateOperationsInput | string
    travelDatesEnd?: NullableStringFieldUpdateOperationsInput | string | null
    dateInputType?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    travelingWith?: StringFieldUpdateOperationsInput | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    ageGroups?: TripPlanUpdateageGroupsInput | string[]
    budget?: FloatFieldUpdateOperationsInput | number
    budgetCurrency?: StringFieldUpdateOperationsInput | string
    travelStyle?: StringFieldUpdateOperationsInput | string
    budgetFlexible?: BoolFieldUpdateOperationsInput | boolean
    vibes?: TripPlanUpdatevibesInput | string[]
    priorities?: TripPlanUpdateprioritiesInput | string[]
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: IntFieldUpdateOperationsInput | number
    pace?: TripPlanUpdatepaceInput | number[]
    beenThereBefore?: NullableStringFieldUpdateOperationsInput | string | null
    lovedPlaces?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: TripPlanStatusUncheckedUpdateOneWithoutTripPlanNestedInput
    output?: TripPlanOutputUncheckedUpdateOneWithoutTripPlanNestedInput
  }

  export type TripPlanUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    startingLocation?: StringFieldUpdateOperationsInput | string
    travelDatesStart?: StringFieldUpdateOperationsInput | string
    travelDatesEnd?: NullableStringFieldUpdateOperationsInput | string | null
    dateInputType?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    travelingWith?: StringFieldUpdateOperationsInput | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    ageGroups?: TripPlanUpdateageGroupsInput | string[]
    budget?: FloatFieldUpdateOperationsInput | number
    budgetCurrency?: StringFieldUpdateOperationsInput | string
    travelStyle?: StringFieldUpdateOperationsInput | string
    budgetFlexible?: BoolFieldUpdateOperationsInput | boolean
    vibes?: TripPlanUpdatevibesInput | string[]
    priorities?: TripPlanUpdateprioritiesInput | string[]
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: IntFieldUpdateOperationsInput | number
    pace?: TripPlanUpdatepaceInput | number[]
    beenThereBefore?: NullableStringFieldUpdateOperationsInput | string | null
    lovedPlaces?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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