/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model favorite
 *
 */
export type favorite = $Result.DefaultSelection<Prisma.$favoritePayload>;
/**
 * Model ingredient
 *
 */
export type ingredient = $Result.DefaultSelection<Prisma.$ingredientPayload>;
/**
 * Model recipe
 *
 */
export type recipe = $Result.DefaultSelection<Prisma.$recipePayload>;
/**
 * Model restaurant
 *
 */
export type restaurant = $Result.DefaultSelection<Prisma.$restaurantPayload>;
/**
 * Model review
 *
 */
export type review = $Result.DefaultSelection<Prisma.$reviewPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Favorites
 * const favorites = await prisma.favorite.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Favorites
   * const favorites = await prisma.favorite.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

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
  $use(cb: Prisma.Middleware): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **favorite** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Favorites
   * const favorites = await prisma.favorite.findMany()
   * ```
   */
  get favorite(): Prisma.favoriteDelegate<ExtArgs>;

  /**
   * `prisma.ingredient`: Exposes CRUD operations for the **ingredient** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Ingredients
   * const ingredients = await prisma.ingredient.findMany()
   * ```
   */
  get ingredient(): Prisma.ingredientDelegate<ExtArgs>;

  /**
   * `prisma.recipe`: Exposes CRUD operations for the **recipe** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Recipes
   * const recipes = await prisma.recipe.findMany()
   * ```
   */
  get recipe(): Prisma.recipeDelegate<ExtArgs>;

  /**
   * `prisma.restaurant`: Exposes CRUD operations for the **restaurant** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Restaurants
   * const restaurants = await prisma.restaurant.findMany()
   * ```
   */
  get restaurant(): Prisma.restaurantDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **review** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Reviews
   * const reviews = await prisma.review.findMany()
   * ```
   */
  get review(): Prisma.reviewDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    favorite: 'favorite';
    ingredient: 'ingredient';
    recipe: 'recipe';
    restaurant: 'restaurant';
    review: 'review';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'favorite' | 'ingredient' | 'recipe' | 'restaurant' | 'review' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      favorite: {
        payload: Prisma.$favoritePayload<ExtArgs>;
        fields: Prisma.favoriteFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.favoriteFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$favoritePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.favoriteFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$favoritePayload>;
          };
          findFirst: {
            args: Prisma.favoriteFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$favoritePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.favoriteFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$favoritePayload>;
          };
          findMany: {
            args: Prisma.favoriteFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$favoritePayload>[];
          };
          create: {
            args: Prisma.favoriteCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$favoritePayload>;
          };
          createMany: {
            args: Prisma.favoriteCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.favoriteDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$favoritePayload>;
          };
          update: {
            args: Prisma.favoriteUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$favoritePayload>;
          };
          deleteMany: {
            args: Prisma.favoriteDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.favoriteUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.favoriteUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$favoritePayload>;
          };
          aggregate: {
            args: Prisma.FavoriteAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateFavorite>;
          };
          groupBy: {
            args: Prisma.favoriteGroupByArgs<ExtArgs>;
            result: $Utils.Optional<FavoriteGroupByOutputType>[];
          };
          count: {
            args: Prisma.favoriteCountArgs<ExtArgs>;
            result: $Utils.Optional<FavoriteCountAggregateOutputType> | number;
          };
        };
      };
      ingredient: {
        payload: Prisma.$ingredientPayload<ExtArgs>;
        fields: Prisma.ingredientFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ingredientFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ingredientFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload>;
          };
          findFirst: {
            args: Prisma.ingredientFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ingredientFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload>;
          };
          findMany: {
            args: Prisma.ingredientFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload>[];
          };
          create: {
            args: Prisma.ingredientCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload>;
          };
          createMany: {
            args: Prisma.ingredientCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.ingredientDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload>;
          };
          update: {
            args: Prisma.ingredientUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload>;
          };
          deleteMany: {
            args: Prisma.ingredientDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.ingredientUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.ingredientUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload>;
          };
          aggregate: {
            args: Prisma.IngredientAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateIngredient>;
          };
          groupBy: {
            args: Prisma.ingredientGroupByArgs<ExtArgs>;
            result: $Utils.Optional<IngredientGroupByOutputType>[];
          };
          count: {
            args: Prisma.ingredientCountArgs<ExtArgs>;
            result: $Utils.Optional<IngredientCountAggregateOutputType> | number;
          };
        };
      };
      recipe: {
        payload: Prisma.$recipePayload<ExtArgs>;
        fields: Prisma.recipeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.recipeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$recipePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.recipeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$recipePayload>;
          };
          findFirst: {
            args: Prisma.recipeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$recipePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.recipeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$recipePayload>;
          };
          findMany: {
            args: Prisma.recipeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$recipePayload>[];
          };
          create: {
            args: Prisma.recipeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$recipePayload>;
          };
          createMany: {
            args: Prisma.recipeCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.recipeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$recipePayload>;
          };
          update: {
            args: Prisma.recipeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$recipePayload>;
          };
          deleteMany: {
            args: Prisma.recipeDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.recipeUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.recipeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$recipePayload>;
          };
          aggregate: {
            args: Prisma.RecipeAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRecipe>;
          };
          groupBy: {
            args: Prisma.recipeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RecipeGroupByOutputType>[];
          };
          count: {
            args: Prisma.recipeCountArgs<ExtArgs>;
            result: $Utils.Optional<RecipeCountAggregateOutputType> | number;
          };
        };
      };
      restaurant: {
        payload: Prisma.$restaurantPayload<ExtArgs>;
        fields: Prisma.restaurantFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.restaurantFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.restaurantFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>;
          };
          findFirst: {
            args: Prisma.restaurantFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.restaurantFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>;
          };
          findMany: {
            args: Prisma.restaurantFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>[];
          };
          create: {
            args: Prisma.restaurantCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>;
          };
          createMany: {
            args: Prisma.restaurantCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.restaurantDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>;
          };
          update: {
            args: Prisma.restaurantUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>;
          };
          deleteMany: {
            args: Prisma.restaurantDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.restaurantUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.restaurantUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>;
          };
          aggregate: {
            args: Prisma.RestaurantAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRestaurant>;
          };
          groupBy: {
            args: Prisma.restaurantGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RestaurantGroupByOutputType>[];
          };
          count: {
            args: Prisma.restaurantCountArgs<ExtArgs>;
            result: $Utils.Optional<RestaurantCountAggregateOutputType> | number;
          };
        };
      };
      review: {
        payload: Prisma.$reviewPayload<ExtArgs>;
        fields: Prisma.reviewFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.reviewFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.reviewFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          findFirst: {
            args: Prisma.reviewFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.reviewFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          findMany: {
            args: Prisma.reviewFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[];
          };
          create: {
            args: Prisma.reviewCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          createMany: {
            args: Prisma.reviewCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.reviewDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          update: {
            args: Prisma.reviewUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          deleteMany: {
            args: Prisma.reviewDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.reviewUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.reviewUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateReview>;
          };
          groupBy: {
            args: Prisma.reviewGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ReviewGroupByOutputType>[];
          };
          count: {
            args: Prisma.reviewCountArgs<ExtArgs>;
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
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
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type RecipeCountOutputType
   */

  export type RecipeCountOutputType = {
    favorite: number;
    ingredient: number;
  };

  export type RecipeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favorite?: boolean | RecipeCountOutputTypeCountFavoriteArgs;
    ingredient?: boolean | RecipeCountOutputTypeCountIngredientArgs;
  };

  // Custom InputTypes

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeCountOutputType
     */
    select?: RecipeCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountFavoriteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: favoriteWhereInput;
  };

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountIngredientArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ingredientWhereInput;
  };

  /**
   * Count Type RestaurantCountOutputType
   */

  export type RestaurantCountOutputType = {
    recipe: number;
    review: number;
  };

  export type RestaurantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RestaurantCountOutputTypeCountRecipeArgs;
    review?: boolean | RestaurantCountOutputTypeCountReviewArgs;
  };

  // Custom InputTypes

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the RestaurantCountOutputType
       */
      select?: RestaurantCountOutputTypeSelect<ExtArgs> | null;
    };

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountRecipeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: recipeWhereInput;
  };

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountReviewArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: reviewWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    favorite: number;
    review: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favorite?: boolean | UserCountOutputTypeCountFavoriteArgs;
    review?: boolean | UserCountOutputTypeCountReviewArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: favoriteWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model favorite
   */

  export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null;
    _min: FavoriteMinAggregateOutputType | null;
    _max: FavoriteMaxAggregateOutputType | null;
  };

  export type FavoriteMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    recipe_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type FavoriteMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    recipe_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type FavoriteCountAggregateOutputType = {
    id: number;
    user_id: number;
    recipe_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type FavoriteMinAggregateInputType = {
    id?: true;
    user_id?: true;
    recipe_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type FavoriteMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    recipe_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type FavoriteCountAggregateInputType = {
    id?: true;
    user_id?: true;
    recipe_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type FavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which favorite to aggregate.
     */
    where?: favoriteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of favorites to fetch.
     */
    orderBy?: favoriteOrderByWithRelationInput | favoriteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: favoriteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` favorites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` favorites.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned favorites
     **/
    _count?: true | FavoriteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: FavoriteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: FavoriteMaxAggregateInputType;
  };

  export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
    [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorite[P]>
      : GetScalarType<T[P], AggregateFavorite[P]>;
  };

  export type favoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: favoriteWhereInput;
    orderBy?: favoriteOrderByWithAggregationInput | favoriteOrderByWithAggregationInput[];
    by: FavoriteScalarFieldEnum[] | FavoriteScalarFieldEnum;
    having?: favoriteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FavoriteCountAggregateInputType | true;
    _min?: FavoriteMinAggregateInputType;
    _max?: FavoriteMaxAggregateInputType;
  };

  export type FavoriteGroupByOutputType = {
    id: string;
    user_id: string;
    recipe_id: string;
    created_at: Date;
    updated_at: Date;
    _count: FavoriteCountAggregateOutputType | null;
    _min: FavoriteMinAggregateOutputType | null;
    _max: FavoriteMaxAggregateOutputType | null;
  };

  type GetFavoriteGroupByPayload<T extends favoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteGroupByOutputType, T['by']> & {
        [P in keyof T & keyof FavoriteGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
          : GetScalarType<T[P], FavoriteGroupByOutputType[P]>;
      }
    >
  >;

  export type favoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        recipe_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        recipe?: boolean | recipeDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['favorite']
    >;

  export type favoriteSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    recipe_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type favoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | recipeDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $favoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'favorite';
    objects: {
      recipe: Prisma.$recipePayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        recipe_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['favorite']
    >;
    composites: {};
  };

  type favoriteGetPayload<S extends boolean | null | undefined | favoriteDefaultArgs> = $Result.GetResult<
    Prisma.$favoritePayload,
    S
  >;

  type favoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    favoriteFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: FavoriteCountAggregateInputType | true;
  };

  export interface favoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['favorite']; meta: { name: 'favorite' } };
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {favoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends favoriteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, favoriteFindUniqueArgs<ExtArgs>>,
    ): Prisma__favoriteClient<
      $Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Favorite that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {favoriteFindUniqueOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends favoriteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, favoriteFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__favoriteClient<
      $Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends favoriteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, favoriteFindFirstArgs<ExtArgs>>,
    ): Prisma__favoriteClient<
      $Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoriteFindFirstOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends favoriteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, favoriteFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__favoriteClient<
      $Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoriteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     *
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const favoriteWithIdOnly = await prisma.favorite.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends favoriteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, favoriteFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Favorite.
     * @param {favoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     *
     **/
    create<T extends favoriteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, favoriteCreateArgs<ExtArgs>>,
    ): Prisma__favoriteClient<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Favorites.
     *     @param {favoriteCreateManyArgs} args - Arguments to create many Favorites.
     *     @example
     *     // Create many Favorites
     *     const favorite = await prisma.favorite.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends favoriteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, favoriteCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Favorite.
     * @param {favoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     *
     **/
    delete<T extends favoriteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, favoriteDeleteArgs<ExtArgs>>,
    ): Prisma__favoriteClient<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Favorite.
     * @param {favoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends favoriteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, favoriteUpdateArgs<ExtArgs>>,
    ): Prisma__favoriteClient<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Favorites.
     * @param {favoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends favoriteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, favoriteDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends favoriteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, favoriteUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Favorite.
     * @param {favoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
     **/
    upsert<T extends favoriteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, favoriteUpsertArgs<ExtArgs>>,
    ): Prisma__favoriteClient<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
     **/
    count<T extends favoriteCountArgs>(
      args?: Subset<T, favoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoriteAggregateArgs>(
      args: Subset<T, FavoriteAggregateArgs>,
    ): Prisma.PrismaPromise<GetFavoriteAggregateType<T>>;

    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoriteGroupByArgs} args - Group by arguments.
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
      T extends favoriteGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: favoriteGroupByArgs['orderBy'] }
        : { orderBy?: favoriteGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, favoriteGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the favorite model
     */
    readonly fields: favoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__favoriteClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    recipe<T extends recipeDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, recipeDefaultArgs<ExtArgs>>,
    ): Prisma__recipeClient<
      $Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the favorite model
   */
  interface favoriteFieldRefs {
    readonly id: FieldRef<'favorite', 'String'>;
    readonly user_id: FieldRef<'favorite', 'String'>;
    readonly recipe_id: FieldRef<'favorite', 'String'>;
    readonly created_at: FieldRef<'favorite', 'DateTime'>;
    readonly updated_at: FieldRef<'favorite', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * favorite findUnique
   */
  export type favoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoriteInclude<ExtArgs> | null;
    /**
     * Filter, which favorite to fetch.
     */
    where: favoriteWhereUniqueInput;
  };

  /**
   * favorite findUniqueOrThrow
   */
  export type favoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoriteInclude<ExtArgs> | null;
    /**
     * Filter, which favorite to fetch.
     */
    where: favoriteWhereUniqueInput;
  };

  /**
   * favorite findFirst
   */
  export type favoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoriteInclude<ExtArgs> | null;
    /**
     * Filter, which favorite to fetch.
     */
    where?: favoriteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of favorites to fetch.
     */
    orderBy?: favoriteOrderByWithRelationInput | favoriteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for favorites.
     */
    cursor?: favoriteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` favorites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` favorites.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[];
  };

  /**
   * favorite findFirstOrThrow
   */
  export type favoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoriteInclude<ExtArgs> | null;
    /**
     * Filter, which favorite to fetch.
     */
    where?: favoriteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of favorites to fetch.
     */
    orderBy?: favoriteOrderByWithRelationInput | favoriteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for favorites.
     */
    cursor?: favoriteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` favorites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` favorites.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[];
  };

  /**
   * favorite findMany
   */
  export type favoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoriteInclude<ExtArgs> | null;
    /**
     * Filter, which favorites to fetch.
     */
    where?: favoriteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of favorites to fetch.
     */
    orderBy?: favoriteOrderByWithRelationInput | favoriteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing favorites.
     */
    cursor?: favoriteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` favorites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` favorites.
     */
    skip?: number;
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[];
  };

  /**
   * favorite create
   */
  export type favoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoriteInclude<ExtArgs> | null;
    /**
     * The data needed to create a favorite.
     */
    data: XOR<favoriteCreateInput, favoriteUncheckedCreateInput>;
  };

  /**
   * favorite createMany
   */
  export type favoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many favorites.
     */
    data: favoriteCreateManyInput | favoriteCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * favorite update
   */
  export type favoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoriteInclude<ExtArgs> | null;
    /**
     * The data needed to update a favorite.
     */
    data: XOR<favoriteUpdateInput, favoriteUncheckedUpdateInput>;
    /**
     * Choose, which favorite to update.
     */
    where: favoriteWhereUniqueInput;
  };

  /**
   * favorite updateMany
   */
  export type favoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update favorites.
     */
    data: XOR<favoriteUpdateManyMutationInput, favoriteUncheckedUpdateManyInput>;
    /**
     * Filter which favorites to update
     */
    where?: favoriteWhereInput;
  };

  /**
   * favorite upsert
   */
  export type favoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoriteInclude<ExtArgs> | null;
    /**
     * The filter to search for the favorite to update in case it exists.
     */
    where: favoriteWhereUniqueInput;
    /**
     * In case the favorite found by the `where` argument doesn't exist, create a new favorite with this data.
     */
    create: XOR<favoriteCreateInput, favoriteUncheckedCreateInput>;
    /**
     * In case the favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<favoriteUpdateInput, favoriteUncheckedUpdateInput>;
  };

  /**
   * favorite delete
   */
  export type favoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoriteInclude<ExtArgs> | null;
    /**
     * Filter which favorite to delete.
     */
    where: favoriteWhereUniqueInput;
  };

  /**
   * favorite deleteMany
   */
  export type favoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which favorites to delete
     */
    where?: favoriteWhereInput;
  };

  /**
   * favorite without action
   */
  export type favoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoriteInclude<ExtArgs> | null;
  };

  /**
   * Model ingredient
   */

  export type AggregateIngredient = {
    _count: IngredientCountAggregateOutputType | null;
    _avg: IngredientAvgAggregateOutputType | null;
    _sum: IngredientSumAggregateOutputType | null;
    _min: IngredientMinAggregateOutputType | null;
    _max: IngredientMaxAggregateOutputType | null;
  };

  export type IngredientAvgAggregateOutputType = {
    quantity: number | null;
    calories: number | null;
  };

  export type IngredientSumAggregateOutputType = {
    quantity: number | null;
    calories: number | null;
  };

  export type IngredientMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    quantity: number | null;
    unit: string | null;
    calories: number | null;
    recipe_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type IngredientMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    quantity: number | null;
    unit: string | null;
    calories: number | null;
    recipe_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type IngredientCountAggregateOutputType = {
    id: number;
    name: number;
    quantity: number;
    unit: number;
    calories: number;
    recipe_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type IngredientAvgAggregateInputType = {
    quantity?: true;
    calories?: true;
  };

  export type IngredientSumAggregateInputType = {
    quantity?: true;
    calories?: true;
  };

  export type IngredientMinAggregateInputType = {
    id?: true;
    name?: true;
    quantity?: true;
    unit?: true;
    calories?: true;
    recipe_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type IngredientMaxAggregateInputType = {
    id?: true;
    name?: true;
    quantity?: true;
    unit?: true;
    calories?: true;
    recipe_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type IngredientCountAggregateInputType = {
    id?: true;
    name?: true;
    quantity?: true;
    unit?: true;
    calories?: true;
    recipe_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type IngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ingredient to aggregate.
     */
    where?: ingredientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ingredients to fetch.
     */
    orderBy?: ingredientOrderByWithRelationInput | ingredientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ingredientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ingredients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ingredients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ingredients
     **/
    _count?: true | IngredientCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: IngredientAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: IngredientSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: IngredientMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: IngredientMaxAggregateInputType;
  };

  export type GetIngredientAggregateType<T extends IngredientAggregateArgs> = {
    [P in keyof T & keyof AggregateIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredient[P]>
      : GetScalarType<T[P], AggregateIngredient[P]>;
  };

  export type ingredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ingredientWhereInput;
    orderBy?: ingredientOrderByWithAggregationInput | ingredientOrderByWithAggregationInput[];
    by: IngredientScalarFieldEnum[] | IngredientScalarFieldEnum;
    having?: ingredientScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IngredientCountAggregateInputType | true;
    _avg?: IngredientAvgAggregateInputType;
    _sum?: IngredientSumAggregateInputType;
    _min?: IngredientMinAggregateInputType;
    _max?: IngredientMaxAggregateInputType;
  };

  export type IngredientGroupByOutputType = {
    id: string;
    name: string;
    quantity: number;
    unit: string;
    calories: number;
    recipe_id: string;
    created_at: Date;
    updated_at: Date;
    _count: IngredientCountAggregateOutputType | null;
    _avg: IngredientAvgAggregateOutputType | null;
    _sum: IngredientSumAggregateOutputType | null;
    _min: IngredientMinAggregateOutputType | null;
    _max: IngredientMaxAggregateOutputType | null;
  };

  type GetIngredientGroupByPayload<T extends ingredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientGroupByOutputType, T['by']> & {
        [P in keyof T & keyof IngredientGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], IngredientGroupByOutputType[P]>
          : GetScalarType<T[P], IngredientGroupByOutputType[P]>;
      }
    >
  >;

  export type ingredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        quantity?: boolean;
        unit?: boolean;
        calories?: boolean;
        recipe_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        recipe?: boolean | recipeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['ingredient']
    >;

  export type ingredientSelectScalar = {
    id?: boolean;
    name?: boolean;
    quantity?: boolean;
    unit?: boolean;
    calories?: boolean;
    recipe_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type ingredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | recipeDefaultArgs<ExtArgs>;
  };

  export type $ingredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'ingredient';
    objects: {
      recipe: Prisma.$recipePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        quantity: number;
        unit: string;
        calories: number;
        recipe_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['ingredient']
    >;
    composites: {};
  };

  type ingredientGetPayload<S extends boolean | null | undefined | ingredientDefaultArgs> = $Result.GetResult<
    Prisma.$ingredientPayload,
    S
  >;

  type ingredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    ingredientFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: IngredientCountAggregateInputType | true;
  };

  export interface ingredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ingredient']; meta: { name: 'ingredient' } };
    /**
     * Find zero or one Ingredient that matches the filter.
     * @param {ingredientFindUniqueArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends ingredientFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ingredientFindUniqueArgs<ExtArgs>>,
    ): Prisma__ingredientClient<
      $Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Ingredient that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {ingredientFindUniqueOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends ingredientFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ingredientFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ingredientClient<
      $Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Ingredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientFindFirstArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends ingredientFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ingredientFindFirstArgs<ExtArgs>>,
    ): Prisma__ingredientClient<
      $Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Ingredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientFindFirstOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends ingredientFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ingredientFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ingredientClient<
      $Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredients
     * const ingredients = await prisma.ingredient.findMany()
     *
     * // Get first 10 Ingredients
     * const ingredients = await prisma.ingredient.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends ingredientFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ingredientFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Ingredient.
     * @param {ingredientCreateArgs} args - Arguments to create a Ingredient.
     * @example
     * // Create one Ingredient
     * const Ingredient = await prisma.ingredient.create({
     *   data: {
     *     // ... data to create a Ingredient
     *   }
     * })
     *
     **/
    create<T extends ingredientCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ingredientCreateArgs<ExtArgs>>,
    ): Prisma__ingredientClient<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Ingredients.
     *     @param {ingredientCreateManyArgs} args - Arguments to create many Ingredients.
     *     @example
     *     // Create many Ingredients
     *     const ingredient = await prisma.ingredient.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends ingredientCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ingredientCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Ingredient.
     * @param {ingredientDeleteArgs} args - Arguments to delete one Ingredient.
     * @example
     * // Delete one Ingredient
     * const Ingredient = await prisma.ingredient.delete({
     *   where: {
     *     // ... filter to delete one Ingredient
     *   }
     * })
     *
     **/
    delete<T extends ingredientDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ingredientDeleteArgs<ExtArgs>>,
    ): Prisma__ingredientClient<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Ingredient.
     * @param {ingredientUpdateArgs} args - Arguments to update one Ingredient.
     * @example
     * // Update one Ingredient
     * const ingredient = await prisma.ingredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends ingredientUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ingredientUpdateArgs<ExtArgs>>,
    ): Prisma__ingredientClient<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Ingredients.
     * @param {ingredientDeleteManyArgs} args - Arguments to filter Ingredients to delete.
     * @example
     * // Delete a few Ingredients
     * const { count } = await prisma.ingredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends ingredientDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ingredientDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends ingredientUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ingredientUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Ingredient.
     * @param {ingredientUpsertArgs} args - Arguments to update or create a Ingredient.
     * @example
     * // Update or create a Ingredient
     * const ingredient = await prisma.ingredient.upsert({
     *   create: {
     *     // ... data to create a Ingredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredient we want to update
     *   }
     * })
     **/
    upsert<T extends ingredientUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ingredientUpsertArgs<ExtArgs>>,
    ): Prisma__ingredientClient<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientCountArgs} args - Arguments to filter Ingredients to count.
     * @example
     * // Count the number of Ingredients
     * const count = await prisma.ingredient.count({
     *   where: {
     *     // ... the filter for the Ingredients we want to count
     *   }
     * })
     **/
    count<T extends ingredientCountArgs>(
      args?: Subset<T, ingredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IngredientAggregateArgs>(
      args: Subset<T, IngredientAggregateArgs>,
    ): Prisma.PrismaPromise<GetIngredientAggregateType<T>>;

    /**
     * Group by Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientGroupByArgs} args - Group by arguments.
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
      T extends ingredientGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ingredientGroupByArgs['orderBy'] }
        : { orderBy?: ingredientGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, ingredientGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ingredient model
     */
    readonly fields: ingredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ingredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ingredientClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    recipe<T extends recipeDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, recipeDefaultArgs<ExtArgs>>,
    ): Prisma__recipeClient<
      $Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ingredient model
   */
  interface ingredientFieldRefs {
    readonly id: FieldRef<'ingredient', 'String'>;
    readonly name: FieldRef<'ingredient', 'String'>;
    readonly quantity: FieldRef<'ingredient', 'Int'>;
    readonly unit: FieldRef<'ingredient', 'String'>;
    readonly calories: FieldRef<'ingredient', 'Int'>;
    readonly recipe_id: FieldRef<'ingredient', 'String'>;
    readonly created_at: FieldRef<'ingredient', 'DateTime'>;
    readonly updated_at: FieldRef<'ingredient', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * ingredient findUnique
   */
  export type ingredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ingredientInclude<ExtArgs> | null;
    /**
     * Filter, which ingredient to fetch.
     */
    where: ingredientWhereUniqueInput;
  };

  /**
   * ingredient findUniqueOrThrow
   */
  export type ingredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ingredientInclude<ExtArgs> | null;
    /**
     * Filter, which ingredient to fetch.
     */
    where: ingredientWhereUniqueInput;
  };

  /**
   * ingredient findFirst
   */
  export type ingredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ingredientInclude<ExtArgs> | null;
    /**
     * Filter, which ingredient to fetch.
     */
    where?: ingredientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ingredients to fetch.
     */
    orderBy?: ingredientOrderByWithRelationInput | ingredientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ingredients.
     */
    cursor?: ingredientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ingredients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ingredients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[];
  };

  /**
   * ingredient findFirstOrThrow
   */
  export type ingredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ingredientInclude<ExtArgs> | null;
    /**
     * Filter, which ingredient to fetch.
     */
    where?: ingredientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ingredients to fetch.
     */
    orderBy?: ingredientOrderByWithRelationInput | ingredientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ingredients.
     */
    cursor?: ingredientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ingredients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ingredients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[];
  };

  /**
   * ingredient findMany
   */
  export type ingredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ingredientInclude<ExtArgs> | null;
    /**
     * Filter, which ingredients to fetch.
     */
    where?: ingredientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ingredients to fetch.
     */
    orderBy?: ingredientOrderByWithRelationInput | ingredientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ingredients.
     */
    cursor?: ingredientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ingredients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ingredients.
     */
    skip?: number;
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[];
  };

  /**
   * ingredient create
   */
  export type ingredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ingredientInclude<ExtArgs> | null;
    /**
     * The data needed to create a ingredient.
     */
    data: XOR<ingredientCreateInput, ingredientUncheckedCreateInput>;
  };

  /**
   * ingredient createMany
   */
  export type ingredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ingredients.
     */
    data: ingredientCreateManyInput | ingredientCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ingredient update
   */
  export type ingredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ingredientInclude<ExtArgs> | null;
    /**
     * The data needed to update a ingredient.
     */
    data: XOR<ingredientUpdateInput, ingredientUncheckedUpdateInput>;
    /**
     * Choose, which ingredient to update.
     */
    where: ingredientWhereUniqueInput;
  };

  /**
   * ingredient updateMany
   */
  export type ingredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ingredients.
     */
    data: XOR<ingredientUpdateManyMutationInput, ingredientUncheckedUpdateManyInput>;
    /**
     * Filter which ingredients to update
     */
    where?: ingredientWhereInput;
  };

  /**
   * ingredient upsert
   */
  export type ingredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ingredientInclude<ExtArgs> | null;
    /**
     * The filter to search for the ingredient to update in case it exists.
     */
    where: ingredientWhereUniqueInput;
    /**
     * In case the ingredient found by the `where` argument doesn't exist, create a new ingredient with this data.
     */
    create: XOR<ingredientCreateInput, ingredientUncheckedCreateInput>;
    /**
     * In case the ingredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ingredientUpdateInput, ingredientUncheckedUpdateInput>;
  };

  /**
   * ingredient delete
   */
  export type ingredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ingredientInclude<ExtArgs> | null;
    /**
     * Filter which ingredient to delete.
     */
    where: ingredientWhereUniqueInput;
  };

  /**
   * ingredient deleteMany
   */
  export type ingredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ingredients to delete
     */
    where?: ingredientWhereInput;
  };

  /**
   * ingredient without action
   */
  export type ingredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ingredientInclude<ExtArgs> | null;
  };

  /**
   * Model recipe
   */

  export type AggregateRecipe = {
    _count: RecipeCountAggregateOutputType | null;
    _avg: RecipeAvgAggregateOutputType | null;
    _sum: RecipeSumAggregateOutputType | null;
    _min: RecipeMinAggregateOutputType | null;
    _max: RecipeMaxAggregateOutputType | null;
  };

  export type RecipeAvgAggregateOutputType = {
    prep_time: number | null;
    cook_time: number | null;
  };

  export type RecipeSumAggregateOutputType = {
    prep_time: number | null;
    cook_time: number | null;
  };

  export type RecipeMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    ingredients: string | null;
    instructions: string | null;
    prep_time: number | null;
    cook_time: number | null;
    restaurant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type RecipeMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    ingredients: string | null;
    instructions: string | null;
    prep_time: number | null;
    cook_time: number | null;
    restaurant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type RecipeCountAggregateOutputType = {
    id: number;
    title: number;
    ingredients: number;
    instructions: number;
    prep_time: number;
    cook_time: number;
    restaurant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type RecipeAvgAggregateInputType = {
    prep_time?: true;
    cook_time?: true;
  };

  export type RecipeSumAggregateInputType = {
    prep_time?: true;
    cook_time?: true;
  };

  export type RecipeMinAggregateInputType = {
    id?: true;
    title?: true;
    ingredients?: true;
    instructions?: true;
    prep_time?: true;
    cook_time?: true;
    restaurant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type RecipeMaxAggregateInputType = {
    id?: true;
    title?: true;
    ingredients?: true;
    instructions?: true;
    prep_time?: true;
    cook_time?: true;
    restaurant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type RecipeCountAggregateInputType = {
    id?: true;
    title?: true;
    ingredients?: true;
    instructions?: true;
    prep_time?: true;
    cook_time?: true;
    restaurant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type RecipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recipe to aggregate.
     */
    where?: recipeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of recipes to fetch.
     */
    orderBy?: recipeOrderByWithRelationInput | recipeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: recipeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` recipes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` recipes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned recipes
     **/
    _count?: true | RecipeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: RecipeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: RecipeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RecipeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RecipeMaxAggregateInputType;
  };

  export type GetRecipeAggregateType<T extends RecipeAggregateArgs> = {
    [P in keyof T & keyof AggregateRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe[P]>
      : GetScalarType<T[P], AggregateRecipe[P]>;
  };

  export type recipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recipeWhereInput;
    orderBy?: recipeOrderByWithAggregationInput | recipeOrderByWithAggregationInput[];
    by: RecipeScalarFieldEnum[] | RecipeScalarFieldEnum;
    having?: recipeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RecipeCountAggregateInputType | true;
    _avg?: RecipeAvgAggregateInputType;
    _sum?: RecipeSumAggregateInputType;
    _min?: RecipeMinAggregateInputType;
    _max?: RecipeMaxAggregateInputType;
  };

  export type RecipeGroupByOutputType = {
    id: string;
    title: string;
    ingredients: string;
    instructions: string;
    prep_time: number;
    cook_time: number;
    restaurant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: RecipeCountAggregateOutputType | null;
    _avg: RecipeAvgAggregateOutputType | null;
    _sum: RecipeSumAggregateOutputType | null;
    _min: RecipeMinAggregateOutputType | null;
    _max: RecipeMaxAggregateOutputType | null;
  };

  type GetRecipeGroupByPayload<T extends recipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeGroupByOutputType, T['by']> & {
        [P in keyof T & keyof RecipeGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], RecipeGroupByOutputType[P]>
          : GetScalarType<T[P], RecipeGroupByOutputType[P]>;
      }
    >
  >;

  export type recipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      ingredients?: boolean;
      instructions?: boolean;
      prep_time?: boolean;
      cook_time?: boolean;
      restaurant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      favorite?: boolean | recipe$favoriteArgs<ExtArgs>;
      ingredient?: boolean | recipe$ingredientArgs<ExtArgs>;
      restaurant?: boolean | restaurantDefaultArgs<ExtArgs>;
      _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['recipe']
  >;

  export type recipeSelectScalar = {
    id?: boolean;
    title?: boolean;
    ingredients?: boolean;
    instructions?: boolean;
    prep_time?: boolean;
    cook_time?: boolean;
    restaurant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type recipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favorite?: boolean | recipe$favoriteArgs<ExtArgs>;
    ingredient?: boolean | recipe$ingredientArgs<ExtArgs>;
    restaurant?: boolean | restaurantDefaultArgs<ExtArgs>;
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $recipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'recipe';
    objects: {
      favorite: Prisma.$favoritePayload<ExtArgs>[];
      ingredient: Prisma.$ingredientPayload<ExtArgs>[];
      restaurant: Prisma.$restaurantPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        ingredients: string;
        instructions: string;
        prep_time: number;
        cook_time: number;
        restaurant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['recipe']
    >;
    composites: {};
  };

  type recipeGetPayload<S extends boolean | null | undefined | recipeDefaultArgs> = $Result.GetResult<
    Prisma.$recipePayload,
    S
  >;

  type recipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    recipeFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: RecipeCountAggregateInputType | true;
  };

  export interface recipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['recipe']; meta: { name: 'recipe' } };
    /**
     * Find zero or one Recipe that matches the filter.
     * @param {recipeFindUniqueArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends recipeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, recipeFindUniqueArgs<ExtArgs>>,
    ): Prisma__recipeClient<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Recipe that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {recipeFindUniqueOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends recipeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, recipeFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__recipeClient<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Recipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipeFindFirstArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends recipeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, recipeFindFirstArgs<ExtArgs>>,
    ): Prisma__recipeClient<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Recipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipeFindFirstOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends recipeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, recipeFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__recipeClient<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipe.findMany()
     *
     * // Get first 10 Recipes
     * const recipes = await prisma.recipe.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const recipeWithIdOnly = await prisma.recipe.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends recipeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, recipeFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Recipe.
     * @param {recipeCreateArgs} args - Arguments to create a Recipe.
     * @example
     * // Create one Recipe
     * const Recipe = await prisma.recipe.create({
     *   data: {
     *     // ... data to create a Recipe
     *   }
     * })
     *
     **/
    create<T extends recipeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, recipeCreateArgs<ExtArgs>>,
    ): Prisma__recipeClient<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Recipes.
     *     @param {recipeCreateManyArgs} args - Arguments to create many Recipes.
     *     @example
     *     // Create many Recipes
     *     const recipe = await prisma.recipe.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends recipeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, recipeCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Recipe.
     * @param {recipeDeleteArgs} args - Arguments to delete one Recipe.
     * @example
     * // Delete one Recipe
     * const Recipe = await prisma.recipe.delete({
     *   where: {
     *     // ... filter to delete one Recipe
     *   }
     * })
     *
     **/
    delete<T extends recipeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, recipeDeleteArgs<ExtArgs>>,
    ): Prisma__recipeClient<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Recipe.
     * @param {recipeUpdateArgs} args - Arguments to update one Recipe.
     * @example
     * // Update one Recipe
     * const recipe = await prisma.recipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends recipeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, recipeUpdateArgs<ExtArgs>>,
    ): Prisma__recipeClient<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Recipes.
     * @param {recipeDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends recipeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, recipeDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends recipeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, recipeUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Recipe.
     * @param {recipeUpsertArgs} args - Arguments to update or create a Recipe.
     * @example
     * // Update or create a Recipe
     * const recipe = await prisma.recipe.upsert({
     *   create: {
     *     // ... data to create a Recipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe we want to update
     *   }
     * })
     **/
    upsert<T extends recipeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, recipeUpsertArgs<ExtArgs>>,
    ): Prisma__recipeClient<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipeCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipe.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
     **/
    count<T extends recipeCountArgs>(
      args?: Subset<T, recipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecipeAggregateArgs>(
      args: Subset<T, RecipeAggregateArgs>,
    ): Prisma.PrismaPromise<GetRecipeAggregateType<T>>;

    /**
     * Group by Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipeGroupByArgs} args - Group by arguments.
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
      T extends recipeGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: recipeGroupByArgs['orderBy'] }
        : { orderBy?: recipeGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, recipeGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the recipe model
     */
    readonly fields: recipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for recipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__recipeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    favorite<T extends recipe$favoriteArgs<ExtArgs> = {}>(
      args?: Subset<T, recipe$favoriteArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, 'findMany'> | Null>;

    ingredient<T extends recipe$ingredientArgs<ExtArgs> = {}>(
      args?: Subset<T, recipe$ingredientArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, 'findMany'> | Null>;

    restaurant<T extends restaurantDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, restaurantDefaultArgs<ExtArgs>>,
    ): Prisma__restaurantClient<
      $Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the recipe model
   */
  interface recipeFieldRefs {
    readonly id: FieldRef<'recipe', 'String'>;
    readonly title: FieldRef<'recipe', 'String'>;
    readonly ingredients: FieldRef<'recipe', 'String'>;
    readonly instructions: FieldRef<'recipe', 'String'>;
    readonly prep_time: FieldRef<'recipe', 'Int'>;
    readonly cook_time: FieldRef<'recipe', 'Int'>;
    readonly restaurant_id: FieldRef<'recipe', 'String'>;
    readonly created_at: FieldRef<'recipe', 'DateTime'>;
    readonly updated_at: FieldRef<'recipe', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * recipe findUnique
   */
  export type recipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recipeInclude<ExtArgs> | null;
    /**
     * Filter, which recipe to fetch.
     */
    where: recipeWhereUniqueInput;
  };

  /**
   * recipe findUniqueOrThrow
   */
  export type recipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recipeInclude<ExtArgs> | null;
    /**
     * Filter, which recipe to fetch.
     */
    where: recipeWhereUniqueInput;
  };

  /**
   * recipe findFirst
   */
  export type recipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recipeInclude<ExtArgs> | null;
    /**
     * Filter, which recipe to fetch.
     */
    where?: recipeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of recipes to fetch.
     */
    orderBy?: recipeOrderByWithRelationInput | recipeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for recipes.
     */
    cursor?: recipeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` recipes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` recipes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[];
  };

  /**
   * recipe findFirstOrThrow
   */
  export type recipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recipeInclude<ExtArgs> | null;
    /**
     * Filter, which recipe to fetch.
     */
    where?: recipeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of recipes to fetch.
     */
    orderBy?: recipeOrderByWithRelationInput | recipeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for recipes.
     */
    cursor?: recipeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` recipes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` recipes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[];
  };

  /**
   * recipe findMany
   */
  export type recipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recipeInclude<ExtArgs> | null;
    /**
     * Filter, which recipes to fetch.
     */
    where?: recipeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of recipes to fetch.
     */
    orderBy?: recipeOrderByWithRelationInput | recipeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing recipes.
     */
    cursor?: recipeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` recipes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` recipes.
     */
    skip?: number;
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[];
  };

  /**
   * recipe create
   */
  export type recipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recipeInclude<ExtArgs> | null;
    /**
     * The data needed to create a recipe.
     */
    data: XOR<recipeCreateInput, recipeUncheckedCreateInput>;
  };

  /**
   * recipe createMany
   */
  export type recipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many recipes.
     */
    data: recipeCreateManyInput | recipeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * recipe update
   */
  export type recipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recipeInclude<ExtArgs> | null;
    /**
     * The data needed to update a recipe.
     */
    data: XOR<recipeUpdateInput, recipeUncheckedUpdateInput>;
    /**
     * Choose, which recipe to update.
     */
    where: recipeWhereUniqueInput;
  };

  /**
   * recipe updateMany
   */
  export type recipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update recipes.
     */
    data: XOR<recipeUpdateManyMutationInput, recipeUncheckedUpdateManyInput>;
    /**
     * Filter which recipes to update
     */
    where?: recipeWhereInput;
  };

  /**
   * recipe upsert
   */
  export type recipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recipeInclude<ExtArgs> | null;
    /**
     * The filter to search for the recipe to update in case it exists.
     */
    where: recipeWhereUniqueInput;
    /**
     * In case the recipe found by the `where` argument doesn't exist, create a new recipe with this data.
     */
    create: XOR<recipeCreateInput, recipeUncheckedCreateInput>;
    /**
     * In case the recipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<recipeUpdateInput, recipeUncheckedUpdateInput>;
  };

  /**
   * recipe delete
   */
  export type recipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recipeInclude<ExtArgs> | null;
    /**
     * Filter which recipe to delete.
     */
    where: recipeWhereUniqueInput;
  };

  /**
   * recipe deleteMany
   */
  export type recipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recipes to delete
     */
    where?: recipeWhereInput;
  };

  /**
   * recipe.favorite
   */
  export type recipe$favoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoriteInclude<ExtArgs> | null;
    where?: favoriteWhereInput;
    orderBy?: favoriteOrderByWithRelationInput | favoriteOrderByWithRelationInput[];
    cursor?: favoriteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[];
  };

  /**
   * recipe.ingredient
   */
  export type recipe$ingredientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ingredientInclude<ExtArgs> | null;
    where?: ingredientWhereInput;
    orderBy?: ingredientOrderByWithRelationInput | ingredientOrderByWithRelationInput[];
    cursor?: ingredientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[];
  };

  /**
   * recipe without action
   */
  export type recipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recipeInclude<ExtArgs> | null;
  };

  /**
   * Model restaurant
   */

  export type AggregateRestaurant = {
    _count: RestaurantCountAggregateOutputType | null;
    _min: RestaurantMinAggregateOutputType | null;
    _max: RestaurantMaxAggregateOutputType | null;
  };

  export type RestaurantMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type RestaurantMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type RestaurantCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    city: number;
    state: number;
    zip_code: number;
    name: number;
    created_at: number;
    updated_at: number;
    tenant_id: number;
    _all: number;
  };

  export type RestaurantMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type RestaurantMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type RestaurantCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type RestaurantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which restaurant to aggregate.
     */
    where?: restaurantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantOrderByWithRelationInput | restaurantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: restaurantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` restaurants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned restaurants
     **/
    _count?: true | RestaurantCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RestaurantMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RestaurantMaxAggregateInputType;
  };

  export type GetRestaurantAggregateType<T extends RestaurantAggregateArgs> = {
    [P in keyof T & keyof AggregateRestaurant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurant[P]>
      : GetScalarType<T[P], AggregateRestaurant[P]>;
  };

  export type restaurantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: restaurantWhereInput;
    orderBy?: restaurantOrderByWithAggregationInput | restaurantOrderByWithAggregationInput[];
    by: RestaurantScalarFieldEnum[] | RestaurantScalarFieldEnum;
    having?: restaurantScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RestaurantCountAggregateInputType | true;
    _min?: RestaurantMinAggregateInputType;
    _max?: RestaurantMaxAggregateInputType;
  };

  export type RestaurantGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    tenant_id: string;
    _count: RestaurantCountAggregateOutputType | null;
    _min: RestaurantMinAggregateOutputType | null;
    _max: RestaurantMaxAggregateOutputType | null;
  };

  type GetRestaurantGroupByPayload<T extends restaurantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestaurantGroupByOutputType, T['by']> & {
        [P in keyof T & keyof RestaurantGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
          : GetScalarType<T[P], RestaurantGroupByOutputType[P]>;
      }
    >
  >;

  export type restaurantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        address?: boolean;
        city?: boolean;
        state?: boolean;
        zip_code?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        tenant_id?: boolean;
        recipe?: boolean | restaurant$recipeArgs<ExtArgs>;
        review?: boolean | restaurant$reviewArgs<ExtArgs>;
        _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['restaurant']
    >;

  export type restaurantSelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    city?: boolean;
    state?: boolean;
    zip_code?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    tenant_id?: boolean;
  };

  export type restaurantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | restaurant$recipeArgs<ExtArgs>;
    review?: boolean | restaurant$reviewArgs<ExtArgs>;
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $restaurantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'restaurant';
    objects: {
      recipe: Prisma.$recipePayload<ExtArgs>[];
      review: Prisma.$reviewPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        city: string | null;
        state: string | null;
        zip_code: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        tenant_id: string;
      },
      ExtArgs['result']['restaurant']
    >;
    composites: {};
  };

  type restaurantGetPayload<S extends boolean | null | undefined | restaurantDefaultArgs> = $Result.GetResult<
    Prisma.$restaurantPayload,
    S
  >;

  type restaurantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    restaurantFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: RestaurantCountAggregateInputType | true;
  };

  export interface restaurantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['restaurant']; meta: { name: 'restaurant' } };
    /**
     * Find zero or one Restaurant that matches the filter.
     * @param {restaurantFindUniqueArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends restaurantFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, restaurantFindUniqueArgs<ExtArgs>>,
    ): Prisma__restaurantClient<
      $Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Restaurant that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {restaurantFindUniqueOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends restaurantFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, restaurantFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__restaurantClient<
      $Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Restaurant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantFindFirstArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends restaurantFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, restaurantFindFirstArgs<ExtArgs>>,
    ): Prisma__restaurantClient<
      $Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Restaurant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantFindFirstOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends restaurantFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, restaurantFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__restaurantClient<
      $Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restaurants
     * const restaurants = await prisma.restaurant.findMany()
     *
     * // Get first 10 Restaurants
     * const restaurants = await prisma.restaurant.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends restaurantFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, restaurantFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Restaurant.
     * @param {restaurantCreateArgs} args - Arguments to create a Restaurant.
     * @example
     * // Create one Restaurant
     * const Restaurant = await prisma.restaurant.create({
     *   data: {
     *     // ... data to create a Restaurant
     *   }
     * })
     *
     **/
    create<T extends restaurantCreateArgs<ExtArgs>>(
      args: SelectSubset<T, restaurantCreateArgs<ExtArgs>>,
    ): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Restaurants.
     *     @param {restaurantCreateManyArgs} args - Arguments to create many Restaurants.
     *     @example
     *     // Create many Restaurants
     *     const restaurant = await prisma.restaurant.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends restaurantCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, restaurantCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Restaurant.
     * @param {restaurantDeleteArgs} args - Arguments to delete one Restaurant.
     * @example
     * // Delete one Restaurant
     * const Restaurant = await prisma.restaurant.delete({
     *   where: {
     *     // ... filter to delete one Restaurant
     *   }
     * })
     *
     **/
    delete<T extends restaurantDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, restaurantDeleteArgs<ExtArgs>>,
    ): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Restaurant.
     * @param {restaurantUpdateArgs} args - Arguments to update one Restaurant.
     * @example
     * // Update one Restaurant
     * const restaurant = await prisma.restaurant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends restaurantUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, restaurantUpdateArgs<ExtArgs>>,
    ): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Restaurants.
     * @param {restaurantDeleteManyArgs} args - Arguments to filter Restaurants to delete.
     * @example
     * // Delete a few Restaurants
     * const { count } = await prisma.restaurant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends restaurantDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, restaurantDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restaurants
     * const restaurant = await prisma.restaurant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends restaurantUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, restaurantUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Restaurant.
     * @param {restaurantUpsertArgs} args - Arguments to update or create a Restaurant.
     * @example
     * // Update or create a Restaurant
     * const restaurant = await prisma.restaurant.upsert({
     *   create: {
     *     // ... data to create a Restaurant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restaurant we want to update
     *   }
     * })
     **/
    upsert<T extends restaurantUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, restaurantUpsertArgs<ExtArgs>>,
    ): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantCountArgs} args - Arguments to filter Restaurants to count.
     * @example
     * // Count the number of Restaurants
     * const count = await prisma.restaurant.count({
     *   where: {
     *     // ... the filter for the Restaurants we want to count
     *   }
     * })
     **/
    count<T extends restaurantCountArgs>(
      args?: Subset<T, restaurantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RestaurantAggregateArgs>(
      args: Subset<T, RestaurantAggregateArgs>,
    ): Prisma.PrismaPromise<GetRestaurantAggregateType<T>>;

    /**
     * Group by Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantGroupByArgs} args - Group by arguments.
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
      T extends restaurantGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: restaurantGroupByArgs['orderBy'] }
        : { orderBy?: restaurantGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, restaurantGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetRestaurantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the restaurant model
     */
    readonly fields: restaurantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for restaurant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__restaurantClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    recipe<T extends restaurant$recipeArgs<ExtArgs> = {}>(
      args?: Subset<T, restaurant$recipeArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, 'findMany'> | Null>;

    review<T extends restaurant$reviewArgs<ExtArgs> = {}>(
      args?: Subset<T, restaurant$reviewArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the restaurant model
   */
  interface restaurantFieldRefs {
    readonly id: FieldRef<'restaurant', 'String'>;
    readonly description: FieldRef<'restaurant', 'String'>;
    readonly address: FieldRef<'restaurant', 'String'>;
    readonly city: FieldRef<'restaurant', 'String'>;
    readonly state: FieldRef<'restaurant', 'String'>;
    readonly zip_code: FieldRef<'restaurant', 'String'>;
    readonly name: FieldRef<'restaurant', 'String'>;
    readonly created_at: FieldRef<'restaurant', 'DateTime'>;
    readonly updated_at: FieldRef<'restaurant', 'DateTime'>;
    readonly tenant_id: FieldRef<'restaurant', 'String'>;
  }

  // Custom InputTypes

  /**
   * restaurant findUnique
   */
  export type restaurantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: restaurantInclude<ExtArgs> | null;
    /**
     * Filter, which restaurant to fetch.
     */
    where: restaurantWhereUniqueInput;
  };

  /**
   * restaurant findUniqueOrThrow
   */
  export type restaurantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: restaurantInclude<ExtArgs> | null;
    /**
     * Filter, which restaurant to fetch.
     */
    where: restaurantWhereUniqueInput;
  };

  /**
   * restaurant findFirst
   */
  export type restaurantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: restaurantInclude<ExtArgs> | null;
    /**
     * Filter, which restaurant to fetch.
     */
    where?: restaurantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantOrderByWithRelationInput | restaurantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for restaurants.
     */
    cursor?: restaurantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` restaurants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[];
  };

  /**
   * restaurant findFirstOrThrow
   */
  export type restaurantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: restaurantInclude<ExtArgs> | null;
    /**
     * Filter, which restaurant to fetch.
     */
    where?: restaurantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantOrderByWithRelationInput | restaurantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for restaurants.
     */
    cursor?: restaurantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` restaurants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[];
  };

  /**
   * restaurant findMany
   */
  export type restaurantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: restaurantInclude<ExtArgs> | null;
    /**
     * Filter, which restaurants to fetch.
     */
    where?: restaurantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantOrderByWithRelationInput | restaurantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing restaurants.
     */
    cursor?: restaurantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` restaurants.
     */
    skip?: number;
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[];
  };

  /**
   * restaurant create
   */
  export type restaurantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: restaurantInclude<ExtArgs> | null;
    /**
     * The data needed to create a restaurant.
     */
    data: XOR<restaurantCreateInput, restaurantUncheckedCreateInput>;
  };

  /**
   * restaurant createMany
   */
  export type restaurantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many restaurants.
     */
    data: restaurantCreateManyInput | restaurantCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * restaurant update
   */
  export type restaurantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: restaurantInclude<ExtArgs> | null;
    /**
     * The data needed to update a restaurant.
     */
    data: XOR<restaurantUpdateInput, restaurantUncheckedUpdateInput>;
    /**
     * Choose, which restaurant to update.
     */
    where: restaurantWhereUniqueInput;
  };

  /**
   * restaurant updateMany
   */
  export type restaurantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update restaurants.
     */
    data: XOR<restaurantUpdateManyMutationInput, restaurantUncheckedUpdateManyInput>;
    /**
     * Filter which restaurants to update
     */
    where?: restaurantWhereInput;
  };

  /**
   * restaurant upsert
   */
  export type restaurantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: restaurantInclude<ExtArgs> | null;
    /**
     * The filter to search for the restaurant to update in case it exists.
     */
    where: restaurantWhereUniqueInput;
    /**
     * In case the restaurant found by the `where` argument doesn't exist, create a new restaurant with this data.
     */
    create: XOR<restaurantCreateInput, restaurantUncheckedCreateInput>;
    /**
     * In case the restaurant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<restaurantUpdateInput, restaurantUncheckedUpdateInput>;
  };

  /**
   * restaurant delete
   */
  export type restaurantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: restaurantInclude<ExtArgs> | null;
    /**
     * Filter which restaurant to delete.
     */
    where: restaurantWhereUniqueInput;
  };

  /**
   * restaurant deleteMany
   */
  export type restaurantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which restaurants to delete
     */
    where?: restaurantWhereInput;
  };

  /**
   * restaurant.recipe
   */
  export type restaurant$recipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recipeInclude<ExtArgs> | null;
    where?: recipeWhereInput;
    orderBy?: recipeOrderByWithRelationInput | recipeOrderByWithRelationInput[];
    cursor?: recipeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[];
  };

  /**
   * restaurant.review
   */
  export type restaurant$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    where?: reviewWhereInput;
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    cursor?: reviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * restaurant without action
   */
  export type restaurantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: restaurantInclude<ExtArgs> | null;
  };

  /**
   * Model review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null;
    _avg: ReviewAvgAggregateOutputType | null;
    _sum: ReviewSumAggregateOutputType | null;
    _min: ReviewMinAggregateOutputType | null;
    _max: ReviewMaxAggregateOutputType | null;
  };

  export type ReviewAvgAggregateOutputType = {
    rating: number | null;
  };

  export type ReviewSumAggregateOutputType = {
    rating: number | null;
  };

  export type ReviewMinAggregateOutputType = {
    id: string | null;
    rating: number | null;
    comment: string | null;
    date_posted: Date | null;
    user_id: string | null;
    restaurant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ReviewMaxAggregateOutputType = {
    id: string | null;
    rating: number | null;
    comment: string | null;
    date_posted: Date | null;
    user_id: string | null;
    restaurant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ReviewCountAggregateOutputType = {
    id: number;
    rating: number;
    comment: number;
    date_posted: number;
    user_id: number;
    restaurant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ReviewAvgAggregateInputType = {
    rating?: true;
  };

  export type ReviewSumAggregateInputType = {
    rating?: true;
  };

  export type ReviewMinAggregateInputType = {
    id?: true;
    rating?: true;
    comment?: true;
    date_posted?: true;
    user_id?: true;
    restaurant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ReviewMaxAggregateInputType = {
    id?: true;
    rating?: true;
    comment?: true;
    date_posted?: true;
    user_id?: true;
    restaurant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ReviewCountAggregateInputType = {
    id?: true;
    rating?: true;
    comment?: true;
    date_posted?: true;
    user_id?: true;
    restaurant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which review to aggregate.
     */
    where?: reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned reviews
     **/
    _count?: true | ReviewCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ReviewAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ReviewSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ReviewMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ReviewMaxAggregateInputType;
  };

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
    [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>;
  };

  export type reviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput;
    orderBy?: reviewOrderByWithAggregationInput | reviewOrderByWithAggregationInput[];
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum;
    having?: reviewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReviewCountAggregateInputType | true;
    _avg?: ReviewAvgAggregateInputType;
    _sum?: ReviewSumAggregateInputType;
    _min?: ReviewMinAggregateInputType;
    _max?: ReviewMaxAggregateInputType;
  };

  export type ReviewGroupByOutputType = {
    id: string;
    rating: number;
    comment: string;
    date_posted: Date;
    user_id: string;
    restaurant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ReviewCountAggregateOutputType | null;
    _avg: ReviewAvgAggregateOutputType | null;
    _sum: ReviewSumAggregateOutputType | null;
    _min: ReviewMinAggregateOutputType | null;
    _max: ReviewMaxAggregateOutputType | null;
  };

  type GetReviewGroupByPayload<T extends reviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ReviewGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
          : GetScalarType<T[P], ReviewGroupByOutputType[P]>;
      }
    >
  >;

  export type reviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      rating?: boolean;
      comment?: boolean;
      date_posted?: boolean;
      user_id?: boolean;
      restaurant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      restaurant?: boolean | restaurantDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['review']
  >;

  export type reviewSelectScalar = {
    id?: boolean;
    rating?: boolean;
    comment?: boolean;
    date_posted?: boolean;
    user_id?: boolean;
    restaurant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type reviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | restaurantDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $reviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'review';
    objects: {
      restaurant: Prisma.$restaurantPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        rating: number;
        comment: string;
        date_posted: Date;
        user_id: string;
        restaurant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['review']
    >;
    composites: {};
  };

  type reviewGetPayload<S extends boolean | null | undefined | reviewDefaultArgs> = $Result.GetResult<
    Prisma.$reviewPayload,
    S
  >;

  type reviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    reviewFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ReviewCountAggregateInputType | true;
  };

  export interface reviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['review']; meta: { name: 'review' } };
    /**
     * Find zero or one Review that matches the filter.
     * @param {reviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends reviewFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, reviewFindUniqueArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Review that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {reviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends reviewFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends reviewFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindFirstArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends reviewFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     *
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends reviewFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Review.
     * @param {reviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     *
     **/
    create<T extends reviewCreateArgs<ExtArgs>>(
      args: SelectSubset<T, reviewCreateArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Reviews.
     *     @param {reviewCreateManyArgs} args - Arguments to create many Reviews.
     *     @example
     *     // Create many Reviews
     *     const review = await prisma.review.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends reviewCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Review.
     * @param {reviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     *
     **/
    delete<T extends reviewDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, reviewDeleteArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Review.
     * @param {reviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends reviewUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, reviewUpdateArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Reviews.
     * @param {reviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends reviewDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends reviewUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, reviewUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Review.
     * @param {reviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     **/
    upsert<T extends reviewUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, reviewUpsertArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
     **/
    count<T extends reviewCountArgs>(
      args?: Subset<T, reviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(
      args: Subset<T, ReviewAggregateArgs>,
    ): Prisma.PrismaPromise<GetReviewAggregateType<T>>;

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewGroupByArgs} args - Group by arguments.
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
      T extends reviewGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewGroupByArgs['orderBy'] }
        : { orderBy?: reviewGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, reviewGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the review model
     */
    readonly fields: reviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    restaurant<T extends restaurantDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, restaurantDefaultArgs<ExtArgs>>,
    ): Prisma__restaurantClient<
      $Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the review model
   */
  interface reviewFieldRefs {
    readonly id: FieldRef<'review', 'String'>;
    readonly rating: FieldRef<'review', 'Int'>;
    readonly comment: FieldRef<'review', 'String'>;
    readonly date_posted: FieldRef<'review', 'DateTime'>;
    readonly user_id: FieldRef<'review', 'String'>;
    readonly restaurant_id: FieldRef<'review', 'String'>;
    readonly created_at: FieldRef<'review', 'DateTime'>;
    readonly updated_at: FieldRef<'review', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * review findUnique
   */
  export type reviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput;
  };

  /**
   * review findUniqueOrThrow
   */
  export type reviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput;
  };

  /**
   * review findFirst
   */
  export type reviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * review findFirstOrThrow
   */
  export type reviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * review findMany
   */
  export type reviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing reviews.
     */
    cursor?: reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * review create
   */
  export type reviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * The data needed to create a review.
     */
    data: XOR<reviewCreateInput, reviewUncheckedCreateInput>;
  };

  /**
   * review createMany
   */
  export type reviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewCreateManyInput | reviewCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * review update
   */
  export type reviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * The data needed to update a review.
     */
    data: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>;
    /**
     * Choose, which review to update.
     */
    where: reviewWhereUniqueInput;
  };

  /**
   * review updateMany
   */
  export type reviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyInput>;
    /**
     * Filter which reviews to update
     */
    where?: reviewWhereInput;
  };

  /**
   * review upsert
   */
  export type reviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * The filter to search for the review to update in case it exists.
     */
    where: reviewWhereUniqueInput;
    /**
     * In case the review found by the `where` argument doesn't exist, create a new review with this data.
     */
    create: XOR<reviewCreateInput, reviewUncheckedCreateInput>;
    /**
     * In case the review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>;
  };

  /**
   * review delete
   */
  export type reviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter which review to delete.
     */
    where: reviewWhereUniqueInput;
  };

  /**
   * review deleteMany
   */
  export type reviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewWhereInput;
  };

  /**
   * review without action
   */
  export type reviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      favorite?: boolean | user$favoriteArgs<ExtArgs>;
      review?: boolean | user$reviewArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favorite?: boolean | user$favoriteArgs<ExtArgs>;
    review?: boolean | user$reviewArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      favorite: Prisma.$favoritePayload<ExtArgs>[];
      review: Prisma.$reviewPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
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
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    favorite<T extends user$favoriteArgs<ExtArgs> = {}>(
      args?: Subset<T, user$favoriteArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, 'findMany'> | Null>;

    review<T extends user$reviewArgs<ExtArgs> = {}>(
      args?: Subset<T, user$reviewArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.favorite
   */
  export type user$favoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoriteInclude<ExtArgs> | null;
    where?: favoriteWhereInput;
    orderBy?: favoriteOrderByWithRelationInput | favoriteOrderByWithRelationInput[];
    cursor?: favoriteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[];
  };

  /**
   * user.review
   */
  export type user$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    where?: reviewWhereInput;
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    cursor?: reviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const FavoriteScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    recipe_id: 'recipe_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum];

  export const IngredientScalarFieldEnum: {
    id: 'id';
    name: 'name';
    quantity: 'quantity';
    unit: 'unit';
    calories: 'calories';
    recipe_id: 'recipe_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type IngredientScalarFieldEnum = (typeof IngredientScalarFieldEnum)[keyof typeof IngredientScalarFieldEnum];

  export const RecipeScalarFieldEnum: {
    id: 'id';
    title: 'title';
    ingredients: 'ingredients';
    instructions: 'instructions';
    prep_time: 'prep_time';
    cook_time: 'cook_time';
    restaurant_id: 'restaurant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type RecipeScalarFieldEnum = (typeof RecipeScalarFieldEnum)[keyof typeof RecipeScalarFieldEnum];

  export const RestaurantScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    city: 'city';
    state: 'state';
    zip_code: 'zip_code';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    tenant_id: 'tenant_id';
  };

  export type RestaurantScalarFieldEnum = (typeof RestaurantScalarFieldEnum)[keyof typeof RestaurantScalarFieldEnum];

  export const ReviewScalarFieldEnum: {
    id: 'id';
    rating: 'rating';
    comment: 'comment';
    date_posted: 'date_posted';
    user_id: 'user_id';
    restaurant_id: 'restaurant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type favoriteWhereInput = {
    AND?: favoriteWhereInput | favoriteWhereInput[];
    OR?: favoriteWhereInput[];
    NOT?: favoriteWhereInput | favoriteWhereInput[];
    id?: UuidFilter<'favorite'> | string;
    user_id?: UuidFilter<'favorite'> | string;
    recipe_id?: UuidFilter<'favorite'> | string;
    created_at?: DateTimeFilter<'favorite'> | Date | string;
    updated_at?: DateTimeFilter<'favorite'> | Date | string;
    recipe?: XOR<RecipeRelationFilter, recipeWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type favoriteOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    recipe_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    recipe?: recipeOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type favoriteWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: favoriteWhereInput | favoriteWhereInput[];
      OR?: favoriteWhereInput[];
      NOT?: favoriteWhereInput | favoriteWhereInput[];
      user_id?: UuidFilter<'favorite'> | string;
      recipe_id?: UuidFilter<'favorite'> | string;
      created_at?: DateTimeFilter<'favorite'> | Date | string;
      updated_at?: DateTimeFilter<'favorite'> | Date | string;
      recipe?: XOR<RecipeRelationFilter, recipeWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type favoriteOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    recipe_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: favoriteCountOrderByAggregateInput;
    _max?: favoriteMaxOrderByAggregateInput;
    _min?: favoriteMinOrderByAggregateInput;
  };

  export type favoriteScalarWhereWithAggregatesInput = {
    AND?: favoriteScalarWhereWithAggregatesInput | favoriteScalarWhereWithAggregatesInput[];
    OR?: favoriteScalarWhereWithAggregatesInput[];
    NOT?: favoriteScalarWhereWithAggregatesInput | favoriteScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'favorite'> | string;
    user_id?: UuidWithAggregatesFilter<'favorite'> | string;
    recipe_id?: UuidWithAggregatesFilter<'favorite'> | string;
    created_at?: DateTimeWithAggregatesFilter<'favorite'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'favorite'> | Date | string;
  };

  export type ingredientWhereInput = {
    AND?: ingredientWhereInput | ingredientWhereInput[];
    OR?: ingredientWhereInput[];
    NOT?: ingredientWhereInput | ingredientWhereInput[];
    id?: UuidFilter<'ingredient'> | string;
    name?: StringFilter<'ingredient'> | string;
    quantity?: IntFilter<'ingredient'> | number;
    unit?: StringFilter<'ingredient'> | string;
    calories?: IntFilter<'ingredient'> | number;
    recipe_id?: UuidFilter<'ingredient'> | string;
    created_at?: DateTimeFilter<'ingredient'> | Date | string;
    updated_at?: DateTimeFilter<'ingredient'> | Date | string;
    recipe?: XOR<RecipeRelationFilter, recipeWhereInput>;
  };

  export type ingredientOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    quantity?: SortOrder;
    unit?: SortOrder;
    calories?: SortOrder;
    recipe_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    recipe?: recipeOrderByWithRelationInput;
  };

  export type ingredientWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ingredientWhereInput | ingredientWhereInput[];
      OR?: ingredientWhereInput[];
      NOT?: ingredientWhereInput | ingredientWhereInput[];
      name?: StringFilter<'ingredient'> | string;
      quantity?: IntFilter<'ingredient'> | number;
      unit?: StringFilter<'ingredient'> | string;
      calories?: IntFilter<'ingredient'> | number;
      recipe_id?: UuidFilter<'ingredient'> | string;
      created_at?: DateTimeFilter<'ingredient'> | Date | string;
      updated_at?: DateTimeFilter<'ingredient'> | Date | string;
      recipe?: XOR<RecipeRelationFilter, recipeWhereInput>;
    },
    'id'
  >;

  export type ingredientOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    quantity?: SortOrder;
    unit?: SortOrder;
    calories?: SortOrder;
    recipe_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: ingredientCountOrderByAggregateInput;
    _avg?: ingredientAvgOrderByAggregateInput;
    _max?: ingredientMaxOrderByAggregateInput;
    _min?: ingredientMinOrderByAggregateInput;
    _sum?: ingredientSumOrderByAggregateInput;
  };

  export type ingredientScalarWhereWithAggregatesInput = {
    AND?: ingredientScalarWhereWithAggregatesInput | ingredientScalarWhereWithAggregatesInput[];
    OR?: ingredientScalarWhereWithAggregatesInput[];
    NOT?: ingredientScalarWhereWithAggregatesInput | ingredientScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'ingredient'> | string;
    name?: StringWithAggregatesFilter<'ingredient'> | string;
    quantity?: IntWithAggregatesFilter<'ingredient'> | number;
    unit?: StringWithAggregatesFilter<'ingredient'> | string;
    calories?: IntWithAggregatesFilter<'ingredient'> | number;
    recipe_id?: UuidWithAggregatesFilter<'ingredient'> | string;
    created_at?: DateTimeWithAggregatesFilter<'ingredient'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'ingredient'> | Date | string;
  };

  export type recipeWhereInput = {
    AND?: recipeWhereInput | recipeWhereInput[];
    OR?: recipeWhereInput[];
    NOT?: recipeWhereInput | recipeWhereInput[];
    id?: UuidFilter<'recipe'> | string;
    title?: StringFilter<'recipe'> | string;
    ingredients?: StringFilter<'recipe'> | string;
    instructions?: StringFilter<'recipe'> | string;
    prep_time?: IntFilter<'recipe'> | number;
    cook_time?: IntFilter<'recipe'> | number;
    restaurant_id?: UuidFilter<'recipe'> | string;
    created_at?: DateTimeFilter<'recipe'> | Date | string;
    updated_at?: DateTimeFilter<'recipe'> | Date | string;
    favorite?: FavoriteListRelationFilter;
    ingredient?: IngredientListRelationFilter;
    restaurant?: XOR<RestaurantRelationFilter, restaurantWhereInput>;
  };

  export type recipeOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    ingredients?: SortOrder;
    instructions?: SortOrder;
    prep_time?: SortOrder;
    cook_time?: SortOrder;
    restaurant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    favorite?: favoriteOrderByRelationAggregateInput;
    ingredient?: ingredientOrderByRelationAggregateInput;
    restaurant?: restaurantOrderByWithRelationInput;
  };

  export type recipeWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: recipeWhereInput | recipeWhereInput[];
      OR?: recipeWhereInput[];
      NOT?: recipeWhereInput | recipeWhereInput[];
      title?: StringFilter<'recipe'> | string;
      ingredients?: StringFilter<'recipe'> | string;
      instructions?: StringFilter<'recipe'> | string;
      prep_time?: IntFilter<'recipe'> | number;
      cook_time?: IntFilter<'recipe'> | number;
      restaurant_id?: UuidFilter<'recipe'> | string;
      created_at?: DateTimeFilter<'recipe'> | Date | string;
      updated_at?: DateTimeFilter<'recipe'> | Date | string;
      favorite?: FavoriteListRelationFilter;
      ingredient?: IngredientListRelationFilter;
      restaurant?: XOR<RestaurantRelationFilter, restaurantWhereInput>;
    },
    'id'
  >;

  export type recipeOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    ingredients?: SortOrder;
    instructions?: SortOrder;
    prep_time?: SortOrder;
    cook_time?: SortOrder;
    restaurant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: recipeCountOrderByAggregateInput;
    _avg?: recipeAvgOrderByAggregateInput;
    _max?: recipeMaxOrderByAggregateInput;
    _min?: recipeMinOrderByAggregateInput;
    _sum?: recipeSumOrderByAggregateInput;
  };

  export type recipeScalarWhereWithAggregatesInput = {
    AND?: recipeScalarWhereWithAggregatesInput | recipeScalarWhereWithAggregatesInput[];
    OR?: recipeScalarWhereWithAggregatesInput[];
    NOT?: recipeScalarWhereWithAggregatesInput | recipeScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'recipe'> | string;
    title?: StringWithAggregatesFilter<'recipe'> | string;
    ingredients?: StringWithAggregatesFilter<'recipe'> | string;
    instructions?: StringWithAggregatesFilter<'recipe'> | string;
    prep_time?: IntWithAggregatesFilter<'recipe'> | number;
    cook_time?: IntWithAggregatesFilter<'recipe'> | number;
    restaurant_id?: UuidWithAggregatesFilter<'recipe'> | string;
    created_at?: DateTimeWithAggregatesFilter<'recipe'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'recipe'> | Date | string;
  };

  export type restaurantWhereInput = {
    AND?: restaurantWhereInput | restaurantWhereInput[];
    OR?: restaurantWhereInput[];
    NOT?: restaurantWhereInput | restaurantWhereInput[];
    id?: UuidFilter<'restaurant'> | string;
    description?: StringNullableFilter<'restaurant'> | string | null;
    address?: StringNullableFilter<'restaurant'> | string | null;
    city?: StringNullableFilter<'restaurant'> | string | null;
    state?: StringNullableFilter<'restaurant'> | string | null;
    zip_code?: StringNullableFilter<'restaurant'> | string | null;
    name?: StringFilter<'restaurant'> | string;
    created_at?: DateTimeFilter<'restaurant'> | Date | string;
    updated_at?: DateTimeFilter<'restaurant'> | Date | string;
    tenant_id?: StringFilter<'restaurant'> | string;
    recipe?: RecipeListRelationFilter;
    review?: ReviewListRelationFilter;
  };

  export type restaurantOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip_code?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    recipe?: recipeOrderByRelationAggregateInput;
    review?: reviewOrderByRelationAggregateInput;
  };

  export type restaurantWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: restaurantWhereInput | restaurantWhereInput[];
      OR?: restaurantWhereInput[];
      NOT?: restaurantWhereInput | restaurantWhereInput[];
      description?: StringNullableFilter<'restaurant'> | string | null;
      address?: StringNullableFilter<'restaurant'> | string | null;
      city?: StringNullableFilter<'restaurant'> | string | null;
      state?: StringNullableFilter<'restaurant'> | string | null;
      zip_code?: StringNullableFilter<'restaurant'> | string | null;
      name?: StringFilter<'restaurant'> | string;
      created_at?: DateTimeFilter<'restaurant'> | Date | string;
      updated_at?: DateTimeFilter<'restaurant'> | Date | string;
      tenant_id?: StringFilter<'restaurant'> | string;
      recipe?: RecipeListRelationFilter;
      review?: ReviewListRelationFilter;
    },
    'id'
  >;

  export type restaurantOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip_code?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    _count?: restaurantCountOrderByAggregateInput;
    _max?: restaurantMaxOrderByAggregateInput;
    _min?: restaurantMinOrderByAggregateInput;
  };

  export type restaurantScalarWhereWithAggregatesInput = {
    AND?: restaurantScalarWhereWithAggregatesInput | restaurantScalarWhereWithAggregatesInput[];
    OR?: restaurantScalarWhereWithAggregatesInput[];
    NOT?: restaurantScalarWhereWithAggregatesInput | restaurantScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'restaurant'> | string;
    description?: StringNullableWithAggregatesFilter<'restaurant'> | string | null;
    address?: StringNullableWithAggregatesFilter<'restaurant'> | string | null;
    city?: StringNullableWithAggregatesFilter<'restaurant'> | string | null;
    state?: StringNullableWithAggregatesFilter<'restaurant'> | string | null;
    zip_code?: StringNullableWithAggregatesFilter<'restaurant'> | string | null;
    name?: StringWithAggregatesFilter<'restaurant'> | string;
    created_at?: DateTimeWithAggregatesFilter<'restaurant'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'restaurant'> | Date | string;
    tenant_id?: StringWithAggregatesFilter<'restaurant'> | string;
  };

  export type reviewWhereInput = {
    AND?: reviewWhereInput | reviewWhereInput[];
    OR?: reviewWhereInput[];
    NOT?: reviewWhereInput | reviewWhereInput[];
    id?: UuidFilter<'review'> | string;
    rating?: IntFilter<'review'> | number;
    comment?: StringFilter<'review'> | string;
    date_posted?: DateTimeFilter<'review'> | Date | string;
    user_id?: UuidFilter<'review'> | string;
    restaurant_id?: UuidFilter<'review'> | string;
    created_at?: DateTimeFilter<'review'> | Date | string;
    updated_at?: DateTimeFilter<'review'> | Date | string;
    restaurant?: XOR<RestaurantRelationFilter, restaurantWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type reviewOrderByWithRelationInput = {
    id?: SortOrder;
    rating?: SortOrder;
    comment?: SortOrder;
    date_posted?: SortOrder;
    user_id?: SortOrder;
    restaurant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    restaurant?: restaurantOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type reviewWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: reviewWhereInput | reviewWhereInput[];
      OR?: reviewWhereInput[];
      NOT?: reviewWhereInput | reviewWhereInput[];
      rating?: IntFilter<'review'> | number;
      comment?: StringFilter<'review'> | string;
      date_posted?: DateTimeFilter<'review'> | Date | string;
      user_id?: UuidFilter<'review'> | string;
      restaurant_id?: UuidFilter<'review'> | string;
      created_at?: DateTimeFilter<'review'> | Date | string;
      updated_at?: DateTimeFilter<'review'> | Date | string;
      restaurant?: XOR<RestaurantRelationFilter, restaurantWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type reviewOrderByWithAggregationInput = {
    id?: SortOrder;
    rating?: SortOrder;
    comment?: SortOrder;
    date_posted?: SortOrder;
    user_id?: SortOrder;
    restaurant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: reviewCountOrderByAggregateInput;
    _avg?: reviewAvgOrderByAggregateInput;
    _max?: reviewMaxOrderByAggregateInput;
    _min?: reviewMinOrderByAggregateInput;
    _sum?: reviewSumOrderByAggregateInput;
  };

  export type reviewScalarWhereWithAggregatesInput = {
    AND?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[];
    OR?: reviewScalarWhereWithAggregatesInput[];
    NOT?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'review'> | string;
    rating?: IntWithAggregatesFilter<'review'> | number;
    comment?: StringWithAggregatesFilter<'review'> | string;
    date_posted?: DateTimeWithAggregatesFilter<'review'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'review'> | string;
    restaurant_id?: UuidWithAggregatesFilter<'review'> | string;
    created_at?: DateTimeWithAggregatesFilter<'review'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'review'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    favorite?: FavoriteListRelationFilter;
    review?: ReviewListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    favorite?: favoriteOrderByRelationAggregateInput;
    review?: reviewOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      favorite?: FavoriteListRelationFilter;
      review?: ReviewListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type favoriteCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    recipe: recipeCreateNestedOneWithoutFavoriteInput;
    user: userCreateNestedOneWithoutFavoriteInput;
  };

  export type favoriteUncheckedCreateInput = {
    id?: string;
    user_id: string;
    recipe_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type favoriteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    recipe?: recipeUpdateOneRequiredWithoutFavoriteNestedInput;
    user?: userUpdateOneRequiredWithoutFavoriteNestedInput;
  };

  export type favoriteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    recipe_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type favoriteCreateManyInput = {
    id?: string;
    user_id: string;
    recipe_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type favoriteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type favoriteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    recipe_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ingredientCreateInput = {
    id?: string;
    name: string;
    quantity: number;
    unit: string;
    calories: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    recipe: recipeCreateNestedOneWithoutIngredientInput;
  };

  export type ingredientUncheckedCreateInput = {
    id?: string;
    name: string;
    quantity: number;
    unit: string;
    calories: number;
    recipe_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ingredientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    unit?: StringFieldUpdateOperationsInput | string;
    calories?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    recipe?: recipeUpdateOneRequiredWithoutIngredientNestedInput;
  };

  export type ingredientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    unit?: StringFieldUpdateOperationsInput | string;
    calories?: IntFieldUpdateOperationsInput | number;
    recipe_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ingredientCreateManyInput = {
    id?: string;
    name: string;
    quantity: number;
    unit: string;
    calories: number;
    recipe_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ingredientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    unit?: StringFieldUpdateOperationsInput | string;
    calories?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ingredientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    unit?: StringFieldUpdateOperationsInput | string;
    calories?: IntFieldUpdateOperationsInput | number;
    recipe_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type recipeCreateInput = {
    id?: string;
    title: string;
    ingredients: string;
    instructions: string;
    prep_time: number;
    cook_time: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    favorite?: favoriteCreateNestedManyWithoutRecipeInput;
    ingredient?: ingredientCreateNestedManyWithoutRecipeInput;
    restaurant: restaurantCreateNestedOneWithoutRecipeInput;
  };

  export type recipeUncheckedCreateInput = {
    id?: string;
    title: string;
    ingredients: string;
    instructions: string;
    prep_time: number;
    cook_time: number;
    restaurant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    favorite?: favoriteUncheckedCreateNestedManyWithoutRecipeInput;
    ingredient?: ingredientUncheckedCreateNestedManyWithoutRecipeInput;
  };

  export type recipeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    ingredients?: StringFieldUpdateOperationsInput | string;
    instructions?: StringFieldUpdateOperationsInput | string;
    prep_time?: IntFieldUpdateOperationsInput | number;
    cook_time?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    favorite?: favoriteUpdateManyWithoutRecipeNestedInput;
    ingredient?: ingredientUpdateManyWithoutRecipeNestedInput;
    restaurant?: restaurantUpdateOneRequiredWithoutRecipeNestedInput;
  };

  export type recipeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    ingredients?: StringFieldUpdateOperationsInput | string;
    instructions?: StringFieldUpdateOperationsInput | string;
    prep_time?: IntFieldUpdateOperationsInput | number;
    cook_time?: IntFieldUpdateOperationsInput | number;
    restaurant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    favorite?: favoriteUncheckedUpdateManyWithoutRecipeNestedInput;
    ingredient?: ingredientUncheckedUpdateManyWithoutRecipeNestedInput;
  };

  export type recipeCreateManyInput = {
    id?: string;
    title: string;
    ingredients: string;
    instructions: string;
    prep_time: number;
    cook_time: number;
    restaurant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type recipeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    ingredients?: StringFieldUpdateOperationsInput | string;
    instructions?: StringFieldUpdateOperationsInput | string;
    prep_time?: IntFieldUpdateOperationsInput | number;
    cook_time?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type recipeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    ingredients?: StringFieldUpdateOperationsInput | string;
    instructions?: StringFieldUpdateOperationsInput | string;
    prep_time?: IntFieldUpdateOperationsInput | number;
    cook_time?: IntFieldUpdateOperationsInput | number;
    restaurant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type restaurantCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    recipe?: recipeCreateNestedManyWithoutRestaurantInput;
    review?: reviewCreateNestedManyWithoutRestaurantInput;
  };

  export type restaurantUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    recipe?: recipeUncheckedCreateNestedManyWithoutRestaurantInput;
    review?: reviewUncheckedCreateNestedManyWithoutRestaurantInput;
  };

  export type restaurantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    recipe?: recipeUpdateManyWithoutRestaurantNestedInput;
    review?: reviewUpdateManyWithoutRestaurantNestedInput;
  };

  export type restaurantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    recipe?: recipeUncheckedUpdateManyWithoutRestaurantNestedInput;
    review?: reviewUncheckedUpdateManyWithoutRestaurantNestedInput;
  };

  export type restaurantCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type restaurantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type restaurantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type reviewCreateInput = {
    id?: string;
    rating: number;
    comment: string;
    date_posted: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    restaurant: restaurantCreateNestedOneWithoutReviewInput;
    user: userCreateNestedOneWithoutReviewInput;
  };

  export type reviewUncheckedCreateInput = {
    id?: string;
    rating: number;
    comment: string;
    date_posted: Date | string;
    user_id: string;
    restaurant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: StringFieldUpdateOperationsInput | string;
    date_posted?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    restaurant?: restaurantUpdateOneRequiredWithoutReviewNestedInput;
    user?: userUpdateOneRequiredWithoutReviewNestedInput;
  };

  export type reviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: StringFieldUpdateOperationsInput | string;
    date_posted?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    restaurant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewCreateManyInput = {
    id?: string;
    rating: number;
    comment: string;
    date_posted: Date | string;
    user_id: string;
    restaurant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: StringFieldUpdateOperationsInput | string;
    date_posted?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: StringFieldUpdateOperationsInput | string;
    date_posted?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    restaurant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    favorite?: favoriteCreateNestedManyWithoutUserInput;
    review?: reviewCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    favorite?: favoriteUncheckedCreateNestedManyWithoutUserInput;
    review?: reviewUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    favorite?: favoriteUpdateManyWithoutUserNestedInput;
    review?: reviewUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    favorite?: favoriteUncheckedUpdateManyWithoutUserNestedInput;
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type RecipeRelationFilter = {
    is?: recipeWhereInput;
    isNot?: recipeWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type favoriteCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    recipe_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type favoriteMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    recipe_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type favoriteMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    recipe_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type ingredientCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    quantity?: SortOrder;
    unit?: SortOrder;
    calories?: SortOrder;
    recipe_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ingredientAvgOrderByAggregateInput = {
    quantity?: SortOrder;
    calories?: SortOrder;
  };

  export type ingredientMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    quantity?: SortOrder;
    unit?: SortOrder;
    calories?: SortOrder;
    recipe_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ingredientMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    quantity?: SortOrder;
    unit?: SortOrder;
    calories?: SortOrder;
    recipe_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ingredientSumOrderByAggregateInput = {
    quantity?: SortOrder;
    calories?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type FavoriteListRelationFilter = {
    every?: favoriteWhereInput;
    some?: favoriteWhereInput;
    none?: favoriteWhereInput;
  };

  export type IngredientListRelationFilter = {
    every?: ingredientWhereInput;
    some?: ingredientWhereInput;
    none?: ingredientWhereInput;
  };

  export type RestaurantRelationFilter = {
    is?: restaurantWhereInput;
    isNot?: restaurantWhereInput;
  };

  export type favoriteOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ingredientOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type recipeCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    ingredients?: SortOrder;
    instructions?: SortOrder;
    prep_time?: SortOrder;
    cook_time?: SortOrder;
    restaurant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type recipeAvgOrderByAggregateInput = {
    prep_time?: SortOrder;
    cook_time?: SortOrder;
  };

  export type recipeMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    ingredients?: SortOrder;
    instructions?: SortOrder;
    prep_time?: SortOrder;
    cook_time?: SortOrder;
    restaurant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type recipeMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    ingredients?: SortOrder;
    instructions?: SortOrder;
    prep_time?: SortOrder;
    cook_time?: SortOrder;
    restaurant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type recipeSumOrderByAggregateInput = {
    prep_time?: SortOrder;
    cook_time?: SortOrder;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type RecipeListRelationFilter = {
    every?: recipeWhereInput;
    some?: recipeWhereInput;
    none?: recipeWhereInput;
  };

  export type ReviewListRelationFilter = {
    every?: reviewWhereInput;
    some?: reviewWhereInput;
    none?: reviewWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type recipeOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type reviewOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type restaurantCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type restaurantMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type restaurantMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type reviewCountOrderByAggregateInput = {
    id?: SortOrder;
    rating?: SortOrder;
    comment?: SortOrder;
    date_posted?: SortOrder;
    user_id?: SortOrder;
    restaurant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type reviewAvgOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type reviewMaxOrderByAggregateInput = {
    id?: SortOrder;
    rating?: SortOrder;
    comment?: SortOrder;
    date_posted?: SortOrder;
    user_id?: SortOrder;
    restaurant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type reviewMinOrderByAggregateInput = {
    id?: SortOrder;
    rating?: SortOrder;
    comment?: SortOrder;
    date_posted?: SortOrder;
    user_id?: SortOrder;
    restaurant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type reviewSumOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type recipeCreateNestedOneWithoutFavoriteInput = {
    create?: XOR<recipeCreateWithoutFavoriteInput, recipeUncheckedCreateWithoutFavoriteInput>;
    connectOrCreate?: recipeCreateOrConnectWithoutFavoriteInput;
    connect?: recipeWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutFavoriteInput = {
    create?: XOR<userCreateWithoutFavoriteInput, userUncheckedCreateWithoutFavoriteInput>;
    connectOrCreate?: userCreateOrConnectWithoutFavoriteInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type recipeUpdateOneRequiredWithoutFavoriteNestedInput = {
    create?: XOR<recipeCreateWithoutFavoriteInput, recipeUncheckedCreateWithoutFavoriteInput>;
    connectOrCreate?: recipeCreateOrConnectWithoutFavoriteInput;
    upsert?: recipeUpsertWithoutFavoriteInput;
    connect?: recipeWhereUniqueInput;
    update?: XOR<
      XOR<recipeUpdateToOneWithWhereWithoutFavoriteInput, recipeUpdateWithoutFavoriteInput>,
      recipeUncheckedUpdateWithoutFavoriteInput
    >;
  };

  export type userUpdateOneRequiredWithoutFavoriteNestedInput = {
    create?: XOR<userCreateWithoutFavoriteInput, userUncheckedCreateWithoutFavoriteInput>;
    connectOrCreate?: userCreateOrConnectWithoutFavoriteInput;
    upsert?: userUpsertWithoutFavoriteInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutFavoriteInput, userUpdateWithoutFavoriteInput>,
      userUncheckedUpdateWithoutFavoriteInput
    >;
  };

  export type recipeCreateNestedOneWithoutIngredientInput = {
    create?: XOR<recipeCreateWithoutIngredientInput, recipeUncheckedCreateWithoutIngredientInput>;
    connectOrCreate?: recipeCreateOrConnectWithoutIngredientInput;
    connect?: recipeWhereUniqueInput;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type recipeUpdateOneRequiredWithoutIngredientNestedInput = {
    create?: XOR<recipeCreateWithoutIngredientInput, recipeUncheckedCreateWithoutIngredientInput>;
    connectOrCreate?: recipeCreateOrConnectWithoutIngredientInput;
    upsert?: recipeUpsertWithoutIngredientInput;
    connect?: recipeWhereUniqueInput;
    update?: XOR<
      XOR<recipeUpdateToOneWithWhereWithoutIngredientInput, recipeUpdateWithoutIngredientInput>,
      recipeUncheckedUpdateWithoutIngredientInput
    >;
  };

  export type favoriteCreateNestedManyWithoutRecipeInput = {
    create?:
      | XOR<favoriteCreateWithoutRecipeInput, favoriteUncheckedCreateWithoutRecipeInput>
      | favoriteCreateWithoutRecipeInput[]
      | favoriteUncheckedCreateWithoutRecipeInput[];
    connectOrCreate?: favoriteCreateOrConnectWithoutRecipeInput | favoriteCreateOrConnectWithoutRecipeInput[];
    createMany?: favoriteCreateManyRecipeInputEnvelope;
    connect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[];
  };

  export type ingredientCreateNestedManyWithoutRecipeInput = {
    create?:
      | XOR<ingredientCreateWithoutRecipeInput, ingredientUncheckedCreateWithoutRecipeInput>
      | ingredientCreateWithoutRecipeInput[]
      | ingredientUncheckedCreateWithoutRecipeInput[];
    connectOrCreate?: ingredientCreateOrConnectWithoutRecipeInput | ingredientCreateOrConnectWithoutRecipeInput[];
    createMany?: ingredientCreateManyRecipeInputEnvelope;
    connect?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[];
  };

  export type restaurantCreateNestedOneWithoutRecipeInput = {
    create?: XOR<restaurantCreateWithoutRecipeInput, restaurantUncheckedCreateWithoutRecipeInput>;
    connectOrCreate?: restaurantCreateOrConnectWithoutRecipeInput;
    connect?: restaurantWhereUniqueInput;
  };

  export type favoriteUncheckedCreateNestedManyWithoutRecipeInput = {
    create?:
      | XOR<favoriteCreateWithoutRecipeInput, favoriteUncheckedCreateWithoutRecipeInput>
      | favoriteCreateWithoutRecipeInput[]
      | favoriteUncheckedCreateWithoutRecipeInput[];
    connectOrCreate?: favoriteCreateOrConnectWithoutRecipeInput | favoriteCreateOrConnectWithoutRecipeInput[];
    createMany?: favoriteCreateManyRecipeInputEnvelope;
    connect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[];
  };

  export type ingredientUncheckedCreateNestedManyWithoutRecipeInput = {
    create?:
      | XOR<ingredientCreateWithoutRecipeInput, ingredientUncheckedCreateWithoutRecipeInput>
      | ingredientCreateWithoutRecipeInput[]
      | ingredientUncheckedCreateWithoutRecipeInput[];
    connectOrCreate?: ingredientCreateOrConnectWithoutRecipeInput | ingredientCreateOrConnectWithoutRecipeInput[];
    createMany?: ingredientCreateManyRecipeInputEnvelope;
    connect?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[];
  };

  export type favoriteUpdateManyWithoutRecipeNestedInput = {
    create?:
      | XOR<favoriteCreateWithoutRecipeInput, favoriteUncheckedCreateWithoutRecipeInput>
      | favoriteCreateWithoutRecipeInput[]
      | favoriteUncheckedCreateWithoutRecipeInput[];
    connectOrCreate?: favoriteCreateOrConnectWithoutRecipeInput | favoriteCreateOrConnectWithoutRecipeInput[];
    upsert?: favoriteUpsertWithWhereUniqueWithoutRecipeInput | favoriteUpsertWithWhereUniqueWithoutRecipeInput[];
    createMany?: favoriteCreateManyRecipeInputEnvelope;
    set?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[];
    disconnect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[];
    delete?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[];
    connect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[];
    update?: favoriteUpdateWithWhereUniqueWithoutRecipeInput | favoriteUpdateWithWhereUniqueWithoutRecipeInput[];
    updateMany?: favoriteUpdateManyWithWhereWithoutRecipeInput | favoriteUpdateManyWithWhereWithoutRecipeInput[];
    deleteMany?: favoriteScalarWhereInput | favoriteScalarWhereInput[];
  };

  export type ingredientUpdateManyWithoutRecipeNestedInput = {
    create?:
      | XOR<ingredientCreateWithoutRecipeInput, ingredientUncheckedCreateWithoutRecipeInput>
      | ingredientCreateWithoutRecipeInput[]
      | ingredientUncheckedCreateWithoutRecipeInput[];
    connectOrCreate?: ingredientCreateOrConnectWithoutRecipeInput | ingredientCreateOrConnectWithoutRecipeInput[];
    upsert?: ingredientUpsertWithWhereUniqueWithoutRecipeInput | ingredientUpsertWithWhereUniqueWithoutRecipeInput[];
    createMany?: ingredientCreateManyRecipeInputEnvelope;
    set?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[];
    disconnect?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[];
    delete?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[];
    connect?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[];
    update?: ingredientUpdateWithWhereUniqueWithoutRecipeInput | ingredientUpdateWithWhereUniqueWithoutRecipeInput[];
    updateMany?: ingredientUpdateManyWithWhereWithoutRecipeInput | ingredientUpdateManyWithWhereWithoutRecipeInput[];
    deleteMany?: ingredientScalarWhereInput | ingredientScalarWhereInput[];
  };

  export type restaurantUpdateOneRequiredWithoutRecipeNestedInput = {
    create?: XOR<restaurantCreateWithoutRecipeInput, restaurantUncheckedCreateWithoutRecipeInput>;
    connectOrCreate?: restaurantCreateOrConnectWithoutRecipeInput;
    upsert?: restaurantUpsertWithoutRecipeInput;
    connect?: restaurantWhereUniqueInput;
    update?: XOR<
      XOR<restaurantUpdateToOneWithWhereWithoutRecipeInput, restaurantUpdateWithoutRecipeInput>,
      restaurantUncheckedUpdateWithoutRecipeInput
    >;
  };

  export type favoriteUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?:
      | XOR<favoriteCreateWithoutRecipeInput, favoriteUncheckedCreateWithoutRecipeInput>
      | favoriteCreateWithoutRecipeInput[]
      | favoriteUncheckedCreateWithoutRecipeInput[];
    connectOrCreate?: favoriteCreateOrConnectWithoutRecipeInput | favoriteCreateOrConnectWithoutRecipeInput[];
    upsert?: favoriteUpsertWithWhereUniqueWithoutRecipeInput | favoriteUpsertWithWhereUniqueWithoutRecipeInput[];
    createMany?: favoriteCreateManyRecipeInputEnvelope;
    set?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[];
    disconnect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[];
    delete?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[];
    connect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[];
    update?: favoriteUpdateWithWhereUniqueWithoutRecipeInput | favoriteUpdateWithWhereUniqueWithoutRecipeInput[];
    updateMany?: favoriteUpdateManyWithWhereWithoutRecipeInput | favoriteUpdateManyWithWhereWithoutRecipeInput[];
    deleteMany?: favoriteScalarWhereInput | favoriteScalarWhereInput[];
  };

  export type ingredientUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?:
      | XOR<ingredientCreateWithoutRecipeInput, ingredientUncheckedCreateWithoutRecipeInput>
      | ingredientCreateWithoutRecipeInput[]
      | ingredientUncheckedCreateWithoutRecipeInput[];
    connectOrCreate?: ingredientCreateOrConnectWithoutRecipeInput | ingredientCreateOrConnectWithoutRecipeInput[];
    upsert?: ingredientUpsertWithWhereUniqueWithoutRecipeInput | ingredientUpsertWithWhereUniqueWithoutRecipeInput[];
    createMany?: ingredientCreateManyRecipeInputEnvelope;
    set?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[];
    disconnect?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[];
    delete?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[];
    connect?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[];
    update?: ingredientUpdateWithWhereUniqueWithoutRecipeInput | ingredientUpdateWithWhereUniqueWithoutRecipeInput[];
    updateMany?: ingredientUpdateManyWithWhereWithoutRecipeInput | ingredientUpdateManyWithWhereWithoutRecipeInput[];
    deleteMany?: ingredientScalarWhereInput | ingredientScalarWhereInput[];
  };

  export type recipeCreateNestedManyWithoutRestaurantInput = {
    create?:
      | XOR<recipeCreateWithoutRestaurantInput, recipeUncheckedCreateWithoutRestaurantInput>
      | recipeCreateWithoutRestaurantInput[]
      | recipeUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: recipeCreateOrConnectWithoutRestaurantInput | recipeCreateOrConnectWithoutRestaurantInput[];
    createMany?: recipeCreateManyRestaurantInputEnvelope;
    connect?: recipeWhereUniqueInput | recipeWhereUniqueInput[];
  };

  export type reviewCreateNestedManyWithoutRestaurantInput = {
    create?:
      | XOR<reviewCreateWithoutRestaurantInput, reviewUncheckedCreateWithoutRestaurantInput>
      | reviewCreateWithoutRestaurantInput[]
      | reviewUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutRestaurantInput | reviewCreateOrConnectWithoutRestaurantInput[];
    createMany?: reviewCreateManyRestaurantInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type recipeUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?:
      | XOR<recipeCreateWithoutRestaurantInput, recipeUncheckedCreateWithoutRestaurantInput>
      | recipeCreateWithoutRestaurantInput[]
      | recipeUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: recipeCreateOrConnectWithoutRestaurantInput | recipeCreateOrConnectWithoutRestaurantInput[];
    createMany?: recipeCreateManyRestaurantInputEnvelope;
    connect?: recipeWhereUniqueInput | recipeWhereUniqueInput[];
  };

  export type reviewUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?:
      | XOR<reviewCreateWithoutRestaurantInput, reviewUncheckedCreateWithoutRestaurantInput>
      | reviewCreateWithoutRestaurantInput[]
      | reviewUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutRestaurantInput | reviewCreateOrConnectWithoutRestaurantInput[];
    createMany?: reviewCreateManyRestaurantInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type recipeUpdateManyWithoutRestaurantNestedInput = {
    create?:
      | XOR<recipeCreateWithoutRestaurantInput, recipeUncheckedCreateWithoutRestaurantInput>
      | recipeCreateWithoutRestaurantInput[]
      | recipeUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: recipeCreateOrConnectWithoutRestaurantInput | recipeCreateOrConnectWithoutRestaurantInput[];
    upsert?: recipeUpsertWithWhereUniqueWithoutRestaurantInput | recipeUpsertWithWhereUniqueWithoutRestaurantInput[];
    createMany?: recipeCreateManyRestaurantInputEnvelope;
    set?: recipeWhereUniqueInput | recipeWhereUniqueInput[];
    disconnect?: recipeWhereUniqueInput | recipeWhereUniqueInput[];
    delete?: recipeWhereUniqueInput | recipeWhereUniqueInput[];
    connect?: recipeWhereUniqueInput | recipeWhereUniqueInput[];
    update?: recipeUpdateWithWhereUniqueWithoutRestaurantInput | recipeUpdateWithWhereUniqueWithoutRestaurantInput[];
    updateMany?: recipeUpdateManyWithWhereWithoutRestaurantInput | recipeUpdateManyWithWhereWithoutRestaurantInput[];
    deleteMany?: recipeScalarWhereInput | recipeScalarWhereInput[];
  };

  export type reviewUpdateManyWithoutRestaurantNestedInput = {
    create?:
      | XOR<reviewCreateWithoutRestaurantInput, reviewUncheckedCreateWithoutRestaurantInput>
      | reviewCreateWithoutRestaurantInput[]
      | reviewUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutRestaurantInput | reviewCreateOrConnectWithoutRestaurantInput[];
    upsert?: reviewUpsertWithWhereUniqueWithoutRestaurantInput | reviewUpsertWithWhereUniqueWithoutRestaurantInput[];
    createMany?: reviewCreateManyRestaurantInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?: reviewUpdateWithWhereUniqueWithoutRestaurantInput | reviewUpdateWithWhereUniqueWithoutRestaurantInput[];
    updateMany?: reviewUpdateManyWithWhereWithoutRestaurantInput | reviewUpdateManyWithWhereWithoutRestaurantInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type recipeUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?:
      | XOR<recipeCreateWithoutRestaurantInput, recipeUncheckedCreateWithoutRestaurantInput>
      | recipeCreateWithoutRestaurantInput[]
      | recipeUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: recipeCreateOrConnectWithoutRestaurantInput | recipeCreateOrConnectWithoutRestaurantInput[];
    upsert?: recipeUpsertWithWhereUniqueWithoutRestaurantInput | recipeUpsertWithWhereUniqueWithoutRestaurantInput[];
    createMany?: recipeCreateManyRestaurantInputEnvelope;
    set?: recipeWhereUniqueInput | recipeWhereUniqueInput[];
    disconnect?: recipeWhereUniqueInput | recipeWhereUniqueInput[];
    delete?: recipeWhereUniqueInput | recipeWhereUniqueInput[];
    connect?: recipeWhereUniqueInput | recipeWhereUniqueInput[];
    update?: recipeUpdateWithWhereUniqueWithoutRestaurantInput | recipeUpdateWithWhereUniqueWithoutRestaurantInput[];
    updateMany?: recipeUpdateManyWithWhereWithoutRestaurantInput | recipeUpdateManyWithWhereWithoutRestaurantInput[];
    deleteMany?: recipeScalarWhereInput | recipeScalarWhereInput[];
  };

  export type reviewUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?:
      | XOR<reviewCreateWithoutRestaurantInput, reviewUncheckedCreateWithoutRestaurantInput>
      | reviewCreateWithoutRestaurantInput[]
      | reviewUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutRestaurantInput | reviewCreateOrConnectWithoutRestaurantInput[];
    upsert?: reviewUpsertWithWhereUniqueWithoutRestaurantInput | reviewUpsertWithWhereUniqueWithoutRestaurantInput[];
    createMany?: reviewCreateManyRestaurantInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?: reviewUpdateWithWhereUniqueWithoutRestaurantInput | reviewUpdateWithWhereUniqueWithoutRestaurantInput[];
    updateMany?: reviewUpdateManyWithWhereWithoutRestaurantInput | reviewUpdateManyWithWhereWithoutRestaurantInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type restaurantCreateNestedOneWithoutReviewInput = {
    create?: XOR<restaurantCreateWithoutReviewInput, restaurantUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: restaurantCreateOrConnectWithoutReviewInput;
    connect?: restaurantWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutReviewInput = {
    create?: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: userCreateOrConnectWithoutReviewInput;
    connect?: userWhereUniqueInput;
  };

  export type restaurantUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<restaurantCreateWithoutReviewInput, restaurantUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: restaurantCreateOrConnectWithoutReviewInput;
    upsert?: restaurantUpsertWithoutReviewInput;
    connect?: restaurantWhereUniqueInput;
    update?: XOR<
      XOR<restaurantUpdateToOneWithWhereWithoutReviewInput, restaurantUpdateWithoutReviewInput>,
      restaurantUncheckedUpdateWithoutReviewInput
    >;
  };

  export type userUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: userCreateOrConnectWithoutReviewInput;
    upsert?: userUpsertWithoutReviewInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutReviewInput, userUpdateWithoutReviewInput>,
      userUncheckedUpdateWithoutReviewInput
    >;
  };

  export type favoriteCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<favoriteCreateWithoutUserInput, favoriteUncheckedCreateWithoutUserInput>
      | favoriteCreateWithoutUserInput[]
      | favoriteUncheckedCreateWithoutUserInput[];
    connectOrCreate?: favoriteCreateOrConnectWithoutUserInput | favoriteCreateOrConnectWithoutUserInput[];
    createMany?: favoriteCreateManyUserInputEnvelope;
    connect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[];
  };

  export type reviewCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
      | reviewCreateWithoutUserInput[]
      | reviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[];
    createMany?: reviewCreateManyUserInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type favoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<favoriteCreateWithoutUserInput, favoriteUncheckedCreateWithoutUserInput>
      | favoriteCreateWithoutUserInput[]
      | favoriteUncheckedCreateWithoutUserInput[];
    connectOrCreate?: favoriteCreateOrConnectWithoutUserInput | favoriteCreateOrConnectWithoutUserInput[];
    createMany?: favoriteCreateManyUserInputEnvelope;
    connect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[];
  };

  export type reviewUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
      | reviewCreateWithoutUserInput[]
      | reviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[];
    createMany?: reviewCreateManyUserInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type favoriteUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<favoriteCreateWithoutUserInput, favoriteUncheckedCreateWithoutUserInput>
      | favoriteCreateWithoutUserInput[]
      | favoriteUncheckedCreateWithoutUserInput[];
    connectOrCreate?: favoriteCreateOrConnectWithoutUserInput | favoriteCreateOrConnectWithoutUserInput[];
    upsert?: favoriteUpsertWithWhereUniqueWithoutUserInput | favoriteUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: favoriteCreateManyUserInputEnvelope;
    set?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[];
    disconnect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[];
    delete?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[];
    connect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[];
    update?: favoriteUpdateWithWhereUniqueWithoutUserInput | favoriteUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: favoriteUpdateManyWithWhereWithoutUserInput | favoriteUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: favoriteScalarWhereInput | favoriteScalarWhereInput[];
  };

  export type reviewUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
      | reviewCreateWithoutUserInput[]
      | reviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[];
    upsert?: reviewUpsertWithWhereUniqueWithoutUserInput | reviewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: reviewCreateManyUserInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?: reviewUpdateWithWhereUniqueWithoutUserInput | reviewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: reviewUpdateManyWithWhereWithoutUserInput | reviewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type favoriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<favoriteCreateWithoutUserInput, favoriteUncheckedCreateWithoutUserInput>
      | favoriteCreateWithoutUserInput[]
      | favoriteUncheckedCreateWithoutUserInput[];
    connectOrCreate?: favoriteCreateOrConnectWithoutUserInput | favoriteCreateOrConnectWithoutUserInput[];
    upsert?: favoriteUpsertWithWhereUniqueWithoutUserInput | favoriteUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: favoriteCreateManyUserInputEnvelope;
    set?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[];
    disconnect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[];
    delete?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[];
    connect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[];
    update?: favoriteUpdateWithWhereUniqueWithoutUserInput | favoriteUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: favoriteUpdateManyWithWhereWithoutUserInput | favoriteUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: favoriteScalarWhereInput | favoriteScalarWhereInput[];
  };

  export type reviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
      | reviewCreateWithoutUserInput[]
      | reviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[];
    upsert?: reviewUpsertWithWhereUniqueWithoutUserInput | reviewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: reviewCreateManyUserInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?: reviewUpdateWithWhereUniqueWithoutUserInput | reviewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: reviewUpdateManyWithWhereWithoutUserInput | reviewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type recipeCreateWithoutFavoriteInput = {
    id?: string;
    title: string;
    ingredients: string;
    instructions: string;
    prep_time: number;
    cook_time: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    ingredient?: ingredientCreateNestedManyWithoutRecipeInput;
    restaurant: restaurantCreateNestedOneWithoutRecipeInput;
  };

  export type recipeUncheckedCreateWithoutFavoriteInput = {
    id?: string;
    title: string;
    ingredients: string;
    instructions: string;
    prep_time: number;
    cook_time: number;
    restaurant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    ingredient?: ingredientUncheckedCreateNestedManyWithoutRecipeInput;
  };

  export type recipeCreateOrConnectWithoutFavoriteInput = {
    where: recipeWhereUniqueInput;
    create: XOR<recipeCreateWithoutFavoriteInput, recipeUncheckedCreateWithoutFavoriteInput>;
  };

  export type userCreateWithoutFavoriteInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    review?: reviewCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutFavoriteInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    review?: reviewUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutFavoriteInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutFavoriteInput, userUncheckedCreateWithoutFavoriteInput>;
  };

  export type recipeUpsertWithoutFavoriteInput = {
    update: XOR<recipeUpdateWithoutFavoriteInput, recipeUncheckedUpdateWithoutFavoriteInput>;
    create: XOR<recipeCreateWithoutFavoriteInput, recipeUncheckedCreateWithoutFavoriteInput>;
    where?: recipeWhereInput;
  };

  export type recipeUpdateToOneWithWhereWithoutFavoriteInput = {
    where?: recipeWhereInput;
    data: XOR<recipeUpdateWithoutFavoriteInput, recipeUncheckedUpdateWithoutFavoriteInput>;
  };

  export type recipeUpdateWithoutFavoriteInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    ingredients?: StringFieldUpdateOperationsInput | string;
    instructions?: StringFieldUpdateOperationsInput | string;
    prep_time?: IntFieldUpdateOperationsInput | number;
    cook_time?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    ingredient?: ingredientUpdateManyWithoutRecipeNestedInput;
    restaurant?: restaurantUpdateOneRequiredWithoutRecipeNestedInput;
  };

  export type recipeUncheckedUpdateWithoutFavoriteInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    ingredients?: StringFieldUpdateOperationsInput | string;
    instructions?: StringFieldUpdateOperationsInput | string;
    prep_time?: IntFieldUpdateOperationsInput | number;
    cook_time?: IntFieldUpdateOperationsInput | number;
    restaurant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    ingredient?: ingredientUncheckedUpdateManyWithoutRecipeNestedInput;
  };

  export type userUpsertWithoutFavoriteInput = {
    update: XOR<userUpdateWithoutFavoriteInput, userUncheckedUpdateWithoutFavoriteInput>;
    create: XOR<userCreateWithoutFavoriteInput, userUncheckedCreateWithoutFavoriteInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutFavoriteInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutFavoriteInput, userUncheckedUpdateWithoutFavoriteInput>;
  };

  export type userUpdateWithoutFavoriteInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    review?: reviewUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutFavoriteInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type recipeCreateWithoutIngredientInput = {
    id?: string;
    title: string;
    ingredients: string;
    instructions: string;
    prep_time: number;
    cook_time: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    favorite?: favoriteCreateNestedManyWithoutRecipeInput;
    restaurant: restaurantCreateNestedOneWithoutRecipeInput;
  };

  export type recipeUncheckedCreateWithoutIngredientInput = {
    id?: string;
    title: string;
    ingredients: string;
    instructions: string;
    prep_time: number;
    cook_time: number;
    restaurant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    favorite?: favoriteUncheckedCreateNestedManyWithoutRecipeInput;
  };

  export type recipeCreateOrConnectWithoutIngredientInput = {
    where: recipeWhereUniqueInput;
    create: XOR<recipeCreateWithoutIngredientInput, recipeUncheckedCreateWithoutIngredientInput>;
  };

  export type recipeUpsertWithoutIngredientInput = {
    update: XOR<recipeUpdateWithoutIngredientInput, recipeUncheckedUpdateWithoutIngredientInput>;
    create: XOR<recipeCreateWithoutIngredientInput, recipeUncheckedCreateWithoutIngredientInput>;
    where?: recipeWhereInput;
  };

  export type recipeUpdateToOneWithWhereWithoutIngredientInput = {
    where?: recipeWhereInput;
    data: XOR<recipeUpdateWithoutIngredientInput, recipeUncheckedUpdateWithoutIngredientInput>;
  };

  export type recipeUpdateWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    ingredients?: StringFieldUpdateOperationsInput | string;
    instructions?: StringFieldUpdateOperationsInput | string;
    prep_time?: IntFieldUpdateOperationsInput | number;
    cook_time?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    favorite?: favoriteUpdateManyWithoutRecipeNestedInput;
    restaurant?: restaurantUpdateOneRequiredWithoutRecipeNestedInput;
  };

  export type recipeUncheckedUpdateWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    ingredients?: StringFieldUpdateOperationsInput | string;
    instructions?: StringFieldUpdateOperationsInput | string;
    prep_time?: IntFieldUpdateOperationsInput | number;
    cook_time?: IntFieldUpdateOperationsInput | number;
    restaurant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    favorite?: favoriteUncheckedUpdateManyWithoutRecipeNestedInput;
  };

  export type favoriteCreateWithoutRecipeInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutFavoriteInput;
  };

  export type favoriteUncheckedCreateWithoutRecipeInput = {
    id?: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type favoriteCreateOrConnectWithoutRecipeInput = {
    where: favoriteWhereUniqueInput;
    create: XOR<favoriteCreateWithoutRecipeInput, favoriteUncheckedCreateWithoutRecipeInput>;
  };

  export type favoriteCreateManyRecipeInputEnvelope = {
    data: favoriteCreateManyRecipeInput | favoriteCreateManyRecipeInput[];
    skipDuplicates?: boolean;
  };

  export type ingredientCreateWithoutRecipeInput = {
    id?: string;
    name: string;
    quantity: number;
    unit: string;
    calories: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ingredientUncheckedCreateWithoutRecipeInput = {
    id?: string;
    name: string;
    quantity: number;
    unit: string;
    calories: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ingredientCreateOrConnectWithoutRecipeInput = {
    where: ingredientWhereUniqueInput;
    create: XOR<ingredientCreateWithoutRecipeInput, ingredientUncheckedCreateWithoutRecipeInput>;
  };

  export type ingredientCreateManyRecipeInputEnvelope = {
    data: ingredientCreateManyRecipeInput | ingredientCreateManyRecipeInput[];
    skipDuplicates?: boolean;
  };

  export type restaurantCreateWithoutRecipeInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    review?: reviewCreateNestedManyWithoutRestaurantInput;
  };

  export type restaurantUncheckedCreateWithoutRecipeInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    review?: reviewUncheckedCreateNestedManyWithoutRestaurantInput;
  };

  export type restaurantCreateOrConnectWithoutRecipeInput = {
    where: restaurantWhereUniqueInput;
    create: XOR<restaurantCreateWithoutRecipeInput, restaurantUncheckedCreateWithoutRecipeInput>;
  };

  export type favoriteUpsertWithWhereUniqueWithoutRecipeInput = {
    where: favoriteWhereUniqueInput;
    update: XOR<favoriteUpdateWithoutRecipeInput, favoriteUncheckedUpdateWithoutRecipeInput>;
    create: XOR<favoriteCreateWithoutRecipeInput, favoriteUncheckedCreateWithoutRecipeInput>;
  };

  export type favoriteUpdateWithWhereUniqueWithoutRecipeInput = {
    where: favoriteWhereUniqueInput;
    data: XOR<favoriteUpdateWithoutRecipeInput, favoriteUncheckedUpdateWithoutRecipeInput>;
  };

  export type favoriteUpdateManyWithWhereWithoutRecipeInput = {
    where: favoriteScalarWhereInput;
    data: XOR<favoriteUpdateManyMutationInput, favoriteUncheckedUpdateManyWithoutRecipeInput>;
  };

  export type favoriteScalarWhereInput = {
    AND?: favoriteScalarWhereInput | favoriteScalarWhereInput[];
    OR?: favoriteScalarWhereInput[];
    NOT?: favoriteScalarWhereInput | favoriteScalarWhereInput[];
    id?: UuidFilter<'favorite'> | string;
    user_id?: UuidFilter<'favorite'> | string;
    recipe_id?: UuidFilter<'favorite'> | string;
    created_at?: DateTimeFilter<'favorite'> | Date | string;
    updated_at?: DateTimeFilter<'favorite'> | Date | string;
  };

  export type ingredientUpsertWithWhereUniqueWithoutRecipeInput = {
    where: ingredientWhereUniqueInput;
    update: XOR<ingredientUpdateWithoutRecipeInput, ingredientUncheckedUpdateWithoutRecipeInput>;
    create: XOR<ingredientCreateWithoutRecipeInput, ingredientUncheckedCreateWithoutRecipeInput>;
  };

  export type ingredientUpdateWithWhereUniqueWithoutRecipeInput = {
    where: ingredientWhereUniqueInput;
    data: XOR<ingredientUpdateWithoutRecipeInput, ingredientUncheckedUpdateWithoutRecipeInput>;
  };

  export type ingredientUpdateManyWithWhereWithoutRecipeInput = {
    where: ingredientScalarWhereInput;
    data: XOR<ingredientUpdateManyMutationInput, ingredientUncheckedUpdateManyWithoutRecipeInput>;
  };

  export type ingredientScalarWhereInput = {
    AND?: ingredientScalarWhereInput | ingredientScalarWhereInput[];
    OR?: ingredientScalarWhereInput[];
    NOT?: ingredientScalarWhereInput | ingredientScalarWhereInput[];
    id?: UuidFilter<'ingredient'> | string;
    name?: StringFilter<'ingredient'> | string;
    quantity?: IntFilter<'ingredient'> | number;
    unit?: StringFilter<'ingredient'> | string;
    calories?: IntFilter<'ingredient'> | number;
    recipe_id?: UuidFilter<'ingredient'> | string;
    created_at?: DateTimeFilter<'ingredient'> | Date | string;
    updated_at?: DateTimeFilter<'ingredient'> | Date | string;
  };

  export type restaurantUpsertWithoutRecipeInput = {
    update: XOR<restaurantUpdateWithoutRecipeInput, restaurantUncheckedUpdateWithoutRecipeInput>;
    create: XOR<restaurantCreateWithoutRecipeInput, restaurantUncheckedCreateWithoutRecipeInput>;
    where?: restaurantWhereInput;
  };

  export type restaurantUpdateToOneWithWhereWithoutRecipeInput = {
    where?: restaurantWhereInput;
    data: XOR<restaurantUpdateWithoutRecipeInput, restaurantUncheckedUpdateWithoutRecipeInput>;
  };

  export type restaurantUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    review?: reviewUpdateManyWithoutRestaurantNestedInput;
  };

  export type restaurantUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    review?: reviewUncheckedUpdateManyWithoutRestaurantNestedInput;
  };

  export type recipeCreateWithoutRestaurantInput = {
    id?: string;
    title: string;
    ingredients: string;
    instructions: string;
    prep_time: number;
    cook_time: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    favorite?: favoriteCreateNestedManyWithoutRecipeInput;
    ingredient?: ingredientCreateNestedManyWithoutRecipeInput;
  };

  export type recipeUncheckedCreateWithoutRestaurantInput = {
    id?: string;
    title: string;
    ingredients: string;
    instructions: string;
    prep_time: number;
    cook_time: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    favorite?: favoriteUncheckedCreateNestedManyWithoutRecipeInput;
    ingredient?: ingredientUncheckedCreateNestedManyWithoutRecipeInput;
  };

  export type recipeCreateOrConnectWithoutRestaurantInput = {
    where: recipeWhereUniqueInput;
    create: XOR<recipeCreateWithoutRestaurantInput, recipeUncheckedCreateWithoutRestaurantInput>;
  };

  export type recipeCreateManyRestaurantInputEnvelope = {
    data: recipeCreateManyRestaurantInput | recipeCreateManyRestaurantInput[];
    skipDuplicates?: boolean;
  };

  export type reviewCreateWithoutRestaurantInput = {
    id?: string;
    rating: number;
    comment: string;
    date_posted: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutReviewInput;
  };

  export type reviewUncheckedCreateWithoutRestaurantInput = {
    id?: string;
    rating: number;
    comment: string;
    date_posted: Date | string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewCreateOrConnectWithoutRestaurantInput = {
    where: reviewWhereUniqueInput;
    create: XOR<reviewCreateWithoutRestaurantInput, reviewUncheckedCreateWithoutRestaurantInput>;
  };

  export type reviewCreateManyRestaurantInputEnvelope = {
    data: reviewCreateManyRestaurantInput | reviewCreateManyRestaurantInput[];
    skipDuplicates?: boolean;
  };

  export type recipeUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: recipeWhereUniqueInput;
    update: XOR<recipeUpdateWithoutRestaurantInput, recipeUncheckedUpdateWithoutRestaurantInput>;
    create: XOR<recipeCreateWithoutRestaurantInput, recipeUncheckedCreateWithoutRestaurantInput>;
  };

  export type recipeUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: recipeWhereUniqueInput;
    data: XOR<recipeUpdateWithoutRestaurantInput, recipeUncheckedUpdateWithoutRestaurantInput>;
  };

  export type recipeUpdateManyWithWhereWithoutRestaurantInput = {
    where: recipeScalarWhereInput;
    data: XOR<recipeUpdateManyMutationInput, recipeUncheckedUpdateManyWithoutRestaurantInput>;
  };

  export type recipeScalarWhereInput = {
    AND?: recipeScalarWhereInput | recipeScalarWhereInput[];
    OR?: recipeScalarWhereInput[];
    NOT?: recipeScalarWhereInput | recipeScalarWhereInput[];
    id?: UuidFilter<'recipe'> | string;
    title?: StringFilter<'recipe'> | string;
    ingredients?: StringFilter<'recipe'> | string;
    instructions?: StringFilter<'recipe'> | string;
    prep_time?: IntFilter<'recipe'> | number;
    cook_time?: IntFilter<'recipe'> | number;
    restaurant_id?: UuidFilter<'recipe'> | string;
    created_at?: DateTimeFilter<'recipe'> | Date | string;
    updated_at?: DateTimeFilter<'recipe'> | Date | string;
  };

  export type reviewUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: reviewWhereUniqueInput;
    update: XOR<reviewUpdateWithoutRestaurantInput, reviewUncheckedUpdateWithoutRestaurantInput>;
    create: XOR<reviewCreateWithoutRestaurantInput, reviewUncheckedCreateWithoutRestaurantInput>;
  };

  export type reviewUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: reviewWhereUniqueInput;
    data: XOR<reviewUpdateWithoutRestaurantInput, reviewUncheckedUpdateWithoutRestaurantInput>;
  };

  export type reviewUpdateManyWithWhereWithoutRestaurantInput = {
    where: reviewScalarWhereInput;
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutRestaurantInput>;
  };

  export type reviewScalarWhereInput = {
    AND?: reviewScalarWhereInput | reviewScalarWhereInput[];
    OR?: reviewScalarWhereInput[];
    NOT?: reviewScalarWhereInput | reviewScalarWhereInput[];
    id?: UuidFilter<'review'> | string;
    rating?: IntFilter<'review'> | number;
    comment?: StringFilter<'review'> | string;
    date_posted?: DateTimeFilter<'review'> | Date | string;
    user_id?: UuidFilter<'review'> | string;
    restaurant_id?: UuidFilter<'review'> | string;
    created_at?: DateTimeFilter<'review'> | Date | string;
    updated_at?: DateTimeFilter<'review'> | Date | string;
  };

  export type restaurantCreateWithoutReviewInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    recipe?: recipeCreateNestedManyWithoutRestaurantInput;
  };

  export type restaurantUncheckedCreateWithoutReviewInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    recipe?: recipeUncheckedCreateNestedManyWithoutRestaurantInput;
  };

  export type restaurantCreateOrConnectWithoutReviewInput = {
    where: restaurantWhereUniqueInput;
    create: XOR<restaurantCreateWithoutReviewInput, restaurantUncheckedCreateWithoutReviewInput>;
  };

  export type userCreateWithoutReviewInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    favorite?: favoriteCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutReviewInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    favorite?: favoriteUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutReviewInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>;
  };

  export type restaurantUpsertWithoutReviewInput = {
    update: XOR<restaurantUpdateWithoutReviewInput, restaurantUncheckedUpdateWithoutReviewInput>;
    create: XOR<restaurantCreateWithoutReviewInput, restaurantUncheckedCreateWithoutReviewInput>;
    where?: restaurantWhereInput;
  };

  export type restaurantUpdateToOneWithWhereWithoutReviewInput = {
    where?: restaurantWhereInput;
    data: XOR<restaurantUpdateWithoutReviewInput, restaurantUncheckedUpdateWithoutReviewInput>;
  };

  export type restaurantUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    recipe?: recipeUpdateManyWithoutRestaurantNestedInput;
  };

  export type restaurantUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    recipe?: recipeUncheckedUpdateManyWithoutRestaurantNestedInput;
  };

  export type userUpsertWithoutReviewInput = {
    update: XOR<userUpdateWithoutReviewInput, userUncheckedUpdateWithoutReviewInput>;
    create: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutReviewInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutReviewInput, userUncheckedUpdateWithoutReviewInput>;
  };

  export type userUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    favorite?: favoriteUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    favorite?: favoriteUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type favoriteCreateWithoutUserInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    recipe: recipeCreateNestedOneWithoutFavoriteInput;
  };

  export type favoriteUncheckedCreateWithoutUserInput = {
    id?: string;
    recipe_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type favoriteCreateOrConnectWithoutUserInput = {
    where: favoriteWhereUniqueInput;
    create: XOR<favoriteCreateWithoutUserInput, favoriteUncheckedCreateWithoutUserInput>;
  };

  export type favoriteCreateManyUserInputEnvelope = {
    data: favoriteCreateManyUserInput | favoriteCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type reviewCreateWithoutUserInput = {
    id?: string;
    rating: number;
    comment: string;
    date_posted: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    restaurant: restaurantCreateNestedOneWithoutReviewInput;
  };

  export type reviewUncheckedCreateWithoutUserInput = {
    id?: string;
    rating: number;
    comment: string;
    date_posted: Date | string;
    restaurant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewCreateOrConnectWithoutUserInput = {
    where: reviewWhereUniqueInput;
    create: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>;
  };

  export type reviewCreateManyUserInputEnvelope = {
    data: reviewCreateManyUserInput | reviewCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type favoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: favoriteWhereUniqueInput;
    update: XOR<favoriteUpdateWithoutUserInput, favoriteUncheckedUpdateWithoutUserInput>;
    create: XOR<favoriteCreateWithoutUserInput, favoriteUncheckedCreateWithoutUserInput>;
  };

  export type favoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: favoriteWhereUniqueInput;
    data: XOR<favoriteUpdateWithoutUserInput, favoriteUncheckedUpdateWithoutUserInput>;
  };

  export type favoriteUpdateManyWithWhereWithoutUserInput = {
    where: favoriteScalarWhereInput;
    data: XOR<favoriteUpdateManyMutationInput, favoriteUncheckedUpdateManyWithoutUserInput>;
  };

  export type reviewUpsertWithWhereUniqueWithoutUserInput = {
    where: reviewWhereUniqueInput;
    update: XOR<reviewUpdateWithoutUserInput, reviewUncheckedUpdateWithoutUserInput>;
    create: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>;
  };

  export type reviewUpdateWithWhereUniqueWithoutUserInput = {
    where: reviewWhereUniqueInput;
    data: XOR<reviewUpdateWithoutUserInput, reviewUncheckedUpdateWithoutUserInput>;
  };

  export type reviewUpdateManyWithWhereWithoutUserInput = {
    where: reviewScalarWhereInput;
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutUserInput>;
  };

  export type favoriteCreateManyRecipeInput = {
    id?: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ingredientCreateManyRecipeInput = {
    id?: string;
    name: string;
    quantity: number;
    unit: string;
    calories: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type favoriteUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutFavoriteNestedInput;
  };

  export type favoriteUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type favoriteUncheckedUpdateManyWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ingredientUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    unit?: StringFieldUpdateOperationsInput | string;
    calories?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ingredientUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    unit?: StringFieldUpdateOperationsInput | string;
    calories?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ingredientUncheckedUpdateManyWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    unit?: StringFieldUpdateOperationsInput | string;
    calories?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type recipeCreateManyRestaurantInput = {
    id?: string;
    title: string;
    ingredients: string;
    instructions: string;
    prep_time: number;
    cook_time: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewCreateManyRestaurantInput = {
    id?: string;
    rating: number;
    comment: string;
    date_posted: Date | string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type recipeUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    ingredients?: StringFieldUpdateOperationsInput | string;
    instructions?: StringFieldUpdateOperationsInput | string;
    prep_time?: IntFieldUpdateOperationsInput | number;
    cook_time?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    favorite?: favoriteUpdateManyWithoutRecipeNestedInput;
    ingredient?: ingredientUpdateManyWithoutRecipeNestedInput;
  };

  export type recipeUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    ingredients?: StringFieldUpdateOperationsInput | string;
    instructions?: StringFieldUpdateOperationsInput | string;
    prep_time?: IntFieldUpdateOperationsInput | number;
    cook_time?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    favorite?: favoriteUncheckedUpdateManyWithoutRecipeNestedInput;
    ingredient?: ingredientUncheckedUpdateManyWithoutRecipeNestedInput;
  };

  export type recipeUncheckedUpdateManyWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    ingredients?: StringFieldUpdateOperationsInput | string;
    instructions?: StringFieldUpdateOperationsInput | string;
    prep_time?: IntFieldUpdateOperationsInput | number;
    cook_time?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: StringFieldUpdateOperationsInput | string;
    date_posted?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutReviewNestedInput;
  };

  export type reviewUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: StringFieldUpdateOperationsInput | string;
    date_posted?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUncheckedUpdateManyWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: StringFieldUpdateOperationsInput | string;
    date_posted?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type favoriteCreateManyUserInput = {
    id?: string;
    recipe_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewCreateManyUserInput = {
    id?: string;
    rating: number;
    comment: string;
    date_posted: Date | string;
    restaurant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type favoriteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    recipe?: recipeUpdateOneRequiredWithoutFavoriteNestedInput;
  };

  export type favoriteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    recipe_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type favoriteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    recipe_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: StringFieldUpdateOperationsInput | string;
    date_posted?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    restaurant?: restaurantUpdateOneRequiredWithoutReviewNestedInput;
  };

  export type reviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: StringFieldUpdateOperationsInput | string;
    date_posted?: DateTimeFieldUpdateOperationsInput | Date | string;
    restaurant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: StringFieldUpdateOperationsInput | string;
    date_posted?: DateTimeFieldUpdateOperationsInput | Date | string;
    restaurant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use RecipeCountOutputTypeDefaultArgs instead
   */
  export type RecipeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    RecipeCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use RestaurantCountOutputTypeDefaultArgs instead
   */
  export type RestaurantCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    RestaurantCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use favoriteDefaultArgs instead
   */
  export type favoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    favoriteDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ingredientDefaultArgs instead
   */
  export type ingredientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ingredientDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use recipeDefaultArgs instead
   */
  export type recipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    recipeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use restaurantDefaultArgs instead
   */
  export type restaurantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    restaurantDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use reviewDefaultArgs instead
   */
  export type reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    reviewDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
