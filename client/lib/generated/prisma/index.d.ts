
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
 * Model PlanTask
 * 
 */
export type PlanTask = $Result.DefaultSelection<Prisma.$PlanTaskPayload>
/**
 * Model PaymentMandate
 * 
 */
export type PaymentMandate = $Result.DefaultSelection<Prisma.$PaymentMandatePayload>
/**
 * Model TransactionSplit
 * 
 */
export type TransactionSplit = $Result.DefaultSelection<Prisma.$TransactionSplitPayload>
/**
 * Model UserRating
 * 
 */
export type UserRating = $Result.DefaultSelection<Prisma.$UserRatingPayload>
/**
 * Model LocationDare
 * 
 */
export type LocationDare = $Result.DefaultSelection<Prisma.$LocationDarePayload>
/**
 * Model UserDareStatus
 * 
 */
export type UserDareStatus = $Result.DefaultSelection<Prisma.$UserDareStatusPayload>

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
   * `prisma.planTask`: Exposes CRUD operations for the **PlanTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlanTasks
    * const planTasks = await prisma.planTask.findMany()
    * ```
    */
  get planTask(): Prisma.PlanTaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentMandate`: Exposes CRUD operations for the **PaymentMandate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentMandates
    * const paymentMandates = await prisma.paymentMandate.findMany()
    * ```
    */
  get paymentMandate(): Prisma.PaymentMandateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactionSplit`: Exposes CRUD operations for the **TransactionSplit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransactionSplits
    * const transactionSplits = await prisma.transactionSplit.findMany()
    * ```
    */
  get transactionSplit(): Prisma.TransactionSplitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRating`: Exposes CRUD operations for the **UserRating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRatings
    * const userRatings = await prisma.userRating.findMany()
    * ```
    */
  get userRating(): Prisma.UserRatingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.locationDare`: Exposes CRUD operations for the **LocationDare** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LocationDares
    * const locationDares = await prisma.locationDare.findMany()
    * ```
    */
  get locationDare(): Prisma.LocationDareDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userDareStatus`: Exposes CRUD operations for the **UserDareStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserDareStatuses
    * const userDareStatuses = await prisma.userDareStatus.findMany()
    * ```
    */
  get userDareStatus(): Prisma.UserDareStatusDelegate<ExtArgs, ClientOptions>;
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
    PlanTask: 'PlanTask',
    PaymentMandate: 'PaymentMandate',
    TransactionSplit: 'TransactionSplit',
    UserRating: 'UserRating',
    LocationDare: 'LocationDare',
    UserDareStatus: 'UserDareStatus'
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
      modelProps: "user" | "session" | "account" | "verification" | "jwks" | "tripPlanStatus" | "tripPlanOutput" | "tripPlan" | "planTask" | "paymentMandate" | "transactionSplit" | "userRating" | "locationDare" | "userDareStatus"
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
      PlanTask: {
        payload: Prisma.$PlanTaskPayload<ExtArgs>
        fields: Prisma.PlanTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanTaskPayload>
          }
          findFirst: {
            args: Prisma.PlanTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanTaskPayload>
          }
          findMany: {
            args: Prisma.PlanTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanTaskPayload>[]
          }
          create: {
            args: Prisma.PlanTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanTaskPayload>
          }
          createMany: {
            args: Prisma.PlanTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanTaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanTaskPayload>[]
          }
          delete: {
            args: Prisma.PlanTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanTaskPayload>
          }
          update: {
            args: Prisma.PlanTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanTaskPayload>
          }
          deleteMany: {
            args: Prisma.PlanTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanTaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanTaskPayload>[]
          }
          upsert: {
            args: Prisma.PlanTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanTaskPayload>
          }
          aggregate: {
            args: Prisma.PlanTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlanTask>
          }
          groupBy: {
            args: Prisma.PlanTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanTaskCountArgs<ExtArgs>
            result: $Utils.Optional<PlanTaskCountAggregateOutputType> | number
          }
        }
      }
      PaymentMandate: {
        payload: Prisma.$PaymentMandatePayload<ExtArgs>
        fields: Prisma.PaymentMandateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentMandateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMandatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentMandateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMandatePayload>
          }
          findFirst: {
            args: Prisma.PaymentMandateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMandatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentMandateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMandatePayload>
          }
          findMany: {
            args: Prisma.PaymentMandateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMandatePayload>[]
          }
          create: {
            args: Prisma.PaymentMandateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMandatePayload>
          }
          createMany: {
            args: Prisma.PaymentMandateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentMandateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMandatePayload>[]
          }
          delete: {
            args: Prisma.PaymentMandateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMandatePayload>
          }
          update: {
            args: Prisma.PaymentMandateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMandatePayload>
          }
          deleteMany: {
            args: Prisma.PaymentMandateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentMandateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentMandateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMandatePayload>[]
          }
          upsert: {
            args: Prisma.PaymentMandateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMandatePayload>
          }
          aggregate: {
            args: Prisma.PaymentMandateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentMandate>
          }
          groupBy: {
            args: Prisma.PaymentMandateGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentMandateGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentMandateCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentMandateCountAggregateOutputType> | number
          }
        }
      }
      TransactionSplit: {
        payload: Prisma.$TransactionSplitPayload<ExtArgs>
        fields: Prisma.TransactionSplitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionSplitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionSplitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionSplitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionSplitPayload>
          }
          findFirst: {
            args: Prisma.TransactionSplitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionSplitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionSplitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionSplitPayload>
          }
          findMany: {
            args: Prisma.TransactionSplitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionSplitPayload>[]
          }
          create: {
            args: Prisma.TransactionSplitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionSplitPayload>
          }
          createMany: {
            args: Prisma.TransactionSplitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionSplitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionSplitPayload>[]
          }
          delete: {
            args: Prisma.TransactionSplitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionSplitPayload>
          }
          update: {
            args: Prisma.TransactionSplitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionSplitPayload>
          }
          deleteMany: {
            args: Prisma.TransactionSplitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionSplitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionSplitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionSplitPayload>[]
          }
          upsert: {
            args: Prisma.TransactionSplitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionSplitPayload>
          }
          aggregate: {
            args: Prisma.TransactionSplitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactionSplit>
          }
          groupBy: {
            args: Prisma.TransactionSplitGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionSplitGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionSplitCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionSplitCountAggregateOutputType> | number
          }
        }
      }
      UserRating: {
        payload: Prisma.$UserRatingPayload<ExtArgs>
        fields: Prisma.UserRatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRatingPayload>
          }
          findFirst: {
            args: Prisma.UserRatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRatingPayload>
          }
          findMany: {
            args: Prisma.UserRatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRatingPayload>[]
          }
          create: {
            args: Prisma.UserRatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRatingPayload>
          }
          createMany: {
            args: Prisma.UserRatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRatingPayload>[]
          }
          delete: {
            args: Prisma.UserRatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRatingPayload>
          }
          update: {
            args: Prisma.UserRatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRatingPayload>
          }
          deleteMany: {
            args: Prisma.UserRatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserRatingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRatingPayload>[]
          }
          upsert: {
            args: Prisma.UserRatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRatingPayload>
          }
          aggregate: {
            args: Prisma.UserRatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRating>
          }
          groupBy: {
            args: Prisma.UserRatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRatingCountArgs<ExtArgs>
            result: $Utils.Optional<UserRatingCountAggregateOutputType> | number
          }
        }
      }
      LocationDare: {
        payload: Prisma.$LocationDarePayload<ExtArgs>
        fields: Prisma.LocationDareFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationDareFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationDarePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationDareFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationDarePayload>
          }
          findFirst: {
            args: Prisma.LocationDareFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationDarePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationDareFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationDarePayload>
          }
          findMany: {
            args: Prisma.LocationDareFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationDarePayload>[]
          }
          create: {
            args: Prisma.LocationDareCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationDarePayload>
          }
          createMany: {
            args: Prisma.LocationDareCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationDareCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationDarePayload>[]
          }
          delete: {
            args: Prisma.LocationDareDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationDarePayload>
          }
          update: {
            args: Prisma.LocationDareUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationDarePayload>
          }
          deleteMany: {
            args: Prisma.LocationDareDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationDareUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationDareUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationDarePayload>[]
          }
          upsert: {
            args: Prisma.LocationDareUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationDarePayload>
          }
          aggregate: {
            args: Prisma.LocationDareAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocationDare>
          }
          groupBy: {
            args: Prisma.LocationDareGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationDareGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationDareCountArgs<ExtArgs>
            result: $Utils.Optional<LocationDareCountAggregateOutputType> | number
          }
        }
      }
      UserDareStatus: {
        payload: Prisma.$UserDareStatusPayload<ExtArgs>
        fields: Prisma.UserDareStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserDareStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDareStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserDareStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDareStatusPayload>
          }
          findFirst: {
            args: Prisma.UserDareStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDareStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserDareStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDareStatusPayload>
          }
          findMany: {
            args: Prisma.UserDareStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDareStatusPayload>[]
          }
          create: {
            args: Prisma.UserDareStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDareStatusPayload>
          }
          createMany: {
            args: Prisma.UserDareStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserDareStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDareStatusPayload>[]
          }
          delete: {
            args: Prisma.UserDareStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDareStatusPayload>
          }
          update: {
            args: Prisma.UserDareStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDareStatusPayload>
          }
          deleteMany: {
            args: Prisma.UserDareStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserDareStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserDareStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDareStatusPayload>[]
          }
          upsert: {
            args: Prisma.UserDareStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDareStatusPayload>
          }
          aggregate: {
            args: Prisma.UserDareStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserDareStatus>
          }
          groupBy: {
            args: Prisma.UserDareStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserDareStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserDareStatusCountArgs<ExtArgs>
            result: $Utils.Optional<UserDareStatusCountAggregateOutputType> | number
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
    planTask?: PlanTaskOmit
    paymentMandate?: PaymentMandateOmit
    transactionSplit?: TransactionSplitOmit
    userRating?: UserRatingOmit
    locationDare?: LocationDareOmit
    userDareStatus?: UserDareStatusOmit
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
    startedAt: string | null
    completedAt: string | null
    createdAt: string | null
    updatedAt: string | null
  }

  export type TripPlanStatusMaxAggregateOutputType = {
    id: string | null
    tripPlanId: string | null
    status: string | null
    currentStep: string | null
    error: string | null
    startedAt: string | null
    completedAt: string | null
    createdAt: string | null
    updatedAt: string | null
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
    startedAt: string | null
    completedAt: string | null
    createdAt: string | null
    updatedAt: string | null
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
      startedAt: string | null
      completedAt: string | null
      createdAt: string | null
      updatedAt: string | null
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
    readonly startedAt: FieldRef<"TripPlanStatus", 'String'>
    readonly completedAt: FieldRef<"TripPlanStatus", 'String'>
    readonly createdAt: FieldRef<"TripPlanStatus", 'String'>
    readonly updatedAt: FieldRef<"TripPlanStatus", 'String'>
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
    createdAt: string | null
    updatedAt: string | null
  }

  export type TripPlanOutputMaxAggregateOutputType = {
    id: string | null
    tripPlanId: string | null
    itinerary: string | null
    summary: string | null
    createdAt: string | null
    updatedAt: string | null
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
    createdAt: string | null
    updatedAt: string | null
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
      createdAt: string | null
      updatedAt: string | null
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
    readonly createdAt: FieldRef<"TripPlanOutput", 'String'>
    readonly updatedAt: FieldRef<"TripPlanOutput", 'String'>
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
  }

  export type TripPlanSumAggregateOutputType = {
    duration: number | null
    adults: number | null
    children: number | null
    budget: number | null
    rooms: number | null
  }

  export type TripPlanMinAggregateOutputType = {
    id: string | null
    name: string | null
    destination: string | null
    startingLocation: string | null
    experienceDatesStart: string | null
    experienceDatesEnd: string | null
    dateInputType: string | null
    duration: number | null
    experiencingWith: string | null
    adults: number | null
    children: number | null
    ageGroups: string | null
    budget: number | null
    budgetCurrency: string | null
    experienceStyle: string | null
    budgetFlexible: boolean | null
    vibes: string | null
    priorities: string | null
    interests: string | null
    rooms: number | null
    pace: string | null
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
    experienceDatesStart: string | null
    experienceDatesEnd: string | null
    dateInputType: string | null
    duration: number | null
    experiencingWith: string | null
    adults: number | null
    children: number | null
    ageGroups: string | null
    budget: number | null
    budgetCurrency: string | null
    experienceStyle: string | null
    budgetFlexible: boolean | null
    vibes: string | null
    priorities: string | null
    interests: string | null
    rooms: number | null
    pace: string | null
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
    experienceDatesStart: number
    experienceDatesEnd: number
    dateInputType: number
    duration: number
    experiencingWith: number
    adults: number
    children: number
    ageGroups: number
    budget: number
    budgetCurrency: number
    experienceStyle: number
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
  }

  export type TripPlanSumAggregateInputType = {
    duration?: true
    adults?: true
    children?: true
    budget?: true
    rooms?: true
  }

  export type TripPlanMinAggregateInputType = {
    id?: true
    name?: true
    destination?: true
    startingLocation?: true
    experienceDatesStart?: true
    experienceDatesEnd?: true
    dateInputType?: true
    duration?: true
    experiencingWith?: true
    adults?: true
    children?: true
    ageGroups?: true
    budget?: true
    budgetCurrency?: true
    experienceStyle?: true
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
  }

  export type TripPlanMaxAggregateInputType = {
    id?: true
    name?: true
    destination?: true
    startingLocation?: true
    experienceDatesStart?: true
    experienceDatesEnd?: true
    dateInputType?: true
    duration?: true
    experiencingWith?: true
    adults?: true
    children?: true
    ageGroups?: true
    budget?: true
    budgetCurrency?: true
    experienceStyle?: true
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
  }

  export type TripPlanCountAggregateInputType = {
    id?: true
    name?: true
    destination?: true
    startingLocation?: true
    experienceDatesStart?: true
    experienceDatesEnd?: true
    dateInputType?: true
    duration?: true
    experiencingWith?: true
    adults?: true
    children?: true
    ageGroups?: true
    budget?: true
    budgetCurrency?: true
    experienceStyle?: true
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
    experienceDatesStart: string
    experienceDatesEnd: string | null
    dateInputType: string
    duration: number | null
    experiencingWith: string
    adults: number
    children: number
    ageGroups: string
    budget: number
    budgetCurrency: string
    experienceStyle: string
    budgetFlexible: boolean
    vibes: string
    priorities: string
    interests: string | null
    rooms: number
    pace: string
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
    experienceDatesStart?: boolean
    experienceDatesEnd?: boolean
    dateInputType?: boolean
    duration?: boolean
    experiencingWith?: boolean
    adults?: boolean
    children?: boolean
    ageGroups?: boolean
    budget?: boolean
    budgetCurrency?: boolean
    experienceStyle?: boolean
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
    experienceDatesStart?: boolean
    experienceDatesEnd?: boolean
    dateInputType?: boolean
    duration?: boolean
    experiencingWith?: boolean
    adults?: boolean
    children?: boolean
    ageGroups?: boolean
    budget?: boolean
    budgetCurrency?: boolean
    experienceStyle?: boolean
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
    experienceDatesStart?: boolean
    experienceDatesEnd?: boolean
    dateInputType?: boolean
    duration?: boolean
    experiencingWith?: boolean
    adults?: boolean
    children?: boolean
    ageGroups?: boolean
    budget?: boolean
    budgetCurrency?: boolean
    experienceStyle?: boolean
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
    experienceDatesStart?: boolean
    experienceDatesEnd?: boolean
    dateInputType?: boolean
    duration?: boolean
    experiencingWith?: boolean
    adults?: boolean
    children?: boolean
    ageGroups?: boolean
    budget?: boolean
    budgetCurrency?: boolean
    experienceStyle?: boolean
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

  export type TripPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "destination" | "startingLocation" | "experienceDatesStart" | "experienceDatesEnd" | "dateInputType" | "duration" | "experiencingWith" | "adults" | "children" | "ageGroups" | "budget" | "budgetCurrency" | "experienceStyle" | "budgetFlexible" | "vibes" | "priorities" | "interests" | "rooms" | "pace" | "beenThereBefore" | "lovedPlaces" | "additionalInfo" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["tripPlan"]>
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
      experienceDatesStart: string
      experienceDatesEnd: string | null
      dateInputType: string
      duration: number | null
      experiencingWith: string
      adults: number
      children: number
      ageGroups: string
      budget: number
      budgetCurrency: string
      experienceStyle: string
      budgetFlexible: boolean
      vibes: string
      priorities: string
      interests: string | null
      rooms: number
      pace: string
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
    readonly experienceDatesStart: FieldRef<"TripPlan", 'String'>
    readonly experienceDatesEnd: FieldRef<"TripPlan", 'String'>
    readonly dateInputType: FieldRef<"TripPlan", 'String'>
    readonly duration: FieldRef<"TripPlan", 'Int'>
    readonly experiencingWith: FieldRef<"TripPlan", 'String'>
    readonly adults: FieldRef<"TripPlan", 'Int'>
    readonly children: FieldRef<"TripPlan", 'Int'>
    readonly ageGroups: FieldRef<"TripPlan", 'String'>
    readonly budget: FieldRef<"TripPlan", 'Float'>
    readonly budgetCurrency: FieldRef<"TripPlan", 'String'>
    readonly experienceStyle: FieldRef<"TripPlan", 'String'>
    readonly budgetFlexible: FieldRef<"TripPlan", 'Boolean'>
    readonly vibes: FieldRef<"TripPlan", 'String'>
    readonly priorities: FieldRef<"TripPlan", 'String'>
    readonly interests: FieldRef<"TripPlan", 'String'>
    readonly rooms: FieldRef<"TripPlan", 'Int'>
    readonly pace: FieldRef<"TripPlan", 'String'>
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
   * Model PlanTask
   */

  export type AggregatePlanTask = {
    _count: PlanTaskCountAggregateOutputType | null
    _avg: PlanTaskAvgAggregateOutputType | null
    _sum: PlanTaskSumAggregateOutputType | null
    _min: PlanTaskMinAggregateOutputType | null
    _max: PlanTaskMaxAggregateOutputType | null
  }

  export type PlanTaskAvgAggregateOutputType = {
    id: number | null
  }

  export type PlanTaskSumAggregateOutputType = {
    id: number | null
  }

  export type PlanTaskMinAggregateOutputType = {
    id: number | null
    trip_plan_id: string | null
    task_type: string | null
    status: string | null
    input_data: string | null
    output_data: string | null
    error_message: string | null
    created_at: string | null
    updated_at: string | null
  }

  export type PlanTaskMaxAggregateOutputType = {
    id: number | null
    trip_plan_id: string | null
    task_type: string | null
    status: string | null
    input_data: string | null
    output_data: string | null
    error_message: string | null
    created_at: string | null
    updated_at: string | null
  }

  export type PlanTaskCountAggregateOutputType = {
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


  export type PlanTaskAvgAggregateInputType = {
    id?: true
  }

  export type PlanTaskSumAggregateInputType = {
    id?: true
  }

  export type PlanTaskMinAggregateInputType = {
    id?: true
    trip_plan_id?: true
    task_type?: true
    status?: true
    input_data?: true
    output_data?: true
    error_message?: true
    created_at?: true
    updated_at?: true
  }

  export type PlanTaskMaxAggregateInputType = {
    id?: true
    trip_plan_id?: true
    task_type?: true
    status?: true
    input_data?: true
    output_data?: true
    error_message?: true
    created_at?: true
    updated_at?: true
  }

  export type PlanTaskCountAggregateInputType = {
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

  export type PlanTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanTask to aggregate.
     */
    where?: PlanTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanTasks to fetch.
     */
    orderBy?: PlanTaskOrderByWithRelationInput | PlanTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlanTasks
    **/
    _count?: true | PlanTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanTaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanTaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanTaskMaxAggregateInputType
  }

  export type GetPlanTaskAggregateType<T extends PlanTaskAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanTask[P]>
      : GetScalarType<T[P], AggregatePlanTask[P]>
  }




  export type PlanTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanTaskWhereInput
    orderBy?: PlanTaskOrderByWithAggregationInput | PlanTaskOrderByWithAggregationInput[]
    by: PlanTaskScalarFieldEnum[] | PlanTaskScalarFieldEnum
    having?: PlanTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanTaskCountAggregateInputType | true
    _avg?: PlanTaskAvgAggregateInputType
    _sum?: PlanTaskSumAggregateInputType
    _min?: PlanTaskMinAggregateInputType
    _max?: PlanTaskMaxAggregateInputType
  }

  export type PlanTaskGroupByOutputType = {
    id: number
    trip_plan_id: string
    task_type: string
    status: string
    input_data: string
    output_data: string | null
    error_message: string | null
    created_at: string | null
    updated_at: string | null
    _count: PlanTaskCountAggregateOutputType | null
    _avg: PlanTaskAvgAggregateOutputType | null
    _sum: PlanTaskSumAggregateOutputType | null
    _min: PlanTaskMinAggregateOutputType | null
    _max: PlanTaskMaxAggregateOutputType | null
  }

  type GetPlanTaskGroupByPayload<T extends PlanTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanTaskGroupByOutputType[P]>
            : GetScalarType<T[P], PlanTaskGroupByOutputType[P]>
        }
      >
    >


  export type PlanTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trip_plan_id?: boolean
    task_type?: boolean
    status?: boolean
    input_data?: boolean
    output_data?: boolean
    error_message?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["planTask"]>

  export type PlanTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trip_plan_id?: boolean
    task_type?: boolean
    status?: boolean
    input_data?: boolean
    output_data?: boolean
    error_message?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["planTask"]>

  export type PlanTaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trip_plan_id?: boolean
    task_type?: boolean
    status?: boolean
    input_data?: boolean
    output_data?: boolean
    error_message?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["planTask"]>

  export type PlanTaskSelectScalar = {
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

  export type PlanTaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "trip_plan_id" | "task_type" | "status" | "input_data" | "output_data" | "error_message" | "created_at" | "updated_at", ExtArgs["result"]["planTask"]>

  export type $PlanTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlanTask"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      trip_plan_id: string
      task_type: string
      status: string
      input_data: string
      output_data: string | null
      error_message: string | null
      created_at: string | null
      updated_at: string | null
    }, ExtArgs["result"]["planTask"]>
    composites: {}
  }

  type PlanTaskGetPayload<S extends boolean | null | undefined | PlanTaskDefaultArgs> = $Result.GetResult<Prisma.$PlanTaskPayload, S>

  type PlanTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanTaskCountAggregateInputType | true
    }

  export interface PlanTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlanTask'], meta: { name: 'PlanTask' } }
    /**
     * Find zero or one PlanTask that matches the filter.
     * @param {PlanTaskFindUniqueArgs} args - Arguments to find a PlanTask
     * @example
     * // Get one PlanTask
     * const planTask = await prisma.planTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanTaskFindUniqueArgs>(args: SelectSubset<T, PlanTaskFindUniqueArgs<ExtArgs>>): Prisma__PlanTaskClient<$Result.GetResult<Prisma.$PlanTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlanTask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanTaskFindUniqueOrThrowArgs} args - Arguments to find a PlanTask
     * @example
     * // Get one PlanTask
     * const planTask = await prisma.planTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanTaskClient<$Result.GetResult<Prisma.$PlanTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanTaskFindFirstArgs} args - Arguments to find a PlanTask
     * @example
     * // Get one PlanTask
     * const planTask = await prisma.planTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanTaskFindFirstArgs>(args?: SelectSubset<T, PlanTaskFindFirstArgs<ExtArgs>>): Prisma__PlanTaskClient<$Result.GetResult<Prisma.$PlanTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanTaskFindFirstOrThrowArgs} args - Arguments to find a PlanTask
     * @example
     * // Get one PlanTask
     * const planTask = await prisma.planTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanTaskClient<$Result.GetResult<Prisma.$PlanTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlanTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlanTasks
     * const planTasks = await prisma.planTask.findMany()
     * 
     * // Get first 10 PlanTasks
     * const planTasks = await prisma.planTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planTaskWithIdOnly = await prisma.planTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanTaskFindManyArgs>(args?: SelectSubset<T, PlanTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlanTask.
     * @param {PlanTaskCreateArgs} args - Arguments to create a PlanTask.
     * @example
     * // Create one PlanTask
     * const PlanTask = await prisma.planTask.create({
     *   data: {
     *     // ... data to create a PlanTask
     *   }
     * })
     * 
     */
    create<T extends PlanTaskCreateArgs>(args: SelectSubset<T, PlanTaskCreateArgs<ExtArgs>>): Prisma__PlanTaskClient<$Result.GetResult<Prisma.$PlanTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlanTasks.
     * @param {PlanTaskCreateManyArgs} args - Arguments to create many PlanTasks.
     * @example
     * // Create many PlanTasks
     * const planTask = await prisma.planTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanTaskCreateManyArgs>(args?: SelectSubset<T, PlanTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlanTasks and returns the data saved in the database.
     * @param {PlanTaskCreateManyAndReturnArgs} args - Arguments to create many PlanTasks.
     * @example
     * // Create many PlanTasks
     * const planTask = await prisma.planTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlanTasks and only return the `id`
     * const planTaskWithIdOnly = await prisma.planTask.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanTaskCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanTaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlanTask.
     * @param {PlanTaskDeleteArgs} args - Arguments to delete one PlanTask.
     * @example
     * // Delete one PlanTask
     * const PlanTask = await prisma.planTask.delete({
     *   where: {
     *     // ... filter to delete one PlanTask
     *   }
     * })
     * 
     */
    delete<T extends PlanTaskDeleteArgs>(args: SelectSubset<T, PlanTaskDeleteArgs<ExtArgs>>): Prisma__PlanTaskClient<$Result.GetResult<Prisma.$PlanTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlanTask.
     * @param {PlanTaskUpdateArgs} args - Arguments to update one PlanTask.
     * @example
     * // Update one PlanTask
     * const planTask = await prisma.planTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanTaskUpdateArgs>(args: SelectSubset<T, PlanTaskUpdateArgs<ExtArgs>>): Prisma__PlanTaskClient<$Result.GetResult<Prisma.$PlanTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlanTasks.
     * @param {PlanTaskDeleteManyArgs} args - Arguments to filter PlanTasks to delete.
     * @example
     * // Delete a few PlanTasks
     * const { count } = await prisma.planTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanTaskDeleteManyArgs>(args?: SelectSubset<T, PlanTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlanTasks
     * const planTask = await prisma.planTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanTaskUpdateManyArgs>(args: SelectSubset<T, PlanTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanTasks and returns the data updated in the database.
     * @param {PlanTaskUpdateManyAndReturnArgs} args - Arguments to update many PlanTasks.
     * @example
     * // Update many PlanTasks
     * const planTask = await prisma.planTask.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlanTasks and only return the `id`
     * const planTaskWithIdOnly = await prisma.planTask.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlanTaskUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanTaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanTaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlanTask.
     * @param {PlanTaskUpsertArgs} args - Arguments to update or create a PlanTask.
     * @example
     * // Update or create a PlanTask
     * const planTask = await prisma.planTask.upsert({
     *   create: {
     *     // ... data to create a PlanTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlanTask we want to update
     *   }
     * })
     */
    upsert<T extends PlanTaskUpsertArgs>(args: SelectSubset<T, PlanTaskUpsertArgs<ExtArgs>>): Prisma__PlanTaskClient<$Result.GetResult<Prisma.$PlanTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlanTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanTaskCountArgs} args - Arguments to filter PlanTasks to count.
     * @example
     * // Count the number of PlanTasks
     * const count = await prisma.planTask.count({
     *   where: {
     *     // ... the filter for the PlanTasks we want to count
     *   }
     * })
    **/
    count<T extends PlanTaskCountArgs>(
      args?: Subset<T, PlanTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlanTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanTaskAggregateArgs>(args: Subset<T, PlanTaskAggregateArgs>): Prisma.PrismaPromise<GetPlanTaskAggregateType<T>>

    /**
     * Group by PlanTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanTaskGroupByArgs} args - Group by arguments.
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
      T extends PlanTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanTaskGroupByArgs['orderBy'] }
        : { orderBy?: PlanTaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlanTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlanTask model
   */
  readonly fields: PlanTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlanTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PlanTask model
   */
  interface PlanTaskFieldRefs {
    readonly id: FieldRef<"PlanTask", 'Int'>
    readonly trip_plan_id: FieldRef<"PlanTask", 'String'>
    readonly task_type: FieldRef<"PlanTask", 'String'>
    readonly status: FieldRef<"PlanTask", 'String'>
    readonly input_data: FieldRef<"PlanTask", 'String'>
    readonly output_data: FieldRef<"PlanTask", 'String'>
    readonly error_message: FieldRef<"PlanTask", 'String'>
    readonly created_at: FieldRef<"PlanTask", 'String'>
    readonly updated_at: FieldRef<"PlanTask", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PlanTask findUnique
   */
  export type PlanTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTask
     */
    select?: PlanTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTask
     */
    omit?: PlanTaskOmit<ExtArgs> | null
    /**
     * Filter, which PlanTask to fetch.
     */
    where: PlanTaskWhereUniqueInput
  }

  /**
   * PlanTask findUniqueOrThrow
   */
  export type PlanTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTask
     */
    select?: PlanTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTask
     */
    omit?: PlanTaskOmit<ExtArgs> | null
    /**
     * Filter, which PlanTask to fetch.
     */
    where: PlanTaskWhereUniqueInput
  }

  /**
   * PlanTask findFirst
   */
  export type PlanTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTask
     */
    select?: PlanTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTask
     */
    omit?: PlanTaskOmit<ExtArgs> | null
    /**
     * Filter, which PlanTask to fetch.
     */
    where?: PlanTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanTasks to fetch.
     */
    orderBy?: PlanTaskOrderByWithRelationInput | PlanTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanTasks.
     */
    cursor?: PlanTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanTasks.
     */
    distinct?: PlanTaskScalarFieldEnum | PlanTaskScalarFieldEnum[]
  }

  /**
   * PlanTask findFirstOrThrow
   */
  export type PlanTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTask
     */
    select?: PlanTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTask
     */
    omit?: PlanTaskOmit<ExtArgs> | null
    /**
     * Filter, which PlanTask to fetch.
     */
    where?: PlanTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanTasks to fetch.
     */
    orderBy?: PlanTaskOrderByWithRelationInput | PlanTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanTasks.
     */
    cursor?: PlanTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanTasks.
     */
    distinct?: PlanTaskScalarFieldEnum | PlanTaskScalarFieldEnum[]
  }

  /**
   * PlanTask findMany
   */
  export type PlanTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTask
     */
    select?: PlanTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTask
     */
    omit?: PlanTaskOmit<ExtArgs> | null
    /**
     * Filter, which PlanTasks to fetch.
     */
    where?: PlanTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanTasks to fetch.
     */
    orderBy?: PlanTaskOrderByWithRelationInput | PlanTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlanTasks.
     */
    cursor?: PlanTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanTasks.
     */
    skip?: number
    distinct?: PlanTaskScalarFieldEnum | PlanTaskScalarFieldEnum[]
  }

  /**
   * PlanTask create
   */
  export type PlanTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTask
     */
    select?: PlanTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTask
     */
    omit?: PlanTaskOmit<ExtArgs> | null
    /**
     * The data needed to create a PlanTask.
     */
    data: XOR<PlanTaskCreateInput, PlanTaskUncheckedCreateInput>
  }

  /**
   * PlanTask createMany
   */
  export type PlanTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlanTasks.
     */
    data: PlanTaskCreateManyInput | PlanTaskCreateManyInput[]
  }

  /**
   * PlanTask createManyAndReturn
   */
  export type PlanTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTask
     */
    select?: PlanTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTask
     */
    omit?: PlanTaskOmit<ExtArgs> | null
    /**
     * The data used to create many PlanTasks.
     */
    data: PlanTaskCreateManyInput | PlanTaskCreateManyInput[]
  }

  /**
   * PlanTask update
   */
  export type PlanTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTask
     */
    select?: PlanTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTask
     */
    omit?: PlanTaskOmit<ExtArgs> | null
    /**
     * The data needed to update a PlanTask.
     */
    data: XOR<PlanTaskUpdateInput, PlanTaskUncheckedUpdateInput>
    /**
     * Choose, which PlanTask to update.
     */
    where: PlanTaskWhereUniqueInput
  }

  /**
   * PlanTask updateMany
   */
  export type PlanTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlanTasks.
     */
    data: XOR<PlanTaskUpdateManyMutationInput, PlanTaskUncheckedUpdateManyInput>
    /**
     * Filter which PlanTasks to update
     */
    where?: PlanTaskWhereInput
    /**
     * Limit how many PlanTasks to update.
     */
    limit?: number
  }

  /**
   * PlanTask updateManyAndReturn
   */
  export type PlanTaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTask
     */
    select?: PlanTaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTask
     */
    omit?: PlanTaskOmit<ExtArgs> | null
    /**
     * The data used to update PlanTasks.
     */
    data: XOR<PlanTaskUpdateManyMutationInput, PlanTaskUncheckedUpdateManyInput>
    /**
     * Filter which PlanTasks to update
     */
    where?: PlanTaskWhereInput
    /**
     * Limit how many PlanTasks to update.
     */
    limit?: number
  }

  /**
   * PlanTask upsert
   */
  export type PlanTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTask
     */
    select?: PlanTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTask
     */
    omit?: PlanTaskOmit<ExtArgs> | null
    /**
     * The filter to search for the PlanTask to update in case it exists.
     */
    where: PlanTaskWhereUniqueInput
    /**
     * In case the PlanTask found by the `where` argument doesn't exist, create a new PlanTask with this data.
     */
    create: XOR<PlanTaskCreateInput, PlanTaskUncheckedCreateInput>
    /**
     * In case the PlanTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanTaskUpdateInput, PlanTaskUncheckedUpdateInput>
  }

  /**
   * PlanTask delete
   */
  export type PlanTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTask
     */
    select?: PlanTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTask
     */
    omit?: PlanTaskOmit<ExtArgs> | null
    /**
     * Filter which PlanTask to delete.
     */
    where: PlanTaskWhereUniqueInput
  }

  /**
   * PlanTask deleteMany
   */
  export type PlanTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanTasks to delete
     */
    where?: PlanTaskWhereInput
    /**
     * Limit how many PlanTasks to delete.
     */
    limit?: number
  }

  /**
   * PlanTask without action
   */
  export type PlanTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanTask
     */
    select?: PlanTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanTask
     */
    omit?: PlanTaskOmit<ExtArgs> | null
  }


  /**
   * Model PaymentMandate
   */

  export type AggregatePaymentMandate = {
    _count: PaymentMandateCountAggregateOutputType | null
    _avg: PaymentMandateAvgAggregateOutputType | null
    _sum: PaymentMandateSumAggregateOutputType | null
    _min: PaymentMandateMinAggregateOutputType | null
    _max: PaymentMandateMaxAggregateOutputType | null
  }

  export type PaymentMandateAvgAggregateOutputType = {
    limitAmount: number | null
  }

  export type PaymentMandateSumAggregateOutputType = {
    limitAmount: number | null
  }

  export type PaymentMandateMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tripPlanId: string | null
    limitAmount: number | null
    currency: string | null
    signature: string | null
    publicKey: string | null
    scope: string | null
    status: string | null
    createdAt: string | null
    updatedAt: string | null
  }

  export type PaymentMandateMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tripPlanId: string | null
    limitAmount: number | null
    currency: string | null
    signature: string | null
    publicKey: string | null
    scope: string | null
    status: string | null
    createdAt: string | null
    updatedAt: string | null
  }

  export type PaymentMandateCountAggregateOutputType = {
    id: number
    userId: number
    tripPlanId: number
    limitAmount: number
    currency: number
    signature: number
    publicKey: number
    scope: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentMandateAvgAggregateInputType = {
    limitAmount?: true
  }

  export type PaymentMandateSumAggregateInputType = {
    limitAmount?: true
  }

  export type PaymentMandateMinAggregateInputType = {
    id?: true
    userId?: true
    tripPlanId?: true
    limitAmount?: true
    currency?: true
    signature?: true
    publicKey?: true
    scope?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMandateMaxAggregateInputType = {
    id?: true
    userId?: true
    tripPlanId?: true
    limitAmount?: true
    currency?: true
    signature?: true
    publicKey?: true
    scope?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMandateCountAggregateInputType = {
    id?: true
    userId?: true
    tripPlanId?: true
    limitAmount?: true
    currency?: true
    signature?: true
    publicKey?: true
    scope?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentMandateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMandate to aggregate.
     */
    where?: PaymentMandateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMandates to fetch.
     */
    orderBy?: PaymentMandateOrderByWithRelationInput | PaymentMandateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentMandateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMandates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMandates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentMandates
    **/
    _count?: true | PaymentMandateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentMandateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentMandateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMandateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMandateMaxAggregateInputType
  }

  export type GetPaymentMandateAggregateType<T extends PaymentMandateAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentMandate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentMandate[P]>
      : GetScalarType<T[P], AggregatePaymentMandate[P]>
  }




  export type PaymentMandateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentMandateWhereInput
    orderBy?: PaymentMandateOrderByWithAggregationInput | PaymentMandateOrderByWithAggregationInput[]
    by: PaymentMandateScalarFieldEnum[] | PaymentMandateScalarFieldEnum
    having?: PaymentMandateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentMandateCountAggregateInputType | true
    _avg?: PaymentMandateAvgAggregateInputType
    _sum?: PaymentMandateSumAggregateInputType
    _min?: PaymentMandateMinAggregateInputType
    _max?: PaymentMandateMaxAggregateInputType
  }

  export type PaymentMandateGroupByOutputType = {
    id: string
    userId: string
    tripPlanId: string
    limitAmount: number
    currency: string
    signature: string
    publicKey: string
    scope: string
    status: string
    createdAt: string | null
    updatedAt: string | null
    _count: PaymentMandateCountAggregateOutputType | null
    _avg: PaymentMandateAvgAggregateOutputType | null
    _sum: PaymentMandateSumAggregateOutputType | null
    _min: PaymentMandateMinAggregateOutputType | null
    _max: PaymentMandateMaxAggregateOutputType | null
  }

  type GetPaymentMandateGroupByPayload<T extends PaymentMandateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentMandateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentMandateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentMandateGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentMandateGroupByOutputType[P]>
        }
      >
    >


  export type PaymentMandateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tripPlanId?: boolean
    limitAmount?: boolean
    currency?: boolean
    signature?: boolean
    publicKey?: boolean
    scope?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["paymentMandate"]>

  export type PaymentMandateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tripPlanId?: boolean
    limitAmount?: boolean
    currency?: boolean
    signature?: boolean
    publicKey?: boolean
    scope?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["paymentMandate"]>

  export type PaymentMandateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tripPlanId?: boolean
    limitAmount?: boolean
    currency?: boolean
    signature?: boolean
    publicKey?: boolean
    scope?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["paymentMandate"]>

  export type PaymentMandateSelectScalar = {
    id?: boolean
    userId?: boolean
    tripPlanId?: boolean
    limitAmount?: boolean
    currency?: boolean
    signature?: boolean
    publicKey?: boolean
    scope?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentMandateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tripPlanId" | "limitAmount" | "currency" | "signature" | "publicKey" | "scope" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["paymentMandate"]>

  export type $PaymentMandatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentMandate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tripPlanId: string
      limitAmount: number
      currency: string
      signature: string
      publicKey: string
      scope: string
      status: string
      createdAt: string | null
      updatedAt: string | null
    }, ExtArgs["result"]["paymentMandate"]>
    composites: {}
  }

  type PaymentMandateGetPayload<S extends boolean | null | undefined | PaymentMandateDefaultArgs> = $Result.GetResult<Prisma.$PaymentMandatePayload, S>

  type PaymentMandateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentMandateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentMandateCountAggregateInputType | true
    }

  export interface PaymentMandateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentMandate'], meta: { name: 'PaymentMandate' } }
    /**
     * Find zero or one PaymentMandate that matches the filter.
     * @param {PaymentMandateFindUniqueArgs} args - Arguments to find a PaymentMandate
     * @example
     * // Get one PaymentMandate
     * const paymentMandate = await prisma.paymentMandate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentMandateFindUniqueArgs>(args: SelectSubset<T, PaymentMandateFindUniqueArgs<ExtArgs>>): Prisma__PaymentMandateClient<$Result.GetResult<Prisma.$PaymentMandatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentMandate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentMandateFindUniqueOrThrowArgs} args - Arguments to find a PaymentMandate
     * @example
     * // Get one PaymentMandate
     * const paymentMandate = await prisma.paymentMandate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentMandateFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentMandateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentMandateClient<$Result.GetResult<Prisma.$PaymentMandatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentMandate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMandateFindFirstArgs} args - Arguments to find a PaymentMandate
     * @example
     * // Get one PaymentMandate
     * const paymentMandate = await prisma.paymentMandate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentMandateFindFirstArgs>(args?: SelectSubset<T, PaymentMandateFindFirstArgs<ExtArgs>>): Prisma__PaymentMandateClient<$Result.GetResult<Prisma.$PaymentMandatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentMandate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMandateFindFirstOrThrowArgs} args - Arguments to find a PaymentMandate
     * @example
     * // Get one PaymentMandate
     * const paymentMandate = await prisma.paymentMandate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentMandateFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentMandateFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentMandateClient<$Result.GetResult<Prisma.$PaymentMandatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentMandates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMandateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentMandates
     * const paymentMandates = await prisma.paymentMandate.findMany()
     * 
     * // Get first 10 PaymentMandates
     * const paymentMandates = await prisma.paymentMandate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentMandateWithIdOnly = await prisma.paymentMandate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentMandateFindManyArgs>(args?: SelectSubset<T, PaymentMandateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMandatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentMandate.
     * @param {PaymentMandateCreateArgs} args - Arguments to create a PaymentMandate.
     * @example
     * // Create one PaymentMandate
     * const PaymentMandate = await prisma.paymentMandate.create({
     *   data: {
     *     // ... data to create a PaymentMandate
     *   }
     * })
     * 
     */
    create<T extends PaymentMandateCreateArgs>(args: SelectSubset<T, PaymentMandateCreateArgs<ExtArgs>>): Prisma__PaymentMandateClient<$Result.GetResult<Prisma.$PaymentMandatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentMandates.
     * @param {PaymentMandateCreateManyArgs} args - Arguments to create many PaymentMandates.
     * @example
     * // Create many PaymentMandates
     * const paymentMandate = await prisma.paymentMandate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentMandateCreateManyArgs>(args?: SelectSubset<T, PaymentMandateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentMandates and returns the data saved in the database.
     * @param {PaymentMandateCreateManyAndReturnArgs} args - Arguments to create many PaymentMandates.
     * @example
     * // Create many PaymentMandates
     * const paymentMandate = await prisma.paymentMandate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentMandates and only return the `id`
     * const paymentMandateWithIdOnly = await prisma.paymentMandate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentMandateCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentMandateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMandatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentMandate.
     * @param {PaymentMandateDeleteArgs} args - Arguments to delete one PaymentMandate.
     * @example
     * // Delete one PaymentMandate
     * const PaymentMandate = await prisma.paymentMandate.delete({
     *   where: {
     *     // ... filter to delete one PaymentMandate
     *   }
     * })
     * 
     */
    delete<T extends PaymentMandateDeleteArgs>(args: SelectSubset<T, PaymentMandateDeleteArgs<ExtArgs>>): Prisma__PaymentMandateClient<$Result.GetResult<Prisma.$PaymentMandatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentMandate.
     * @param {PaymentMandateUpdateArgs} args - Arguments to update one PaymentMandate.
     * @example
     * // Update one PaymentMandate
     * const paymentMandate = await prisma.paymentMandate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentMandateUpdateArgs>(args: SelectSubset<T, PaymentMandateUpdateArgs<ExtArgs>>): Prisma__PaymentMandateClient<$Result.GetResult<Prisma.$PaymentMandatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentMandates.
     * @param {PaymentMandateDeleteManyArgs} args - Arguments to filter PaymentMandates to delete.
     * @example
     * // Delete a few PaymentMandates
     * const { count } = await prisma.paymentMandate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentMandateDeleteManyArgs>(args?: SelectSubset<T, PaymentMandateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentMandates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMandateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentMandates
     * const paymentMandate = await prisma.paymentMandate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentMandateUpdateManyArgs>(args: SelectSubset<T, PaymentMandateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentMandates and returns the data updated in the database.
     * @param {PaymentMandateUpdateManyAndReturnArgs} args - Arguments to update many PaymentMandates.
     * @example
     * // Update many PaymentMandates
     * const paymentMandate = await prisma.paymentMandate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentMandates and only return the `id`
     * const paymentMandateWithIdOnly = await prisma.paymentMandate.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentMandateUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentMandateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMandatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentMandate.
     * @param {PaymentMandateUpsertArgs} args - Arguments to update or create a PaymentMandate.
     * @example
     * // Update or create a PaymentMandate
     * const paymentMandate = await prisma.paymentMandate.upsert({
     *   create: {
     *     // ... data to create a PaymentMandate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentMandate we want to update
     *   }
     * })
     */
    upsert<T extends PaymentMandateUpsertArgs>(args: SelectSubset<T, PaymentMandateUpsertArgs<ExtArgs>>): Prisma__PaymentMandateClient<$Result.GetResult<Prisma.$PaymentMandatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentMandates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMandateCountArgs} args - Arguments to filter PaymentMandates to count.
     * @example
     * // Count the number of PaymentMandates
     * const count = await prisma.paymentMandate.count({
     *   where: {
     *     // ... the filter for the PaymentMandates we want to count
     *   }
     * })
    **/
    count<T extends PaymentMandateCountArgs>(
      args?: Subset<T, PaymentMandateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentMandateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentMandate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMandateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentMandateAggregateArgs>(args: Subset<T, PaymentMandateAggregateArgs>): Prisma.PrismaPromise<GetPaymentMandateAggregateType<T>>

    /**
     * Group by PaymentMandate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMandateGroupByArgs} args - Group by arguments.
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
      T extends PaymentMandateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentMandateGroupByArgs['orderBy'] }
        : { orderBy?: PaymentMandateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentMandateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentMandateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentMandate model
   */
  readonly fields: PaymentMandateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentMandate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentMandateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PaymentMandate model
   */
  interface PaymentMandateFieldRefs {
    readonly id: FieldRef<"PaymentMandate", 'String'>
    readonly userId: FieldRef<"PaymentMandate", 'String'>
    readonly tripPlanId: FieldRef<"PaymentMandate", 'String'>
    readonly limitAmount: FieldRef<"PaymentMandate", 'Float'>
    readonly currency: FieldRef<"PaymentMandate", 'String'>
    readonly signature: FieldRef<"PaymentMandate", 'String'>
    readonly publicKey: FieldRef<"PaymentMandate", 'String'>
    readonly scope: FieldRef<"PaymentMandate", 'String'>
    readonly status: FieldRef<"PaymentMandate", 'String'>
    readonly createdAt: FieldRef<"PaymentMandate", 'String'>
    readonly updatedAt: FieldRef<"PaymentMandate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PaymentMandate findUnique
   */
  export type PaymentMandateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMandate
     */
    select?: PaymentMandateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMandate
     */
    omit?: PaymentMandateOmit<ExtArgs> | null
    /**
     * Filter, which PaymentMandate to fetch.
     */
    where: PaymentMandateWhereUniqueInput
  }

  /**
   * PaymentMandate findUniqueOrThrow
   */
  export type PaymentMandateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMandate
     */
    select?: PaymentMandateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMandate
     */
    omit?: PaymentMandateOmit<ExtArgs> | null
    /**
     * Filter, which PaymentMandate to fetch.
     */
    where: PaymentMandateWhereUniqueInput
  }

  /**
   * PaymentMandate findFirst
   */
  export type PaymentMandateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMandate
     */
    select?: PaymentMandateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMandate
     */
    omit?: PaymentMandateOmit<ExtArgs> | null
    /**
     * Filter, which PaymentMandate to fetch.
     */
    where?: PaymentMandateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMandates to fetch.
     */
    orderBy?: PaymentMandateOrderByWithRelationInput | PaymentMandateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMandates.
     */
    cursor?: PaymentMandateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMandates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMandates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMandates.
     */
    distinct?: PaymentMandateScalarFieldEnum | PaymentMandateScalarFieldEnum[]
  }

  /**
   * PaymentMandate findFirstOrThrow
   */
  export type PaymentMandateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMandate
     */
    select?: PaymentMandateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMandate
     */
    omit?: PaymentMandateOmit<ExtArgs> | null
    /**
     * Filter, which PaymentMandate to fetch.
     */
    where?: PaymentMandateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMandates to fetch.
     */
    orderBy?: PaymentMandateOrderByWithRelationInput | PaymentMandateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMandates.
     */
    cursor?: PaymentMandateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMandates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMandates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMandates.
     */
    distinct?: PaymentMandateScalarFieldEnum | PaymentMandateScalarFieldEnum[]
  }

  /**
   * PaymentMandate findMany
   */
  export type PaymentMandateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMandate
     */
    select?: PaymentMandateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMandate
     */
    omit?: PaymentMandateOmit<ExtArgs> | null
    /**
     * Filter, which PaymentMandates to fetch.
     */
    where?: PaymentMandateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMandates to fetch.
     */
    orderBy?: PaymentMandateOrderByWithRelationInput | PaymentMandateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentMandates.
     */
    cursor?: PaymentMandateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMandates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMandates.
     */
    skip?: number
    distinct?: PaymentMandateScalarFieldEnum | PaymentMandateScalarFieldEnum[]
  }

  /**
   * PaymentMandate create
   */
  export type PaymentMandateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMandate
     */
    select?: PaymentMandateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMandate
     */
    omit?: PaymentMandateOmit<ExtArgs> | null
    /**
     * The data needed to create a PaymentMandate.
     */
    data: XOR<PaymentMandateCreateInput, PaymentMandateUncheckedCreateInput>
  }

  /**
   * PaymentMandate createMany
   */
  export type PaymentMandateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentMandates.
     */
    data: PaymentMandateCreateManyInput | PaymentMandateCreateManyInput[]
  }

  /**
   * PaymentMandate createManyAndReturn
   */
  export type PaymentMandateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMandate
     */
    select?: PaymentMandateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMandate
     */
    omit?: PaymentMandateOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentMandates.
     */
    data: PaymentMandateCreateManyInput | PaymentMandateCreateManyInput[]
  }

  /**
   * PaymentMandate update
   */
  export type PaymentMandateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMandate
     */
    select?: PaymentMandateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMandate
     */
    omit?: PaymentMandateOmit<ExtArgs> | null
    /**
     * The data needed to update a PaymentMandate.
     */
    data: XOR<PaymentMandateUpdateInput, PaymentMandateUncheckedUpdateInput>
    /**
     * Choose, which PaymentMandate to update.
     */
    where: PaymentMandateWhereUniqueInput
  }

  /**
   * PaymentMandate updateMany
   */
  export type PaymentMandateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentMandates.
     */
    data: XOR<PaymentMandateUpdateManyMutationInput, PaymentMandateUncheckedUpdateManyInput>
    /**
     * Filter which PaymentMandates to update
     */
    where?: PaymentMandateWhereInput
    /**
     * Limit how many PaymentMandates to update.
     */
    limit?: number
  }

  /**
   * PaymentMandate updateManyAndReturn
   */
  export type PaymentMandateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMandate
     */
    select?: PaymentMandateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMandate
     */
    omit?: PaymentMandateOmit<ExtArgs> | null
    /**
     * The data used to update PaymentMandates.
     */
    data: XOR<PaymentMandateUpdateManyMutationInput, PaymentMandateUncheckedUpdateManyInput>
    /**
     * Filter which PaymentMandates to update
     */
    where?: PaymentMandateWhereInput
    /**
     * Limit how many PaymentMandates to update.
     */
    limit?: number
  }

  /**
   * PaymentMandate upsert
   */
  export type PaymentMandateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMandate
     */
    select?: PaymentMandateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMandate
     */
    omit?: PaymentMandateOmit<ExtArgs> | null
    /**
     * The filter to search for the PaymentMandate to update in case it exists.
     */
    where: PaymentMandateWhereUniqueInput
    /**
     * In case the PaymentMandate found by the `where` argument doesn't exist, create a new PaymentMandate with this data.
     */
    create: XOR<PaymentMandateCreateInput, PaymentMandateUncheckedCreateInput>
    /**
     * In case the PaymentMandate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentMandateUpdateInput, PaymentMandateUncheckedUpdateInput>
  }

  /**
   * PaymentMandate delete
   */
  export type PaymentMandateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMandate
     */
    select?: PaymentMandateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMandate
     */
    omit?: PaymentMandateOmit<ExtArgs> | null
    /**
     * Filter which PaymentMandate to delete.
     */
    where: PaymentMandateWhereUniqueInput
  }

  /**
   * PaymentMandate deleteMany
   */
  export type PaymentMandateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMandates to delete
     */
    where?: PaymentMandateWhereInput
    /**
     * Limit how many PaymentMandates to delete.
     */
    limit?: number
  }

  /**
   * PaymentMandate without action
   */
  export type PaymentMandateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMandate
     */
    select?: PaymentMandateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMandate
     */
    omit?: PaymentMandateOmit<ExtArgs> | null
  }


  /**
   * Model TransactionSplit
   */

  export type AggregateTransactionSplit = {
    _count: TransactionSplitCountAggregateOutputType | null
    _avg: TransactionSplitAvgAggregateOutputType | null
    _sum: TransactionSplitSumAggregateOutputType | null
    _min: TransactionSplitMinAggregateOutputType | null
    _max: TransactionSplitMaxAggregateOutputType | null
  }

  export type TransactionSplitAvgAggregateOutputType = {
    totalAmount: number | null
    user1Amount: number | null
    user2Amount: number | null
  }

  export type TransactionSplitSumAggregateOutputType = {
    totalAmount: number | null
    user1Amount: number | null
    user2Amount: number | null
  }

  export type TransactionSplitMinAggregateOutputType = {
    id: string | null
    tripPlanId: string | null
    totalAmount: number | null
    currency: string | null
    user1Id: string | null
    user2Id: string | null
    user1Amount: number | null
    user2Amount: number | null
    status: string | null
    escrowStatus: string | null
    splitMode: string | null
    createdAt: string | null
    updatedAt: string | null
  }

  export type TransactionSplitMaxAggregateOutputType = {
    id: string | null
    tripPlanId: string | null
    totalAmount: number | null
    currency: string | null
    user1Id: string | null
    user2Id: string | null
    user1Amount: number | null
    user2Amount: number | null
    status: string | null
    escrowStatus: string | null
    splitMode: string | null
    createdAt: string | null
    updatedAt: string | null
  }

  export type TransactionSplitCountAggregateOutputType = {
    id: number
    tripPlanId: number
    totalAmount: number
    currency: number
    user1Id: number
    user2Id: number
    user1Amount: number
    user2Amount: number
    status: number
    escrowStatus: number
    splitMode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionSplitAvgAggregateInputType = {
    totalAmount?: true
    user1Amount?: true
    user2Amount?: true
  }

  export type TransactionSplitSumAggregateInputType = {
    totalAmount?: true
    user1Amount?: true
    user2Amount?: true
  }

  export type TransactionSplitMinAggregateInputType = {
    id?: true
    tripPlanId?: true
    totalAmount?: true
    currency?: true
    user1Id?: true
    user2Id?: true
    user1Amount?: true
    user2Amount?: true
    status?: true
    escrowStatus?: true
    splitMode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionSplitMaxAggregateInputType = {
    id?: true
    tripPlanId?: true
    totalAmount?: true
    currency?: true
    user1Id?: true
    user2Id?: true
    user1Amount?: true
    user2Amount?: true
    status?: true
    escrowStatus?: true
    splitMode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionSplitCountAggregateInputType = {
    id?: true
    tripPlanId?: true
    totalAmount?: true
    currency?: true
    user1Id?: true
    user2Id?: true
    user1Amount?: true
    user2Amount?: true
    status?: true
    escrowStatus?: true
    splitMode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionSplitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionSplit to aggregate.
     */
    where?: TransactionSplitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionSplits to fetch.
     */
    orderBy?: TransactionSplitOrderByWithRelationInput | TransactionSplitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionSplitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionSplits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionSplits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransactionSplits
    **/
    _count?: true | TransactionSplitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionSplitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSplitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionSplitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionSplitMaxAggregateInputType
  }

  export type GetTransactionSplitAggregateType<T extends TransactionSplitAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactionSplit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactionSplit[P]>
      : GetScalarType<T[P], AggregateTransactionSplit[P]>
  }




  export type TransactionSplitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionSplitWhereInput
    orderBy?: TransactionSplitOrderByWithAggregationInput | TransactionSplitOrderByWithAggregationInput[]
    by: TransactionSplitScalarFieldEnum[] | TransactionSplitScalarFieldEnum
    having?: TransactionSplitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionSplitCountAggregateInputType | true
    _avg?: TransactionSplitAvgAggregateInputType
    _sum?: TransactionSplitSumAggregateInputType
    _min?: TransactionSplitMinAggregateInputType
    _max?: TransactionSplitMaxAggregateInputType
  }

  export type TransactionSplitGroupByOutputType = {
    id: string
    tripPlanId: string
    totalAmount: number
    currency: string
    user1Id: string
    user2Id: string
    user1Amount: number
    user2Amount: number
    status: string
    escrowStatus: string
    splitMode: string
    createdAt: string | null
    updatedAt: string | null
    _count: TransactionSplitCountAggregateOutputType | null
    _avg: TransactionSplitAvgAggregateOutputType | null
    _sum: TransactionSplitSumAggregateOutputType | null
    _min: TransactionSplitMinAggregateOutputType | null
    _max: TransactionSplitMaxAggregateOutputType | null
  }

  type GetTransactionSplitGroupByPayload<T extends TransactionSplitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionSplitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionSplitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionSplitGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionSplitGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSplitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripPlanId?: boolean
    totalAmount?: boolean
    currency?: boolean
    user1Id?: boolean
    user2Id?: boolean
    user1Amount?: boolean
    user2Amount?: boolean
    status?: boolean
    escrowStatus?: boolean
    splitMode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["transactionSplit"]>

  export type TransactionSplitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripPlanId?: boolean
    totalAmount?: boolean
    currency?: boolean
    user1Id?: boolean
    user2Id?: boolean
    user1Amount?: boolean
    user2Amount?: boolean
    status?: boolean
    escrowStatus?: boolean
    splitMode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["transactionSplit"]>

  export type TransactionSplitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripPlanId?: boolean
    totalAmount?: boolean
    currency?: boolean
    user1Id?: boolean
    user2Id?: boolean
    user1Amount?: boolean
    user2Amount?: boolean
    status?: boolean
    escrowStatus?: boolean
    splitMode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["transactionSplit"]>

  export type TransactionSplitSelectScalar = {
    id?: boolean
    tripPlanId?: boolean
    totalAmount?: boolean
    currency?: boolean
    user1Id?: boolean
    user2Id?: boolean
    user1Amount?: boolean
    user2Amount?: boolean
    status?: boolean
    escrowStatus?: boolean
    splitMode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransactionSplitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripPlanId" | "totalAmount" | "currency" | "user1Id" | "user2Id" | "user1Amount" | "user2Amount" | "status" | "escrowStatus" | "splitMode" | "createdAt" | "updatedAt", ExtArgs["result"]["transactionSplit"]>

  export type $TransactionSplitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransactionSplit"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tripPlanId: string
      totalAmount: number
      currency: string
      user1Id: string
      user2Id: string
      user1Amount: number
      user2Amount: number
      status: string
      escrowStatus: string
      splitMode: string
      createdAt: string | null
      updatedAt: string | null
    }, ExtArgs["result"]["transactionSplit"]>
    composites: {}
  }

  type TransactionSplitGetPayload<S extends boolean | null | undefined | TransactionSplitDefaultArgs> = $Result.GetResult<Prisma.$TransactionSplitPayload, S>

  type TransactionSplitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionSplitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionSplitCountAggregateInputType | true
    }

  export interface TransactionSplitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransactionSplit'], meta: { name: 'TransactionSplit' } }
    /**
     * Find zero or one TransactionSplit that matches the filter.
     * @param {TransactionSplitFindUniqueArgs} args - Arguments to find a TransactionSplit
     * @example
     * // Get one TransactionSplit
     * const transactionSplit = await prisma.transactionSplit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionSplitFindUniqueArgs>(args: SelectSubset<T, TransactionSplitFindUniqueArgs<ExtArgs>>): Prisma__TransactionSplitClient<$Result.GetResult<Prisma.$TransactionSplitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransactionSplit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionSplitFindUniqueOrThrowArgs} args - Arguments to find a TransactionSplit
     * @example
     * // Get one TransactionSplit
     * const transactionSplit = await prisma.transactionSplit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionSplitFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionSplitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionSplitClient<$Result.GetResult<Prisma.$TransactionSplitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionSplit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionSplitFindFirstArgs} args - Arguments to find a TransactionSplit
     * @example
     * // Get one TransactionSplit
     * const transactionSplit = await prisma.transactionSplit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionSplitFindFirstArgs>(args?: SelectSubset<T, TransactionSplitFindFirstArgs<ExtArgs>>): Prisma__TransactionSplitClient<$Result.GetResult<Prisma.$TransactionSplitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionSplit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionSplitFindFirstOrThrowArgs} args - Arguments to find a TransactionSplit
     * @example
     * // Get one TransactionSplit
     * const transactionSplit = await prisma.transactionSplit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionSplitFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionSplitFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionSplitClient<$Result.GetResult<Prisma.$TransactionSplitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransactionSplits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionSplitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransactionSplits
     * const transactionSplits = await prisma.transactionSplit.findMany()
     * 
     * // Get first 10 TransactionSplits
     * const transactionSplits = await prisma.transactionSplit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionSplitWithIdOnly = await prisma.transactionSplit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionSplitFindManyArgs>(args?: SelectSubset<T, TransactionSplitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionSplitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransactionSplit.
     * @param {TransactionSplitCreateArgs} args - Arguments to create a TransactionSplit.
     * @example
     * // Create one TransactionSplit
     * const TransactionSplit = await prisma.transactionSplit.create({
     *   data: {
     *     // ... data to create a TransactionSplit
     *   }
     * })
     * 
     */
    create<T extends TransactionSplitCreateArgs>(args: SelectSubset<T, TransactionSplitCreateArgs<ExtArgs>>): Prisma__TransactionSplitClient<$Result.GetResult<Prisma.$TransactionSplitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransactionSplits.
     * @param {TransactionSplitCreateManyArgs} args - Arguments to create many TransactionSplits.
     * @example
     * // Create many TransactionSplits
     * const transactionSplit = await prisma.transactionSplit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionSplitCreateManyArgs>(args?: SelectSubset<T, TransactionSplitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransactionSplits and returns the data saved in the database.
     * @param {TransactionSplitCreateManyAndReturnArgs} args - Arguments to create many TransactionSplits.
     * @example
     * // Create many TransactionSplits
     * const transactionSplit = await prisma.transactionSplit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransactionSplits and only return the `id`
     * const transactionSplitWithIdOnly = await prisma.transactionSplit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionSplitCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionSplitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionSplitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TransactionSplit.
     * @param {TransactionSplitDeleteArgs} args - Arguments to delete one TransactionSplit.
     * @example
     * // Delete one TransactionSplit
     * const TransactionSplit = await prisma.transactionSplit.delete({
     *   where: {
     *     // ... filter to delete one TransactionSplit
     *   }
     * })
     * 
     */
    delete<T extends TransactionSplitDeleteArgs>(args: SelectSubset<T, TransactionSplitDeleteArgs<ExtArgs>>): Prisma__TransactionSplitClient<$Result.GetResult<Prisma.$TransactionSplitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransactionSplit.
     * @param {TransactionSplitUpdateArgs} args - Arguments to update one TransactionSplit.
     * @example
     * // Update one TransactionSplit
     * const transactionSplit = await prisma.transactionSplit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionSplitUpdateArgs>(args: SelectSubset<T, TransactionSplitUpdateArgs<ExtArgs>>): Prisma__TransactionSplitClient<$Result.GetResult<Prisma.$TransactionSplitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransactionSplits.
     * @param {TransactionSplitDeleteManyArgs} args - Arguments to filter TransactionSplits to delete.
     * @example
     * // Delete a few TransactionSplits
     * const { count } = await prisma.transactionSplit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionSplitDeleteManyArgs>(args?: SelectSubset<T, TransactionSplitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionSplits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionSplitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransactionSplits
     * const transactionSplit = await prisma.transactionSplit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionSplitUpdateManyArgs>(args: SelectSubset<T, TransactionSplitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionSplits and returns the data updated in the database.
     * @param {TransactionSplitUpdateManyAndReturnArgs} args - Arguments to update many TransactionSplits.
     * @example
     * // Update many TransactionSplits
     * const transactionSplit = await prisma.transactionSplit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransactionSplits and only return the `id`
     * const transactionSplitWithIdOnly = await prisma.transactionSplit.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionSplitUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionSplitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionSplitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TransactionSplit.
     * @param {TransactionSplitUpsertArgs} args - Arguments to update or create a TransactionSplit.
     * @example
     * // Update or create a TransactionSplit
     * const transactionSplit = await prisma.transactionSplit.upsert({
     *   create: {
     *     // ... data to create a TransactionSplit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransactionSplit we want to update
     *   }
     * })
     */
    upsert<T extends TransactionSplitUpsertArgs>(args: SelectSubset<T, TransactionSplitUpsertArgs<ExtArgs>>): Prisma__TransactionSplitClient<$Result.GetResult<Prisma.$TransactionSplitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransactionSplits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionSplitCountArgs} args - Arguments to filter TransactionSplits to count.
     * @example
     * // Count the number of TransactionSplits
     * const count = await prisma.transactionSplit.count({
     *   where: {
     *     // ... the filter for the TransactionSplits we want to count
     *   }
     * })
    **/
    count<T extends TransactionSplitCountArgs>(
      args?: Subset<T, TransactionSplitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionSplitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransactionSplit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionSplitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionSplitAggregateArgs>(args: Subset<T, TransactionSplitAggregateArgs>): Prisma.PrismaPromise<GetTransactionSplitAggregateType<T>>

    /**
     * Group by TransactionSplit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionSplitGroupByArgs} args - Group by arguments.
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
      T extends TransactionSplitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionSplitGroupByArgs['orderBy'] }
        : { orderBy?: TransactionSplitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionSplitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionSplitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransactionSplit model
   */
  readonly fields: TransactionSplitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransactionSplit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionSplitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the TransactionSplit model
   */
  interface TransactionSplitFieldRefs {
    readonly id: FieldRef<"TransactionSplit", 'String'>
    readonly tripPlanId: FieldRef<"TransactionSplit", 'String'>
    readonly totalAmount: FieldRef<"TransactionSplit", 'Float'>
    readonly currency: FieldRef<"TransactionSplit", 'String'>
    readonly user1Id: FieldRef<"TransactionSplit", 'String'>
    readonly user2Id: FieldRef<"TransactionSplit", 'String'>
    readonly user1Amount: FieldRef<"TransactionSplit", 'Float'>
    readonly user2Amount: FieldRef<"TransactionSplit", 'Float'>
    readonly status: FieldRef<"TransactionSplit", 'String'>
    readonly escrowStatus: FieldRef<"TransactionSplit", 'String'>
    readonly splitMode: FieldRef<"TransactionSplit", 'String'>
    readonly createdAt: FieldRef<"TransactionSplit", 'String'>
    readonly updatedAt: FieldRef<"TransactionSplit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TransactionSplit findUnique
   */
  export type TransactionSplitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSplit
     */
    select?: TransactionSplitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSplit
     */
    omit?: TransactionSplitOmit<ExtArgs> | null
    /**
     * Filter, which TransactionSplit to fetch.
     */
    where: TransactionSplitWhereUniqueInput
  }

  /**
   * TransactionSplit findUniqueOrThrow
   */
  export type TransactionSplitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSplit
     */
    select?: TransactionSplitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSplit
     */
    omit?: TransactionSplitOmit<ExtArgs> | null
    /**
     * Filter, which TransactionSplit to fetch.
     */
    where: TransactionSplitWhereUniqueInput
  }

  /**
   * TransactionSplit findFirst
   */
  export type TransactionSplitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSplit
     */
    select?: TransactionSplitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSplit
     */
    omit?: TransactionSplitOmit<ExtArgs> | null
    /**
     * Filter, which TransactionSplit to fetch.
     */
    where?: TransactionSplitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionSplits to fetch.
     */
    orderBy?: TransactionSplitOrderByWithRelationInput | TransactionSplitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionSplits.
     */
    cursor?: TransactionSplitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionSplits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionSplits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionSplits.
     */
    distinct?: TransactionSplitScalarFieldEnum | TransactionSplitScalarFieldEnum[]
  }

  /**
   * TransactionSplit findFirstOrThrow
   */
  export type TransactionSplitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSplit
     */
    select?: TransactionSplitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSplit
     */
    omit?: TransactionSplitOmit<ExtArgs> | null
    /**
     * Filter, which TransactionSplit to fetch.
     */
    where?: TransactionSplitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionSplits to fetch.
     */
    orderBy?: TransactionSplitOrderByWithRelationInput | TransactionSplitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionSplits.
     */
    cursor?: TransactionSplitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionSplits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionSplits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionSplits.
     */
    distinct?: TransactionSplitScalarFieldEnum | TransactionSplitScalarFieldEnum[]
  }

  /**
   * TransactionSplit findMany
   */
  export type TransactionSplitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSplit
     */
    select?: TransactionSplitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSplit
     */
    omit?: TransactionSplitOmit<ExtArgs> | null
    /**
     * Filter, which TransactionSplits to fetch.
     */
    where?: TransactionSplitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionSplits to fetch.
     */
    orderBy?: TransactionSplitOrderByWithRelationInput | TransactionSplitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransactionSplits.
     */
    cursor?: TransactionSplitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionSplits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionSplits.
     */
    skip?: number
    distinct?: TransactionSplitScalarFieldEnum | TransactionSplitScalarFieldEnum[]
  }

  /**
   * TransactionSplit create
   */
  export type TransactionSplitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSplit
     */
    select?: TransactionSplitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSplit
     */
    omit?: TransactionSplitOmit<ExtArgs> | null
    /**
     * The data needed to create a TransactionSplit.
     */
    data: XOR<TransactionSplitCreateInput, TransactionSplitUncheckedCreateInput>
  }

  /**
   * TransactionSplit createMany
   */
  export type TransactionSplitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransactionSplits.
     */
    data: TransactionSplitCreateManyInput | TransactionSplitCreateManyInput[]
  }

  /**
   * TransactionSplit createManyAndReturn
   */
  export type TransactionSplitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSplit
     */
    select?: TransactionSplitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSplit
     */
    omit?: TransactionSplitOmit<ExtArgs> | null
    /**
     * The data used to create many TransactionSplits.
     */
    data: TransactionSplitCreateManyInput | TransactionSplitCreateManyInput[]
  }

  /**
   * TransactionSplit update
   */
  export type TransactionSplitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSplit
     */
    select?: TransactionSplitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSplit
     */
    omit?: TransactionSplitOmit<ExtArgs> | null
    /**
     * The data needed to update a TransactionSplit.
     */
    data: XOR<TransactionSplitUpdateInput, TransactionSplitUncheckedUpdateInput>
    /**
     * Choose, which TransactionSplit to update.
     */
    where: TransactionSplitWhereUniqueInput
  }

  /**
   * TransactionSplit updateMany
   */
  export type TransactionSplitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransactionSplits.
     */
    data: XOR<TransactionSplitUpdateManyMutationInput, TransactionSplitUncheckedUpdateManyInput>
    /**
     * Filter which TransactionSplits to update
     */
    where?: TransactionSplitWhereInput
    /**
     * Limit how many TransactionSplits to update.
     */
    limit?: number
  }

  /**
   * TransactionSplit updateManyAndReturn
   */
  export type TransactionSplitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSplit
     */
    select?: TransactionSplitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSplit
     */
    omit?: TransactionSplitOmit<ExtArgs> | null
    /**
     * The data used to update TransactionSplits.
     */
    data: XOR<TransactionSplitUpdateManyMutationInput, TransactionSplitUncheckedUpdateManyInput>
    /**
     * Filter which TransactionSplits to update
     */
    where?: TransactionSplitWhereInput
    /**
     * Limit how many TransactionSplits to update.
     */
    limit?: number
  }

  /**
   * TransactionSplit upsert
   */
  export type TransactionSplitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSplit
     */
    select?: TransactionSplitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSplit
     */
    omit?: TransactionSplitOmit<ExtArgs> | null
    /**
     * The filter to search for the TransactionSplit to update in case it exists.
     */
    where: TransactionSplitWhereUniqueInput
    /**
     * In case the TransactionSplit found by the `where` argument doesn't exist, create a new TransactionSplit with this data.
     */
    create: XOR<TransactionSplitCreateInput, TransactionSplitUncheckedCreateInput>
    /**
     * In case the TransactionSplit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionSplitUpdateInput, TransactionSplitUncheckedUpdateInput>
  }

  /**
   * TransactionSplit delete
   */
  export type TransactionSplitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSplit
     */
    select?: TransactionSplitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSplit
     */
    omit?: TransactionSplitOmit<ExtArgs> | null
    /**
     * Filter which TransactionSplit to delete.
     */
    where: TransactionSplitWhereUniqueInput
  }

  /**
   * TransactionSplit deleteMany
   */
  export type TransactionSplitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionSplits to delete
     */
    where?: TransactionSplitWhereInput
    /**
     * Limit how many TransactionSplits to delete.
     */
    limit?: number
  }

  /**
   * TransactionSplit without action
   */
  export type TransactionSplitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSplit
     */
    select?: TransactionSplitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSplit
     */
    omit?: TransactionSplitOmit<ExtArgs> | null
  }


  /**
   * Model UserRating
   */

  export type AggregateUserRating = {
    _count: UserRatingCountAggregateOutputType | null
    _avg: UserRatingAvgAggregateOutputType | null
    _sum: UserRatingSumAggregateOutputType | null
    _min: UserRatingMinAggregateOutputType | null
    _max: UserRatingMaxAggregateOutputType | null
  }

  export type UserRatingAvgAggregateOutputType = {
    rating: number | null
  }

  export type UserRatingSumAggregateOutputType = {
    rating: number | null
  }

  export type UserRatingMinAggregateOutputType = {
    id: string | null
    raterId: string | null
    rateeId: string | null
    rating: number | null
    tags: string | null
    comment: string | null
    createdAt: string | null
  }

  export type UserRatingMaxAggregateOutputType = {
    id: string | null
    raterId: string | null
    rateeId: string | null
    rating: number | null
    tags: string | null
    comment: string | null
    createdAt: string | null
  }

  export type UserRatingCountAggregateOutputType = {
    id: number
    raterId: number
    rateeId: number
    rating: number
    tags: number
    comment: number
    createdAt: number
    _all: number
  }


  export type UserRatingAvgAggregateInputType = {
    rating?: true
  }

  export type UserRatingSumAggregateInputType = {
    rating?: true
  }

  export type UserRatingMinAggregateInputType = {
    id?: true
    raterId?: true
    rateeId?: true
    rating?: true
    tags?: true
    comment?: true
    createdAt?: true
  }

  export type UserRatingMaxAggregateInputType = {
    id?: true
    raterId?: true
    rateeId?: true
    rating?: true
    tags?: true
    comment?: true
    createdAt?: true
  }

  export type UserRatingCountAggregateInputType = {
    id?: true
    raterId?: true
    rateeId?: true
    rating?: true
    tags?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type UserRatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRating to aggregate.
     */
    where?: UserRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRatings to fetch.
     */
    orderBy?: UserRatingOrderByWithRelationInput | UserRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRatings
    **/
    _count?: true | UserRatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserRatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserRatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRatingMaxAggregateInputType
  }

  export type GetUserRatingAggregateType<T extends UserRatingAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRating[P]>
      : GetScalarType<T[P], AggregateUserRating[P]>
  }




  export type UserRatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRatingWhereInput
    orderBy?: UserRatingOrderByWithAggregationInput | UserRatingOrderByWithAggregationInput[]
    by: UserRatingScalarFieldEnum[] | UserRatingScalarFieldEnum
    having?: UserRatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRatingCountAggregateInputType | true
    _avg?: UserRatingAvgAggregateInputType
    _sum?: UserRatingSumAggregateInputType
    _min?: UserRatingMinAggregateInputType
    _max?: UserRatingMaxAggregateInputType
  }

  export type UserRatingGroupByOutputType = {
    id: string
    raterId: string
    rateeId: string
    rating: number
    tags: string
    comment: string | null
    createdAt: string | null
    _count: UserRatingCountAggregateOutputType | null
    _avg: UserRatingAvgAggregateOutputType | null
    _sum: UserRatingSumAggregateOutputType | null
    _min: UserRatingMinAggregateOutputType | null
    _max: UserRatingMaxAggregateOutputType | null
  }

  type GetUserRatingGroupByPayload<T extends UserRatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRatingGroupByOutputType[P]>
            : GetScalarType<T[P], UserRatingGroupByOutputType[P]>
        }
      >
    >


  export type UserRatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raterId?: boolean
    rateeId?: boolean
    rating?: boolean
    tags?: boolean
    comment?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userRating"]>

  export type UserRatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raterId?: boolean
    rateeId?: boolean
    rating?: boolean
    tags?: boolean
    comment?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userRating"]>

  export type UserRatingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raterId?: boolean
    rateeId?: boolean
    rating?: boolean
    tags?: boolean
    comment?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userRating"]>

  export type UserRatingSelectScalar = {
    id?: boolean
    raterId?: boolean
    rateeId?: boolean
    rating?: boolean
    tags?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type UserRatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "raterId" | "rateeId" | "rating" | "tags" | "comment" | "createdAt", ExtArgs["result"]["userRating"]>

  export type $UserRatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRating"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      raterId: string
      rateeId: string
      rating: number
      tags: string
      comment: string | null
      createdAt: string | null
    }, ExtArgs["result"]["userRating"]>
    composites: {}
  }

  type UserRatingGetPayload<S extends boolean | null | undefined | UserRatingDefaultArgs> = $Result.GetResult<Prisma.$UserRatingPayload, S>

  type UserRatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRatingCountAggregateInputType | true
    }

  export interface UserRatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRating'], meta: { name: 'UserRating' } }
    /**
     * Find zero or one UserRating that matches the filter.
     * @param {UserRatingFindUniqueArgs} args - Arguments to find a UserRating
     * @example
     * // Get one UserRating
     * const userRating = await prisma.userRating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRatingFindUniqueArgs>(args: SelectSubset<T, UserRatingFindUniqueArgs<ExtArgs>>): Prisma__UserRatingClient<$Result.GetResult<Prisma.$UserRatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRatingFindUniqueOrThrowArgs} args - Arguments to find a UserRating
     * @example
     * // Get one UserRating
     * const userRating = await prisma.userRating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRatingFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRatingClient<$Result.GetResult<Prisma.$UserRatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRatingFindFirstArgs} args - Arguments to find a UserRating
     * @example
     * // Get one UserRating
     * const userRating = await prisma.userRating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRatingFindFirstArgs>(args?: SelectSubset<T, UserRatingFindFirstArgs<ExtArgs>>): Prisma__UserRatingClient<$Result.GetResult<Prisma.$UserRatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRatingFindFirstOrThrowArgs} args - Arguments to find a UserRating
     * @example
     * // Get one UserRating
     * const userRating = await prisma.userRating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRatingFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRatingClient<$Result.GetResult<Prisma.$UserRatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRatings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRatings
     * const userRatings = await prisma.userRating.findMany()
     * 
     * // Get first 10 UserRatings
     * const userRatings = await prisma.userRating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRatingWithIdOnly = await prisma.userRating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserRatingFindManyArgs>(args?: SelectSubset<T, UserRatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRating.
     * @param {UserRatingCreateArgs} args - Arguments to create a UserRating.
     * @example
     * // Create one UserRating
     * const UserRating = await prisma.userRating.create({
     *   data: {
     *     // ... data to create a UserRating
     *   }
     * })
     * 
     */
    create<T extends UserRatingCreateArgs>(args: SelectSubset<T, UserRatingCreateArgs<ExtArgs>>): Prisma__UserRatingClient<$Result.GetResult<Prisma.$UserRatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRatings.
     * @param {UserRatingCreateManyArgs} args - Arguments to create many UserRatings.
     * @example
     * // Create many UserRatings
     * const userRating = await prisma.userRating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRatingCreateManyArgs>(args?: SelectSubset<T, UserRatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRatings and returns the data saved in the database.
     * @param {UserRatingCreateManyAndReturnArgs} args - Arguments to create many UserRatings.
     * @example
     * // Create many UserRatings
     * const userRating = await prisma.userRating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRatings and only return the `id`
     * const userRatingWithIdOnly = await prisma.userRating.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRatingCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserRating.
     * @param {UserRatingDeleteArgs} args - Arguments to delete one UserRating.
     * @example
     * // Delete one UserRating
     * const UserRating = await prisma.userRating.delete({
     *   where: {
     *     // ... filter to delete one UserRating
     *   }
     * })
     * 
     */
    delete<T extends UserRatingDeleteArgs>(args: SelectSubset<T, UserRatingDeleteArgs<ExtArgs>>): Prisma__UserRatingClient<$Result.GetResult<Prisma.$UserRatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRating.
     * @param {UserRatingUpdateArgs} args - Arguments to update one UserRating.
     * @example
     * // Update one UserRating
     * const userRating = await prisma.userRating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRatingUpdateArgs>(args: SelectSubset<T, UserRatingUpdateArgs<ExtArgs>>): Prisma__UserRatingClient<$Result.GetResult<Prisma.$UserRatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRatings.
     * @param {UserRatingDeleteManyArgs} args - Arguments to filter UserRatings to delete.
     * @example
     * // Delete a few UserRatings
     * const { count } = await prisma.userRating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRatingDeleteManyArgs>(args?: SelectSubset<T, UserRatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRatings
     * const userRating = await prisma.userRating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRatingUpdateManyArgs>(args: SelectSubset<T, UserRatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRatings and returns the data updated in the database.
     * @param {UserRatingUpdateManyAndReturnArgs} args - Arguments to update many UserRatings.
     * @example
     * // Update many UserRatings
     * const userRating = await prisma.userRating.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserRatings and only return the `id`
     * const userRatingWithIdOnly = await prisma.userRating.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserRatingUpdateManyAndReturnArgs>(args: SelectSubset<T, UserRatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserRating.
     * @param {UserRatingUpsertArgs} args - Arguments to update or create a UserRating.
     * @example
     * // Update or create a UserRating
     * const userRating = await prisma.userRating.upsert({
     *   create: {
     *     // ... data to create a UserRating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRating we want to update
     *   }
     * })
     */
    upsert<T extends UserRatingUpsertArgs>(args: SelectSubset<T, UserRatingUpsertArgs<ExtArgs>>): Prisma__UserRatingClient<$Result.GetResult<Prisma.$UserRatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRatingCountArgs} args - Arguments to filter UserRatings to count.
     * @example
     * // Count the number of UserRatings
     * const count = await prisma.userRating.count({
     *   where: {
     *     // ... the filter for the UserRatings we want to count
     *   }
     * })
    **/
    count<T extends UserRatingCountArgs>(
      args?: Subset<T, UserRatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserRatingAggregateArgs>(args: Subset<T, UserRatingAggregateArgs>): Prisma.PrismaPromise<GetUserRatingAggregateType<T>>

    /**
     * Group by UserRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRatingGroupByArgs} args - Group by arguments.
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
      T extends UserRatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRatingGroupByArgs['orderBy'] }
        : { orderBy?: UserRatingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserRatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRating model
   */
  readonly fields: UserRatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserRating model
   */
  interface UserRatingFieldRefs {
    readonly id: FieldRef<"UserRating", 'String'>
    readonly raterId: FieldRef<"UserRating", 'String'>
    readonly rateeId: FieldRef<"UserRating", 'String'>
    readonly rating: FieldRef<"UserRating", 'Int'>
    readonly tags: FieldRef<"UserRating", 'String'>
    readonly comment: FieldRef<"UserRating", 'String'>
    readonly createdAt: FieldRef<"UserRating", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserRating findUnique
   */
  export type UserRatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRating
     */
    select?: UserRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRating
     */
    omit?: UserRatingOmit<ExtArgs> | null
    /**
     * Filter, which UserRating to fetch.
     */
    where: UserRatingWhereUniqueInput
  }

  /**
   * UserRating findUniqueOrThrow
   */
  export type UserRatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRating
     */
    select?: UserRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRating
     */
    omit?: UserRatingOmit<ExtArgs> | null
    /**
     * Filter, which UserRating to fetch.
     */
    where: UserRatingWhereUniqueInput
  }

  /**
   * UserRating findFirst
   */
  export type UserRatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRating
     */
    select?: UserRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRating
     */
    omit?: UserRatingOmit<ExtArgs> | null
    /**
     * Filter, which UserRating to fetch.
     */
    where?: UserRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRatings to fetch.
     */
    orderBy?: UserRatingOrderByWithRelationInput | UserRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRatings.
     */
    cursor?: UserRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRatings.
     */
    distinct?: UserRatingScalarFieldEnum | UserRatingScalarFieldEnum[]
  }

  /**
   * UserRating findFirstOrThrow
   */
  export type UserRatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRating
     */
    select?: UserRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRating
     */
    omit?: UserRatingOmit<ExtArgs> | null
    /**
     * Filter, which UserRating to fetch.
     */
    where?: UserRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRatings to fetch.
     */
    orderBy?: UserRatingOrderByWithRelationInput | UserRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRatings.
     */
    cursor?: UserRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRatings.
     */
    distinct?: UserRatingScalarFieldEnum | UserRatingScalarFieldEnum[]
  }

  /**
   * UserRating findMany
   */
  export type UserRatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRating
     */
    select?: UserRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRating
     */
    omit?: UserRatingOmit<ExtArgs> | null
    /**
     * Filter, which UserRatings to fetch.
     */
    where?: UserRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRatings to fetch.
     */
    orderBy?: UserRatingOrderByWithRelationInput | UserRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRatings.
     */
    cursor?: UserRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRatings.
     */
    skip?: number
    distinct?: UserRatingScalarFieldEnum | UserRatingScalarFieldEnum[]
  }

  /**
   * UserRating create
   */
  export type UserRatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRating
     */
    select?: UserRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRating
     */
    omit?: UserRatingOmit<ExtArgs> | null
    /**
     * The data needed to create a UserRating.
     */
    data: XOR<UserRatingCreateInput, UserRatingUncheckedCreateInput>
  }

  /**
   * UserRating createMany
   */
  export type UserRatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRatings.
     */
    data: UserRatingCreateManyInput | UserRatingCreateManyInput[]
  }

  /**
   * UserRating createManyAndReturn
   */
  export type UserRatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRating
     */
    select?: UserRatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRating
     */
    omit?: UserRatingOmit<ExtArgs> | null
    /**
     * The data used to create many UserRatings.
     */
    data: UserRatingCreateManyInput | UserRatingCreateManyInput[]
  }

  /**
   * UserRating update
   */
  export type UserRatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRating
     */
    select?: UserRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRating
     */
    omit?: UserRatingOmit<ExtArgs> | null
    /**
     * The data needed to update a UserRating.
     */
    data: XOR<UserRatingUpdateInput, UserRatingUncheckedUpdateInput>
    /**
     * Choose, which UserRating to update.
     */
    where: UserRatingWhereUniqueInput
  }

  /**
   * UserRating updateMany
   */
  export type UserRatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRatings.
     */
    data: XOR<UserRatingUpdateManyMutationInput, UserRatingUncheckedUpdateManyInput>
    /**
     * Filter which UserRatings to update
     */
    where?: UserRatingWhereInput
    /**
     * Limit how many UserRatings to update.
     */
    limit?: number
  }

  /**
   * UserRating updateManyAndReturn
   */
  export type UserRatingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRating
     */
    select?: UserRatingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRating
     */
    omit?: UserRatingOmit<ExtArgs> | null
    /**
     * The data used to update UserRatings.
     */
    data: XOR<UserRatingUpdateManyMutationInput, UserRatingUncheckedUpdateManyInput>
    /**
     * Filter which UserRatings to update
     */
    where?: UserRatingWhereInput
    /**
     * Limit how many UserRatings to update.
     */
    limit?: number
  }

  /**
   * UserRating upsert
   */
  export type UserRatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRating
     */
    select?: UserRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRating
     */
    omit?: UserRatingOmit<ExtArgs> | null
    /**
     * The filter to search for the UserRating to update in case it exists.
     */
    where: UserRatingWhereUniqueInput
    /**
     * In case the UserRating found by the `where` argument doesn't exist, create a new UserRating with this data.
     */
    create: XOR<UserRatingCreateInput, UserRatingUncheckedCreateInput>
    /**
     * In case the UserRating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRatingUpdateInput, UserRatingUncheckedUpdateInput>
  }

  /**
   * UserRating delete
   */
  export type UserRatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRating
     */
    select?: UserRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRating
     */
    omit?: UserRatingOmit<ExtArgs> | null
    /**
     * Filter which UserRating to delete.
     */
    where: UserRatingWhereUniqueInput
  }

  /**
   * UserRating deleteMany
   */
  export type UserRatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRatings to delete
     */
    where?: UserRatingWhereInput
    /**
     * Limit how many UserRatings to delete.
     */
    limit?: number
  }

  /**
   * UserRating without action
   */
  export type UserRatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRating
     */
    select?: UserRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRating
     */
    omit?: UserRatingOmit<ExtArgs> | null
  }


  /**
   * Model LocationDare
   */

  export type AggregateLocationDare = {
    _count: LocationDareCountAggregateOutputType | null
    _avg: LocationDareAvgAggregateOutputType | null
    _sum: LocationDareSumAggregateOutputType | null
    _min: LocationDareMinAggregateOutputType | null
    _max: LocationDareMaxAggregateOutputType | null
  }

  export type LocationDareAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    radiusMeters: number | null
    pointsReward: number | null
  }

  export type LocationDareSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    radiusMeters: number | null
    pointsReward: number | null
  }

  export type LocationDareMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    latitude: number | null
    longitude: number | null
    radiusMeters: number | null
    pointsReward: number | null
    targetCity: string | null
    isSponsored: boolean | null
    sponsorName: string | null
  }

  export type LocationDareMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    latitude: number | null
    longitude: number | null
    radiusMeters: number | null
    pointsReward: number | null
    targetCity: string | null
    isSponsored: boolean | null
    sponsorName: string | null
  }

  export type LocationDareCountAggregateOutputType = {
    id: number
    title: number
    description: number
    latitude: number
    longitude: number
    radiusMeters: number
    pointsReward: number
    targetCity: number
    isSponsored: number
    sponsorName: number
    _all: number
  }


  export type LocationDareAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    radiusMeters?: true
    pointsReward?: true
  }

  export type LocationDareSumAggregateInputType = {
    latitude?: true
    longitude?: true
    radiusMeters?: true
    pointsReward?: true
  }

  export type LocationDareMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    latitude?: true
    longitude?: true
    radiusMeters?: true
    pointsReward?: true
    targetCity?: true
    isSponsored?: true
    sponsorName?: true
  }

  export type LocationDareMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    latitude?: true
    longitude?: true
    radiusMeters?: true
    pointsReward?: true
    targetCity?: true
    isSponsored?: true
    sponsorName?: true
  }

  export type LocationDareCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    latitude?: true
    longitude?: true
    radiusMeters?: true
    pointsReward?: true
    targetCity?: true
    isSponsored?: true
    sponsorName?: true
    _all?: true
  }

  export type LocationDareAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocationDare to aggregate.
     */
    where?: LocationDareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationDares to fetch.
     */
    orderBy?: LocationDareOrderByWithRelationInput | LocationDareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationDareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationDares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationDares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LocationDares
    **/
    _count?: true | LocationDareCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationDareAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationDareSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationDareMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationDareMaxAggregateInputType
  }

  export type GetLocationDareAggregateType<T extends LocationDareAggregateArgs> = {
        [P in keyof T & keyof AggregateLocationDare]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocationDare[P]>
      : GetScalarType<T[P], AggregateLocationDare[P]>
  }




  export type LocationDareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationDareWhereInput
    orderBy?: LocationDareOrderByWithAggregationInput | LocationDareOrderByWithAggregationInput[]
    by: LocationDareScalarFieldEnum[] | LocationDareScalarFieldEnum
    having?: LocationDareScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationDareCountAggregateInputType | true
    _avg?: LocationDareAvgAggregateInputType
    _sum?: LocationDareSumAggregateInputType
    _min?: LocationDareMinAggregateInputType
    _max?: LocationDareMaxAggregateInputType
  }

  export type LocationDareGroupByOutputType = {
    id: string
    title: string
    description: string
    latitude: number
    longitude: number
    radiusMeters: number
    pointsReward: number
    targetCity: string
    isSponsored: boolean
    sponsorName: string | null
    _count: LocationDareCountAggregateOutputType | null
    _avg: LocationDareAvgAggregateOutputType | null
    _sum: LocationDareSumAggregateOutputType | null
    _min: LocationDareMinAggregateOutputType | null
    _max: LocationDareMaxAggregateOutputType | null
  }

  type GetLocationDareGroupByPayload<T extends LocationDareGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationDareGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationDareGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationDareGroupByOutputType[P]>
            : GetScalarType<T[P], LocationDareGroupByOutputType[P]>
        }
      >
    >


  export type LocationDareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    radiusMeters?: boolean
    pointsReward?: boolean
    targetCity?: boolean
    isSponsored?: boolean
    sponsorName?: boolean
  }, ExtArgs["result"]["locationDare"]>

  export type LocationDareSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    radiusMeters?: boolean
    pointsReward?: boolean
    targetCity?: boolean
    isSponsored?: boolean
    sponsorName?: boolean
  }, ExtArgs["result"]["locationDare"]>

  export type LocationDareSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    radiusMeters?: boolean
    pointsReward?: boolean
    targetCity?: boolean
    isSponsored?: boolean
    sponsorName?: boolean
  }, ExtArgs["result"]["locationDare"]>

  export type LocationDareSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    radiusMeters?: boolean
    pointsReward?: boolean
    targetCity?: boolean
    isSponsored?: boolean
    sponsorName?: boolean
  }

  export type LocationDareOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "latitude" | "longitude" | "radiusMeters" | "pointsReward" | "targetCity" | "isSponsored" | "sponsorName", ExtArgs["result"]["locationDare"]>

  export type $LocationDarePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LocationDare"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      latitude: number
      longitude: number
      radiusMeters: number
      pointsReward: number
      targetCity: string
      isSponsored: boolean
      sponsorName: string | null
    }, ExtArgs["result"]["locationDare"]>
    composites: {}
  }

  type LocationDareGetPayload<S extends boolean | null | undefined | LocationDareDefaultArgs> = $Result.GetResult<Prisma.$LocationDarePayload, S>

  type LocationDareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationDareFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationDareCountAggregateInputType | true
    }

  export interface LocationDareDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LocationDare'], meta: { name: 'LocationDare' } }
    /**
     * Find zero or one LocationDare that matches the filter.
     * @param {LocationDareFindUniqueArgs} args - Arguments to find a LocationDare
     * @example
     * // Get one LocationDare
     * const locationDare = await prisma.locationDare.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationDareFindUniqueArgs>(args: SelectSubset<T, LocationDareFindUniqueArgs<ExtArgs>>): Prisma__LocationDareClient<$Result.GetResult<Prisma.$LocationDarePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LocationDare that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationDareFindUniqueOrThrowArgs} args - Arguments to find a LocationDare
     * @example
     * // Get one LocationDare
     * const locationDare = await prisma.locationDare.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationDareFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationDareFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationDareClient<$Result.GetResult<Prisma.$LocationDarePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LocationDare that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationDareFindFirstArgs} args - Arguments to find a LocationDare
     * @example
     * // Get one LocationDare
     * const locationDare = await prisma.locationDare.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationDareFindFirstArgs>(args?: SelectSubset<T, LocationDareFindFirstArgs<ExtArgs>>): Prisma__LocationDareClient<$Result.GetResult<Prisma.$LocationDarePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LocationDare that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationDareFindFirstOrThrowArgs} args - Arguments to find a LocationDare
     * @example
     * // Get one LocationDare
     * const locationDare = await prisma.locationDare.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationDareFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationDareFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationDareClient<$Result.GetResult<Prisma.$LocationDarePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LocationDares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationDareFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LocationDares
     * const locationDares = await prisma.locationDare.findMany()
     * 
     * // Get first 10 LocationDares
     * const locationDares = await prisma.locationDare.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationDareWithIdOnly = await prisma.locationDare.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationDareFindManyArgs>(args?: SelectSubset<T, LocationDareFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationDarePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LocationDare.
     * @param {LocationDareCreateArgs} args - Arguments to create a LocationDare.
     * @example
     * // Create one LocationDare
     * const LocationDare = await prisma.locationDare.create({
     *   data: {
     *     // ... data to create a LocationDare
     *   }
     * })
     * 
     */
    create<T extends LocationDareCreateArgs>(args: SelectSubset<T, LocationDareCreateArgs<ExtArgs>>): Prisma__LocationDareClient<$Result.GetResult<Prisma.$LocationDarePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LocationDares.
     * @param {LocationDareCreateManyArgs} args - Arguments to create many LocationDares.
     * @example
     * // Create many LocationDares
     * const locationDare = await prisma.locationDare.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationDareCreateManyArgs>(args?: SelectSubset<T, LocationDareCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LocationDares and returns the data saved in the database.
     * @param {LocationDareCreateManyAndReturnArgs} args - Arguments to create many LocationDares.
     * @example
     * // Create many LocationDares
     * const locationDare = await prisma.locationDare.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LocationDares and only return the `id`
     * const locationDareWithIdOnly = await prisma.locationDare.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationDareCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationDareCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationDarePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LocationDare.
     * @param {LocationDareDeleteArgs} args - Arguments to delete one LocationDare.
     * @example
     * // Delete one LocationDare
     * const LocationDare = await prisma.locationDare.delete({
     *   where: {
     *     // ... filter to delete one LocationDare
     *   }
     * })
     * 
     */
    delete<T extends LocationDareDeleteArgs>(args: SelectSubset<T, LocationDareDeleteArgs<ExtArgs>>): Prisma__LocationDareClient<$Result.GetResult<Prisma.$LocationDarePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LocationDare.
     * @param {LocationDareUpdateArgs} args - Arguments to update one LocationDare.
     * @example
     * // Update one LocationDare
     * const locationDare = await prisma.locationDare.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationDareUpdateArgs>(args: SelectSubset<T, LocationDareUpdateArgs<ExtArgs>>): Prisma__LocationDareClient<$Result.GetResult<Prisma.$LocationDarePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LocationDares.
     * @param {LocationDareDeleteManyArgs} args - Arguments to filter LocationDares to delete.
     * @example
     * // Delete a few LocationDares
     * const { count } = await prisma.locationDare.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDareDeleteManyArgs>(args?: SelectSubset<T, LocationDareDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LocationDares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationDareUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LocationDares
     * const locationDare = await prisma.locationDare.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationDareUpdateManyArgs>(args: SelectSubset<T, LocationDareUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LocationDares and returns the data updated in the database.
     * @param {LocationDareUpdateManyAndReturnArgs} args - Arguments to update many LocationDares.
     * @example
     * // Update many LocationDares
     * const locationDare = await prisma.locationDare.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LocationDares and only return the `id`
     * const locationDareWithIdOnly = await prisma.locationDare.updateManyAndReturn({
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
    updateManyAndReturn<T extends LocationDareUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationDareUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationDarePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LocationDare.
     * @param {LocationDareUpsertArgs} args - Arguments to update or create a LocationDare.
     * @example
     * // Update or create a LocationDare
     * const locationDare = await prisma.locationDare.upsert({
     *   create: {
     *     // ... data to create a LocationDare
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LocationDare we want to update
     *   }
     * })
     */
    upsert<T extends LocationDareUpsertArgs>(args: SelectSubset<T, LocationDareUpsertArgs<ExtArgs>>): Prisma__LocationDareClient<$Result.GetResult<Prisma.$LocationDarePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LocationDares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationDareCountArgs} args - Arguments to filter LocationDares to count.
     * @example
     * // Count the number of LocationDares
     * const count = await prisma.locationDare.count({
     *   where: {
     *     // ... the filter for the LocationDares we want to count
     *   }
     * })
    **/
    count<T extends LocationDareCountArgs>(
      args?: Subset<T, LocationDareCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationDareCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LocationDare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationDareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationDareAggregateArgs>(args: Subset<T, LocationDareAggregateArgs>): Prisma.PrismaPromise<GetLocationDareAggregateType<T>>

    /**
     * Group by LocationDare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationDareGroupByArgs} args - Group by arguments.
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
      T extends LocationDareGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationDareGroupByArgs['orderBy'] }
        : { orderBy?: LocationDareGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocationDareGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationDareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LocationDare model
   */
  readonly fields: LocationDareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LocationDare.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationDareClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the LocationDare model
   */
  interface LocationDareFieldRefs {
    readonly id: FieldRef<"LocationDare", 'String'>
    readonly title: FieldRef<"LocationDare", 'String'>
    readonly description: FieldRef<"LocationDare", 'String'>
    readonly latitude: FieldRef<"LocationDare", 'Float'>
    readonly longitude: FieldRef<"LocationDare", 'Float'>
    readonly radiusMeters: FieldRef<"LocationDare", 'Float'>
    readonly pointsReward: FieldRef<"LocationDare", 'Int'>
    readonly targetCity: FieldRef<"LocationDare", 'String'>
    readonly isSponsored: FieldRef<"LocationDare", 'Boolean'>
    readonly sponsorName: FieldRef<"LocationDare", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LocationDare findUnique
   */
  export type LocationDareFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationDare
     */
    select?: LocationDareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationDare
     */
    omit?: LocationDareOmit<ExtArgs> | null
    /**
     * Filter, which LocationDare to fetch.
     */
    where: LocationDareWhereUniqueInput
  }

  /**
   * LocationDare findUniqueOrThrow
   */
  export type LocationDareFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationDare
     */
    select?: LocationDareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationDare
     */
    omit?: LocationDareOmit<ExtArgs> | null
    /**
     * Filter, which LocationDare to fetch.
     */
    where: LocationDareWhereUniqueInput
  }

  /**
   * LocationDare findFirst
   */
  export type LocationDareFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationDare
     */
    select?: LocationDareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationDare
     */
    omit?: LocationDareOmit<ExtArgs> | null
    /**
     * Filter, which LocationDare to fetch.
     */
    where?: LocationDareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationDares to fetch.
     */
    orderBy?: LocationDareOrderByWithRelationInput | LocationDareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocationDares.
     */
    cursor?: LocationDareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationDares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationDares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocationDares.
     */
    distinct?: LocationDareScalarFieldEnum | LocationDareScalarFieldEnum[]
  }

  /**
   * LocationDare findFirstOrThrow
   */
  export type LocationDareFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationDare
     */
    select?: LocationDareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationDare
     */
    omit?: LocationDareOmit<ExtArgs> | null
    /**
     * Filter, which LocationDare to fetch.
     */
    where?: LocationDareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationDares to fetch.
     */
    orderBy?: LocationDareOrderByWithRelationInput | LocationDareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocationDares.
     */
    cursor?: LocationDareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationDares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationDares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocationDares.
     */
    distinct?: LocationDareScalarFieldEnum | LocationDareScalarFieldEnum[]
  }

  /**
   * LocationDare findMany
   */
  export type LocationDareFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationDare
     */
    select?: LocationDareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationDare
     */
    omit?: LocationDareOmit<ExtArgs> | null
    /**
     * Filter, which LocationDares to fetch.
     */
    where?: LocationDareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationDares to fetch.
     */
    orderBy?: LocationDareOrderByWithRelationInput | LocationDareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LocationDares.
     */
    cursor?: LocationDareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationDares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationDares.
     */
    skip?: number
    distinct?: LocationDareScalarFieldEnum | LocationDareScalarFieldEnum[]
  }

  /**
   * LocationDare create
   */
  export type LocationDareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationDare
     */
    select?: LocationDareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationDare
     */
    omit?: LocationDareOmit<ExtArgs> | null
    /**
     * The data needed to create a LocationDare.
     */
    data: XOR<LocationDareCreateInput, LocationDareUncheckedCreateInput>
  }

  /**
   * LocationDare createMany
   */
  export type LocationDareCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LocationDares.
     */
    data: LocationDareCreateManyInput | LocationDareCreateManyInput[]
  }

  /**
   * LocationDare createManyAndReturn
   */
  export type LocationDareCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationDare
     */
    select?: LocationDareSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LocationDare
     */
    omit?: LocationDareOmit<ExtArgs> | null
    /**
     * The data used to create many LocationDares.
     */
    data: LocationDareCreateManyInput | LocationDareCreateManyInput[]
  }

  /**
   * LocationDare update
   */
  export type LocationDareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationDare
     */
    select?: LocationDareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationDare
     */
    omit?: LocationDareOmit<ExtArgs> | null
    /**
     * The data needed to update a LocationDare.
     */
    data: XOR<LocationDareUpdateInput, LocationDareUncheckedUpdateInput>
    /**
     * Choose, which LocationDare to update.
     */
    where: LocationDareWhereUniqueInput
  }

  /**
   * LocationDare updateMany
   */
  export type LocationDareUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LocationDares.
     */
    data: XOR<LocationDareUpdateManyMutationInput, LocationDareUncheckedUpdateManyInput>
    /**
     * Filter which LocationDares to update
     */
    where?: LocationDareWhereInput
    /**
     * Limit how many LocationDares to update.
     */
    limit?: number
  }

  /**
   * LocationDare updateManyAndReturn
   */
  export type LocationDareUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationDare
     */
    select?: LocationDareSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LocationDare
     */
    omit?: LocationDareOmit<ExtArgs> | null
    /**
     * The data used to update LocationDares.
     */
    data: XOR<LocationDareUpdateManyMutationInput, LocationDareUncheckedUpdateManyInput>
    /**
     * Filter which LocationDares to update
     */
    where?: LocationDareWhereInput
    /**
     * Limit how many LocationDares to update.
     */
    limit?: number
  }

  /**
   * LocationDare upsert
   */
  export type LocationDareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationDare
     */
    select?: LocationDareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationDare
     */
    omit?: LocationDareOmit<ExtArgs> | null
    /**
     * The filter to search for the LocationDare to update in case it exists.
     */
    where: LocationDareWhereUniqueInput
    /**
     * In case the LocationDare found by the `where` argument doesn't exist, create a new LocationDare with this data.
     */
    create: XOR<LocationDareCreateInput, LocationDareUncheckedCreateInput>
    /**
     * In case the LocationDare was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationDareUpdateInput, LocationDareUncheckedUpdateInput>
  }

  /**
   * LocationDare delete
   */
  export type LocationDareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationDare
     */
    select?: LocationDareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationDare
     */
    omit?: LocationDareOmit<ExtArgs> | null
    /**
     * Filter which LocationDare to delete.
     */
    where: LocationDareWhereUniqueInput
  }

  /**
   * LocationDare deleteMany
   */
  export type LocationDareDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocationDares to delete
     */
    where?: LocationDareWhereInput
    /**
     * Limit how many LocationDares to delete.
     */
    limit?: number
  }

  /**
   * LocationDare without action
   */
  export type LocationDareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationDare
     */
    select?: LocationDareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationDare
     */
    omit?: LocationDareOmit<ExtArgs> | null
  }


  /**
   * Model UserDareStatus
   */

  export type AggregateUserDareStatus = {
    _count: UserDareStatusCountAggregateOutputType | null
    _min: UserDareStatusMinAggregateOutputType | null
    _max: UserDareStatusMaxAggregateOutputType | null
  }

  export type UserDareStatusMinAggregateOutputType = {
    id: string | null
    userId: string | null
    companionId: string | null
    dareId: string | null
    status: string | null
    completedAt: string | null
    createdAt: string | null
  }

  export type UserDareStatusMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    companionId: string | null
    dareId: string | null
    status: string | null
    completedAt: string | null
    createdAt: string | null
  }

  export type UserDareStatusCountAggregateOutputType = {
    id: number
    userId: number
    companionId: number
    dareId: number
    status: number
    completedAt: number
    createdAt: number
    _all: number
  }


  export type UserDareStatusMinAggregateInputType = {
    id?: true
    userId?: true
    companionId?: true
    dareId?: true
    status?: true
    completedAt?: true
    createdAt?: true
  }

  export type UserDareStatusMaxAggregateInputType = {
    id?: true
    userId?: true
    companionId?: true
    dareId?: true
    status?: true
    completedAt?: true
    createdAt?: true
  }

  export type UserDareStatusCountAggregateInputType = {
    id?: true
    userId?: true
    companionId?: true
    dareId?: true
    status?: true
    completedAt?: true
    createdAt?: true
    _all?: true
  }

  export type UserDareStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDareStatus to aggregate.
     */
    where?: UserDareStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDareStatuses to fetch.
     */
    orderBy?: UserDareStatusOrderByWithRelationInput | UserDareStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserDareStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDareStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDareStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserDareStatuses
    **/
    _count?: true | UserDareStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserDareStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserDareStatusMaxAggregateInputType
  }

  export type GetUserDareStatusAggregateType<T extends UserDareStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateUserDareStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserDareStatus[P]>
      : GetScalarType<T[P], AggregateUserDareStatus[P]>
  }




  export type UserDareStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDareStatusWhereInput
    orderBy?: UserDareStatusOrderByWithAggregationInput | UserDareStatusOrderByWithAggregationInput[]
    by: UserDareStatusScalarFieldEnum[] | UserDareStatusScalarFieldEnum
    having?: UserDareStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserDareStatusCountAggregateInputType | true
    _min?: UserDareStatusMinAggregateInputType
    _max?: UserDareStatusMaxAggregateInputType
  }

  export type UserDareStatusGroupByOutputType = {
    id: string
    userId: string
    companionId: string | null
    dareId: string
    status: string
    completedAt: string | null
    createdAt: string | null
    _count: UserDareStatusCountAggregateOutputType | null
    _min: UserDareStatusMinAggregateOutputType | null
    _max: UserDareStatusMaxAggregateOutputType | null
  }

  type GetUserDareStatusGroupByPayload<T extends UserDareStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserDareStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserDareStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserDareStatusGroupByOutputType[P]>
            : GetScalarType<T[P], UserDareStatusGroupByOutputType[P]>
        }
      >
    >


  export type UserDareStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companionId?: boolean
    dareId?: boolean
    status?: boolean
    completedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userDareStatus"]>

  export type UserDareStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companionId?: boolean
    dareId?: boolean
    status?: boolean
    completedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userDareStatus"]>

  export type UserDareStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companionId?: boolean
    dareId?: boolean
    status?: boolean
    completedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userDareStatus"]>

  export type UserDareStatusSelectScalar = {
    id?: boolean
    userId?: boolean
    companionId?: boolean
    dareId?: boolean
    status?: boolean
    completedAt?: boolean
    createdAt?: boolean
  }

  export type UserDareStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "companionId" | "dareId" | "status" | "completedAt" | "createdAt", ExtArgs["result"]["userDareStatus"]>

  export type $UserDareStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserDareStatus"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      companionId: string | null
      dareId: string
      status: string
      completedAt: string | null
      createdAt: string | null
    }, ExtArgs["result"]["userDareStatus"]>
    composites: {}
  }

  type UserDareStatusGetPayload<S extends boolean | null | undefined | UserDareStatusDefaultArgs> = $Result.GetResult<Prisma.$UserDareStatusPayload, S>

  type UserDareStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserDareStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserDareStatusCountAggregateInputType | true
    }

  export interface UserDareStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserDareStatus'], meta: { name: 'UserDareStatus' } }
    /**
     * Find zero or one UserDareStatus that matches the filter.
     * @param {UserDareStatusFindUniqueArgs} args - Arguments to find a UserDareStatus
     * @example
     * // Get one UserDareStatus
     * const userDareStatus = await prisma.userDareStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserDareStatusFindUniqueArgs>(args: SelectSubset<T, UserDareStatusFindUniqueArgs<ExtArgs>>): Prisma__UserDareStatusClient<$Result.GetResult<Prisma.$UserDareStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserDareStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserDareStatusFindUniqueOrThrowArgs} args - Arguments to find a UserDareStatus
     * @example
     * // Get one UserDareStatus
     * const userDareStatus = await prisma.userDareStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserDareStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, UserDareStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserDareStatusClient<$Result.GetResult<Prisma.$UserDareStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDareStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDareStatusFindFirstArgs} args - Arguments to find a UserDareStatus
     * @example
     * // Get one UserDareStatus
     * const userDareStatus = await prisma.userDareStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserDareStatusFindFirstArgs>(args?: SelectSubset<T, UserDareStatusFindFirstArgs<ExtArgs>>): Prisma__UserDareStatusClient<$Result.GetResult<Prisma.$UserDareStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDareStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDareStatusFindFirstOrThrowArgs} args - Arguments to find a UserDareStatus
     * @example
     * // Get one UserDareStatus
     * const userDareStatus = await prisma.userDareStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserDareStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, UserDareStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserDareStatusClient<$Result.GetResult<Prisma.$UserDareStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserDareStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDareStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserDareStatuses
     * const userDareStatuses = await prisma.userDareStatus.findMany()
     * 
     * // Get first 10 UserDareStatuses
     * const userDareStatuses = await prisma.userDareStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userDareStatusWithIdOnly = await prisma.userDareStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserDareStatusFindManyArgs>(args?: SelectSubset<T, UserDareStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDareStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserDareStatus.
     * @param {UserDareStatusCreateArgs} args - Arguments to create a UserDareStatus.
     * @example
     * // Create one UserDareStatus
     * const UserDareStatus = await prisma.userDareStatus.create({
     *   data: {
     *     // ... data to create a UserDareStatus
     *   }
     * })
     * 
     */
    create<T extends UserDareStatusCreateArgs>(args: SelectSubset<T, UserDareStatusCreateArgs<ExtArgs>>): Prisma__UserDareStatusClient<$Result.GetResult<Prisma.$UserDareStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserDareStatuses.
     * @param {UserDareStatusCreateManyArgs} args - Arguments to create many UserDareStatuses.
     * @example
     * // Create many UserDareStatuses
     * const userDareStatus = await prisma.userDareStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserDareStatusCreateManyArgs>(args?: SelectSubset<T, UserDareStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserDareStatuses and returns the data saved in the database.
     * @param {UserDareStatusCreateManyAndReturnArgs} args - Arguments to create many UserDareStatuses.
     * @example
     * // Create many UserDareStatuses
     * const userDareStatus = await prisma.userDareStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserDareStatuses and only return the `id`
     * const userDareStatusWithIdOnly = await prisma.userDareStatus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserDareStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, UserDareStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDareStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserDareStatus.
     * @param {UserDareStatusDeleteArgs} args - Arguments to delete one UserDareStatus.
     * @example
     * // Delete one UserDareStatus
     * const UserDareStatus = await prisma.userDareStatus.delete({
     *   where: {
     *     // ... filter to delete one UserDareStatus
     *   }
     * })
     * 
     */
    delete<T extends UserDareStatusDeleteArgs>(args: SelectSubset<T, UserDareStatusDeleteArgs<ExtArgs>>): Prisma__UserDareStatusClient<$Result.GetResult<Prisma.$UserDareStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserDareStatus.
     * @param {UserDareStatusUpdateArgs} args - Arguments to update one UserDareStatus.
     * @example
     * // Update one UserDareStatus
     * const userDareStatus = await prisma.userDareStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserDareStatusUpdateArgs>(args: SelectSubset<T, UserDareStatusUpdateArgs<ExtArgs>>): Prisma__UserDareStatusClient<$Result.GetResult<Prisma.$UserDareStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserDareStatuses.
     * @param {UserDareStatusDeleteManyArgs} args - Arguments to filter UserDareStatuses to delete.
     * @example
     * // Delete a few UserDareStatuses
     * const { count } = await prisma.userDareStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDareStatusDeleteManyArgs>(args?: SelectSubset<T, UserDareStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDareStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDareStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserDareStatuses
     * const userDareStatus = await prisma.userDareStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserDareStatusUpdateManyArgs>(args: SelectSubset<T, UserDareStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDareStatuses and returns the data updated in the database.
     * @param {UserDareStatusUpdateManyAndReturnArgs} args - Arguments to update many UserDareStatuses.
     * @example
     * // Update many UserDareStatuses
     * const userDareStatus = await prisma.userDareStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserDareStatuses and only return the `id`
     * const userDareStatusWithIdOnly = await prisma.userDareStatus.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserDareStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, UserDareStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDareStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserDareStatus.
     * @param {UserDareStatusUpsertArgs} args - Arguments to update or create a UserDareStatus.
     * @example
     * // Update or create a UserDareStatus
     * const userDareStatus = await prisma.userDareStatus.upsert({
     *   create: {
     *     // ... data to create a UserDareStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserDareStatus we want to update
     *   }
     * })
     */
    upsert<T extends UserDareStatusUpsertArgs>(args: SelectSubset<T, UserDareStatusUpsertArgs<ExtArgs>>): Prisma__UserDareStatusClient<$Result.GetResult<Prisma.$UserDareStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserDareStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDareStatusCountArgs} args - Arguments to filter UserDareStatuses to count.
     * @example
     * // Count the number of UserDareStatuses
     * const count = await prisma.userDareStatus.count({
     *   where: {
     *     // ... the filter for the UserDareStatuses we want to count
     *   }
     * })
    **/
    count<T extends UserDareStatusCountArgs>(
      args?: Subset<T, UserDareStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserDareStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserDareStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDareStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserDareStatusAggregateArgs>(args: Subset<T, UserDareStatusAggregateArgs>): Prisma.PrismaPromise<GetUserDareStatusAggregateType<T>>

    /**
     * Group by UserDareStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDareStatusGroupByArgs} args - Group by arguments.
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
      T extends UserDareStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserDareStatusGroupByArgs['orderBy'] }
        : { orderBy?: UserDareStatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserDareStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserDareStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserDareStatus model
   */
  readonly fields: UserDareStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserDareStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserDareStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserDareStatus model
   */
  interface UserDareStatusFieldRefs {
    readonly id: FieldRef<"UserDareStatus", 'String'>
    readonly userId: FieldRef<"UserDareStatus", 'String'>
    readonly companionId: FieldRef<"UserDareStatus", 'String'>
    readonly dareId: FieldRef<"UserDareStatus", 'String'>
    readonly status: FieldRef<"UserDareStatus", 'String'>
    readonly completedAt: FieldRef<"UserDareStatus", 'String'>
    readonly createdAt: FieldRef<"UserDareStatus", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserDareStatus findUnique
   */
  export type UserDareStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDareStatus
     */
    select?: UserDareStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDareStatus
     */
    omit?: UserDareStatusOmit<ExtArgs> | null
    /**
     * Filter, which UserDareStatus to fetch.
     */
    where: UserDareStatusWhereUniqueInput
  }

  /**
   * UserDareStatus findUniqueOrThrow
   */
  export type UserDareStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDareStatus
     */
    select?: UserDareStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDareStatus
     */
    omit?: UserDareStatusOmit<ExtArgs> | null
    /**
     * Filter, which UserDareStatus to fetch.
     */
    where: UserDareStatusWhereUniqueInput
  }

  /**
   * UserDareStatus findFirst
   */
  export type UserDareStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDareStatus
     */
    select?: UserDareStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDareStatus
     */
    omit?: UserDareStatusOmit<ExtArgs> | null
    /**
     * Filter, which UserDareStatus to fetch.
     */
    where?: UserDareStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDareStatuses to fetch.
     */
    orderBy?: UserDareStatusOrderByWithRelationInput | UserDareStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDareStatuses.
     */
    cursor?: UserDareStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDareStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDareStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDareStatuses.
     */
    distinct?: UserDareStatusScalarFieldEnum | UserDareStatusScalarFieldEnum[]
  }

  /**
   * UserDareStatus findFirstOrThrow
   */
  export type UserDareStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDareStatus
     */
    select?: UserDareStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDareStatus
     */
    omit?: UserDareStatusOmit<ExtArgs> | null
    /**
     * Filter, which UserDareStatus to fetch.
     */
    where?: UserDareStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDareStatuses to fetch.
     */
    orderBy?: UserDareStatusOrderByWithRelationInput | UserDareStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDareStatuses.
     */
    cursor?: UserDareStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDareStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDareStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDareStatuses.
     */
    distinct?: UserDareStatusScalarFieldEnum | UserDareStatusScalarFieldEnum[]
  }

  /**
   * UserDareStatus findMany
   */
  export type UserDareStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDareStatus
     */
    select?: UserDareStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDareStatus
     */
    omit?: UserDareStatusOmit<ExtArgs> | null
    /**
     * Filter, which UserDareStatuses to fetch.
     */
    where?: UserDareStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDareStatuses to fetch.
     */
    orderBy?: UserDareStatusOrderByWithRelationInput | UserDareStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserDareStatuses.
     */
    cursor?: UserDareStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDareStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDareStatuses.
     */
    skip?: number
    distinct?: UserDareStatusScalarFieldEnum | UserDareStatusScalarFieldEnum[]
  }

  /**
   * UserDareStatus create
   */
  export type UserDareStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDareStatus
     */
    select?: UserDareStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDareStatus
     */
    omit?: UserDareStatusOmit<ExtArgs> | null
    /**
     * The data needed to create a UserDareStatus.
     */
    data: XOR<UserDareStatusCreateInput, UserDareStatusUncheckedCreateInput>
  }

  /**
   * UserDareStatus createMany
   */
  export type UserDareStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserDareStatuses.
     */
    data: UserDareStatusCreateManyInput | UserDareStatusCreateManyInput[]
  }

  /**
   * UserDareStatus createManyAndReturn
   */
  export type UserDareStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDareStatus
     */
    select?: UserDareStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDareStatus
     */
    omit?: UserDareStatusOmit<ExtArgs> | null
    /**
     * The data used to create many UserDareStatuses.
     */
    data: UserDareStatusCreateManyInput | UserDareStatusCreateManyInput[]
  }

  /**
   * UserDareStatus update
   */
  export type UserDareStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDareStatus
     */
    select?: UserDareStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDareStatus
     */
    omit?: UserDareStatusOmit<ExtArgs> | null
    /**
     * The data needed to update a UserDareStatus.
     */
    data: XOR<UserDareStatusUpdateInput, UserDareStatusUncheckedUpdateInput>
    /**
     * Choose, which UserDareStatus to update.
     */
    where: UserDareStatusWhereUniqueInput
  }

  /**
   * UserDareStatus updateMany
   */
  export type UserDareStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserDareStatuses.
     */
    data: XOR<UserDareStatusUpdateManyMutationInput, UserDareStatusUncheckedUpdateManyInput>
    /**
     * Filter which UserDareStatuses to update
     */
    where?: UserDareStatusWhereInput
    /**
     * Limit how many UserDareStatuses to update.
     */
    limit?: number
  }

  /**
   * UserDareStatus updateManyAndReturn
   */
  export type UserDareStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDareStatus
     */
    select?: UserDareStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDareStatus
     */
    omit?: UserDareStatusOmit<ExtArgs> | null
    /**
     * The data used to update UserDareStatuses.
     */
    data: XOR<UserDareStatusUpdateManyMutationInput, UserDareStatusUncheckedUpdateManyInput>
    /**
     * Filter which UserDareStatuses to update
     */
    where?: UserDareStatusWhereInput
    /**
     * Limit how many UserDareStatuses to update.
     */
    limit?: number
  }

  /**
   * UserDareStatus upsert
   */
  export type UserDareStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDareStatus
     */
    select?: UserDareStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDareStatus
     */
    omit?: UserDareStatusOmit<ExtArgs> | null
    /**
     * The filter to search for the UserDareStatus to update in case it exists.
     */
    where: UserDareStatusWhereUniqueInput
    /**
     * In case the UserDareStatus found by the `where` argument doesn't exist, create a new UserDareStatus with this data.
     */
    create: XOR<UserDareStatusCreateInput, UserDareStatusUncheckedCreateInput>
    /**
     * In case the UserDareStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserDareStatusUpdateInput, UserDareStatusUncheckedUpdateInput>
  }

  /**
   * UserDareStatus delete
   */
  export type UserDareStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDareStatus
     */
    select?: UserDareStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDareStatus
     */
    omit?: UserDareStatusOmit<ExtArgs> | null
    /**
     * Filter which UserDareStatus to delete.
     */
    where: UserDareStatusWhereUniqueInput
  }

  /**
   * UserDareStatus deleteMany
   */
  export type UserDareStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDareStatuses to delete
     */
    where?: UserDareStatusWhereInput
    /**
     * Limit how many UserDareStatuses to delete.
     */
    limit?: number
  }

  /**
   * UserDareStatus without action
   */
  export type UserDareStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDareStatus
     */
    select?: UserDareStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDareStatus
     */
    omit?: UserDareStatusOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
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
    experienceDatesStart: 'experienceDatesStart',
    experienceDatesEnd: 'experienceDatesEnd',
    dateInputType: 'dateInputType',
    duration: 'duration',
    experiencingWith: 'experiencingWith',
    adults: 'adults',
    children: 'children',
    ageGroups: 'ageGroups',
    budget: 'budget',
    budgetCurrency: 'budgetCurrency',
    experienceStyle: 'experienceStyle',
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


  export const PlanTaskScalarFieldEnum: {
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

  export type PlanTaskScalarFieldEnum = (typeof PlanTaskScalarFieldEnum)[keyof typeof PlanTaskScalarFieldEnum]


  export const PaymentMandateScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tripPlanId: 'tripPlanId',
    limitAmount: 'limitAmount',
    currency: 'currency',
    signature: 'signature',
    publicKey: 'publicKey',
    scope: 'scope',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentMandateScalarFieldEnum = (typeof PaymentMandateScalarFieldEnum)[keyof typeof PaymentMandateScalarFieldEnum]


  export const TransactionSplitScalarFieldEnum: {
    id: 'id',
    tripPlanId: 'tripPlanId',
    totalAmount: 'totalAmount',
    currency: 'currency',
    user1Id: 'user1Id',
    user2Id: 'user2Id',
    user1Amount: 'user1Amount',
    user2Amount: 'user2Amount',
    status: 'status',
    escrowStatus: 'escrowStatus',
    splitMode: 'splitMode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransactionSplitScalarFieldEnum = (typeof TransactionSplitScalarFieldEnum)[keyof typeof TransactionSplitScalarFieldEnum]


  export const UserRatingScalarFieldEnum: {
    id: 'id',
    raterId: 'raterId',
    rateeId: 'rateeId',
    rating: 'rating',
    tags: 'tags',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type UserRatingScalarFieldEnum = (typeof UserRatingScalarFieldEnum)[keyof typeof UserRatingScalarFieldEnum]


  export const LocationDareScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    latitude: 'latitude',
    longitude: 'longitude',
    radiusMeters: 'radiusMeters',
    pointsReward: 'pointsReward',
    targetCity: 'targetCity',
    isSponsored: 'isSponsored',
    sponsorName: 'sponsorName'
  };

  export type LocationDareScalarFieldEnum = (typeof LocationDareScalarFieldEnum)[keyof typeof LocationDareScalarFieldEnum]


  export const UserDareStatusScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    companionId: 'companionId',
    dareId: 'dareId',
    status: 'status',
    completedAt: 'completedAt',
    createdAt: 'createdAt'
  };

  export type UserDareStatusScalarFieldEnum = (typeof UserDareStatusScalarFieldEnum)[keyof typeof UserDareStatusScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
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
    startedAt?: StringNullableFilter<"TripPlanStatus"> | string | null
    completedAt?: StringNullableFilter<"TripPlanStatus"> | string | null
    createdAt?: StringNullableFilter<"TripPlanStatus"> | string | null
    updatedAt?: StringNullableFilter<"TripPlanStatus"> | string | null
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
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
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
    startedAt?: StringNullableFilter<"TripPlanStatus"> | string | null
    completedAt?: StringNullableFilter<"TripPlanStatus"> | string | null
    createdAt?: StringNullableFilter<"TripPlanStatus"> | string | null
    updatedAt?: StringNullableFilter<"TripPlanStatus"> | string | null
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
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
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
    startedAt?: StringNullableWithAggregatesFilter<"TripPlanStatus"> | string | null
    completedAt?: StringNullableWithAggregatesFilter<"TripPlanStatus"> | string | null
    createdAt?: StringNullableWithAggregatesFilter<"TripPlanStatus"> | string | null
    updatedAt?: StringNullableWithAggregatesFilter<"TripPlanStatus"> | string | null
  }

  export type TripPlanOutputWhereInput = {
    AND?: TripPlanOutputWhereInput | TripPlanOutputWhereInput[]
    OR?: TripPlanOutputWhereInput[]
    NOT?: TripPlanOutputWhereInput | TripPlanOutputWhereInput[]
    id?: StringFilter<"TripPlanOutput"> | string
    tripPlanId?: StringFilter<"TripPlanOutput"> | string
    itinerary?: StringFilter<"TripPlanOutput"> | string
    summary?: StringNullableFilter<"TripPlanOutput"> | string | null
    createdAt?: StringNullableFilter<"TripPlanOutput"> | string | null
    updatedAt?: StringNullableFilter<"TripPlanOutput"> | string | null
    tripPlan?: XOR<TripPlanScalarRelationFilter, TripPlanWhereInput>
  }

  export type TripPlanOutputOrderByWithRelationInput = {
    id?: SortOrder
    tripPlanId?: SortOrder
    itinerary?: SortOrder
    summary?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
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
    createdAt?: StringNullableFilter<"TripPlanOutput"> | string | null
    updatedAt?: StringNullableFilter<"TripPlanOutput"> | string | null
    tripPlan?: XOR<TripPlanScalarRelationFilter, TripPlanWhereInput>
  }, "id" | "tripPlanId">

  export type TripPlanOutputOrderByWithAggregationInput = {
    id?: SortOrder
    tripPlanId?: SortOrder
    itinerary?: SortOrder
    summary?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
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
    createdAt?: StringNullableWithAggregatesFilter<"TripPlanOutput"> | string | null
    updatedAt?: StringNullableWithAggregatesFilter<"TripPlanOutput"> | string | null
  }

  export type TripPlanWhereInput = {
    AND?: TripPlanWhereInput | TripPlanWhereInput[]
    OR?: TripPlanWhereInput[]
    NOT?: TripPlanWhereInput | TripPlanWhereInput[]
    id?: StringFilter<"TripPlan"> | string
    name?: StringFilter<"TripPlan"> | string
    destination?: StringFilter<"TripPlan"> | string
    startingLocation?: StringFilter<"TripPlan"> | string
    experienceDatesStart?: StringFilter<"TripPlan"> | string
    experienceDatesEnd?: StringNullableFilter<"TripPlan"> | string | null
    dateInputType?: StringFilter<"TripPlan"> | string
    duration?: IntNullableFilter<"TripPlan"> | number | null
    experiencingWith?: StringFilter<"TripPlan"> | string
    adults?: IntFilter<"TripPlan"> | number
    children?: IntFilter<"TripPlan"> | number
    ageGroups?: StringFilter<"TripPlan"> | string
    budget?: FloatFilter<"TripPlan"> | number
    budgetCurrency?: StringFilter<"TripPlan"> | string
    experienceStyle?: StringFilter<"TripPlan"> | string
    budgetFlexible?: BoolFilter<"TripPlan"> | boolean
    vibes?: StringFilter<"TripPlan"> | string
    priorities?: StringFilter<"TripPlan"> | string
    interests?: StringNullableFilter<"TripPlan"> | string | null
    rooms?: IntFilter<"TripPlan"> | number
    pace?: StringFilter<"TripPlan"> | string
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
    experienceDatesStart?: SortOrder
    experienceDatesEnd?: SortOrderInput | SortOrder
    dateInputType?: SortOrder
    duration?: SortOrderInput | SortOrder
    experiencingWith?: SortOrder
    adults?: SortOrder
    children?: SortOrder
    ageGroups?: SortOrder
    budget?: SortOrder
    budgetCurrency?: SortOrder
    experienceStyle?: SortOrder
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
    experienceDatesStart?: StringFilter<"TripPlan"> | string
    experienceDatesEnd?: StringNullableFilter<"TripPlan"> | string | null
    dateInputType?: StringFilter<"TripPlan"> | string
    duration?: IntNullableFilter<"TripPlan"> | number | null
    experiencingWith?: StringFilter<"TripPlan"> | string
    adults?: IntFilter<"TripPlan"> | number
    children?: IntFilter<"TripPlan"> | number
    ageGroups?: StringFilter<"TripPlan"> | string
    budget?: FloatFilter<"TripPlan"> | number
    budgetCurrency?: StringFilter<"TripPlan"> | string
    experienceStyle?: StringFilter<"TripPlan"> | string
    budgetFlexible?: BoolFilter<"TripPlan"> | boolean
    vibes?: StringFilter<"TripPlan"> | string
    priorities?: StringFilter<"TripPlan"> | string
    interests?: StringNullableFilter<"TripPlan"> | string | null
    rooms?: IntFilter<"TripPlan"> | number
    pace?: StringFilter<"TripPlan"> | string
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
    experienceDatesStart?: SortOrder
    experienceDatesEnd?: SortOrderInput | SortOrder
    dateInputType?: SortOrder
    duration?: SortOrderInput | SortOrder
    experiencingWith?: SortOrder
    adults?: SortOrder
    children?: SortOrder
    ageGroups?: SortOrder
    budget?: SortOrder
    budgetCurrency?: SortOrder
    experienceStyle?: SortOrder
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
    experienceDatesStart?: StringWithAggregatesFilter<"TripPlan"> | string
    experienceDatesEnd?: StringNullableWithAggregatesFilter<"TripPlan"> | string | null
    dateInputType?: StringWithAggregatesFilter<"TripPlan"> | string
    duration?: IntNullableWithAggregatesFilter<"TripPlan"> | number | null
    experiencingWith?: StringWithAggregatesFilter<"TripPlan"> | string
    adults?: IntWithAggregatesFilter<"TripPlan"> | number
    children?: IntWithAggregatesFilter<"TripPlan"> | number
    ageGroups?: StringWithAggregatesFilter<"TripPlan"> | string
    budget?: FloatWithAggregatesFilter<"TripPlan"> | number
    budgetCurrency?: StringWithAggregatesFilter<"TripPlan"> | string
    experienceStyle?: StringWithAggregatesFilter<"TripPlan"> | string
    budgetFlexible?: BoolWithAggregatesFilter<"TripPlan"> | boolean
    vibes?: StringWithAggregatesFilter<"TripPlan"> | string
    priorities?: StringWithAggregatesFilter<"TripPlan"> | string
    interests?: StringNullableWithAggregatesFilter<"TripPlan"> | string | null
    rooms?: IntWithAggregatesFilter<"TripPlan"> | number
    pace?: StringWithAggregatesFilter<"TripPlan"> | string
    beenThereBefore?: StringNullableWithAggregatesFilter<"TripPlan"> | string | null
    lovedPlaces?: StringNullableWithAggregatesFilter<"TripPlan"> | string | null
    additionalInfo?: StringNullableWithAggregatesFilter<"TripPlan"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TripPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TripPlan"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"TripPlan"> | string | null
  }

  export type PlanTaskWhereInput = {
    AND?: PlanTaskWhereInput | PlanTaskWhereInput[]
    OR?: PlanTaskWhereInput[]
    NOT?: PlanTaskWhereInput | PlanTaskWhereInput[]
    id?: IntFilter<"PlanTask"> | number
    trip_plan_id?: StringFilter<"PlanTask"> | string
    task_type?: StringFilter<"PlanTask"> | string
    status?: StringFilter<"PlanTask"> | string
    input_data?: StringFilter<"PlanTask"> | string
    output_data?: StringNullableFilter<"PlanTask"> | string | null
    error_message?: StringNullableFilter<"PlanTask"> | string | null
    created_at?: StringNullableFilter<"PlanTask"> | string | null
    updated_at?: StringNullableFilter<"PlanTask"> | string | null
  }

  export type PlanTaskOrderByWithRelationInput = {
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

  export type PlanTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlanTaskWhereInput | PlanTaskWhereInput[]
    OR?: PlanTaskWhereInput[]
    NOT?: PlanTaskWhereInput | PlanTaskWhereInput[]
    trip_plan_id?: StringFilter<"PlanTask"> | string
    task_type?: StringFilter<"PlanTask"> | string
    status?: StringFilter<"PlanTask"> | string
    input_data?: StringFilter<"PlanTask"> | string
    output_data?: StringNullableFilter<"PlanTask"> | string | null
    error_message?: StringNullableFilter<"PlanTask"> | string | null
    created_at?: StringNullableFilter<"PlanTask"> | string | null
    updated_at?: StringNullableFilter<"PlanTask"> | string | null
  }, "id">

  export type PlanTaskOrderByWithAggregationInput = {
    id?: SortOrder
    trip_plan_id?: SortOrder
    task_type?: SortOrder
    status?: SortOrder
    input_data?: SortOrder
    output_data?: SortOrderInput | SortOrder
    error_message?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: PlanTaskCountOrderByAggregateInput
    _avg?: PlanTaskAvgOrderByAggregateInput
    _max?: PlanTaskMaxOrderByAggregateInput
    _min?: PlanTaskMinOrderByAggregateInput
    _sum?: PlanTaskSumOrderByAggregateInput
  }

  export type PlanTaskScalarWhereWithAggregatesInput = {
    AND?: PlanTaskScalarWhereWithAggregatesInput | PlanTaskScalarWhereWithAggregatesInput[]
    OR?: PlanTaskScalarWhereWithAggregatesInput[]
    NOT?: PlanTaskScalarWhereWithAggregatesInput | PlanTaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PlanTask"> | number
    trip_plan_id?: StringWithAggregatesFilter<"PlanTask"> | string
    task_type?: StringWithAggregatesFilter<"PlanTask"> | string
    status?: StringWithAggregatesFilter<"PlanTask"> | string
    input_data?: StringWithAggregatesFilter<"PlanTask"> | string
    output_data?: StringNullableWithAggregatesFilter<"PlanTask"> | string | null
    error_message?: StringNullableWithAggregatesFilter<"PlanTask"> | string | null
    created_at?: StringNullableWithAggregatesFilter<"PlanTask"> | string | null
    updated_at?: StringNullableWithAggregatesFilter<"PlanTask"> | string | null
  }

  export type PaymentMandateWhereInput = {
    AND?: PaymentMandateWhereInput | PaymentMandateWhereInput[]
    OR?: PaymentMandateWhereInput[]
    NOT?: PaymentMandateWhereInput | PaymentMandateWhereInput[]
    id?: StringFilter<"PaymentMandate"> | string
    userId?: StringFilter<"PaymentMandate"> | string
    tripPlanId?: StringFilter<"PaymentMandate"> | string
    limitAmount?: FloatFilter<"PaymentMandate"> | number
    currency?: StringFilter<"PaymentMandate"> | string
    signature?: StringFilter<"PaymentMandate"> | string
    publicKey?: StringFilter<"PaymentMandate"> | string
    scope?: StringFilter<"PaymentMandate"> | string
    status?: StringFilter<"PaymentMandate"> | string
    createdAt?: StringNullableFilter<"PaymentMandate"> | string | null
    updatedAt?: StringNullableFilter<"PaymentMandate"> | string | null
  }

  export type PaymentMandateOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tripPlanId?: SortOrder
    limitAmount?: SortOrder
    currency?: SortOrder
    signature?: SortOrder
    publicKey?: SortOrder
    scope?: SortOrder
    status?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type PaymentMandateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentMandateWhereInput | PaymentMandateWhereInput[]
    OR?: PaymentMandateWhereInput[]
    NOT?: PaymentMandateWhereInput | PaymentMandateWhereInput[]
    userId?: StringFilter<"PaymentMandate"> | string
    tripPlanId?: StringFilter<"PaymentMandate"> | string
    limitAmount?: FloatFilter<"PaymentMandate"> | number
    currency?: StringFilter<"PaymentMandate"> | string
    signature?: StringFilter<"PaymentMandate"> | string
    publicKey?: StringFilter<"PaymentMandate"> | string
    scope?: StringFilter<"PaymentMandate"> | string
    status?: StringFilter<"PaymentMandate"> | string
    createdAt?: StringNullableFilter<"PaymentMandate"> | string | null
    updatedAt?: StringNullableFilter<"PaymentMandate"> | string | null
  }, "id">

  export type PaymentMandateOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tripPlanId?: SortOrder
    limitAmount?: SortOrder
    currency?: SortOrder
    signature?: SortOrder
    publicKey?: SortOrder
    scope?: SortOrder
    status?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: PaymentMandateCountOrderByAggregateInput
    _avg?: PaymentMandateAvgOrderByAggregateInput
    _max?: PaymentMandateMaxOrderByAggregateInput
    _min?: PaymentMandateMinOrderByAggregateInput
    _sum?: PaymentMandateSumOrderByAggregateInput
  }

  export type PaymentMandateScalarWhereWithAggregatesInput = {
    AND?: PaymentMandateScalarWhereWithAggregatesInput | PaymentMandateScalarWhereWithAggregatesInput[]
    OR?: PaymentMandateScalarWhereWithAggregatesInput[]
    NOT?: PaymentMandateScalarWhereWithAggregatesInput | PaymentMandateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentMandate"> | string
    userId?: StringWithAggregatesFilter<"PaymentMandate"> | string
    tripPlanId?: StringWithAggregatesFilter<"PaymentMandate"> | string
    limitAmount?: FloatWithAggregatesFilter<"PaymentMandate"> | number
    currency?: StringWithAggregatesFilter<"PaymentMandate"> | string
    signature?: StringWithAggregatesFilter<"PaymentMandate"> | string
    publicKey?: StringWithAggregatesFilter<"PaymentMandate"> | string
    scope?: StringWithAggregatesFilter<"PaymentMandate"> | string
    status?: StringWithAggregatesFilter<"PaymentMandate"> | string
    createdAt?: StringNullableWithAggregatesFilter<"PaymentMandate"> | string | null
    updatedAt?: StringNullableWithAggregatesFilter<"PaymentMandate"> | string | null
  }

  export type TransactionSplitWhereInput = {
    AND?: TransactionSplitWhereInput | TransactionSplitWhereInput[]
    OR?: TransactionSplitWhereInput[]
    NOT?: TransactionSplitWhereInput | TransactionSplitWhereInput[]
    id?: StringFilter<"TransactionSplit"> | string
    tripPlanId?: StringFilter<"TransactionSplit"> | string
    totalAmount?: FloatFilter<"TransactionSplit"> | number
    currency?: StringFilter<"TransactionSplit"> | string
    user1Id?: StringFilter<"TransactionSplit"> | string
    user2Id?: StringFilter<"TransactionSplit"> | string
    user1Amount?: FloatFilter<"TransactionSplit"> | number
    user2Amount?: FloatFilter<"TransactionSplit"> | number
    status?: StringFilter<"TransactionSplit"> | string
    escrowStatus?: StringFilter<"TransactionSplit"> | string
    splitMode?: StringFilter<"TransactionSplit"> | string
    createdAt?: StringNullableFilter<"TransactionSplit"> | string | null
    updatedAt?: StringNullableFilter<"TransactionSplit"> | string | null
  }

  export type TransactionSplitOrderByWithRelationInput = {
    id?: SortOrder
    tripPlanId?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    user1Amount?: SortOrder
    user2Amount?: SortOrder
    status?: SortOrder
    escrowStatus?: SortOrder
    splitMode?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type TransactionSplitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionSplitWhereInput | TransactionSplitWhereInput[]
    OR?: TransactionSplitWhereInput[]
    NOT?: TransactionSplitWhereInput | TransactionSplitWhereInput[]
    tripPlanId?: StringFilter<"TransactionSplit"> | string
    totalAmount?: FloatFilter<"TransactionSplit"> | number
    currency?: StringFilter<"TransactionSplit"> | string
    user1Id?: StringFilter<"TransactionSplit"> | string
    user2Id?: StringFilter<"TransactionSplit"> | string
    user1Amount?: FloatFilter<"TransactionSplit"> | number
    user2Amount?: FloatFilter<"TransactionSplit"> | number
    status?: StringFilter<"TransactionSplit"> | string
    escrowStatus?: StringFilter<"TransactionSplit"> | string
    splitMode?: StringFilter<"TransactionSplit"> | string
    createdAt?: StringNullableFilter<"TransactionSplit"> | string | null
    updatedAt?: StringNullableFilter<"TransactionSplit"> | string | null
  }, "id">

  export type TransactionSplitOrderByWithAggregationInput = {
    id?: SortOrder
    tripPlanId?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    user1Amount?: SortOrder
    user2Amount?: SortOrder
    status?: SortOrder
    escrowStatus?: SortOrder
    splitMode?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: TransactionSplitCountOrderByAggregateInput
    _avg?: TransactionSplitAvgOrderByAggregateInput
    _max?: TransactionSplitMaxOrderByAggregateInput
    _min?: TransactionSplitMinOrderByAggregateInput
    _sum?: TransactionSplitSumOrderByAggregateInput
  }

  export type TransactionSplitScalarWhereWithAggregatesInput = {
    AND?: TransactionSplitScalarWhereWithAggregatesInput | TransactionSplitScalarWhereWithAggregatesInput[]
    OR?: TransactionSplitScalarWhereWithAggregatesInput[]
    NOT?: TransactionSplitScalarWhereWithAggregatesInput | TransactionSplitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TransactionSplit"> | string
    tripPlanId?: StringWithAggregatesFilter<"TransactionSplit"> | string
    totalAmount?: FloatWithAggregatesFilter<"TransactionSplit"> | number
    currency?: StringWithAggregatesFilter<"TransactionSplit"> | string
    user1Id?: StringWithAggregatesFilter<"TransactionSplit"> | string
    user2Id?: StringWithAggregatesFilter<"TransactionSplit"> | string
    user1Amount?: FloatWithAggregatesFilter<"TransactionSplit"> | number
    user2Amount?: FloatWithAggregatesFilter<"TransactionSplit"> | number
    status?: StringWithAggregatesFilter<"TransactionSplit"> | string
    escrowStatus?: StringWithAggregatesFilter<"TransactionSplit"> | string
    splitMode?: StringWithAggregatesFilter<"TransactionSplit"> | string
    createdAt?: StringNullableWithAggregatesFilter<"TransactionSplit"> | string | null
    updatedAt?: StringNullableWithAggregatesFilter<"TransactionSplit"> | string | null
  }

  export type UserRatingWhereInput = {
    AND?: UserRatingWhereInput | UserRatingWhereInput[]
    OR?: UserRatingWhereInput[]
    NOT?: UserRatingWhereInput | UserRatingWhereInput[]
    id?: StringFilter<"UserRating"> | string
    raterId?: StringFilter<"UserRating"> | string
    rateeId?: StringFilter<"UserRating"> | string
    rating?: IntFilter<"UserRating"> | number
    tags?: StringFilter<"UserRating"> | string
    comment?: StringNullableFilter<"UserRating"> | string | null
    createdAt?: StringNullableFilter<"UserRating"> | string | null
  }

  export type UserRatingOrderByWithRelationInput = {
    id?: SortOrder
    raterId?: SortOrder
    rateeId?: SortOrder
    rating?: SortOrder
    tags?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
  }

  export type UserRatingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserRatingWhereInput | UserRatingWhereInput[]
    OR?: UserRatingWhereInput[]
    NOT?: UserRatingWhereInput | UserRatingWhereInput[]
    raterId?: StringFilter<"UserRating"> | string
    rateeId?: StringFilter<"UserRating"> | string
    rating?: IntFilter<"UserRating"> | number
    tags?: StringFilter<"UserRating"> | string
    comment?: StringNullableFilter<"UserRating"> | string | null
    createdAt?: StringNullableFilter<"UserRating"> | string | null
  }, "id">

  export type UserRatingOrderByWithAggregationInput = {
    id?: SortOrder
    raterId?: SortOrder
    rateeId?: SortOrder
    rating?: SortOrder
    tags?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: UserRatingCountOrderByAggregateInput
    _avg?: UserRatingAvgOrderByAggregateInput
    _max?: UserRatingMaxOrderByAggregateInput
    _min?: UserRatingMinOrderByAggregateInput
    _sum?: UserRatingSumOrderByAggregateInput
  }

  export type UserRatingScalarWhereWithAggregatesInput = {
    AND?: UserRatingScalarWhereWithAggregatesInput | UserRatingScalarWhereWithAggregatesInput[]
    OR?: UserRatingScalarWhereWithAggregatesInput[]
    NOT?: UserRatingScalarWhereWithAggregatesInput | UserRatingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserRating"> | string
    raterId?: StringWithAggregatesFilter<"UserRating"> | string
    rateeId?: StringWithAggregatesFilter<"UserRating"> | string
    rating?: IntWithAggregatesFilter<"UserRating"> | number
    tags?: StringWithAggregatesFilter<"UserRating"> | string
    comment?: StringNullableWithAggregatesFilter<"UserRating"> | string | null
    createdAt?: StringNullableWithAggregatesFilter<"UserRating"> | string | null
  }

  export type LocationDareWhereInput = {
    AND?: LocationDareWhereInput | LocationDareWhereInput[]
    OR?: LocationDareWhereInput[]
    NOT?: LocationDareWhereInput | LocationDareWhereInput[]
    id?: StringFilter<"LocationDare"> | string
    title?: StringFilter<"LocationDare"> | string
    description?: StringFilter<"LocationDare"> | string
    latitude?: FloatFilter<"LocationDare"> | number
    longitude?: FloatFilter<"LocationDare"> | number
    radiusMeters?: FloatFilter<"LocationDare"> | number
    pointsReward?: IntFilter<"LocationDare"> | number
    targetCity?: StringFilter<"LocationDare"> | string
    isSponsored?: BoolFilter<"LocationDare"> | boolean
    sponsorName?: StringNullableFilter<"LocationDare"> | string | null
  }

  export type LocationDareOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radiusMeters?: SortOrder
    pointsReward?: SortOrder
    targetCity?: SortOrder
    isSponsored?: SortOrder
    sponsorName?: SortOrderInput | SortOrder
  }

  export type LocationDareWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LocationDareWhereInput | LocationDareWhereInput[]
    OR?: LocationDareWhereInput[]
    NOT?: LocationDareWhereInput | LocationDareWhereInput[]
    title?: StringFilter<"LocationDare"> | string
    description?: StringFilter<"LocationDare"> | string
    latitude?: FloatFilter<"LocationDare"> | number
    longitude?: FloatFilter<"LocationDare"> | number
    radiusMeters?: FloatFilter<"LocationDare"> | number
    pointsReward?: IntFilter<"LocationDare"> | number
    targetCity?: StringFilter<"LocationDare"> | string
    isSponsored?: BoolFilter<"LocationDare"> | boolean
    sponsorName?: StringNullableFilter<"LocationDare"> | string | null
  }, "id">

  export type LocationDareOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radiusMeters?: SortOrder
    pointsReward?: SortOrder
    targetCity?: SortOrder
    isSponsored?: SortOrder
    sponsorName?: SortOrderInput | SortOrder
    _count?: LocationDareCountOrderByAggregateInput
    _avg?: LocationDareAvgOrderByAggregateInput
    _max?: LocationDareMaxOrderByAggregateInput
    _min?: LocationDareMinOrderByAggregateInput
    _sum?: LocationDareSumOrderByAggregateInput
  }

  export type LocationDareScalarWhereWithAggregatesInput = {
    AND?: LocationDareScalarWhereWithAggregatesInput | LocationDareScalarWhereWithAggregatesInput[]
    OR?: LocationDareScalarWhereWithAggregatesInput[]
    NOT?: LocationDareScalarWhereWithAggregatesInput | LocationDareScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LocationDare"> | string
    title?: StringWithAggregatesFilter<"LocationDare"> | string
    description?: StringWithAggregatesFilter<"LocationDare"> | string
    latitude?: FloatWithAggregatesFilter<"LocationDare"> | number
    longitude?: FloatWithAggregatesFilter<"LocationDare"> | number
    radiusMeters?: FloatWithAggregatesFilter<"LocationDare"> | number
    pointsReward?: IntWithAggregatesFilter<"LocationDare"> | number
    targetCity?: StringWithAggregatesFilter<"LocationDare"> | string
    isSponsored?: BoolWithAggregatesFilter<"LocationDare"> | boolean
    sponsorName?: StringNullableWithAggregatesFilter<"LocationDare"> | string | null
  }

  export type UserDareStatusWhereInput = {
    AND?: UserDareStatusWhereInput | UserDareStatusWhereInput[]
    OR?: UserDareStatusWhereInput[]
    NOT?: UserDareStatusWhereInput | UserDareStatusWhereInput[]
    id?: StringFilter<"UserDareStatus"> | string
    userId?: StringFilter<"UserDareStatus"> | string
    companionId?: StringNullableFilter<"UserDareStatus"> | string | null
    dareId?: StringFilter<"UserDareStatus"> | string
    status?: StringFilter<"UserDareStatus"> | string
    completedAt?: StringNullableFilter<"UserDareStatus"> | string | null
    createdAt?: StringNullableFilter<"UserDareStatus"> | string | null
  }

  export type UserDareStatusOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    companionId?: SortOrderInput | SortOrder
    dareId?: SortOrder
    status?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
  }

  export type UserDareStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserDareStatusWhereInput | UserDareStatusWhereInput[]
    OR?: UserDareStatusWhereInput[]
    NOT?: UserDareStatusWhereInput | UserDareStatusWhereInput[]
    userId?: StringFilter<"UserDareStatus"> | string
    companionId?: StringNullableFilter<"UserDareStatus"> | string | null
    dareId?: StringFilter<"UserDareStatus"> | string
    status?: StringFilter<"UserDareStatus"> | string
    completedAt?: StringNullableFilter<"UserDareStatus"> | string | null
    createdAt?: StringNullableFilter<"UserDareStatus"> | string | null
  }, "id">

  export type UserDareStatusOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    companionId?: SortOrderInput | SortOrder
    dareId?: SortOrder
    status?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: UserDareStatusCountOrderByAggregateInput
    _max?: UserDareStatusMaxOrderByAggregateInput
    _min?: UserDareStatusMinOrderByAggregateInput
  }

  export type UserDareStatusScalarWhereWithAggregatesInput = {
    AND?: UserDareStatusScalarWhereWithAggregatesInput | UserDareStatusScalarWhereWithAggregatesInput[]
    OR?: UserDareStatusScalarWhereWithAggregatesInput[]
    NOT?: UserDareStatusScalarWhereWithAggregatesInput | UserDareStatusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserDareStatus"> | string
    userId?: StringWithAggregatesFilter<"UserDareStatus"> | string
    companionId?: StringNullableWithAggregatesFilter<"UserDareStatus"> | string | null
    dareId?: StringWithAggregatesFilter<"UserDareStatus"> | string
    status?: StringWithAggregatesFilter<"UserDareStatus"> | string
    completedAt?: StringNullableWithAggregatesFilter<"UserDareStatus"> | string | null
    createdAt?: StringNullableWithAggregatesFilter<"UserDareStatus"> | string | null
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
    startedAt?: string | null
    completedAt?: string | null
    createdAt?: string | null
    updatedAt?: string | null
    tripPlan: TripPlanCreateNestedOneWithoutStatusInput
  }

  export type TripPlanStatusUncheckedCreateInput = {
    id?: string
    tripPlanId: string
    status?: string
    currentStep?: string | null
    error?: string | null
    startedAt?: string | null
    completedAt?: string | null
    createdAt?: string | null
    updatedAt?: string | null
  }

  export type TripPlanStatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentStep?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
    tripPlan?: TripPlanUpdateOneRequiredWithoutStatusNestedInput
  }

  export type TripPlanStatusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripPlanId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentStep?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TripPlanStatusCreateManyInput = {
    id?: string
    tripPlanId: string
    status?: string
    currentStep?: string | null
    error?: string | null
    startedAt?: string | null
    completedAt?: string | null
    createdAt?: string | null
    updatedAt?: string | null
  }

  export type TripPlanStatusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentStep?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TripPlanStatusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripPlanId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentStep?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TripPlanOutputCreateInput = {
    id?: string
    itinerary: string
    summary?: string | null
    createdAt?: string | null
    updatedAt?: string | null
    tripPlan: TripPlanCreateNestedOneWithoutOutputInput
  }

  export type TripPlanOutputUncheckedCreateInput = {
    id?: string
    tripPlanId: string
    itinerary: string
    summary?: string | null
    createdAt?: string | null
    updatedAt?: string | null
  }

  export type TripPlanOutputUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itinerary?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
    tripPlan?: TripPlanUpdateOneRequiredWithoutOutputNestedInput
  }

  export type TripPlanOutputUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripPlanId?: StringFieldUpdateOperationsInput | string
    itinerary?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TripPlanOutputCreateManyInput = {
    id?: string
    tripPlanId: string
    itinerary: string
    summary?: string | null
    createdAt?: string | null
    updatedAt?: string | null
  }

  export type TripPlanOutputUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    itinerary?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TripPlanOutputUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripPlanId?: StringFieldUpdateOperationsInput | string
    itinerary?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TripPlanCreateInput = {
    id?: string
    name: string
    destination: string
    startingLocation: string
    experienceDatesStart: string
    experienceDatesEnd?: string | null
    dateInputType?: string
    duration?: number | null
    experiencingWith: string
    adults?: number
    children?: number
    ageGroups?: string
    budget: number
    budgetCurrency?: string
    experienceStyle: string
    budgetFlexible?: boolean
    vibes?: string
    priorities?: string
    interests?: string | null
    rooms?: number
    pace?: string
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
    experienceDatesStart: string
    experienceDatesEnd?: string | null
    dateInputType?: string
    duration?: number | null
    experiencingWith: string
    adults?: number
    children?: number
    ageGroups?: string
    budget: number
    budgetCurrency?: string
    experienceStyle: string
    budgetFlexible?: boolean
    vibes?: string
    priorities?: string
    interests?: string | null
    rooms?: number
    pace?: string
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
    experienceDatesStart?: StringFieldUpdateOperationsInput | string
    experienceDatesEnd?: NullableStringFieldUpdateOperationsInput | string | null
    dateInputType?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    experiencingWith?: StringFieldUpdateOperationsInput | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    ageGroups?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    budgetCurrency?: StringFieldUpdateOperationsInput | string
    experienceStyle?: StringFieldUpdateOperationsInput | string
    budgetFlexible?: BoolFieldUpdateOperationsInput | boolean
    vibes?: StringFieldUpdateOperationsInput | string
    priorities?: StringFieldUpdateOperationsInput | string
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: IntFieldUpdateOperationsInput | number
    pace?: StringFieldUpdateOperationsInput | string
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
    experienceDatesStart?: StringFieldUpdateOperationsInput | string
    experienceDatesEnd?: NullableStringFieldUpdateOperationsInput | string | null
    dateInputType?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    experiencingWith?: StringFieldUpdateOperationsInput | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    ageGroups?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    budgetCurrency?: StringFieldUpdateOperationsInput | string
    experienceStyle?: StringFieldUpdateOperationsInput | string
    budgetFlexible?: BoolFieldUpdateOperationsInput | boolean
    vibes?: StringFieldUpdateOperationsInput | string
    priorities?: StringFieldUpdateOperationsInput | string
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: IntFieldUpdateOperationsInput | number
    pace?: StringFieldUpdateOperationsInput | string
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
    experienceDatesStart: string
    experienceDatesEnd?: string | null
    dateInputType?: string
    duration?: number | null
    experiencingWith: string
    adults?: number
    children?: number
    ageGroups?: string
    budget: number
    budgetCurrency?: string
    experienceStyle: string
    budgetFlexible?: boolean
    vibes?: string
    priorities?: string
    interests?: string | null
    rooms?: number
    pace?: string
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
    experienceDatesStart?: StringFieldUpdateOperationsInput | string
    experienceDatesEnd?: NullableStringFieldUpdateOperationsInput | string | null
    dateInputType?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    experiencingWith?: StringFieldUpdateOperationsInput | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    ageGroups?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    budgetCurrency?: StringFieldUpdateOperationsInput | string
    experienceStyle?: StringFieldUpdateOperationsInput | string
    budgetFlexible?: BoolFieldUpdateOperationsInput | boolean
    vibes?: StringFieldUpdateOperationsInput | string
    priorities?: StringFieldUpdateOperationsInput | string
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: IntFieldUpdateOperationsInput | number
    pace?: StringFieldUpdateOperationsInput | string
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
    experienceDatesStart?: StringFieldUpdateOperationsInput | string
    experienceDatesEnd?: NullableStringFieldUpdateOperationsInput | string | null
    dateInputType?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    experiencingWith?: StringFieldUpdateOperationsInput | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    ageGroups?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    budgetCurrency?: StringFieldUpdateOperationsInput | string
    experienceStyle?: StringFieldUpdateOperationsInput | string
    budgetFlexible?: BoolFieldUpdateOperationsInput | boolean
    vibes?: StringFieldUpdateOperationsInput | string
    priorities?: StringFieldUpdateOperationsInput | string
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: IntFieldUpdateOperationsInput | number
    pace?: StringFieldUpdateOperationsInput | string
    beenThereBefore?: NullableStringFieldUpdateOperationsInput | string | null
    lovedPlaces?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlanTaskCreateInput = {
    trip_plan_id: string
    task_type: string
    status?: string
    input_data?: string
    output_data?: string | null
    error_message?: string | null
    created_at?: string | null
    updated_at?: string | null
  }

  export type PlanTaskUncheckedCreateInput = {
    id?: number
    trip_plan_id: string
    task_type: string
    status?: string
    input_data?: string
    output_data?: string | null
    error_message?: string | null
    created_at?: string | null
    updated_at?: string | null
  }

  export type PlanTaskUpdateInput = {
    trip_plan_id?: StringFieldUpdateOperationsInput | string
    task_type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    input_data?: StringFieldUpdateOperationsInput | string
    output_data?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlanTaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    trip_plan_id?: StringFieldUpdateOperationsInput | string
    task_type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    input_data?: StringFieldUpdateOperationsInput | string
    output_data?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlanTaskCreateManyInput = {
    id?: number
    trip_plan_id: string
    task_type: string
    status?: string
    input_data?: string
    output_data?: string | null
    error_message?: string | null
    created_at?: string | null
    updated_at?: string | null
  }

  export type PlanTaskUpdateManyMutationInput = {
    trip_plan_id?: StringFieldUpdateOperationsInput | string
    task_type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    input_data?: StringFieldUpdateOperationsInput | string
    output_data?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlanTaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    trip_plan_id?: StringFieldUpdateOperationsInput | string
    task_type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    input_data?: StringFieldUpdateOperationsInput | string
    output_data?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentMandateCreateInput = {
    id?: string
    userId: string
    tripPlanId: string
    limitAmount: number
    currency?: string
    signature: string
    publicKey: string
    scope: string
    status?: string
    createdAt?: string | null
    updatedAt?: string | null
  }

  export type PaymentMandateUncheckedCreateInput = {
    id?: string
    userId: string
    tripPlanId: string
    limitAmount: number
    currency?: string
    signature: string
    publicKey: string
    scope: string
    status?: string
    createdAt?: string | null
    updatedAt?: string | null
  }

  export type PaymentMandateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tripPlanId?: StringFieldUpdateOperationsInput | string
    limitAmount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    signature?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentMandateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tripPlanId?: StringFieldUpdateOperationsInput | string
    limitAmount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    signature?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentMandateCreateManyInput = {
    id?: string
    userId: string
    tripPlanId: string
    limitAmount: number
    currency?: string
    signature: string
    publicKey: string
    scope: string
    status?: string
    createdAt?: string | null
    updatedAt?: string | null
  }

  export type PaymentMandateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tripPlanId?: StringFieldUpdateOperationsInput | string
    limitAmount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    signature?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentMandateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tripPlanId?: StringFieldUpdateOperationsInput | string
    limitAmount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    signature?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionSplitCreateInput = {
    id?: string
    tripPlanId: string
    totalAmount: number
    currency?: string
    user1Id: string
    user2Id: string
    user1Amount: number
    user2Amount: number
    status?: string
    escrowStatus?: string
    splitMode?: string
    createdAt?: string | null
    updatedAt?: string | null
  }

  export type TransactionSplitUncheckedCreateInput = {
    id?: string
    tripPlanId: string
    totalAmount: number
    currency?: string
    user1Id: string
    user2Id: string
    user1Amount: number
    user2Amount: number
    status?: string
    escrowStatus?: string
    splitMode?: string
    createdAt?: string | null
    updatedAt?: string | null
  }

  export type TransactionSplitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripPlanId?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    user1Amount?: FloatFieldUpdateOperationsInput | number
    user2Amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    escrowStatus?: StringFieldUpdateOperationsInput | string
    splitMode?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionSplitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripPlanId?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    user1Amount?: FloatFieldUpdateOperationsInput | number
    user2Amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    escrowStatus?: StringFieldUpdateOperationsInput | string
    splitMode?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionSplitCreateManyInput = {
    id?: string
    tripPlanId: string
    totalAmount: number
    currency?: string
    user1Id: string
    user2Id: string
    user1Amount: number
    user2Amount: number
    status?: string
    escrowStatus?: string
    splitMode?: string
    createdAt?: string | null
    updatedAt?: string | null
  }

  export type TransactionSplitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripPlanId?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    user1Amount?: FloatFieldUpdateOperationsInput | number
    user2Amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    escrowStatus?: StringFieldUpdateOperationsInput | string
    splitMode?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionSplitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripPlanId?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    user1Amount?: FloatFieldUpdateOperationsInput | number
    user2Amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    escrowStatus?: StringFieldUpdateOperationsInput | string
    splitMode?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserRatingCreateInput = {
    id?: string
    raterId: string
    rateeId: string
    rating: number
    tags?: string
    comment?: string | null
    createdAt?: string | null
  }

  export type UserRatingUncheckedCreateInput = {
    id?: string
    raterId: string
    rateeId: string
    rating: number
    tags?: string
    comment?: string | null
    createdAt?: string | null
  }

  export type UserRatingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    raterId?: StringFieldUpdateOperationsInput | string
    rateeId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserRatingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    raterId?: StringFieldUpdateOperationsInput | string
    rateeId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserRatingCreateManyInput = {
    id?: string
    raterId: string
    rateeId: string
    rating: number
    tags?: string
    comment?: string | null
    createdAt?: string | null
  }

  export type UserRatingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    raterId?: StringFieldUpdateOperationsInput | string
    rateeId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserRatingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    raterId?: StringFieldUpdateOperationsInput | string
    rateeId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LocationDareCreateInput = {
    id?: string
    title: string
    description: string
    latitude: number
    longitude: number
    radiusMeters?: number
    pointsReward?: number
    targetCity: string
    isSponsored?: boolean
    sponsorName?: string | null
  }

  export type LocationDareUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    latitude: number
    longitude: number
    radiusMeters?: number
    pointsReward?: number
    targetCity: string
    isSponsored?: boolean
    sponsorName?: string | null
  }

  export type LocationDareUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    radiusMeters?: FloatFieldUpdateOperationsInput | number
    pointsReward?: IntFieldUpdateOperationsInput | number
    targetCity?: StringFieldUpdateOperationsInput | string
    isSponsored?: BoolFieldUpdateOperationsInput | boolean
    sponsorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LocationDareUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    radiusMeters?: FloatFieldUpdateOperationsInput | number
    pointsReward?: IntFieldUpdateOperationsInput | number
    targetCity?: StringFieldUpdateOperationsInput | string
    isSponsored?: BoolFieldUpdateOperationsInput | boolean
    sponsorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LocationDareCreateManyInput = {
    id?: string
    title: string
    description: string
    latitude: number
    longitude: number
    radiusMeters?: number
    pointsReward?: number
    targetCity: string
    isSponsored?: boolean
    sponsorName?: string | null
  }

  export type LocationDareUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    radiusMeters?: FloatFieldUpdateOperationsInput | number
    pointsReward?: IntFieldUpdateOperationsInput | number
    targetCity?: StringFieldUpdateOperationsInput | string
    isSponsored?: BoolFieldUpdateOperationsInput | boolean
    sponsorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LocationDareUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    radiusMeters?: FloatFieldUpdateOperationsInput | number
    pointsReward?: IntFieldUpdateOperationsInput | number
    targetCity?: StringFieldUpdateOperationsInput | string
    isSponsored?: BoolFieldUpdateOperationsInput | boolean
    sponsorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserDareStatusCreateInput = {
    id?: string
    userId: string
    companionId?: string | null
    dareId: string
    status?: string
    completedAt?: string | null
    createdAt?: string | null
  }

  export type UserDareStatusUncheckedCreateInput = {
    id?: string
    userId: string
    companionId?: string | null
    dareId: string
    status?: string
    completedAt?: string | null
    createdAt?: string | null
  }

  export type UserDareStatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companionId?: NullableStringFieldUpdateOperationsInput | string | null
    dareId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserDareStatusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companionId?: NullableStringFieldUpdateOperationsInput | string | null
    dareId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserDareStatusCreateManyInput = {
    id?: string
    userId: string
    companionId?: string | null
    dareId: string
    status?: string
    completedAt?: string | null
    createdAt?: string | null
  }

  export type UserDareStatusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companionId?: NullableStringFieldUpdateOperationsInput | string | null
    dareId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserDareStatusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companionId?: NullableStringFieldUpdateOperationsInput | string | null
    dareId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
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
    in?: string[]
    notIn?: string[]
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
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
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
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
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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
    experienceDatesStart?: SortOrder
    experienceDatesEnd?: SortOrder
    dateInputType?: SortOrder
    duration?: SortOrder
    experiencingWith?: SortOrder
    adults?: SortOrder
    children?: SortOrder
    ageGroups?: SortOrder
    budget?: SortOrder
    budgetCurrency?: SortOrder
    experienceStyle?: SortOrder
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
  }

  export type TripPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    destination?: SortOrder
    startingLocation?: SortOrder
    experienceDatesStart?: SortOrder
    experienceDatesEnd?: SortOrder
    dateInputType?: SortOrder
    duration?: SortOrder
    experiencingWith?: SortOrder
    adults?: SortOrder
    children?: SortOrder
    ageGroups?: SortOrder
    budget?: SortOrder
    budgetCurrency?: SortOrder
    experienceStyle?: SortOrder
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

  export type TripPlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    destination?: SortOrder
    startingLocation?: SortOrder
    experienceDatesStart?: SortOrder
    experienceDatesEnd?: SortOrder
    dateInputType?: SortOrder
    duration?: SortOrder
    experiencingWith?: SortOrder
    adults?: SortOrder
    children?: SortOrder
    ageGroups?: SortOrder
    budget?: SortOrder
    budgetCurrency?: SortOrder
    experienceStyle?: SortOrder
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

  export type TripPlanSumOrderByAggregateInput = {
    duration?: SortOrder
    adults?: SortOrder
    children?: SortOrder
    budget?: SortOrder
    rooms?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
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

  export type PlanTaskCountOrderByAggregateInput = {
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

  export type PlanTaskAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlanTaskMaxOrderByAggregateInput = {
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

  export type PlanTaskMinOrderByAggregateInput = {
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

  export type PlanTaskSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PaymentMandateCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripPlanId?: SortOrder
    limitAmount?: SortOrder
    currency?: SortOrder
    signature?: SortOrder
    publicKey?: SortOrder
    scope?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMandateAvgOrderByAggregateInput = {
    limitAmount?: SortOrder
  }

  export type PaymentMandateMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripPlanId?: SortOrder
    limitAmount?: SortOrder
    currency?: SortOrder
    signature?: SortOrder
    publicKey?: SortOrder
    scope?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMandateMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripPlanId?: SortOrder
    limitAmount?: SortOrder
    currency?: SortOrder
    signature?: SortOrder
    publicKey?: SortOrder
    scope?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMandateSumOrderByAggregateInput = {
    limitAmount?: SortOrder
  }

  export type TransactionSplitCountOrderByAggregateInput = {
    id?: SortOrder
    tripPlanId?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    user1Amount?: SortOrder
    user2Amount?: SortOrder
    status?: SortOrder
    escrowStatus?: SortOrder
    splitMode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionSplitAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
    user1Amount?: SortOrder
    user2Amount?: SortOrder
  }

  export type TransactionSplitMaxOrderByAggregateInput = {
    id?: SortOrder
    tripPlanId?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    user1Amount?: SortOrder
    user2Amount?: SortOrder
    status?: SortOrder
    escrowStatus?: SortOrder
    splitMode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionSplitMinOrderByAggregateInput = {
    id?: SortOrder
    tripPlanId?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    user1Amount?: SortOrder
    user2Amount?: SortOrder
    status?: SortOrder
    escrowStatus?: SortOrder
    splitMode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionSplitSumOrderByAggregateInput = {
    totalAmount?: SortOrder
    user1Amount?: SortOrder
    user2Amount?: SortOrder
  }

  export type UserRatingCountOrderByAggregateInput = {
    id?: SortOrder
    raterId?: SortOrder
    rateeId?: SortOrder
    rating?: SortOrder
    tags?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type UserRatingAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type UserRatingMaxOrderByAggregateInput = {
    id?: SortOrder
    raterId?: SortOrder
    rateeId?: SortOrder
    rating?: SortOrder
    tags?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type UserRatingMinOrderByAggregateInput = {
    id?: SortOrder
    raterId?: SortOrder
    rateeId?: SortOrder
    rating?: SortOrder
    tags?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type UserRatingSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type LocationDareCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radiusMeters?: SortOrder
    pointsReward?: SortOrder
    targetCity?: SortOrder
    isSponsored?: SortOrder
    sponsorName?: SortOrder
  }

  export type LocationDareAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    radiusMeters?: SortOrder
    pointsReward?: SortOrder
  }

  export type LocationDareMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radiusMeters?: SortOrder
    pointsReward?: SortOrder
    targetCity?: SortOrder
    isSponsored?: SortOrder
    sponsorName?: SortOrder
  }

  export type LocationDareMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radiusMeters?: SortOrder
    pointsReward?: SortOrder
    targetCity?: SortOrder
    isSponsored?: SortOrder
    sponsorName?: SortOrder
  }

  export type LocationDareSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    radiusMeters?: SortOrder
    pointsReward?: SortOrder
  }

  export type UserDareStatusCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companionId?: SortOrder
    dareId?: SortOrder
    status?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserDareStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companionId?: SortOrder
    dareId?: SortOrder
    status?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserDareStatusMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companionId?: SortOrder
    dareId?: SortOrder
    status?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
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

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: string[] | null
    notIn?: string[] | null
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
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
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
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
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
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
  }

  export type TripPlanCreateWithoutUserInput = {
    id?: string
    name: string
    destination: string
    startingLocation: string
    experienceDatesStart: string
    experienceDatesEnd?: string | null
    dateInputType?: string
    duration?: number | null
    experiencingWith: string
    adults?: number
    children?: number
    ageGroups?: string
    budget: number
    budgetCurrency?: string
    experienceStyle: string
    budgetFlexible?: boolean
    vibes?: string
    priorities?: string
    interests?: string | null
    rooms?: number
    pace?: string
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
    experienceDatesStart: string
    experienceDatesEnd?: string | null
    dateInputType?: string
    duration?: number | null
    experiencingWith: string
    adults?: number
    children?: number
    ageGroups?: string
    budget: number
    budgetCurrency?: string
    experienceStyle: string
    budgetFlexible?: boolean
    vibes?: string
    priorities?: string
    interests?: string | null
    rooms?: number
    pace?: string
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
    experienceDatesStart?: StringFilter<"TripPlan"> | string
    experienceDatesEnd?: StringNullableFilter<"TripPlan"> | string | null
    dateInputType?: StringFilter<"TripPlan"> | string
    duration?: IntNullableFilter<"TripPlan"> | number | null
    experiencingWith?: StringFilter<"TripPlan"> | string
    adults?: IntFilter<"TripPlan"> | number
    children?: IntFilter<"TripPlan"> | number
    ageGroups?: StringFilter<"TripPlan"> | string
    budget?: FloatFilter<"TripPlan"> | number
    budgetCurrency?: StringFilter<"TripPlan"> | string
    experienceStyle?: StringFilter<"TripPlan"> | string
    budgetFlexible?: BoolFilter<"TripPlan"> | boolean
    vibes?: StringFilter<"TripPlan"> | string
    priorities?: StringFilter<"TripPlan"> | string
    interests?: StringNullableFilter<"TripPlan"> | string | null
    rooms?: IntFilter<"TripPlan"> | number
    pace?: StringFilter<"TripPlan"> | string
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
    experienceDatesStart: string
    experienceDatesEnd?: string | null
    dateInputType?: string
    duration?: number | null
    experiencingWith: string
    adults?: number
    children?: number
    ageGroups?: string
    budget: number
    budgetCurrency?: string
    experienceStyle: string
    budgetFlexible?: boolean
    vibes?: string
    priorities?: string
    interests?: string | null
    rooms?: number
    pace?: string
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
    experienceDatesStart: string
    experienceDatesEnd?: string | null
    dateInputType?: string
    duration?: number | null
    experiencingWith: string
    adults?: number
    children?: number
    ageGroups?: string
    budget: number
    budgetCurrency?: string
    experienceStyle: string
    budgetFlexible?: boolean
    vibes?: string
    priorities?: string
    interests?: string | null
    rooms?: number
    pace?: string
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
    experienceDatesStart?: StringFieldUpdateOperationsInput | string
    experienceDatesEnd?: NullableStringFieldUpdateOperationsInput | string | null
    dateInputType?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    experiencingWith?: StringFieldUpdateOperationsInput | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    ageGroups?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    budgetCurrency?: StringFieldUpdateOperationsInput | string
    experienceStyle?: StringFieldUpdateOperationsInput | string
    budgetFlexible?: BoolFieldUpdateOperationsInput | boolean
    vibes?: StringFieldUpdateOperationsInput | string
    priorities?: StringFieldUpdateOperationsInput | string
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: IntFieldUpdateOperationsInput | number
    pace?: StringFieldUpdateOperationsInput | string
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
    experienceDatesStart?: StringFieldUpdateOperationsInput | string
    experienceDatesEnd?: NullableStringFieldUpdateOperationsInput | string | null
    dateInputType?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    experiencingWith?: StringFieldUpdateOperationsInput | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    ageGroups?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    budgetCurrency?: StringFieldUpdateOperationsInput | string
    experienceStyle?: StringFieldUpdateOperationsInput | string
    budgetFlexible?: BoolFieldUpdateOperationsInput | boolean
    vibes?: StringFieldUpdateOperationsInput | string
    priorities?: StringFieldUpdateOperationsInput | string
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: IntFieldUpdateOperationsInput | number
    pace?: StringFieldUpdateOperationsInput | string
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
    experienceDatesStart: string
    experienceDatesEnd?: string | null
    dateInputType?: string
    duration?: number | null
    experiencingWith: string
    adults?: number
    children?: number
    ageGroups?: string
    budget: number
    budgetCurrency?: string
    experienceStyle: string
    budgetFlexible?: boolean
    vibes?: string
    priorities?: string
    interests?: string | null
    rooms?: number
    pace?: string
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
    experienceDatesStart: string
    experienceDatesEnd?: string | null
    dateInputType?: string
    duration?: number | null
    experiencingWith: string
    adults?: number
    children?: number
    ageGroups?: string
    budget: number
    budgetCurrency?: string
    experienceStyle: string
    budgetFlexible?: boolean
    vibes?: string
    priorities?: string
    interests?: string | null
    rooms?: number
    pace?: string
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
    experienceDatesStart?: StringFieldUpdateOperationsInput | string
    experienceDatesEnd?: NullableStringFieldUpdateOperationsInput | string | null
    dateInputType?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    experiencingWith?: StringFieldUpdateOperationsInput | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    ageGroups?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    budgetCurrency?: StringFieldUpdateOperationsInput | string
    experienceStyle?: StringFieldUpdateOperationsInput | string
    budgetFlexible?: BoolFieldUpdateOperationsInput | boolean
    vibes?: StringFieldUpdateOperationsInput | string
    priorities?: StringFieldUpdateOperationsInput | string
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: IntFieldUpdateOperationsInput | number
    pace?: StringFieldUpdateOperationsInput | string
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
    experienceDatesStart?: StringFieldUpdateOperationsInput | string
    experienceDatesEnd?: NullableStringFieldUpdateOperationsInput | string | null
    dateInputType?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    experiencingWith?: StringFieldUpdateOperationsInput | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    ageGroups?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    budgetCurrency?: StringFieldUpdateOperationsInput | string
    experienceStyle?: StringFieldUpdateOperationsInput | string
    budgetFlexible?: BoolFieldUpdateOperationsInput | boolean
    vibes?: StringFieldUpdateOperationsInput | string
    priorities?: StringFieldUpdateOperationsInput | string
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: IntFieldUpdateOperationsInput | number
    pace?: StringFieldUpdateOperationsInput | string
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
    startedAt?: string | null
    completedAt?: string | null
    createdAt?: string | null
    updatedAt?: string | null
  }

  export type TripPlanStatusUncheckedCreateWithoutTripPlanInput = {
    id?: string
    status?: string
    currentStep?: string | null
    error?: string | null
    startedAt?: string | null
    completedAt?: string | null
    createdAt?: string | null
    updatedAt?: string | null
  }

  export type TripPlanStatusCreateOrConnectWithoutTripPlanInput = {
    where: TripPlanStatusWhereUniqueInput
    create: XOR<TripPlanStatusCreateWithoutTripPlanInput, TripPlanStatusUncheckedCreateWithoutTripPlanInput>
  }

  export type TripPlanOutputCreateWithoutTripPlanInput = {
    id?: string
    itinerary: string
    summary?: string | null
    createdAt?: string | null
    updatedAt?: string | null
  }

  export type TripPlanOutputUncheckedCreateWithoutTripPlanInput = {
    id?: string
    itinerary: string
    summary?: string | null
    createdAt?: string | null
    updatedAt?: string | null
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
    startedAt?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TripPlanStatusUncheckedUpdateWithoutTripPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentStep?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
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
    createdAt?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TripPlanOutputUncheckedUpdateWithoutTripPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    itinerary?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
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
    experienceDatesStart: string
    experienceDatesEnd?: string | null
    dateInputType?: string
    duration?: number | null
    experiencingWith: string
    adults?: number
    children?: number
    ageGroups?: string
    budget: number
    budgetCurrency?: string
    experienceStyle: string
    budgetFlexible?: boolean
    vibes?: string
    priorities?: string
    interests?: string | null
    rooms?: number
    pace?: string
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
    experienceDatesStart?: StringFieldUpdateOperationsInput | string
    experienceDatesEnd?: NullableStringFieldUpdateOperationsInput | string | null
    dateInputType?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    experiencingWith?: StringFieldUpdateOperationsInput | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    ageGroups?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    budgetCurrency?: StringFieldUpdateOperationsInput | string
    experienceStyle?: StringFieldUpdateOperationsInput | string
    budgetFlexible?: BoolFieldUpdateOperationsInput | boolean
    vibes?: StringFieldUpdateOperationsInput | string
    priorities?: StringFieldUpdateOperationsInput | string
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: IntFieldUpdateOperationsInput | number
    pace?: StringFieldUpdateOperationsInput | string
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
    experienceDatesStart?: StringFieldUpdateOperationsInput | string
    experienceDatesEnd?: NullableStringFieldUpdateOperationsInput | string | null
    dateInputType?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    experiencingWith?: StringFieldUpdateOperationsInput | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    ageGroups?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    budgetCurrency?: StringFieldUpdateOperationsInput | string
    experienceStyle?: StringFieldUpdateOperationsInput | string
    budgetFlexible?: BoolFieldUpdateOperationsInput | boolean
    vibes?: StringFieldUpdateOperationsInput | string
    priorities?: StringFieldUpdateOperationsInput | string
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: IntFieldUpdateOperationsInput | number
    pace?: StringFieldUpdateOperationsInput | string
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
    experienceDatesStart?: StringFieldUpdateOperationsInput | string
    experienceDatesEnd?: NullableStringFieldUpdateOperationsInput | string | null
    dateInputType?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    experiencingWith?: StringFieldUpdateOperationsInput | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    ageGroups?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    budgetCurrency?: StringFieldUpdateOperationsInput | string
    experienceStyle?: StringFieldUpdateOperationsInput | string
    budgetFlexible?: BoolFieldUpdateOperationsInput | boolean
    vibes?: StringFieldUpdateOperationsInput | string
    priorities?: StringFieldUpdateOperationsInput | string
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: IntFieldUpdateOperationsInput | number
    pace?: StringFieldUpdateOperationsInput | string
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